import { lazy, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  fetchClinicMedia,
  fetchClinicPage,
  fetchClinicStaff,
  formatPhone,
  initials,
  mapsUrl,
  socialLabel,
  socialUrl,
  type ClinicMedia,
  type ClinicPage as ClinicPageData,
  type StaffMember,
} from '../lib/clinicPage';
import './ClinicPage.css';

const NotFound = lazy(() => import('./NotFound'));

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
  const [media, setMedia] = useState<ClinicMedia>({ logo: null, cover: null, gallery: [], staff: {} });
  const [loading, setLoading] = useState(true);
  // Görseller ayrı yükleniyor: iskelet gösterip metni bekletmiyoruz.
  const [mediaLoading, setMediaLoading] = useState(true);

  // Ayrı pencereler: galeri ve ekip (İSTEK: Ahmet, 20.08.2026).
  const [modal, setModal] = useState<'gallery' | 'staff' | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

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
            .then((m) => {
              if (iptal) return;
              setMedia(m);
              setMediaLoading(false);
            })
            .catch((e) => {
              console.error('[clinicPage] görseller alınamadı:', e);
              if (!iptal) setMediaLoading(false);
            });
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

  // Modal açıkken arka planın kaymaması için gövde kilitleniyor.
  useEffect(() => {
    if (!modal && lightbox === null) return;
    const onceki = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = onceki;
    };
  }, [modal, lightbox]);

  // Esc ile kapanma: modalın tek çıkışı düğme olmamalı.
  useEffect(() => {
    const kapat = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (lightbox !== null) setLightbox(null);
      else if (modal) setModal(null);
    };
    window.addEventListener('keydown', kapat);
    return () => window.removeEventListener('keydown', kapat);
  }, [modal, lightbox]);

  if (!bizeAit) return <NotFound />;
  /**
   * ⚠️ TAM EKRAN "Yükleniyor" YAZISI YERİNE İSKELET. Boş bir sayfada tek satır yazı,
   * kullanıcıya "bir şey olmuyor" hissi veriyor; iskelet ise sayfanın nereye
   * oturacağını gösteriyor ve bekleme kısa görünüyor.
   */
  if (loading) return <PageSkeleton />;
  if (!page) return <NotFound />;

  const konum = [page.district, page.city].filter(Boolean).join(' / ');
  const gorunenGaleri = media.gallery.slice(0, 6);
  const gorunenKadro = staff.slice(0, 4);

  return (
    <div className="vc">
      {/* ============================================================ ÜST */}
      <header className="vc-hero">
        {media.cover ? (
          <img className="vc-hero-cover" src={media.cover} alt="" aria-hidden="true" />
        ) : (
          // Görseller gelene kadar da marka rengi duruyor: boş beyaz alan yok.
          <div
            className={`vc-hero-cover vc-hero-cover-fallback${mediaLoading ? ' vc-shimmer' : ''}`}
            aria-hidden="true"
          />
        )}
        <div className="vc-hero-scrim" aria-hidden="true" />

        <div className="vc-hero-body">
          <div className="vc-hero-logo">
            {media.logo ? (
              <img src={media.logo} alt={`${page.name} logosu`} />
            ) : (
              <span className="vc-hero-logo-fallback">{initials(page.name)}</span>
            )}
          </div>

          <div className="vc-hero-text">
            <h1 className="vc-title">
              {page.name}
              <span className="vc-verified" title="Doğrulanmış klinik" aria-label="Doğrulanmış klinik">
                ✓
              </span>
            </h1>
            {page.tagline ? <p className="vc-tagline">{page.tagline}</p> : null}
            <div className="vc-hero-chips">
              {konum ? <span className="vc-chip">{konum}</span> : null}
              {/* Puan yalnız oy varsa: "0,0 (0)" güven vermez. */}
              {page.rating_count && page.rating_count > 0 ? (
                <span className="vc-chip vc-chip-gold">
                  ★ {Number(page.rating_avg ?? 0).toFixed(1)} ({page.rating_count})
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* ======================================================= İLETİŞİM */}
      {/* Sayfanın en çok tıklanan yeri — kapağın hemen altında, kartlar hâlinde. */}
      <div className="vc-wrap">
        <section className="vc-contact">
          {page.phone ? (
            <a className="vc-contact-card" href={`tel:${page.phone}`}>
              <span className="vc-contact-icon" aria-hidden="true">☎</span>
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
              <span className="vc-contact-icon vc-icon-wa" aria-hidden="true">✆</span>
              <span className="vc-contact-body">
                <span className="vc-contact-label">WhatsApp</span>
                <span className="vc-contact-value">{formatPhone(page.whatsapp)}</span>
              </span>
            </a>
          ) : null}

          {page.email ? (
            <a className="vc-contact-card" href={`mailto:${page.email}`}>
              <span className="vc-contact-icon" aria-hidden="true">✉</span>
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
              <span className="vc-contact-icon" aria-hidden="true">◎</span>
              <span className="vc-contact-body">
                <span className="vc-contact-label">Yol tarifi</span>
                <span className="vc-contact-value">Haritada aç</span>
              </span>
            </a>
          ) : null}
        </section>

        {/* ==================================================== İKİ SÜTUN */}
        <div className="vc-grid">
          <div className="vc-col">
            {page.about ? (
              <section className="vc-block">
                <h2 className="vc-h2">Hakkımızda</h2>
                {page.about.split('\n').filter(Boolean).map((p, i) => (
                  <p key={i} className="vc-text">{p}</p>
                ))}
              </section>
            ) : null}

            {page.address || page.directions ? (
              <section className="vc-block">
                <h2 className="vc-h2">Adres ve ulaşım</h2>
                {page.address ? <p className="vc-text vc-strong">{page.address}</p> : null}
                {konum ? <p className="vc-text vc-muted">{konum}</p> : null}
                {page.directions ? <p className="vc-text">{page.directions}</p> : null}
                <a
                  className="vc-btn-ghost"
                  href={mapsUrl(page)}
                  target="_blank"
                  rel="noopener noreferrer">
                  ◎ Haritada görüntüle
                </a>
              </section>
            ) : null}
          </div>

          <div className="vc-col">
            {/* ------------------------------------------------ EKİBİMİZ */}
            {staff.length > 0 ? (
              <section className="vc-block">
                <div className="vc-block-head">
                  <h2 className="vc-h2">Çalışanlarımız</h2>
                  {/* İSTEK: ekip AYRI bir düğmeyle açılsın. */}
                  {staff.length > gorunenKadro.length ? (
                    <button type="button" className="vc-btn-ghost" onClick={() => setModal('staff')}>
                      Tümünü gör ({staff.length})
                    </button>
                  ) : null}
                </div>

                <div className="vc-staff-row">
                  {gorunenKadro.map((k) => (
                    <StaffCard key={k.user_id} member={k} photo={media.staff[k.user_id]} />
                  ))}
                </div>

                {/* ⚠️ BEYAN OLDUĞU YAZIYOR: platform diploma doğrulaması yapmıyor
                    (ürün briefi §4.4.2c). Doğrulanmış gibi göstermek yanıltıcı olurdu. */}
                <p className="vc-note">
                  Eğitim ve ünvan bilgileri kliniğin beyanıdır; platform belge doğrulaması yapmaz.
                </p>
              </section>
            ) : null}

            {/* -------------------------------------------- FOTO GALERİ */}
            {media.gallery.length > 0 ? (
              <section className="vc-block">
                <div className="vc-block-head">
                  <h2 className="vc-h2">Foto galeri</h2>
                  <button type="button" className="vc-btn-ghost" onClick={() => setModal('gallery')}>
                    Tüm fotoğraflar ({media.gallery.length})
                  </button>
                </div>
                <div className="vc-gallery-row">
                  {gorunenGaleri.map((g, i) => (
                    <button
                      key={g.id}
                      type="button"
                      className="vc-thumb"
                      onClick={() => setLightbox(i)}
                      aria-label={g.caption ?? 'Fotoğrafı büyüt'}>
                      <img src={g.url} alt={g.caption ?? ''} loading="lazy" />
                    </button>
                  ))}
                </div>
              </section>
            ) : null}

            {/* ------------------------------------------ SOSYAL + İNDİR */}
            {sosyal.length > 0 || page.website ? (
              <section className="vc-block">
                <h2 className="vc-h2">Bizi takip edin</h2>
                <div className="vc-social">
                  {sosyal.map((s) => (
                    <a
                      key={s.key}
                      className="vc-social-item"
                      href={socialUrl[s.key](s.value)}
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="vc-social-dot" aria-hidden="true">
                        {socialLabel[s.key][0]}
                      </span>
                      {socialLabel[s.key]}
                    </a>
                  ))}
                  {page.website ? (
                    <a
                      className="vc-social-item"
                      href={page.website}
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="vc-social-dot" aria-hidden="true">W</span>
                      Web sitesi
                    </a>
                  ) : null}
                </div>
              </section>
            ) : null}

            <section className="vc-block vc-cta">
              <h2 className="vc-h2">Veterito&apos;da bul</h2>
              <p className="vc-text">
                Sağlık kaydı, aşı takvimi ve mesajlaşma için Veterito uygulamasını kullanabilirsin.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* ========================================================= MODALLAR */}
      {modal === 'staff' ? (
        <Modal title="Çalışanlarımız" onClose={() => setModal(null)}>
          <div className="vc-staff-grid">
            {staff.map((k) => (
              <StaffCard key={k.user_id} member={k} photo={media.staff[k.user_id]} detayli />
            ))}
          </div>
        </Modal>
      ) : null}

      {modal === 'gallery' ? (
        <Modal title="Foto galeri" onClose={() => setModal(null)}>
          <div className="vc-gallery-grid">
            {media.gallery.map((g, i) => (
              <button
                key={g.id}
                type="button"
                className="vc-thumb vc-thumb-lg"
                onClick={() => setLightbox(i)}
                aria-label={g.caption ?? 'Fotoğrafı büyüt'}>
                <img src={g.url} alt={g.caption ?? ''} loading="lazy" />
                {g.caption ? <span className="vc-thumb-caption">{g.caption}</span> : null}
              </button>
            ))}
          </div>
        </Modal>
      ) : null}

      {lightbox !== null && media.gallery[lightbox] ? (
        <div className="vc-lightbox" onClick={() => setLightbox(null)} role="presentation">
          <button type="button" className="vc-lightbox-close" aria-label="Kapat">×</button>
          <img
            src={media.gallery[lightbox].url}
            alt={media.gallery[lightbox].caption ?? ''}
            onClick={(e) => e.stopPropagation()}
          />
          {media.gallery[lightbox].caption ? (
            <p className="vc-lightbox-caption">{media.gallery[lightbox].caption}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/** Kadro kartı. `detayli` modalda: tanıtım metni de gösteriliyor. */
function StaffCard({
  member,
  photo,
  detayli = false,
}: {
  member: StaffMember;
  photo?: string;
  detayli?: boolean;
}) {
  return (
    <article className={`vc-staff${detayli ? ' vc-staff-detail' : ''}`}>
      <div className="vc-staff-photo">
        {photo ? (
          <img src={photo} alt={member.display_name} loading="lazy" />
        ) : (
          // ⚠️ FOTOĞRAF OPSİYONEL: yoksa baş harfler. Boş bir kutu, kartı bozuk gösterirdi.
          <span className="vc-staff-initials">{initials(member.display_name)}</span>
        )}
      </div>
      {member.title ? <p className="vc-staff-title">{member.title}</p> : null}
      <h3 className="vc-staff-name">{member.display_name}</h3>
      {member.education ? <p className="vc-staff-edu">{member.education}</p> : null}
      {member.bio ? <p className="vc-staff-bio">{member.bio}</p> : null}
    </article>
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
        <div className="vc-modal-head">
          <h2 className="vc-h2">{title}</h2>
          <button type="button" className="vc-modal-close" onClick={onClose} aria-label="Kapat">
            ×
          </button>
        </div>
        <div className="vc-modal-body">{children}</div>
      </div>
    </div>
  );
}

/**
 * Sayfa iskeleti — veri gelene kadar.
 * ⚠️ GERÇEK DÜZENİ TAKLİT EDİYOR (kapak + kartlar): rastgele kutular, içerik gelince
 * sayfanın zıplamasına yol açardı.
 */
function PageSkeleton() {
  return (
    <div className="vc" aria-busy="true" aria-live="polite">
      <div className="vc-hero">
        <div className="vc-hero-cover vc-hero-cover-fallback vc-shimmer" />
        <div className="vc-hero-scrim" />
        <div className="vc-hero-body">
          <div className="vc-hero-logo vc-shimmer" />
          <div className="vc-hero-text">
            <div className="vc-sk vc-sk-title" />
            <div className="vc-sk vc-sk-line" />
          </div>
        </div>
      </div>
      <div className="vc-wrap">
        <div className="vc-contact">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="vc-contact-card vc-shimmer" style={{ height: 80 }} />
          ))}
        </div>
        <div className="vc-grid">
          <div className="vc-col">
            <div className="vc-block vc-shimmer" style={{ height: 220 }} />
          </div>
          <div className="vc-col">
            <div className="vc-block vc-shimmer" style={{ height: 320 }} />
          </div>
        </div>
      </div>
      <span className="vc-sr">Sayfa yükleniyor</span>
    </div>
  );
}
