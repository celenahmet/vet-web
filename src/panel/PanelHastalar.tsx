import { useCallback, useEffect, useState } from 'react';
import { PawPrint, Plus, Smartphone, NotebookPen, FileText } from 'lucide-react';

import {
  hastalariOku, defterHastalariniOku, cevrimdisiMusterileriOku, turleriOku,
  defterHastasiEkle, saglikKaydiEkle,
  type Hasta, type DefterHastasi, type CevrimdisiMusteri, type Tur,
} from './veri';
import { KAYIT_TURU, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

/**
 * HASTALAR — iki kaynak tek liste
 *
 * ⚠️ IKI TUR HASTA VAR:
 *   1. **Uygulama uyesinin hayvani**: sahibi kendi hesabina girmis. Klinik
 *      goruyor ama duzenlemiyor; kayit hayvan sahibinin.
 *   2. **Defter kaydi**: klinik kendi defterine yazdi. Saglik kaydi ancak
 *      buraya yazilabiliyor.
 *
 * ⚠️ SAGLIK KAYDI YALNIZ DEFTER HASTASINA yazilabiliyor ve bu bir eksiklik
 * degil, semadan geliyor: `clinic_pet_records.pet_id` alani
 * `clinic_offline_pets`e bagli, uygulamadaki `pets` tablosuna DEGIL. Klinigin
 * tuttugu kayit, hayvan sahibinin kendi profilinden ayri duruyor.
 *
 * Ekran bunu GIZLEMIYOR: uygulama uyesinin hayvaninda "Kayıt ekle" dugmesi
 * yok ve neden olmadigi yaziyor. Dugmeyi koyup hata verdirmek ya da sessizce
 * hicbir sey yapmamak, ikisi de daha kotu olurdu.
 *
 * ⚠️ Defter hayvani bir DEFTER MUSTERISINE baglanmak zorunda (yabanci anahtar).
 * Uygulama uyesi bir musterinin hayvanini deftere yazmak isterse, once o kisi
 * icin bir defter kaydi acmasi gerekiyor; secim listesi bunu soyluyor.
 */
export default function PanelHastalar({ klinik }: { klinik: string }) {
  const [uygulama, setUygulama] = useState<Hasta[] | null>(null);
  const [defter, setDefter] = useState<DefterHastasi[]>([]);
  const [musteriler, setMusteriler] = useState<CevrimdisiMusteri[]>([]);
  const [turler, setTurler] = useState<Tur[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);

  const [ekleAcik, setEkleAcik] = useState(false);
  const [kayitAcik, setKayitAcik] = useState(false);
  const [hForm, setHForm] = useState({ musteri: '', ad: '', tur: 'dog', cinsiyet: '', dogum: '', not: '' });
  const [kForm, setKForm] = useState({ hasta: '', hastaAdi: '', tur: 'exam', baslik: '', ayrinti: '', tarih: '', sonraki: '', kilo: '' });

  const bugun = () => new Date().toISOString().slice(0, 10);

  const yukle = useCallback(() => {
    setHata(null);
    Promise.all([hastalariOku(klinik), defterHastalariniOku(klinik), cevrimdisiMusterileriOku(klinik), turleriOku()])
      .then(([u, d, m, t]) => { setUygulama(u); setDefter(d); setMusteriler(m); setTurler(t); })
      .catch((e: { message?: string }) => { setUygulama([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setUygulama(null); yukle(); }, [yukle]);

  async function calistir(is: () => Promise<string>, kapat: () => void) {
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      const mesaj = await is();
      kapat(); setBilgi(mesaj); yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  if (uygulama === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} tekrar={yukle} />;

  const turAdi = (kod: string | null) => (kod ? (turler.find((t) => t.code === kod)?.name_tr ?? kod) : 'Türü girilmemiş');
  const musteriAdi = (id: string) => musteriler.find((m) => m.id === id)?.full_name ?? 'Bilinmeyen müşteri';
  const toplam = uygulama.length + defter.length;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Hastalar</h2>
          <p className="pnl-aciklama">
            Uygulama üyelerinin hayvanları ve kendi defterinize yazdıklarınız bir arada.
            Sağlık kaydı yalnızca kendi defterinizdeki hastalara yazılabiliyor.
          </p>
        </div>
        <button
          type="button"
          className="pnl-dugme pnl-dugme-olumlu"
          disabled={musteriler.length === 0}
          title={musteriler.length === 0 ? 'Önce Müşteriler bölümünden bir müşteri ekleyin' : undefined}
          onClick={() => { setHForm({ musteri: musteriler[0]?.id ?? '', ad: '', tur: 'dog', cinsiyet: '', dogum: '', not: '' }); setEkleAcik(true); setIslemHatasi(null); }}>
          <Plus size={15} /> Hasta ekle
        </button>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      {/* ⚠️ Dugme pasifse SEBEBI yaziyor. Tiklanmayan bir dugme, aciklamasi
          yoksa bozuk sanilir. */}
      {musteriler.length === 0 ? (
        <p className="pnl-dipnot">
          <NotebookPen size={14} aria-hidden="true" />
          Hasta eklemek için önce Müşteriler bölümünden bir müşteri kaydı açın; her hayvan bir müşteriye bağlanıyor.
        </p>
      ) : null}

      {toplam === 0 ? (
        <Bos
          baslik="Kayıtlı hasta yok"
          aciklama="Uygulama üyesi müşterileriniz hayvanlarını kendileri kaydeder. Uygulamayı kullanmayanlar için “Hasta ekle” ile kendi defterinize kayıt açabilirsiniz."
        />
      ) : (
        <ul className="pnl-kisi-listesi">
          {defter.map((h) => (
            <li key={`d-${h.id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><NotebookPen size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {h.name}
                  <span className="pnl-etiket">kendi kaydınız</span>
                </p>
                <p className="pnl-kisi-rol">{turAdi(h.species_code)}</p>
                <p className="pnl-kisi-ek">Sahibi: {musteriAdi(h.customer_id)}</p>
                {h.birth_date ? <p className="pnl-kisi-ek pnl-soluk">Doğum: {tarihYaz(h.birth_date, false)}</p> : null}
              </div>
              <button
                type="button"
                className="pnl-dugme pnl-dugme-sade pnl-kisi-eylem"
                onClick={() => {
                  setKForm({ hasta: h.id, hastaAdi: h.name, tur: 'exam', baslik: '', ayrinti: '', tarih: bugun(), sonraki: '', kilo: '' });
                  setKayitAcik(true); setIslemHatasi(null);
                }}>
                <FileText size={14} /> Kayıt ekle
              </button>
            </li>
          ))}
          {uygulama.map((h) => (
            <li key={`u-${h.pet_id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><PawPrint size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {h.pet_name || 'İsim girilmemiş'}
                  <span className="pnl-etiket pnl-etiket-mavi"><Smartphone size={11} /> uygulama üyesi</span>
                </p>
                <p className="pnl-kisi-rol">{turAdi(h.species_code)}</p>
                <p className="pnl-kisi-ek">Sahibi: {h.owner_name || 'İsim girilmemiş'}</p>
                {/* ⚠️ Neden dugme yok, ekran soyluyor. */}
                <p className="pnl-kisi-ek pnl-soluk">
                  Bu kaydı hayvan sahibi tutuyor; kliniğin sağlık kaydı kendi defterine yazılıyor.
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* ── HASTA EKLE ── */}
      <Diyalog acik={ekleAcik} kapat={() => setEkleAcik(false)} baslik="Hasta ekle"
        aciklama="Kendi defterinize hayvan kaydı açın. Her hayvan bir müşteriye bağlanıyor.">
        <form onSubmit={(e) => { e.preventDefault(); calistir(async () => {
          await defterHastasiEkle(klinik, hForm.musteri, { ad: hForm.ad, tur: hForm.tur, cinsiyet: hForm.cinsiyet, dogum: hForm.dogum, not: hForm.not });
          return `${hForm.ad.trim()} deftere eklendi. Artık sağlık kaydı girebilirsiniz.`;
        }, () => setEkleAcik(false)); }}>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-musteri">Sahibi</label>
            <select id="pnl-h-musteri" required value={hForm.musteri}
              onChange={(e) => setHForm((f) => ({ ...f, musteri: e.target.value }))}>
              {musteriler.map((m) => <option key={m.id} value={m.id}>{m.full_name}</option>)}
            </select>
            {/*
              ⚠️ Listede yalniz DEFTER musterileri var. Uygulama uyesi bir
              musterinin hayvani kendi hesabinda duruyor ve klinik oraya kayit
              acamiyor; acabilseydi hayvan sahibinin kaydini klinik degistirmis
              olurdu. Uygulama uyesi icin de defter kaydi tutmak isterseniz,
              Musteriler bolumunden onun adina bir defter kaydi acin.
            */}
            <span className="pnl-alan-ipucu">
              Listede yalnızca kendi defterinizdeki müşteriler var. Uygulama üyesi bir müşteri için de
              kayıt tutmak isterseniz, Müşteriler bölümünden onun adına bir kayıt açın.
            </span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-ad">Hayvanın adı</label>
            <input id="pnl-h-ad" required maxLength={80} value={hForm.ad}
              onChange={(e) => setHForm((f) => ({ ...f, ad: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-tur">Tür</label>
            {/* ⚠️ Tur listesi SUNUCUDAN geliyor; elde yazilmis sozlukte at,
                gelincik ve papagan eksikti. */}
            <select id="pnl-h-tur" value={hForm.tur} onChange={(e) => setHForm((f) => ({ ...f, tur: e.target.value }))}>
              {turler.map((t) => <option key={t.code} value={t.code}>{t.name_tr}</option>)}
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-cins">Cinsiyet</label>
            <select id="pnl-h-cins" value={hForm.cinsiyet} onChange={(e) => setHForm((f) => ({ ...f, cinsiyet: e.target.value }))}>
              <option value="">Belirtilmedi</option>
              <option value="male">Erkek</option>
              <option value="female">Dişi</option>
              <option value="unknown">Bilinmiyor</option>
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-dogum">Doğum tarihi</label>
            <input id="pnl-h-dogum" type="date" max={bugun()} value={hForm.dogum}
              onChange={(e) => setHForm((f) => ({ ...f, dogum: e.target.value }))} />
            <span className="pnl-alan-ipucu">Bilinmiyorsa boş bırakın.</span>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setEkleAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !hForm.ad.trim() || !hForm.musteri}>
              {bekliyor ? 'Ekleniyor…' : 'Hastayı ekle'}
            </button>
          </div>
        </form>
      </Diyalog>

      {/* ── SAGLIK KAYDI EKLE ── */}
      <Diyalog acik={kayitAcik} kapat={() => setKayitAcik(false)} baslik="Sağlık kaydı ekle"
        aciklama={kForm.hastaAdi ? `${kForm.hastaAdi} için muayene, aşı, parazit, ilaç ya da kilo kaydı.` : undefined}>
        <form onSubmit={(e) => { e.preventDefault(); calistir(async () => {
          await saglikKaydiEkle(klinik, kForm.hasta, { tur: kForm.tur, baslik: kForm.baslik, ayrinti: kForm.ayrinti, tarih: kForm.tarih, sonraki: kForm.sonraki, kilo: kForm.kilo });
          return 'Sağlık kaydı eklendi. Sonraki tarih girdiyseniz aşı takviminde görünür.';
        }, () => setKayitAcik(false)); }}>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-tur">Kayıt türü</label>
            <select id="pnl-k-tur" value={kForm.tur} onChange={(e) => setKForm((f) => ({ ...f, tur: e.target.value }))}>
              {Object.entries(KAYIT_TURU).map(([kod, ad]) => <option key={kod} value={kod}>{ad}</option>)}
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-baslik">Başlık</label>
            <input id="pnl-k-baslik" required minLength={2} maxLength={120} value={kForm.baslik}
              onChange={(e) => setKForm((f) => ({ ...f, baslik: e.target.value }))}
              placeholder="Örnek: Karma aşı (DHPPi)" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-tarih">Yapıldığı tarih</label>
            <input id="pnl-k-tarih" type="date" required max={bugun()} value={kForm.tarih}
              onChange={(e) => setKForm((f) => ({ ...f, tarih: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-sonraki">Sonraki tarih</label>
            <input id="pnl-k-sonraki" type="date" min={kForm.tarih || undefined} value={kForm.sonraki}
              onChange={(e) => setKForm((f) => ({ ...f, sonraki: e.target.value }))} />
            <span className="pnl-alan-ipucu">Aşı takviminde hatırlatma olarak çıkar. Gerekmiyorsa boş bırakın.</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-kilo">Kilo (kg)</label>
            <input id="pnl-k-kilo" type="number" step="0.01" min="0.01" max="499" value={kForm.kilo}
              onChange={(e) => setKForm((f) => ({ ...f, kilo: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-ayrinti">Ayrıntı</label>
            <textarea id="pnl-k-ayrinti" maxLength={1000} value={kForm.ayrinti}
              onChange={(e) => setKForm((f) => ({ ...f, ayrinti: e.target.value }))} />
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setKayitAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || kForm.baslik.trim().length < 2 || !kForm.tarih}>
              {bekliyor ? 'Kaydediliyor…' : 'Kaydı ekle'}
            </button>
          </div>
        </form>
      </Diyalog>
    </section>
  );
}
