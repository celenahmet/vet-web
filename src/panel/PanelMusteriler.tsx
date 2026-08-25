import { useCallback, useEffect, useState } from 'react';
import { User, UserPlus, Plus, Smartphone, NotebookPen } from 'lucide-react';

import {
  musterileriOku, musteriDavetEt, cevrimdisiMusterileriOku, defterMusterisiEkle,
  type Musteri, type CevrimdisiMusteri,
} from './veri';
import { tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

/**
 * MUSTERILER — iki kaynak tek liste
 *
 * ⚠️ IKI TUR MUSTERI VAR ve karistirilmamali:
 *   1. **Platform uyesi**: uygulamada hesabi var, klinige cift onayli baglandi.
 *      Kendi hayvanlarini kendi giriyor.
 *   2. **Defter kaydi**: uygulamayi kullanmiyor, klinik kendi defterine yazdi.
 *      Hayvanlarini da klinik giriyor.
 *
 * Ahmet, 25.08.2026: *"bu müşteriler manuel veya platform üyemiz olabilir"* ve
 * *"çoğu zaten uygulama kullanmayanlar olacak"*. Ikinci grup kural, birincisi
 * istisna; o yuzden ikisi ayni listede ama nereden geldigi her satirda yaziyor.
 *
 * ⚠️ "Platforma kayitli mi?" SORUSU BILGI TOPLAMAK ICIN DEGIL, AKISI SECMEK
 * ICIN (Ahmet: *"opsiyonel sorulabilir bilgi edinmek için kayıtlı mı platforma
 * diye"*). Cevap hicbir yere KAYDEDILMIYOR: `clinic_offline_customers`
 * tablosunda platform hesabina baglayan bir kolon yok ve uydurma bir baglanti
 * kurmak yerine soru yalnizca "davet de gonderelim mi" karari icin kullaniliyor.
 * Gercek baglanti tek yoldan kuruluyor: davet, karsi taraf kabul ediyor.
 */
export default function PanelMusteriler({ klinik }: { klinik: string }) {
  const [platform, setPlatform] = useState<Musteri[] | null>(null);
  const [defter, setDefter] = useState<CevrimdisiMusteri[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);

  const [ekleAcik, setEkleAcik] = useState(false);
  const [davetAcik, setDavetAcik] = useState(false);
  const [form, setForm] = useState({ adSoyad: '', telefon: '', eposta: '', not: '', platformda: 'bilinmiyor' as 'evet' | 'hayir' | 'bilinmiyor' });
  const [davet, setDavet] = useState({ eposta: '', telefon: '', not: '' });

  const yukle = useCallback(() => {
    setHata(null);
    Promise.all([musterileriOku(klinik), cevrimdisiMusterileriOku(klinik)])
      .then(([p, d]) => { setPlatform(p); setDefter(d); })
      .catch((e: { message?: string }) => { setPlatform([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setPlatform(null); yukle(); }, [yukle]);

  async function musteriEkle(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await defterMusterisiEkle(klinik, { adSoyad: form.adSoyad, telefon: form.telefon, eposta: form.eposta, not: form.not });
      setEkleAcik(false);
      /*
       * ⚠️ "Evet, kayitli" diyenlere davet ONERILIYOR, kendiliginden
       * GONDERILMIYOR. Davet karsi tarafa bildirim demek; kullanicinin bilmedigi
       * bir bildirim gondermek, en kolay guven kaybettiren sey.
       */
      if (form.platformda === 'evet' && (form.eposta.trim() || form.telefon.trim())) {
        setDavet({ eposta: form.eposta, telefon: form.telefon, not: '' });
        setDavetAcik(true);
        setBilgi(`${form.adSoyad.trim()} deftere eklendi. Platform hesabıyla da bağlamak isterseniz davet gönderebilirsiniz.`);
      } else {
        setBilgi(`${form.adSoyad.trim()} deftere eklendi. Hastalar bölümünden hayvanını ekleyebilirsiniz.`);
      }
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function davetGonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await musteriDavetEt(klinik, { eposta: davet.eposta.trim() || undefined, telefon: davet.telefon.trim() || undefined, not: davet.not.trim() || undefined });
      setDavetAcik(false); setDavet({ eposta: '', telefon: '', not: '' });
      setBilgi('Davet gönderildi. Hayvan sahibi uygulamadan kabul edince platform müşterisi olarak da görünecek.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  if (platform === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} tekrar={yukle} />;

  const toplam = platform.length + defter.length;

  return (
    <section className="pnl-bolum">
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
            Uygulamayı kullanan müşterileriniz ve kendi defterinize yazdıklarınız bir arada.
            Her satırda hangisi olduğu yazıyor.
          </p>
        </div>
        <div className="pnl-basi-dugmeler">
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => { setDavet({ eposta: '', telefon: '', not: '' }); setDavetAcik(true); setIslemHatasi(null); }}>
            <UserPlus size={15} /> Davet et
          </button>
          <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setForm({ adSoyad: '', telefon: '', eposta: '', not: '', platformda: 'bilinmiyor' }); setEkleAcik(true); setIslemHatasi(null); }}>
            <Plus size={15} /> Müşteri ekle
          </button>
        </div>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      {toplam === 0 ? (
        <Bos
          baslik="Henüz müşteriniz yok"
          aciklama="Uygulamayı kullanmayan bir müşteriyi “Müşteri ekle” ile defterinize yazabilir, uygulamayı kullananı “Davet et” ile kliniğinize bağlayabilirsiniz."
        />
      ) : (
        <ul className="pnl-kisi-listesi">
          {platform.map((m) => (
            <li key={`p-${m.user_id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><User size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {m.display_name || 'İsim girilmemiş'}
                  <span className="pnl-etiket pnl-etiket-mavi"><Smartphone size={11} /> uygulama üyesi</span>
                </p>
                <p className="pnl-kisi-rol">{m.pet_count > 0 ? `${m.pet_count} hayvanı kayıtlı` : 'Kayıtlı hayvanı yok'}</p>
                {m.note ? <p className="pnl-kisi-ek">Not: {m.note}</p> : null}
                <p className="pnl-kisi-ek pnl-soluk">Müşteri oldu: {tarihYaz(m.created_at, false)}</p>
              </div>
            </li>
          ))}
          {defter.map((m) => (
            <li key={`d-${m.id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><NotebookPen size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {m.full_name || 'İsim girilmemiş'}
                  <span className="pnl-etiket">kendi kaydınız</span>
                </p>
                <p className="pnl-kisi-rol">{m.phone || m.email || 'İletişim bilgisi yok'}</p>
                {m.note ? <p className="pnl-kisi-ek">Not: {m.note}</p> : null}
                <p className="pnl-kisi-ek pnl-soluk">Deftere eklendi: {tarihYaz(m.created_at, false)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* ── DEFTERE MUSTERI EKLE ── */}
      <Diyalog acik={ekleAcik} kapat={() => setEkleAcik(false)} baslik="Müşteri ekle"
        aciklama="Kendi defterinize bir müşteri kaydedin. Uygulamada hesabı olması gerekmiyor.">
        <form onSubmit={musteriEkle}>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-ad">Ad soyad</label>
            <input id="pnl-m-ad" required minLength={2} maxLength={120} value={form.adSoyad}
              onChange={(e) => setForm((f) => ({ ...f, adSoyad: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-tel">Telefon</label>
            <input id="pnl-m-tel" type="tel" maxLength={30} value={form.telefon}
              onChange={(e) => setForm((f) => ({ ...f, telefon: e.target.value }))} placeholder="05xx xxx xx xx" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-mail">E-posta</label>
            <input id="pnl-m-mail" type="email" value={form.eposta}
              onChange={(e) => setForm((f) => ({ ...f, eposta: e.target.value }))} />
            <span className="pnl-alan-ipucu">İletişim bilgileri isteğe bağlı.</span>
          </div>

          {/*
            ⚠️ OPSIYONEL SORU, ZORUNLU DEGIL. Cevap hicbir yere kaydedilmiyor:
            defter tablosunda platform hesabina baglayan bir kolon yok. Soru
            yalnizca "davet de gonderelim mi" adimini acmak icin var. Kaydedilen
            bir sey yokken "kayitli" isaretlemek, olmayan bir baglanti varmis
            gibi gostermek olurdu.
          */}
          <div className="pnl-alan">
            <label htmlFor="pnl-m-platform">Veterito uygulamasını kullanıyor mu? (isteğe bağlı)</label>
            <select id="pnl-m-platform" value={form.platformda}
              onChange={(e) => setForm((f) => ({ ...f, platformda: e.target.value as 'evet' | 'hayir' | 'bilinmiyor' }))}>
              <option value="bilinmiyor">Bilmiyorum</option>
              <option value="evet">Evet, kullanıyor</option>
              <option value="hayir">Hayır, kullanmıyor</option>
            </select>
            <span className="pnl-alan-ipucu">
              {form.platformda === 'evet'
                ? 'Kaydettikten sonra davet göndermeyi önereceğiz; kabul ederse hesabıyla da bağlanır.'
                : 'Bu bilgi kaydedilmiyor, yalnızca sonraki adımı belirliyor.'}
            </span>
          </div>

          <div className="pnl-alan">
            <label htmlFor="pnl-m-not">Not</label>
            <textarea id="pnl-m-not" maxLength={500} value={form.not}
              onChange={(e) => setForm((f) => ({ ...f, not: e.target.value }))}
              placeholder="Kendi kaydınız için not. Müşteri bu notu görmez." />
          </div>

          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setEkleAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || form.adSoyad.trim().length < 2}>
              {bekliyor ? 'Ekleniyor…' : 'Müşteriyi ekle'}
            </button>
          </div>
        </form>
      </Diyalog>

      {/* ── PLATFORM DAVETI ── */}
      <Diyalog acik={davetAcik} kapat={() => setDavetAcik(false)} baslik="Müşteri davet et"
        aciklama="Davet hayvan sahibine gider. Kabul edene kadar uygulama müşterisi olarak görünmez; kendi defterinizdeki kaydı bundan etkilenmez.">
        <form onSubmit={davetGonder}>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-mail">E-posta</label>
            <input id="pnl-d-mail" type="email" value={davet.eposta} onChange={(e) => setDavet((d) => ({ ...d, eposta: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-tel">Telefon</label>
            <input id="pnl-d-tel" type="tel" value={davet.telefon} onChange={(e) => setDavet((d) => ({ ...d, telefon: e.target.value }))} />
            <span className="pnl-alan-ipucu">İkisinden birini doldurmanız yeterli.</span>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDavetAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || (!davet.eposta.trim() && !davet.telefon.trim())}>
              {bekliyor ? 'Gönderiliyor…' : 'Daveti gönder'}
            </button>
          </div>
        </form>
      </Diyalog>
    </section>
  );
}
