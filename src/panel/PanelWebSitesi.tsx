import { useCallback, useEffect, useState } from 'react';
import { Globe, Eye, Star, ExternalLink, CheckCircle2, XCircle, Pencil } from 'lucide-react';

import { klinikSayfasiniOku, klinikSayfasiniGuncelle, klinikBilgileriniGuncelle, type KlinikSayfasi } from './veri';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

/**
 * KLINIK WEB SITESI (İSTEK: Ahmet, 24.08.2026 — *"sol tarafa Klinik Web sitesi
 * diyelim"*)
 *
 * Her klinigin `veterito.com/@kullaniciadi` adresinde bir genel sayfasi var.
 * Bu bolum o sayfanin DURUMUNU gosteriyor: yayinda mi, aramaya acik mi, hangi
 * bilgiler girilmis.
 *
 * ⚠️ ADRESI GERCEKTEN ACIYOR. Panelde "sayfaniz var" yazip goturmemek, en can
 * sikici turden yarim ozellik olurdu; baglanti yeni sekmede aciliyor.
 *
 * ⚠️ `is_published` ve `is_indexable` AYRI SEYLER ve karistirilmasi kolay:
 * biri sayfanin acik olup olmadigi, digeri Google'a gorunup gorunmedigi. Ekran
 * ikisini de kendi cumlesiyle acikliyor.
 *
 * ⚠️ DUZENLEME YOK, GOSTERIM VAR. `update_clinic_page` sunucuda hazir ama
 * kullanici adi degistirmek eski adresi kiriyor; web tarafinda once uyari akisi
 * tasarlanmali.
 */
export default function PanelWebSitesi({ klinik }: { klinik: string }) {
  const [sayfa, setSayfa] = useState<KlinikSayfasi | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [duzenle, setDuzenle] = useState(false);
  const [bekliyor, setBekliyor] = useState(false);
  const [form, setForm] = useState({ slogan: '', tanitim: '', yayinda: false, aramayaAcik: false });

  const yukle = useCallback(() => {
    setYukleniyor(true); setHata(null);
    klinikSayfasiniOku(klinik)
      .then((s) => setSayfa(s))
      .catch((e: { message?: string }) => setHata(e?.message ?? ''))
      .finally(() => setYukleniyor(false));
  }, [klinik]);

  useEffect(() => { yukle(); }, [yukle]);

  function duzenlemeyiAc() {
    setForm({
      slogan: sayfa?.page_tagline ?? '',
      tanitim: sayfa?.about ?? '',
      yayinda: Boolean(sayfa?.is_published),
      aramayaAcik: Boolean(sayfa?.is_indexable),
    });
    setIslemHatasi(null);
    setDuzenle(true);
  }

  async function kaydet(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      /*
       * ⚠️ IKI AYRI CAGRI, cunku iki ayri yetki yolu var. Yayin ayarlari
       * `update_clinic_page` RPC'sinden geciyor; tanitim yazisi `clinics`
       * tablosunda ve kolon duzeyinde yetkilendirilmis bir alan. Tek cagriya
       * zorlamak, sunucudaki ayrimi istemcide bulaniklastirirdi.
       *
       * ⚠️ SIRA ONEMLI: once yayin ayarlari. Tanitim yazisi kaydedilip yayin
       * ayari hata verse bile metin kaybolmuyor; tersi olsaydi sayfa
       * yayina alinip icerigi eski kalirdi.
       */
      await klinikSayfasiniGuncelle(klinik, {
        yayinda: form.yayinda,
        aramayaAcik: form.aramayaAcik,
        slogan: form.slogan.trim(),
      });
      if ((form.tanitim ?? '') !== (sayfa?.about ?? '')) {
        await klinikBilgileriniGuncelle(klinik, { about: form.tanitim.trim() });
      }
      setDuzenle(false);
      setBilgi('Sayfanız güncellendi.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  if (yukleniyor) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  const adres = sayfa?.username ? `https://veterito.com/@${sayfa.username}` : null;

  const durumlar = [
    {
      tamam: Boolean(sayfa?.is_published),
      ad: 'Sayfa yayında',
      evet: 'Kliniğinizin sayfası açık, adresi bilen herkes görebiliyor.',
      hayir: 'Sayfanız şu an kapalı. Kimse göremiyor.',
    },
    {
      tamam: Boolean(sayfa?.is_indexable),
      ad: 'Arama motorlarına açık',
      evet: 'Google gibi arama motorları sayfanızı listeleyebilir.',
      hayir: 'Arama motorlarına kapalı. Sayfa açık ama Google’da çıkmaz.',
    },
    {
      tamam: Boolean(sayfa?.is_verified),
      ad: 'Klinik doğrulanmış',
      evet: 'Doğrulanmış kliniksiniz, genel klinik listesinde görünüyorsunuz.',
      hayir: 'Doğrulama tamamlanmadı; genel klinik listesinde görünmüyorsunuz.',
    },
    {
      tamam: Boolean(sayfa?.logo_key),
      ad: 'Logo yüklenmiş',
      evet: 'Sayfanızda kliniğinizin logosu görünüyor.',
      hayir: 'Logo yüklenmemiş. Logosuz sayfa daha az güven veriyor.',
    },
    {
      tamam: Boolean(sayfa?.cover_key),
      ad: 'Kapak görseli yüklenmiş',
      evet: 'Sayfanızın üstünde kapak görseli var.',
      hayir: 'Kapak görseli yüklenmemiş.',
    },
    {
      tamam: Boolean(sayfa?.about && sayfa.about.trim()),
      ad: 'Tanıtım yazısı girilmiş',
      evet: 'Kliniğinizi anlatan bir yazı var.',
      hayir: 'Tanıtım yazısı boş. Ziyaretçi sizi tanıyamıyor.',
    },
  ];

  const eksikSayisi = durumlar.filter((d) => !d.tamam).length;

  return (
    <>
      <div className="pnl-kartlar">
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon" aria-hidden="true"><Eye size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Görüntülenme</span>
            <span className="pnl-kart-deger">{sayfa?.view_count ?? 0}</span>
            <span className="pnl-kart-anlam">Sayfanız kaç kez açıldı</span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className="pnl-kart-ikon pnl-kart-ikon-altin" aria-hidden="true"><Star size={21} /></span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Puan</span>
            <span className="pnl-kart-deger">{sayfa?.rating_avg ? sayfa.rating_avg.toFixed(1) : '—'}</span>
            <span className="pnl-kart-anlam">
              {sayfa?.rating_count ? `${sayfa.rating_count} değerlendirmeden` : 'Henüz değerlendirme yok'}
            </span>
          </span>
        </div>
        <div className="pnl-kart pnl-kart-durgun">
          <span className={eksikSayisi ? 'pnl-kart-ikon pnl-kart-ikon-uyari' : 'pnl-kart-ikon'} aria-hidden="true">
            <CheckCircle2 size={21} />
          </span>
          <span className="pnl-kart-govde">
            <span className="pnl-kart-ad">Sayfa doluluğu</span>
            <span className="pnl-kart-deger">{durumlar.length - eksikSayisi}/{durumlar.length}</span>
            <span className="pnl-kart-anlam">
              {eksikSayisi ? `${eksikSayisi} madde eksik` : 'Her şey tamam'}
            </span>
          </span>
        </div>
      </div>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <div className="pnl-pano-izgara">
        <section className="pnl-widget pnl-genis">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Globe size={17} /></span>
            <h3>Sayfanızın durumu</h3>
            <button type="button" className="pnl-widget-eylem" onClick={duzenlemeyiAc}>
              <Pencil size={13} /> Düzenle
            </button>
            {adres ? (
              <a className="pnl-widget-eylem" href={adres} target="_blank" rel="noopener noreferrer">
                Sayfayı aç <ExternalLink size={13} />
              </a>
            ) : null}
          </header>
          <div className="pnl-widget-govde">
            {adres ? (
              <p className="pnl-adres">
                <span>Adresiniz:</span> <a href={adres} target="_blank" rel="noopener noreferrer">veterito.com/@{sayfa?.username}</a>
              </p>
            ) : (
              <p className="pnl-widget-bos">
                Kliniğiniz için henüz bir web adresi seçilmemiş. Kullanıcı adı uygulamadan
                belirleniyor ve bir kez seçildikten sonra değiştirmek eski bağlantıları kırar.
              </p>
            )}

            {sayfa?.page_tagline ? <p className="pnl-slogan">“{sayfa.page_tagline}”</p> : null}

            <ul className="pnl-satirlar">
              {durumlar.map((d) => (
                <li key={d.ad} className="pnl-satir">
                  <span className={d.tamam ? 'pnl-onay pnl-onay-tamam' : 'pnl-onay pnl-onay-eksik'} aria-hidden="true">
                    {d.tamam ? <CheckCircle2 size={17} /> : <XCircle size={17} />}
                  </span>
                  <div className="pnl-satir-govde">
                    <p className="pnl-satir-ad">{d.ad}</p>
                    <p className="pnl-satir-alt">{d.tamam ? d.evet : d.hayir}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <p className="pnl-dipnot">
        <Globe size={14} aria-hidden="true" />
        Kapak ve logo yükleme ile adres bilgileri şimdilik telefondaki uygulamada.
      </p>

      <Diyalog
        acik={duzenle}
        kapat={() => setDuzenle(false)}
        baslik="Klinik sayfanızı düzenleyin"
        aciklama="Bu bilgiler kliniğinizin genel sayfasında herkese görünür.">
        <form onSubmit={kaydet}>
          <div className="pnl-alan">
            <label htmlFor="pnl-slogan">Kısa tanıtım cümlesi</label>
            <input
              id="pnl-slogan"
              type="text"
              maxLength={120}
              value={form.slogan}
              onChange={(e) => setForm((f) => ({ ...f, slogan: e.target.value }))}
              placeholder="Örnek: Kediniz ve köpeğiniz için 7/24 yanınızdayız"
            />
            <span className="pnl-alan-ipucu">Sayfanızın en üstünde, klinik adının altında görünür.</span>
          </div>

          <div className="pnl-alan">
            <label htmlFor="pnl-tanitim">Kliniğinizi anlatan yazı</label>
            <textarea
              id="pnl-tanitim"
              value={form.tanitim}
              maxLength={1200}
              onChange={(e) => setForm((f) => ({ ...f, tanitim: e.target.value }))}
              placeholder="Hangi hizmetleri veriyorsunuz, ne zamandır buradasınız, ekibinizde kimler var?"
            />
            <span className="pnl-alan-ipucu">{form.tanitim.length} / 1200 karakter</span>
          </div>

          {/*
            ⚠️ IKI ANAHTAR AYRI TUTULUYOR ve her birinin ne yaptigi yaziyor.
            Tek anahtara indirgemek, "sayfam kapali saniyordum ama Google'da
            cikiyor" durumunu uretirdi.
          */}
          <label className="pnl-anahtar">
            <input
              type="checkbox"
              checked={form.yayinda}
              onChange={(e) => setForm((f) => ({ ...f, yayinda: e.target.checked }))}
            />
            <span className="pnl-anahtar-yazi">
              <span className="pnl-anahtar-ad">Sayfa yayında olsun</span>
              <span className="pnl-anahtar-alt">Kapatırsanız adresi bilen kimse de göremez.</span>
            </span>
          </label>

          <label className="pnl-anahtar">
            <input
              type="checkbox"
              checked={form.aramayaAcik}
              onChange={(e) => setForm((f) => ({ ...f, aramayaAcik: e.target.checked }))}
            />
            <span className="pnl-anahtar-yazi">
              <span className="pnl-anahtar-ad">Arama motorlarında çıksın</span>
              <span className="pnl-anahtar-alt">Google gibi arama motorları sayfanızı listeleyebilir.</span>
            </span>
          </label>

          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDuzenle(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor}>
              {bekliyor ? 'Kaydediliyor…' : 'Kaydet'}
            </button>
          </div>
        </form>
      </Diyalog>
    </>
  );
}
