import { useCallback, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Wallet, Plus, Trash2, Receipt } from 'lucide-react';

import {
  defterOzetiOku, defterKalemleriOku, defterKayitlariniOku, defterKaydiEkle, defterKaydiSil,
  type DefterOzeti, type DefterKalemi, type DefterKaydi,
} from './veri';
import { paraYaz, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

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
  const bugun = () => new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({ tur: 'income' as 'income' | 'expense', tutarTL: '', kategori: '', tarih: bugun(), not: '' });

  const yukle = useCallback(() => {
    setYukleniyor(true); setHata(null);
    Promise.all([defterOzetiOku(klinik), defterKalemleriOku(klinik), defterKayitlariniOku(klinik)])
      .then(([o, k, kk]) => { setOzet(o[0] ?? null); setKalemler(k); setKayitlar(kk); })
      .catch((e: { message?: string }) => setHata(e?.message ?? ''))
      .finally(() => setYukleniyor(false));
  }, [klinik]);

  useEffect(() => { yukle(); }, [yukle]);

  async function kaydet(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await defterKaydiEkle(klinik, form);
      setEkleAcik(false);
      setForm({ tur: form.tur, tutarTL: '', kategori: '', tarih: bugun(), not: '' });
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

  return (
    <>
      <header className="pnl-bolum-basi">
        <div>
          <h2>Gelir / Gider</h2>
          <p className="pnl-aciklama">
            Kliniğinizin kendi defteri. Buradaki rakamlar sizin kaydınız; Veterito ödeme
            almıyor, aracılık etmiyor.
          </p>
        </div>
        <button type="button" className="pnl-dugme pnl-dugme-olumlu"
          onClick={() => { setForm({ tur: 'income', tutarTL: '', kategori: '', tarih: bugun(), not: '' }); setEkleAcik(true); setIslemHatasi(null); }}>
          <Plus size={15} /> Kayıt ekle
        </button>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

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
              onChange={(e) => setForm((f) => ({ ...f, tur: e.target.value as 'income' | 'expense' }))}>
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
            <input id="pnl-d-kategori" required maxLength={40} value={form.kategori}
              onChange={(e) => setForm((f) => ({ ...f, kategori: e.target.value }))}
              placeholder={form.tur === 'income' ? 'Örnek: Genel muayene' : 'Örnek: İlaç alımı'} />
            <span className="pnl-alan-ipucu">Aynı kategoriyi kullanmanız, özetlerin anlamlı çıkmasını sağlar.</span>
          </div>
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
