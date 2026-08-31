import { useCallback, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Wallet, Plus, Trash2, Receipt, Download } from 'lucide-react';

import {
  defterOzetiOku, defterKalemleriOku, defterKayitlariniOku, defterKaydiEkle, defterKaydiSil,
  defterBoyutlariniOku, defterKategorileriniOku,
  type DefterOzeti, type DefterKalemi, type DefterKaydi, type DefterBoyutu, type DefterKategorisi,
} from './veri';
import { paraYaz, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

type Donem = 'buAy' | 'gecenAy' | 'buYil' | 'tumu';
function yerelIso(d: Date) { const p = (n: number) => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; }
function donemAraligi(donem: Donem) {
  const b = new Date();
  if (donem === 'buAy') return { baslangic: yerelIso(new Date(b.getFullYear(), b.getMonth(), 1)) };
  if (donem === 'gecenAy') return { baslangic: yerelIso(new Date(b.getFullYear(), b.getMonth() - 1, 1)), bitis: yerelIso(new Date(b.getFullYear(), b.getMonth(), 0)) };
  if (donem === 'buYil') return { baslangic: yerelIso(new Date(b.getFullYear(), 0, 1)) };
  return {};
}

/**
 * GELIR / GIDER (İSTEK: Ahmet, 24.08.2026 — *"gelir gider taraflari yok onlari
 * da ekleyelim sol menuye"*)
 *
 * ⚠️ SUNUCU HAZIRDI. `clinic_ledger_summary` ve `clinic_ledger_by_category`
 * migration 0096'dan beri var; panelde yoktu, o kadar.
 *
 * ⚠️ DEFTER EKIP DISINA KAPALI ve bu kontrol SUNUCUDA: sorgunun `where` sartinda
 * `is_clinic_member(p_clinic)` var. Burada ek bir gizleme yapilmiyor.
 *
 * ⚠️ TUTARLAR KURUS OLARAK GELIYOR, ekranda 100'e bolunuyor. Veride bolunmuyor.
 *
 * ⚠️ Bu ekran YALNIZ GOSTERIYOR. Kayit ekleme telefonda; para girisi yanlis
 * yazildiginda geri almak zor ve web tarafinda henuz onay akisi yok.
 */
export default function PanelDefter({ klinik }: { klinik: string }) {
  const [ozet, setOzet] = useState<DefterOzeti | null>(null);
  const [kalemler, setKalemler] = useState<DefterKalemi[]>([]);
  const [kayitlar, setKayitlar] = useState<DefterKaydi[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);
  const [ekleAcik, setEkleAcik] = useState(false);
  const [silinecek, setSilinecek] = useState<DefterKaydi | null>(null);
  const [donem, setDonem] = useState<Donem>('buAy');
  const [odemeYontemleri, setOdemeYontemleri] = useState<DefterBoyutu[]>([]);
  const [kategoriler, setKategoriler] = useState<DefterKategorisi[]>([]);
  const bugun = () => new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({ tur: 'income' as 'income' | 'expense', tutarTL: '', kategori: '', kategoriKodu: '', odemeYontemi: '', tarih: bugun(), not: '' });

  const yukle = useCallback(() => {
    setYukleniyor(true); setHata(null);
    const aralik = donemAraligi(donem);
    Promise.all([defterOzetiOku(klinik, aralik), defterKalemleriOku(klinik, aralik), defterKayitlariniOku(klinik, aralik)])
      .then(([o, k, kk]) => { setOzet(o[0] ?? null); setKalemler(k); setKayitlar(kk); })
      .catch((e: { message?: string }) => setHata(e?.message ?? ''))
      .finally(() => setYukleniyor(false));
  }, [klinik, donem]);

  useEffect(() => { yukle(); }, [yukle]);
  useEffect(() => { defterBoyutlariniOku('odeme_yontemi').then(setOdemeYontemleri).catch(() => setOdemeYontemleri([])); }, []);
  useEffect(() => { defterKategorileriniOku(form.tur).then(setKategoriler).catch(() => setKategoriler([])); }, [form.tur]);

  async function kaydet(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await defterKaydiEkle(klinik, form);
      setEkleAcik(false);
      setForm({ tur: form.tur, tutarTL: '', kategori: '', kategoriKodu: '', odemeYontemi: '', tarih: bugun(), not: '' });
      setBilgi('Kayıt deftere eklendi.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function sil() {
    if (!silinecek || bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await defterKaydiSil(silinecek.id);
      setSilinecek(null);
      setBilgi('Kayıt silindi.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  if (yukleniyor) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} tekrar={yukle} />;

  const gelirler = kalemler.filter((k) => k.kind === 'income').sort((a, b) => b.total - a.total);
  const giderler = kalemler.filter((k) => k.kind === 'expense').sort((a, b) => b.total - a.total);
  const bakiye = ozet?.balance ?? 0;

  function disaAktar() {
    const alan = (v: unknown) => { const s = String(v ?? ''); return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
    const satirlar = [
      'Tarih;Tür;Kategori;Ödeme yöntemi;Tutar (TL);Not',
      ...kayitlar.map((k) => [k.occurred_on, k.kind === 'income' ? 'Gelir' : 'Gider', alan(k.category), alan(k.payment_method), (k.amount / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2 }), alan(k.note)].join(';')),
    ];
    const url = URL.createObjectURL(new Blob(['\ufeff' + satirlar.join('\r\n')], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = `veterito-defter-${donem}-${bugun()}.csv`; a.click(); URL.revokeObjectURL(url);
  }

  return (
    <>
      <header className="pnl-bolum-basi">
        {/*
          ⚠️ BOLUM BASLIGI BURADA YOK, UST CUBUKTA. Once ikisi de yaziyordu ve
          ekranda ayni kelime iki kez goruluyordu ("Raporlar / Raporlar").
          Ust cubuk yapiskan, yani sayfa kaydiginca da gorunur duruyor; burada
          tekrarlamak hem yer yiyor hem ekran okuyucuya ayni basligi iki kez
          okutuyordu. Burada yalniz ACIKLAMA ve eylem dugmeleri kaliyor.
        */}
        <div>
          <p className="pnl-aciklama">
            Kliniğinizin kendi defteri. Buradaki rakamlar sizin kaydınız; Veterito ödeme
            almıyor, aracılık etmiyor.
          </p>
        </div>
        <div className="pnl-basi-dugmeler"><button type="button" className="pnl-dugme pnl-dugme-sade" disabled={kayitlar.length === 0} onClick={disaAktar}><Download size={15} /> CSV indir</button><button type="button" className="pnl-dugme pnl-dugme-olumlu"
          onClick={() => { setForm({ tur: 'income', tutarTL: '', kategori: '', kategoriKodu: '', odemeYontemi: '', tarih: bugun(), not: '' }); setEkleAcik(true); setIslemHatasi(null); }}>
          <Plus size={15} /> Kayıt ekle
        </button></div>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <div className="pnl-segment pnl-donem-secimi" aria-label="Defter dönemi">{([['buAy', 'Bu ay'], ['gecenAy', 'Geçen ay'], ['buYil', 'Bu yıl'], ['tumu', 'Tümü']] as const).map(([kod, ad]) => <button key={kod} type="button" className={donem === kod ? 'pnl-segment-etkin' : ''} onClick={() => setDonem(kod)}>{ad}</button>)}</div>

      <div className="pnl-kartlar">
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon" aria-hidden="true"><TrendingUp size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Gelir</span>
            <span className="pnl-kart-deger">{paraYaz(ozet?.income)}</span>
            <span className="pnl-kart-anlam">Kaydedilen tüm gelirler</span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon pnl-kart-ikon-uyari" aria-hidden="true"><TrendingDown size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Gider</span>
            <span className="pnl-kart-deger">{paraYaz(ozet?.expense)}</span>
            <span className="pnl-kart-anlam">Kaydedilen tüm giderler</span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon pnl-kart-ikon-altin" aria-hidden="true"><Wallet size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Kalan</span>
            <span className={bakiye < 0 ? 'pnl-kart-deger pnl-eksi' : 'pnl-kart-deger'}>{paraYaz(bakiye)}</span>
            <span className="pnl-kart-anlam">
              {bakiye < 0 ? 'Giderler gelirlerden fazla' : 'Gelirden giderler düşülmüş hâli'}
            </span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon" aria-hidden="true"><Wallet size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Kayıt</span>
            <span className="pnl-kart-deger">{ozet?.tx_count ?? 0}</span>
            <span className="pnl-kart-anlam">Deftere girilen toplam işlem</span>
          </span>
        </div>
      </div>

      <div className="pnl-pano-izgara">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><TrendingUp size={17} /></span>
            <h3>Gelir kalemleri</h3>
          </header>
          <div className="pnl-widget-govde">
            {gelirler.length === 0 ? (
              <p className="pnl-widget-bos">Henüz gelir kaydı yok. Kayıtlar uygulamadan giriliyor.</p>
            ) : (
              <ul className="pnl-satirlar">
                {gelirler.map((g) => (
                  <li key={g.category} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{g.category}</p>
                      <p className="pnl-satir-alt">{g.tx_count} kayıt</p>
                    </div>
                    <span className="pnl-tutar pnl-arti">{paraYaz(g.total)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><TrendingDown size={17} /></span>
            <h3>Gider kalemleri</h3>
          </header>
          <div className="pnl-widget-govde">
            {giderler.length === 0 ? (
              <p className="pnl-widget-bos">Henüz gider kaydı yok. Kayıtlar uygulamadan giriliyor.</p>
            ) : (
              <ul className="pnl-satirlar">
                {giderler.map((g) => (
                  <li key={g.category} className="pnl-satir">
                    <div className="pnl-satir-govde">
                      <p className="pnl-satir-ad">{g.category}</p>
                      <p className="pnl-satir-alt">{g.tx_count} kayıt</p>
                    </div>
                    <span className="pnl-tutar pnl-eksi">{paraYaz(g.total)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>

      {kayitlar.length === 0 ? (
        <Bos
          baslik="Defter henüz boş"
          aciklama="Gelir ve gider kayıtlarınızı buradan girebilirsiniz. Yanlış girdiğiniz bir kaydı silmek de mümkün."
        />
      ) : (
        <>
          <h3 className="pnl-alt-baslik">Kayıtlar</h3>
          <ul className="pnl-kisi-listesi">
            {kayitlar.map((k) => (
              <li key={k.id} className="pnl-kisi">
                <span className={k.kind === 'income' ? 'pnl-avatar pnl-avatar-gelir' : 'pnl-avatar pnl-avatar-gider'} aria-hidden="true">
                  {k.kind === 'income' ? <TrendingUp size={17} /> : <TrendingDown size={17} />}
                </span>
                <div className="pnl-kisi-bilgi">
                  <p className="pnl-kisi-ad">{k.category}</p>
                  <p className="pnl-kisi-rol">{k.kind === 'income' ? 'Gelir' : 'Gider'}</p>
                  {k.note ? <p className="pnl-kisi-ek">{k.note}</p> : null}
                  {k.payment_method ? <p className="pnl-kisi-ek pnl-soluk">Ödeme: {odemeYontemleri.find((o) => o.code === k.payment_method)?.name ?? k.payment_method}</p> : null}
                  <p className="pnl-kisi-ek pnl-soluk">{tarihYaz(k.occurred_on, false)}</p>
                </div>
                <span className={k.kind === 'income' ? 'pnl-tutar pnl-arti' : 'pnl-tutar pnl-eksi'}>
                  {k.kind === 'income' ? '+' : '−'}{paraYaz(k.amount)}
                </span>
                <button
                  type="button"
                  className="pnl-dugme pnl-dugme-olumsuz pnl-kisi-eylem"
                  aria-label={`${k.category} kaydını sil`}
                  onClick={() => { setSilinecek(k); setIslemHatasi(null); }}>
                  <Trash2 size={14} /> Sil
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="pnl-dipnot">
        <Wallet size={14} aria-hidden="true" />
        Veterito ödeme almıyor, tahsilat yapmıyor ve bu rakamları doğrulamıyor. Defter
        tamamen sizin kaydınız.
      </p>

      {/* ── KAYIT EKLE ── */}
      <Diyalog acik={ekleAcik} kapat={() => setEkleAcik(false)} baslik="Deftere kayıt ekle"
        aciklama="Tutarı lira olarak yazın; kuruş için virgül kullanabilirsiniz.">
        <form onSubmit={kaydet}>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-tur">Tür</label>
            <select id="pnl-d-tur" value={form.tur}
              onChange={(e) => setForm((f) => ({ ...f, tur: e.target.value as 'income' | 'expense', kategori: '', kategoriKodu: '' }))}>
              <option value="income">Gelir</option>
              <option value="expense">Gider</option>
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-tutar">Tutar (₺)</label>
            {/*
              ⚠️ `type="text"` ve `inputMode="decimal"`: Turkiye'de ondalik ayraci
              VIRGUL ve `type="number"` virgullu girisi bazi tarayicilarda bos
              deger olarak okuyor. Cevrim tek yerde yapiliyor (`veri.ts`).
            */}
            <input id="pnl-d-tutar" type="text" inputMode="decimal" required value={form.tutarTL}
              onChange={(e) => setForm((f) => ({ ...f, tutarTL: e.target.value.replace(/[^0-9.,]/g, '') }))}
              placeholder="450,00" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-kategori">Kategori</label>
            <select id="pnl-d-kategori" value={form.kategoriKodu} onChange={(e) => { const k = kategoriler.find((x) => x.code === e.target.value); setForm((f) => ({ ...f, kategoriKodu: e.target.value, kategori: k?.name ?? '' })); }}><option value="">Listeden seçin veya aşağıya yazın</option>{kategoriler.map((k) => <option key={k.code} value={k.code}>{k.group_name} · {k.name}</option>)}</select>
            <input aria-label="Özel kategori" required maxLength={80} value={form.kategori} onChange={(e) => setForm((f) => ({ ...f, kategori: e.target.value, kategoriKodu: '' }))} placeholder="Listede yoksa kategori yazın" />
            <span className="pnl-alan-ipucu">Standart kategori raporları tutarlı kılar; listede yoksa kendi kategorinizi yazabilirsiniz.</span>
          </div>
          <div className="pnl-alan"><label htmlFor="pnl-d-odeme">Ödeme yöntemi</label><select id="pnl-d-odeme" value={form.odemeYontemi} onChange={(e) => setForm((f) => ({ ...f, odemeYontemi: e.target.value }))}><option value="">Belirtilmedi</option>{odemeYontemleri.map((o) => <option key={o.code} value={o.code}>{o.name}</option>)}</select></div>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-tarih">Tarih</label>
            <input id="pnl-d-tarih" type="date" required value={form.tarih}
              onChange={(e) => setForm((f) => ({ ...f, tarih: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-not">Not</label>
            <textarea id="pnl-d-not" maxLength={300} value={form.not}
              onChange={(e) => setForm((f) => ({ ...f, not: e.target.value }))} />
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setEkleAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu"
              disabled={bekliyor || !form.tutarTL.trim() || !form.kategori.trim()}>
              {bekliyor ? 'Ekleniyor…' : 'Kaydı ekle'}
            </button>
          </div>
        </form>
      </Diyalog>

      {/* ── SILME ONAYI ── */}
      <Diyalog acik={silinecek !== null} kapat={() => setSilinecek(null)}
        baslik="Bu kaydı silmek istiyor musunuz?"
        aciklama={
          silinecek
            ? `${silinecek.category} · ${paraYaz(silinecek.amount)} · ${tarihYaz(silinecek.occurred_on, false)}. Silinen kayıt geri getirilemez ve özet yeniden hesaplanır.`
            : undefined
        }>
        <div className="pnl-diyalog-eylem">
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setSilinecek(null)}>Vazgeç</button>
          <button type="button" className="pnl-dugme pnl-dugme-olumsuz" onClick={sil} disabled={bekliyor}>
            {bekliyor ? 'Siliniyor…' : 'Evet, sil'}
          </button>
        </div>
      </Diyalog>

      <span className="pnl-gizli" aria-hidden="true"><Receipt size={0} /></span>
    </>
  );
}
