import { lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  fetchClinicMedia,
  fetchClinicPage,
  fetchClinicStaff,
  fetchClinicHours,
  fetchClinicSpecialHours,
  formatPhone,
  initials,
  mapsUrl,
  socialLabel,
  socialUrl,
  type ClinicMedia,
  type ClinicPage as ClinicPageData,
  type StaffMember,
  type ClinicHour,
  type ClinicSpecialHour,
} from '../lib/clinicPage';
import {
  IconCheck,
  IconClose,
  IconGlobe,
  IconMail,
  IconNext,
  IconPhone,
  IconPin,
  IconPrev,
  IconWhatsApp,
  IconZoom,
  socialIcon,
} from './clinicIcons';
import './ClinicPage.css';

const NotFound = lazy(() => import('./NotFound'));

type Sekme = 'staff' | 'gallery' | 'hours';

/** 0 = Pazar … 6 = Cumartesi (`clinic_hours.weekday` ile aynı sıra). */
const GUNLER = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

/** '09:00:00' -> '09:00'. Saniye gösterilmiyor, ekranda gürültü yapıyor. */
function saatKisalt(t: string | null): string {
  return t ? t.slice(0, 5) : '';
}

/** Kapalı gün ile saati girilmemiş günü AYIRIYOR: ikisi aynı şey değil. */
function saatMetni(k: { is_closed: boolean; opens_at: string | null; closes_at: string | null } | undefined): string {
  if (!k) return 'Belirtilmemiş';
  if (k.is_closed) return 'Kapalı';
  if (!k.opens_at || !k.closes_at) return 'Belirtilmemiş';
  return `${saatKisalt(k.opens_at)} - ${saatKisalt(k.closes_at)}`;
}

function tarihMetni(iso: string): string {
  const aylar = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const [y, a, g] = iso.split('-').map(Number);
  return `${g} ${aylar[a - 1]} ${y}`;
}

/**
 * `veterito.com/@kullaniciadi` — kliniğin herkese açık vitrini.
 *
 * ⚠️ BÖLÜM YOKSA HİÇ ÇİZİLMİYOR. Kliniğin girmediği alan için başlık bırakmak sayfayı
 * yarım gösterir; yarım bir vitrin kliniği eksik gösterir.
 *
 * ⚠️ RANDEVU / ÖDEME DÜĞMESİ YOK. Para platformdan geçmiyor (Anayasa §1.6/1).
 *
 * ⚠️ SEO SINIRI DÜRÜSTÇE: bu bir Vite SPA, içerik istemcide çiziliyor. Başlık, açıklama,
 * Open Graph ve JSON-LD ekleniyor; Google JS çalıştırdığı için çoğunlukla okunuyor.
 * Ama garanti değil — tam SEO için ön-üretim (prerender/SSR) gerekir. Bu, uygulama
 * tarafının değil web mimarisinin kararı.
 */
export default function ClinicPage() {
  const { handle } = useParams<{ handle: string }>();
  const raw = handle ?? '';
  /**
   * ⚠️ '@' İLE BAŞLAMAYAN ADRES BU SAYFAYA AİT DEĞİL. Rota tüm segmenti yakalıyor
   * (react-router v6 parçalı parametre desteklemiyor), ayrımı burada yapıyoruz.
   */
  const bizeAit = raw.startsWith('@');
  const username = raw.replace(/^@/, '');

  const [page, setPage] = useState<ClinicPageData | null>(null);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [hours, setHours] = useState<ClinicHour[]>([]);
  const [specialHours, setSpecialHours] = useState<ClinicSpecialHour[]>([]);
  const [media, setMedia] = useState<ClinicMedia>({
    logo: null,
    cover: null,
    gallery: [],
    staff: {},
  });
  const [loading, setLoading] = useState(true);

  /**
   * Vitrin: ekip ve galeri AYNI panelde, sekmeyle geçişli (İSTEK: Ahmet, 20.08.2026).
   * ⚠️ ÖNCEKİ HÂLİ İKİ AYRI KÜÇÜK BLOKTU. Yan yana iki dar blok hem kartları
   * küçültüyor hem sayfayı uzatıyordu; sekme ikisine de tam genişlik veriyor.
   */
  const [sekme, setSekme] = useState<Sekme>('staff');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [secilenKisi, setSecilenKisi] = useState<StaffMember | null>(null);

  useEffect(() => {
    if (!bizeAit) {
      setLoading(false);
      return;
    }
    let iptal = false;
    setLoading(true);
    (async () => {
      /**
       * ⚠️ `finally` OLMADAN SAYFA SONSUZA KADAR "Yükleniyor" KALIYOR.
       * İlk yazımda try/finally yoktu: herhangi bir ağ hatası bu fonksiyonu
       * yarıda kesiyor, `setLoading(false)` hiç çalışmıyor ve kullanıcı boş
       * ekrana bakıyordu. Hata yutulmuyor — konsola yazılıyor — ama ekran her
       * hâlde bir sonuca varıyor.
       */
      try {
        const p = await fetchClinicPage(username);
        if (iptal) return;
        setPage(p);

        /**
         * ⚠️ METİN GÖRSELLERİ BEKLEMİYOR. Önce sayfa çiziliyor, görseller sonra
         * doluyor. Beklemek, hızlı gelen iletişim bilgilerini yavaş gelen
         * fotoğrafların arkasında tutmak demekti — sayfanın amacı kliniğe ulaşmak.
         */
        if (p) {
          fetchClinicStaff(p.clinic_id)
            .then((e) => !iptal && setStaff(e))
            .catch((e) => console.error('[clinicPage] ekip alınamadı:', e));
          fetchClinicMedia(username)
            .then((m) => !iptal && setMedia(m))
            .catch((e) => console.error('[clinicPage] görseller alınamadı:', e));
          fetchClinicHours(p.clinic_id)
            .then((h) => !iptal && setHours(h))
            .catch((e) => console.error('[clinicPage] mesai alınamadı:', e));
          fetchClinicSpecialHours(p.clinic_id)
            .then((h) => !iptal && setSpecialHours(h))
            .catch((e) => console.error('[clinicPage] özel günler alınamadı:', e));
        }
      } catch (e) {
        console.error('[clinicPage] sayfa alınamadı:', e);
      } finally {
        if (!iptal) setLoading(false);
      }
    })();
    return () => {
      // Kullanıcı hızlıca başka adrese geçerse eski yanıt yeni sayfanın üstüne yazmasın.
      iptal = true;
    };
  }, [username, bizeAit]);

  /**
   * SEO — başlık, açıklama, Open Graph ve JSON-LD.
   * ⚠️ BAŞLIK "Klinik Adı - Veterito" (İSTEK: Ahmet, 20.08.2026). Marka sonda:
   * arama sonucunda önce klinik adı okunmalı, sekmede de kesilirse marka gitsin.
   * ⚠️ ETİKETLER TEMİZLENİYOR: başka sayfaya geçildiğinde kalsalardı yanlış sayfanın
   * açıklaması aramada görünürdü.
   */
  useEffect(() => {
    const eklenen: HTMLElement[] = [];
    const meta = (attr: 'name' | 'property', key: string, content: string) => {
      const el = document.createElement('meta');
      el.setAttribute(attr, key);
      el.content = content;
      document.head.appendChild(el);
      eklenen.push(el);
    };

    const oncekiBaslik = document.title;
    meta('name', 'robots', page?.is_indexable ? 'index, follow' : 'noindex, nofollow');

    if (page) {
      const baslik = `${page.name} - Veterito`;
      const aciklama =
        page.tagline ??
        page.about?.slice(0, 155) ??
        `${page.name}${page.district ? ` · ${page.district}` : ''} veteriner kliniği. İletişim, ekip ve hizmetler.`;

      document.title = baslik;
      meta('name', 'description', aciklama);
      meta('property', 'og:title', baslik);
      meta('property', 'og:description', aciklama);
      meta('property', 'og:type', 'profile');
      meta('property', 'og:url', `https://veterito.com/@${username}`);
      if (media.cover) meta('property', 'og:image', media.cover);
      meta('name', 'twitter:card', media.cover ? 'summary_large_image' : 'summary');

      // Yapısal veri: arama sonucunda adres, telefon ve puan görünsün.
      const ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VeterinaryCare',
        name: page.name,
        description: aciklama,
        url: `https://veterito.com/@${username}`,
        ...(page.phone ? { telephone: page.phone } : {}),
        ...(page.email ? { email: page.email } : {}),
        ...(media.logo ? { logo: media.logo } : {}),
        ...(media.cover ? { image: media.cover } : {}),
        ...(page.address || page.city
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: page.address ?? undefined,
                addressLocality: page.district ?? undefined,
                addressRegion: page.city ?? undefined,
                addressCountry: 'TR',
              },
            }
          : {}),
        ...(page.rating_count && page.rating_count > 0
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: page.rating_avg,
                reviewCount: page.rating_count,
              },
            }
          : {}),
      });
      document.head.appendChild(ld);
      eklenen.push(ld);
    }

    return () => {
      eklenen.forEach((el) => el.remove());
      document.title = oncekiBaslik;
    };
  }, [page, media.cover, media.logo, username]);

  const sosyal = useMemo(
    () =>
      page
        ? (Object.keys(socialUrl) as (keyof typeof socialUrl)[])
            .map((k) => ({ key: k, value: page[k] }))
            .filter((s): s is { key: keyof typeof socialUrl; value: string } => !!s.value)
        : [],
    [page],
  );

  const galeriSayisi = media.gallery.length;

  // Işık kutusu gezinme — sonda başa, başta sona sarıyor.
  const kaydir = useCallback(
    (yon: 1 | -1) => {
      setLightbox((i) => (i === null ? i : (i + yon + galeriSayisi) % galeriSayisi));
    },
    [galeriSayisi],
  );

  // Pencere açıkken arka planın kaymaması için gövde kilitleniyor.
  const acikPencere = lightbox !== null || secilenKisi !== null;
  useEffect(() => {
    if (!acikPencere) return;
    const onceki = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = onceki;
    };
  }, [acikPencere]);

  /**
   * Klavye: Esc kapatır, ok tuşları fotoğraflar arasında gezer.
   * ⚠️ TEK ÇIKIŞ DÜĞME OLMAMALI — dokunmatikte düğme, klavyede Esc, farede zemin.
   */
  useEffect(() => {
    if (!acikPencere) return;
    const tus = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
        setSecilenKisi(null);
        return;
      }
      if (lightbox === null) return;
      if (e.key === 'ArrowRight') kaydir(1);
      if (e.key === 'ArrowLeft') kaydir(-1);
    };
    window.addEventListener('keydown', tus);
    return () => window.removeEventListener('keydown', tus);
  }, [acikPencere, lightbox, kaydir]);

  if (!bizeAit) return <NotFound />;
  /**
   * ⚠️ TAM EKRAN "Yükleniyor" YAZISI YERİNE İSKELET. Boş bir sayfada tek satır yazı,
   * kullanıcıya "bir şey olmuyor" hissi veriyor; iskelet ise sayfanın nereye
   * oturacağını gösteriyor ve bekleme kısa görünüyor.
   */
  if (loading) return <PageSkeleton />;
  if (!page) return <NotFound />;

  const konum = [page.district, page.city].filter(Boolean).join(' / ');
  const vitrinVar = staff.length > 0 || galeriSayisi > 0 || hours.length > 0 || specialHours.length > 0;
  // Ekip yoksa sekme galeride açılsın: boş bir sekmeyle karşılamak kötü.
  /**
   * Boş sekmeyle karşılamamak için düşüş sırası: seçilen sekmenin içeriği yoksa
   * dolu olana geçiliyor. Mesai en sonda, çünkü ziyaretçi önce kliniği görmek
   * istiyor; ama ekip ve galeri boşsa mesai tek başına da anlamlı bir vitrin.
   */
  const mesaiVar = hours.length > 0 || specialHours.length > 0;
  const aktifSekme: Sekme =
    sekme === 'hours' && mesaiVar
      ? 'hours'
      : sekme === 'staff' && staff.length > 0
        ? 'staff'
        : sekme === 'gallery' && galeriSayisi > 0
          ? 'gallery'
          : staff.length > 0
            ? 'staff'
            : galeriSayisi > 0
              ? 'gallery'
              : mesaiVar
                ? 'hours'
                : 'staff';

  return (
    <div className="vc">
      {/* ============================================================== ÜST */}
      <header className="vc-hero">
        {media.cover ? (
          <img className="vc-hero-cover" src={media.cover} alt="" aria-hidden="true" />
        ) : (
          /**
           * ⚠️ BEKLERKEN ANİMASYON YOK. Önce kapağa sağdan sola kayan bir parlama
           * konmuştu; ekranın en büyük yüzeyinde sürekli hareket eden bir bant
           * rahatsız ediyordu. Yerine sabit marka gradyanı — boş beyaz alan da yok,
           * göz de yorulmuyor.
           */
          <div className="vc-hero-cover vc-hero-cover-fallback" aria-hidden="true" />
        )}
        <div className="vc-hero-scrim" aria-hidden="true" />

        <div className="vc-hero-inner">
          <div className="vc-hero-main">
            <div className="vc-hero-logo">
              {media.logo ? (
                <img src={media.logo} alt={`${page.name} logosu`} />
              ) : (
                <span className="vc-hero-logo-fallback">{initials(page.name)}</span>
              )}
            </div>

            <div className="vc-hero-text">
              <h1 className="vc-title">
                <span>{page.name}</span>
                <span
                  className="vc-verified"
                  title="Doğrulanmış klinik"
                  aria-label="Doğrulanmış klinik">
                  <IconCheck className="vc-verified-tick" />
                </span>
              </h1>
              {page.tagline ? <p className="vc-tagline">{page.tagline}</p> : null}
              <div className="vc-hero-chips">
                {konum ? (
                  <span className="vc-chip">
                    <IconPin className="vc-chip-icon" />
                    {konum}
                  </span>
                ) : null}
                {/* Puan yalnız oy varsa: "0,0 (0)" güven vermez. */}
                {page.rating_count && page.rating_count > 0 ? (
                  <span className="vc-chip vc-chip-gold">
                    ★ {Number(page.rating_avg ?? 0).toFixed(1)} ({page.rating_count})
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          {/*
            ⚠️ SOSYAL AĞLAR SAYFANIN DİBİNDEYDİ, ŞİMDİ KAPAKTA (İSTEK: Ahmet).
            En altta kimse görmüyordu; kimlik bilgisi olarak adın yanında duruyor.
            Etiket yerine logo — "Instagram" bir "I" harfi olarak görünmemeli.
          */}
          {sosyal.length > 0 || page.website ? (
            <nav className="vc-social" aria-label="Sosyal medya hesapları">
              {sosyal.map((s) => {
                const Ikon = socialIcon[s.key];
                return (
                  <a
                    key={s.key}
                    className="vc-social-btn"
                    href={socialUrl[s.key](s.value)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={socialLabel[s.key]}
                    aria-label={socialLabel[s.key]}>
                    <Ikon className="vc-social-icon" />
                  </a>
                );
              })}
              {page.website ? (
                <a
                  className="vc-social-btn"
                  href={page.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Web sitesi"
                  aria-label="Web sitesi">
                  <IconGlobe className="vc-social-icon" />
                </a>
              ) : null}
            </nav>
          ) : null}
        </div>
      </header>

      {/* ========================================================= İLETİŞİM */}
      {/*
        ⚠️ KAPAĞIN ÜSTÜNE BİNMİYOR. Önce negatif üst boşlukla kapağa taşırılmıştı;
        başlıkla çakışıyor, iki blok birbirine giriyordu. Artık kapak biter, boşluk
        gelir, kartlar başlar.
      */}
      <div className="vc-wrap">
        <section className="vc-contact" aria-label="İletişim">
          {page.phone ? (
            <a className="vc-contact-card" href={`tel:${page.phone}`}>
              <span className="vc-contact-icon">
                <IconPhone className="vc-ci" />
              </span>
              <span className="vc-contact-body">
                <span className="vc-contact-label">Telefon</span>
                {/* Numara METİN olarak da yazılı: masaüstünde tel: tıklanamaz. */}
                <span className="vc-contact-value">{formatPhone(page.phone)}</span>
              </span>
            </a>
          ) : null}

          {page.whatsapp ? (
            <a
              className="vc-contact-card"
              href={`https://wa.me/${page.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer">
              <span className="vc-contact-icon vc-icon-wa">
                <IconWhatsApp className="vc-ci" />
              </span>
              <span className="vc-contact-body">
                <span className="vc-contact-label">WhatsApp</span>
                <span className="vc-contact-value">{formatPhone(page.whatsapp)}</span>
              </span>
            </a>
          ) : null}

          {page.email ? (
            <a className="vc-contact-card" href={`mailto:${page.email}`}>
              <span className="vc-contact-icon">
                <IconMail className="vc-ci" />
              </span>
              <span className="vc-contact-body">
                <span className="vc-contact-label">E-posta</span>
                <span className="vc-contact-value">{page.email}</span>
              </span>
            </a>
          ) : null}

          {page.address || page.city ? (
            <a
              className="vc-contact-card"
              href={mapsUrl(page)}
              target="_blank"
              rel="noopener noreferrer">
              <span className="vc-contact-icon">
                <IconPin className="vc-ci" />
              </span>
              <span className="vc-contact-body">
                <span className="vc-contact-label">Yol tarifi</span>
                <span className="vc-contact-value">Haritada aç</span>
              </span>
            </a>
          ) : null}
        </section>

        {/* ====================================================== İKİ SÜTUN */}
        <div className="vc-grid">
          <aside className="vc-col vc-col-side">
            {/*
              ⚠️ ADRES, "HAKKIMIZDA"NIN ÜSTÜNDE (İSTEK: Ahmet, 20.08.2026).
              Yerel bir işletme sayfasında en sık sorulan şey "nerede, nasıl giderim,
              park var mı"; tanıtım metni bu kararı destekleyen ikinci bilgi.
            */}
            {page.address || page.directions ? (
              <section className="vc-block">
                <h2 className="vc-h2">Adres ve ulaşım</h2>
                {page.address ? <p className="vc-text vc-strong">{page.address}</p> : null}
                {konum ? <p className="vc-text vc-muted">{konum}</p> : null}
                {page.directions ? <p className="vc-text">{page.directions}</p> : null}
                <a
                  className="vc-btn-solid"
                  href={mapsUrl(page)}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconPin className="vc-btn-icon" />
                  Haritada görüntüle
                </a>
              </section>
            ) : null}

            {page.about ? (
              <section className="vc-block">
                <h2 className="vc-h2">Hakkımızda</h2>
                {page.about
                  .split('\n')
                  .filter(Boolean)
                  .map((p, i) => (
                    <p key={i} className="vc-text">
                      {p}
                    </p>
                  ))}
              </section>
            ) : null}

            <section className="vc-block vc-cta">
              <h2 className="vc-h2">Veterito&apos;da bul</h2>
              <p className="vc-text">
                Sağlık kaydı, aşı takvimi ve klinikle mesajlaşma için Veterito uygulamasını
                kullanabilirsin.
              </p>
            </section>
          </aside>

          {/* -------------------------------------------------------- VİTRİN */}
          <main className="vc-col vc-col-main">
            {vitrinVar ? (
              <section className="vc-showcase">
                <div className="vc-tabs" role="tablist" aria-label="Klinik vitrini">
                  {staff.length > 0 ? (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={aktifSekme === 'staff'}
                      className={`vc-tab${aktifSekme === 'staff' ? ' vc-tab-on' : ''}`}
                      onClick={() => setSekme('staff')}>
                      Çalışanlarımız
                      <span className="vc-tab-count">{staff.length}</span>
                    </button>
                  ) : null}
                  {galeriSayisi > 0 ? (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={aktifSekme === 'gallery'}
                      className={`vc-tab${aktifSekme === 'gallery' ? ' vc-tab-on' : ''}`}
                      onClick={() => setSekme('gallery')}>
                      Foto galeri
                      <span className="vc-tab-count">{galeriSayisi}</span>
                    </button>
                  ) : null}
                  {mesaiVar ? (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={aktifSekme === 'hours'}
                      className={`vc-tab${aktifSekme === 'hours' ? ' vc-tab-on' : ''}`}
                      onClick={() => setSekme('hours')}>
                      Mesai saatleri
                      {specialHours.length > 0 ? (
                        <span className="vc-tab-count">{specialHours.length}</span>
                      ) : null}
                    </button>
                  ) : null}
                </div>

                {aktifSekme === 'staff' ? (
                  <div className="vc-panel" role="tabpanel">
                    <div className="vc-staff-grid">
                      {staff.map((k) => (
                        <StaffCard
                          key={k.user_id}
                          member={k}
                          photo={media.staff[k.user_id]}
                          onOpen={() => setSecilenKisi(k)}
                        />
                      ))}
                    </div>
                    {/* ⚠️ BEYAN OLDUĞU YAZIYOR: platform diploma doğrulaması yapmıyor
                        (ürün briefi §4.4.2c). Doğrulanmış gibi göstermek yanıltıcı olurdu. */}
                    <p className="vc-note">
                      Eğitim ve ünvan bilgileri kliniğin beyanıdır; platform belge doğrulaması
                      yapmaz.
                    </p>
                  </div>
                ) : aktifSekme === 'gallery' ? (
                  <div className="vc-panel" role="tabpanel">
                    <div className="vc-gallery-grid">
                      {media.gallery.map((g, i) => (
                        <button
                          key={g.id}
                          type="button"
                          className="vc-thumb"
                          onClick={() => setLightbox(i)}
                          aria-label={g.caption ?? `Fotoğraf ${i + 1} — büyüt`}>
                          <img src={g.url} alt={g.caption ?? ''} loading="lazy" />
                          <span className="vc-thumb-veil" aria-hidden="true">
                            <IconZoom className="vc-thumb-zoom" />
                          </span>
                          {g.caption ? <span className="vc-thumb-caption">{g.caption}</span> : null}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="vc-panel" role="tabpanel">
                    <table className="vc-hours">
                      <tbody>
                        {GUNLER.map((ad, gun) => {
                          const kayit = hours.find((h) => h.weekday === gun);
                          const bugun = new Date().getDay() === gun;
                          return (
                            <tr key={gun} className={bugun ? 'vc-hours-today' : undefined}>
                              <th scope="row">
                                {ad}
                                {bugun ? <span className="vc-hours-badge">bugün</span> : null}
                              </th>
                              <td>{saatMetni(kayit)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    {specialHours.length > 0 ? (
                      <>
                        {/* ÖZEL GÜNLER HAFTALIK DÜZENİ EZER. Bayram ya da bakım günü
                            gibi istisnalar ayrı listeleniyor; üstteki tabloya
                            karıştırmak, hangi kuralın geçerli olduğunu belirsizleştirirdi. */}
                        <h3 className="vc-hours-title">Özel günler</h3>
                        <ul className="vc-hours-special">
                          {specialHours.map((o) => (
                            <li key={o.special_date}>
                              <span className="vc-hours-date">{tarihMetni(o.special_date)}</span>
                              <span className="vc-hours-label">{o.label}</span>
                              <span className="vc-hours-value">{saatMetni(o)}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}

                    <p className="vc-note">
                      Saatler kliniğin beyanıdır. Yola çıkmadan önce, özellikle acil bir
                      durumda, telefonla teyit etmenizi öneririz.
                    </p>
                  </div>
                )}
              </section>
            ) : null}
          </main>
        </div>
      </div>

      {/* ====================================================== KİŞİ KARTI */}
      {secilenKisi ? (
        <Modal title={secilenKisi.display_name} onClose={() => setSecilenKisi(null)}>
          <div className="vc-person">
            <div className="vc-person-photo">
              {media.staff[secilenKisi.user_id] ? (
                <img src={media.staff[secilenKisi.user_id]} alt={secilenKisi.display_name} />
              ) : (
                <span className="vc-staff-initials">{initials(secilenKisi.display_name)}</span>
              )}
            </div>
            <div className="vc-person-body">
              {secilenKisi.title ? <p className="vc-person-title">{secilenKisi.title}</p> : null}
              <h3 className="vc-person-name">{secilenKisi.display_name}</h3>
              {secilenKisi.education ? (
                <p className="vc-person-edu">{secilenKisi.education}</p>
              ) : null}
              {secilenKisi.bio ? <p className="vc-person-bio">{secilenKisi.bio}</p> : null}
            </div>
          </div>
        </Modal>
      ) : null}

      {/* ======================================================= IŞIK KUTUSU */}
      {lightbox !== null && media.gallery[lightbox] ? (
        <div
          className="vc-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Fotoğraf"
          onClick={() => setLightbox(null)}>
          <button
            type="button"
            className="vc-lb-close"
            onClick={() => setLightbox(null)}
            aria-label="Kapat">
            <IconClose className="vc-lb-icon" />
          </button>

          {galeriSayisi > 1 ? (
            <button
              type="button"
              className="vc-lb-nav vc-lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                kaydir(-1);
              }}
              aria-label="Önceki fotoğraf">
              <IconPrev className="vc-lb-icon" />
            </button>
          ) : null}

          <figure className="vc-lb-figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={media.gallery[lightbox].url}
              alt={media.gallery[lightbox].caption ?? `Fotoğraf ${lightbox + 1}`}
            />
            <figcaption className="vc-lb-caption">
              {media.gallery[lightbox].caption ? (
                <span>{media.gallery[lightbox].caption}</span>
              ) : null}
              {galeriSayisi > 1 ? (
                <span className="vc-lb-count">
                  {lightbox + 1} / {galeriSayisi}
                </span>
              ) : null}
            </figcaption>
          </figure>

          {galeriSayisi > 1 ? (
            <button
              type="button"
              className="vc-lb-nav vc-lb-next"
              onClick={(e) => {
                e.stopPropagation();
                kaydir(1);
              }}
              aria-label="Sonraki fotoğraf">
              <IconNext className="vc-lb-icon" />
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/**
 * Kadro kartı. Tıklanınca kişinin tam kartı açılıyor.
 * ⚠️ TAMAMI DÜĞME: kartın bir köşesini tıklanabilir yapmak, dokunmatikte hedefi
 * küçültür. Kartın zaten tek bir eylemi var — kişiyi açmak.
 */
function StaffCard({
  member,
  photo,
  onOpen,
}: {
  member: StaffMember;
  photo?: string;
  onOpen: () => void;
}) {
  return (
    <button type="button" className="vc-staff" onClick={onOpen}>
      <span className="vc-staff-photo">
        {photo ? (
          <img src={photo} alt={member.display_name} loading="lazy" />
        ) : (
          // ⚠️ FOTOĞRAF OPSİYONEL: yoksa baş harfler. Boş bir kutu, kartı bozuk gösterirdi.
          <span className="vc-staff-initials">{initials(member.display_name)}</span>
        )}
      </span>
      <span className="vc-staff-body">
        {member.title ? <span className="vc-staff-title">{member.title}</span> : null}
        <span className="vc-staff-name">{member.display_name}</span>
        {member.education ? <span className="vc-staff-edu">{member.education}</span> : null}
      </span>
      <span className="vc-staff-more">Profili gör</span>
    </button>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="vc-modal" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="vc-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="vc-modal-close" onClick={onClose} aria-label="Kapat">
          <IconClose className="vc-lb-icon" />
        </button>
        {children}
      </div>
    </div>
  );
}

/**
 * Sayfa iskeleti — veri gelene kadar.
 * ⚠️ GERÇEK DÜZENİ TAKLİT EDİYOR (kapak + kartlar): rastgele kutular, içerik gelince
 * sayfanın zıplamasına yol açardı.
 * ⚠️ KAYAN PARLAMA YOK, YUMUŞAK NEFES VAR. Sağdan sola geçen bant büyük yüzeylerde
 * göz alıyordu; yerini yerinde duran, çok düşük kontrastlı bir soluklaşma aldı.
 */
function PageSkeleton() {
  return (
    <div className="vc" aria-busy="true" aria-live="polite">
      <div className="vc-hero">
        <div className="vc-hero-cover vc-hero-cover-fallback" />
        <div className="vc-hero-scrim" />
        <div className="vc-hero-inner">
          <div className="vc-hero-main">
            <div className="vc-hero-logo vc-pulse" />
            <div className="vc-hero-text">
              <div className="vc-sk vc-sk-title vc-pulse" />
              <div className="vc-sk vc-sk-line vc-pulse" />
            </div>
          </div>
        </div>
      </div>
      <div className="vc-wrap">
        <div className="vc-contact">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="vc-contact-card vc-pulse" style={{ height: 84 }} />
          ))}
        </div>
        <div className="vc-grid">
          <div className="vc-col">
            <div className="vc-block vc-pulse" style={{ height: 260 }} />
          </div>
          <div className="vc-col">
            <div className="vc-block vc-pulse" style={{ height: 420 }} />
          </div>
        </div>
      </div>
      <span className="vc-sr">Sayfa yükleniyor</span>
    </div>
  );
}
