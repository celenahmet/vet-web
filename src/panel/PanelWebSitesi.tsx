import { useCallback, useEffect, useState } from 'react';
import {
  AtSign, CheckCircle2, ExternalLink, Eye, Globe, MapPin,
  MessageCircle, Pencil, Share2, Star, XCircle,
} from 'lucide-react';

import {
  klinikBilgileriniGuncelle,
  klinikIletisiminiGuncelle,
  klinikKullaniciAdiSorunu,
  klinikKullaniciAdiniYaz,
  klinikSayfasiniGuncelle,
  klinikSayfasiniOku,
  type KlinikSayfasi,
} from './veri';
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
 * ⚠️ MOBILLE AYNI YOLLAR: adres `set_clinic_username`, yayin ve yol tarifi
 * `update_clinic_page`, sosyal hesaplar `update_clinic_contact`. Webe ozel
 * ikinci bir veri kaynagi acilmiyor.
 */

const BOS_ILETISIM = {
  whatsapp: '', instagram: '', facebook: '', x: '', tiktok: '', youtube: '', linkedin: '',
};

const SOSYAL_ALANLAR = [
  ['instagram', 'Instagram'],
  ['facebook', 'Facebook'],
  ['x', 'X'],
  ['tiktok', 'TikTok'],
  ['youtube', 'YouTube'],
  ['linkedin', 'LinkedIn'],
] as const;

const KULLANICI_ADI_HATALARI: Record<string, string> = {
  too_short: 'En az 3 karakter yazın.',
  too_long: 'En fazla 30 karakter yazın.',
  invalid_chars: 'Yalnız küçük harf, rakam ve alt çizgi kullanın.',
  bad_start: 'Kullanıcı adı harfle başlamalı.',
};

export default function PanelWebSitesi({ klinik }: { klinik: string }) {
  const [sayfa, setSayfa] = useState<KlinikSayfasi | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [duzenle, setDuzenle] = useState(false);
  const [adresDuzenle, setAdresDuzenle] = useState(false);
  const [iletisimDuzenle, setIletisimDuzenle] = useState(false);
  const [bekliyor, setBekliyor] = useState(false);
  const [form, setForm] = useState({ slogan: '', tanitim: '', yolTarifi: '', yayinda: false, aramayaAcik: false });
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [iletisim, setIletisim] = useState(BOS_ILETISIM);

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
      yolTarifi: sayfa?.directions ?? '',
      yayinda: Boolean(sayfa?.is_published),
      aramayaAcik: Boolean(sayfa?.is_indexable),
    });
    setIslemHatasi(null);
    setDuzenle(true);
  }

  function adresDuzenlemeyiAc() {
    setKullaniciAdi(sayfa?.username ?? '');
    setIslemHatasi(null);
    setAdresDuzenle(true);
  }

  function iletisimDuzenlemeyiAc() {
    setIletisim({
      whatsapp: sayfa?.whatsapp ?? '',
      instagram: sayfa?.instagram ?? '',
      facebook: sayfa?.facebook ?? '',
      x: sayfa?.x_handle ?? '',
      tiktok: sayfa?.tiktok ?? '',
      youtube: sayfa?.youtube ?? '',
      linkedin: sayfa?.linkedin ?? '',
    });
    setIslemHatasi(null);
    setIletisimDuzenle(true);
  }

  async function kaydet(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    /* `update_clinic_page` bos metni mevcut degeri koru diye yorumluyor. Bosaltip
       kaydedildi sanilan bir form gostermek yerine sunucu sinirini acik soyluyoruz. */
    if ((sayfa?.page_tagline && !form.slogan.trim()) || (sayfa?.directions && !form.yolTarifi.trim())) {
      setIslemHatasi('Mevcut slogan veya yol tarifini boş değerle kaldırma henüz desteklenmiyor. Alanı güncelleyin ya da eski değeriyle bırakın.');
      return;
    }
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
        yolTarifi: form.yolTarifi.trim(),
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

  async function adresiKaydet(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    const sorun = klinikKullaniciAdiSorunu(kullaniciAdi);
    if (sorun) {
      setIslemHatasi(KULLANICI_ADI_HATALARI[sorun] ?? 'Kullanıcı adı geçersiz.');
      return;
    }
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await klinikKullaniciAdiniYaz(klinik, kullaniciAdi);
      setAdresDuzenle(false);
      setBilgi('Web adresiniz güncellendi.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function iletisimiKaydet(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;

    /*
     * ⚠️ 0106 RPC'si bos degeri "mevcut degeri koru" diye yorumluyor. Ekranda
     * bosaltip kaydetti sanmak yerine bunu acikca reddediyoruz; mobildeki ayni
     * sunucu siniri sessiz bir sahte basariya donusmesin.
     */
    const mevcut = {
      whatsapp: sayfa?.whatsapp, instagram: sayfa?.instagram, facebook: sayfa?.facebook,
      x: sayfa?.x_handle, tiktok: sayfa?.tiktok, youtube: sayfa?.youtube, linkedin: sayfa?.linkedin,
    };
    const kaldirilmayaCalisilan = (Object.keys(iletisim) as (keyof typeof iletisim)[])
      .find((anahtar) => mevcut[anahtar] && !iletisim[anahtar].trim());
    if (kaldirilmayaCalisilan) {
      setIslemHatasi('Mevcut bir iletişim hesabını boş değerle kaldırma henüz desteklenmiyor. Alanı eski değeriyle bırakın.');
      return;
    }

    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await klinikIletisiminiGuncelle(klinik, iletisim);
      setIletisimDuzenle(false);
      setBilgi('İletişim ve sosyal medya hesaplarınız güncellendi.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  if (yukleniyor) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  const adres = sayfa?.username ? `https://veterito.com/@${sayfa.username}` : null;
  const kullaniciAdiSorunu = kullaniciAdi.trim() ? klinikKullaniciAdiSorunu(kullaniciAdi) : 'too_short';
  const sosyalSayisi = [
    sayfa?.instagram, sayfa?.facebook, sayfa?.x_handle,
    sayfa?.tiktok, sayfa?.youtube, sayfa?.linkedin,
  ].filter(Boolean).length;

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

      <div className="pnl-pano-izgara pnl-izgara-ikili">
        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><AtSign size={17} /></span>
            <h3>Web adresi</h3>
            <button type="button" className="pnl-widget-eylem" onClick={adresDuzenlemeyiAc}>
              <Pencil size={13} /> Düzenle
            </button>
          </header>
          <div className="pnl-widget-govde">
            {adres ? (
              <>
                <p className="pnl-adres">
                  <a href={adres} target="_blank" rel="noopener noreferrer">veterito.com/@{sayfa?.username}</a>
                </p>
                <p className="pnl-widget-not">
                  Bu adres kartvizit, sosyal medya ve arama sonuçlarında kliniğinize açılan kalıcı bağlantıdır.
                </p>
              </>
            ) : (
              <p className="pnl-widget-bos">Henüz bir web adresiniz yok. Kliniğiniz için kısa ve hatırlanabilir bir kullanıcı adı seçin.</p>
            )}
          </div>
        </section>

        <section className="pnl-widget">
          <header className="pnl-widget-basi">
            <span className="pnl-widget-ikon" aria-hidden="true"><Share2 size={17} /></span>
            <h3>İletişim ve sosyal medya</h3>
            <button type="button" className="pnl-widget-eylem" onClick={iletisimDuzenlemeyiAc}>
              <Pencil size={13} /> Düzenle
            </button>
          </header>
          <div className="pnl-widget-govde">
            <ul className="pnl-satirlar">
              <li className="pnl-satir">
                <span className="pnl-onay pnl-onay-tamam" aria-hidden="true"><MessageCircle size={16} /></span>
                <div className="pnl-satir-govde">
                  <p className="pnl-satir-ad">WhatsApp</p>
                  <p className="pnl-satir-alt">{sayfa?.whatsapp || 'Numara eklenmemiş'}</p>
                </div>
              </li>
              <li className="pnl-satir">
                <span className="pnl-onay" aria-hidden="true"><Share2 size={16} /></span>
                <div className="pnl-satir-govde">
                  <p className="pnl-satir-ad">Sosyal hesaplar</p>
                  <p className="pnl-satir-alt">{sosyalSayisi ? `${sosyalSayisi} hesap bağlı` : 'Henüz hesap eklenmemiş'}</p>
                </div>
              </li>
              <li className="pnl-satir">
                <span className="pnl-onay" aria-hidden="true"><MapPin size={16} /></span>
                <div className="pnl-satir-govde">
                  <p className="pnl-satir-ad">Telefon ve e-posta</p>
                  <p className="pnl-satir-alt">{sayfa?.phone || '—'} · {sayfa?.email || '—'}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <p className="pnl-dipnot">
        <Globe size={14} aria-hidden="true" />
        Logo ve kapak görseli yükleme şimdilik telefondaki uygulamada. Web adresi,
        sayfa içeriği ve iletişim kanalları bu panelden yönetilebilir.
      </p>

      <Diyalog
        acik={duzenle}
        kapat={() => setDuzenle(false)}
        baslik="Klinik sayfanızı düzenleyin"
        aciklama="Bu bilgiler kliniğinizin genel sayfasında herkese görünür.">
        {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
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

          <div className="pnl-alan">
            <label htmlFor="pnl-yol-tarifi">Yol tarifi ve ulaşım notu</label>
            <textarea
              id="pnl-yol-tarifi"
              value={form.yolTarifi}
              maxLength={600}
              onChange={(e) => setForm((f) => ({ ...f, yolTarifi: e.target.value }))}
              placeholder="Örnek: Metro çıkışının karşısında, otopark girişi arka sokaktadır."
            />
            <span className="pnl-alan-ipucu">{form.yolTarifi.length} / 600 karakter · Web sitenizde adresin yanında görünür.</span>
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

      <Diyalog
        acik={adresDuzenle}
        kapat={() => setAdresDuzenle(false)}
        baslik="Kliniğinizin web adresi"
        aciklama="Kısa, hatırlanabilir ve kliniğinizle özdeşleşen bir kullanıcı adı seçin.">
        {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
        <form onSubmit={adresiKaydet}>
          <div className="pnl-alan">
            <label htmlFor="pnl-kullanici-adi">Kullanıcı adı</label>
            <input
              id="pnl-kullanici-adi"
              type="text"
              minLength={3}
              maxLength={30}
              autoCapitalize="none"
              spellCheck={false}
              value={kullaniciAdi}
              onChange={(e) => {
                setKullaniciAdi(e.target.value);
                setIslemHatasi(null);
              }}
              placeholder="patilidostlar"
            />
            <span className="pnl-adres-onizleme">
              veterito.com/@{kullaniciAdi.trim().toLocaleLowerCase('en') || '…'}
            </span>
            {kullaniciAdiSorunu ? (
              <span className="pnl-alan-hata">{KULLANICI_ADI_HATALARI[kullaniciAdiSorunu]}</span>
            ) : (
              <span className="pnl-alan-ipucu">Yalnız küçük harf, rakam ve alt çizgi; harfle başlamalı.</span>
            )}
          </div>

          {sayfa?.username && sayfa.username !== kullaniciAdi.trim().toLocaleLowerCase('en') ? (
            <div className="pnl-uyari">
              <div>
                <p className="pnl-uyari-baslik">Eski bağlantı çalışmayı durdurur</p>
                <p>Kartvizit, sosyal medya ve paylaşımlardaki eski adresi de güncellemeniz gerekir.</p>
              </div>
            </div>
          ) : null}

          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setAdresDuzenle(false)}>Vazgeç</button>
            <button
              type="submit"
              className="pnl-dugme pnl-dugme-olumlu"
              disabled={bekliyor || Boolean(kullaniciAdiSorunu) || sayfa?.username === kullaniciAdi.trim().toLocaleLowerCase('en')}>
              {bekliyor ? 'Kaydediliyor…' : 'Adresi kaydet'}
            </button>
          </div>
        </form>
      </Diyalog>

      <Diyalog
        acik={iletisimDuzenle}
        kapat={() => setIletisimDuzenle(false)}
        baslik="İletişim ve sosyal medya"
        aciklama="Bu hesaplar web sitenizde tıklanabilir bağlantı olarak görünür.">
        {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
        <form onSubmit={iletisimiKaydet}>
          <div className="pnl-uyari pnl-uyari-bilgi">
            <div>
              <p className="pnl-uyari-baslik">Telefon ve e-posta tek kaynaktan gelir</p>
              <p>{sayfa?.phone || 'Telefon yok'} · {sayfa?.email || 'E-posta yok'} — bunları Klinik profili bölümünden güncelleyebilirsiniz.</p>
            </div>
          </div>

          <div className="pnl-alan pnl-alan-ilk">
            <label htmlFor="pnl-whatsapp">WhatsApp numarası</label>
            <input
              id="pnl-whatsapp"
              type="tel"
              value={iletisim.whatsapp}
              onChange={(e) => setIletisim((f) => ({ ...f, whatsapp: e.target.value }))}
              placeholder="0532 111 22 33"
            />
            <span className="pnl-alan-ipucu">Boşluklu yazabilirsiniz; sunucu numarayı ülke koduyla düzenler.</span>
          </div>

          <div className="pnl-form-ikili">
            {SOSYAL_ALANLAR.map(([anahtar, etiket]) => (
              <div className="pnl-alan" key={anahtar}>
                <label htmlFor={`pnl-${anahtar}`}>{etiket}</label>
                <input
                  id={`pnl-${anahtar}`}
                  type="text"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={iletisim[anahtar]}
                  onChange={(e) => setIletisim((f) => ({ ...f, [anahtar]: e.target.value }))}
                  placeholder="@kullaniciadi"
                />
              </div>
            ))}
          </div>
          <span className="pnl-alan-ipucu">Hesap adı veya tam profil adresi yapıştırabilirsiniz; adres sunucuda temizlenir.</span>

          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setIletisimDuzenle(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor}>
              {bekliyor ? 'Kaydediliyor…' : 'Hesapları kaydet'}
            </button>
          </div>
        </form>
      </Diyalog>
    </>
  );
}
