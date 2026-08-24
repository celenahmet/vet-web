import { useEffect, useState } from 'react';
import { Globe, Eye, Star, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';

import { klinikSayfasiniOku, type KlinikSayfasi } from './veri';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

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

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true); setHata(null);
    klinikSayfasiniOku(klinik)
      .then((s) => { if (!iptal) setSayfa(s); })
      .catch((e: { message?: string }) => { if (!iptal) setHata(e?.message ?? ''); })
      .finally(() => { if (!iptal) setYukleniyor(false); });
    return () => { iptal = true; };
  }, [klinik]);

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

      <div className="pnl-pano-izgara">
        <section className="pnl-widget pnl-genis">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Globe size={17} /></span>
            <h3>Sayfanızın durumu</h3>
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
        Sayfa bilgilerini düzenleme, kapak ve logo yükleme şimdilik telefondaki uygulamada.
      </p>
    </>
  );
}
