import { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  fetchClinicPage,
  fetchClinicStaff,
  formatPhone,
  mapsUrl,
  socialLabel,
  socialUrl,
  type ClinicPage as ClinicPageData,
  type StaffMember,
} from '../lib/clinicPage';
import './ClinicPage.css';

const NotFound = lazy(() => import('./NotFound'));

/**
 * `veterito.com/@kullaniciadi` — kliniğin herkese açık vitrini.
 *
 * ⚠️ BÖLÜM YOKSA HİÇ ÇİZİLMİYOR. Kliniğin girmediği alan için başlık bırakmak sayfayı
 * yarım gösterir; yarım bir vitrin kliniği eksik gösterir. Her bölüm kendi verisi
 * varsa var.
 *
 * ⚠️ RANDEVU / ÖDEME DÜĞMESİ YOK. Para platformdan geçmiyor (Anayasa §1.6/1).
 * İletişim kanalları var, işlem yok.
 *
 * ⚠️ SEO SINIRI: bu bir Vite SPA ve içerik istemcide çiziliyor. `noindex` etiketi
 * çalışıyor (aşağıda) ama tam SEO için sayfanın ön-üretimi (prerender/SSR) gerekir.
 * Bugün Google JS çalıştırıyor, yine de kritik sayfalar için ön-üretim önerilir.
 */
export default function ClinicPage() {
  const { handle } = useParams<{ handle: string }>();
  const raw = handle ?? '';
  /**
   * ⚠️ '@' İLE BAŞLAMAYAN ADRES BU SAYFAYA AİT DEĞİL. Rota tüm segmenti yakalıyor
   * (react-router v6 parçalı parametre desteklemiyor), o yüzden ayrımı burada
   * yapıyoruz. Aksi halde /rastgele gibi bir adres "klinik aranıyor" diye
   * gereksiz bir istek atardı.
   */
  const bizeAit = raw.startsWith('@');
  const username = raw.replace(/^@/, '');

  const [page, setPage] = useState<ClinicPageData | null>(null);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bizeAit) {
      setLoading(false);
      return;
    }
    let iptal = false;
    setLoading(true);
    fetchClinicPage(username)
      .then(async (p) => {
        if (iptal) return;
        setPage(p);
        if (p) {
          const ekip = await fetchClinicStaff(p.clinic_id);
          if (!iptal) setStaff(ekip);
        }
      })
      .finally(() => {
        if (!iptal) setLoading(false);
      });
    // ⚠️ İPTAL BAYRAĞI: kullanıcı hızlıca başka bir adrese geçerse eski isteğin
    // yanıtı yeni sayfanın üstüne yazardı.
    return () => {
      iptal = true;
    };
  }, [username, bizeAit]);

  // Arama motoru etiketi: `is_indexable` false ise indekslenmiyor. Sayfa yokken de
  // noindex — 404 içeriği aramalarda çıkmasın.
  useEffect(() => {
    const etiket = document.createElement('meta');
    etiket.name = 'robots';
    etiket.content = page?.is_indexable ? 'index, follow' : 'noindex, nofollow';
    document.head.appendChild(etiket);
    if (page) {
      document.title = `${page.name} · Veterito`;
    }
    return () => {
      etiket.remove();
    };
  }, [page]);

  if (!bizeAit) return <NotFound />;

  if (loading) {
    return <div className="clinic-loading">Yükleniyor…</div>;
  }

  // Yayında olmayan ya da olmayan kullanıcı adı: normal 404.
  if (!page) return <NotFound />;

  const konum = [page.district, page.city].filter(Boolean).join(' / ');
  const sosyal = (Object.keys(socialUrl) as (keyof typeof socialUrl)[])
    .map((k) => ({ key: k, value: page[k] }))
    .filter((s): s is { key: keyof typeof socialUrl; value: string } => !!s.value);

  return (
    <div className="clinic-page">
      {/* ---------------------------------------------------------- BAŞLIK */}
      <header className="clinic-hero">
        <div className="clinic-hero-inner">
          <h1 className="clinic-name">{page.name}</h1>
          {page.tagline ? <p className="clinic-tagline">{page.tagline}</p> : null}

          <div className="clinic-meta">
            {konum ? <span className="clinic-chip">{konum}</span> : null}
            {/* Puan yalnız oy varsa: "0,0 (0)" güven vermez, boşluk bırakmak daha dürüst. */}
            {page.rating_count && page.rating_count > 0 ? (
              <span className="clinic-chip clinic-chip-rating">
                ★ {Number(page.rating_avg ?? 0).toFixed(1)}
                <span className="clinic-rating-count"> ({page.rating_count})</span>
              </span>
            ) : null}
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------- İLETİŞİM */}
      {/* Sayfanın en çok tıklanan yeri: katlamanın hemen altında. */}
      <section className="clinic-section clinic-contact">
        <div className="clinic-actions">
          {page.phone ? (
            <a className="clinic-action clinic-action-primary" href={`tel:${page.phone}`}>
              <span className="clinic-action-label">Ara</span>
              {/* ⚠️ NUMARA METİN OLARAK DA YAZILI: masaüstünde tel: tıklanamaz,
                  kullanıcı numarayı görüp elle arayabilmeli. */}
              <span className="clinic-action-value">{formatPhone(page.phone)}</span>
            </a>
          ) : null}

          {page.whatsapp ? (
            <a
              className="clinic-action clinic-action-whatsapp"
              href={`https://wa.me/${page.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer">
              <span className="clinic-action-label">WhatsApp</span>
              <span className="clinic-action-value">{formatPhone(page.whatsapp)}</span>
            </a>
          ) : null}

          {page.email ? (
            <a className="clinic-action" href={`mailto:${page.email}`}>
              <span className="clinic-action-label">E-posta</span>
              <span className="clinic-action-value">{page.email}</span>
            </a>
          ) : null}

          {page.address || page.city ? (
            <a
              className="clinic-action"
              href={mapsUrl(page)}
              target="_blank"
              rel="noopener noreferrer">
              <span className="clinic-action-label">Yol tarifi</span>
              <span className="clinic-action-value">Haritada aç</span>
            </a>
          ) : null}
        </div>
      </section>

      {/* -------------------------------------------------------- HAKKINDA */}
      {page.about ? (
        <section className="clinic-section">
          <h2 className="clinic-h2">Hakkımızda</h2>
          <p className="clinic-text">{page.about}</p>
        </section>
      ) : null}

      {/* ---------------------------------------------------------- EKİBİMİZ */}
      {staff.length > 0 ? (
        <section className="clinic-section">
          <h2 className="clinic-h2">Ekibimiz</h2>
          <div className="clinic-staff">
            {staff.map((k) => (
              <article key={k.user_id} className="clinic-staff-card">
                <h3 className="clinic-staff-name">{k.display_name}</h3>
                {k.title ? <p className="clinic-staff-title">{k.title}</p> : null}
                {k.education ? <p className="clinic-staff-edu">{k.education}</p> : null}
                {k.bio ? <p className="clinic-staff-bio">{k.bio}</p> : null}
              </article>
            ))}
          </div>
          {/* ⚠️ BEYAN OLDUĞU YAZIYOR: platform diploma doğrulaması yapmıyor
              (ürün briefi §4.4.2c). Doğrulanmış gibi göstermek yanıltıcı olurdu. */}
          <p className="clinic-note">
            Eğitim bilgileri kliniğin beyanıdır; platform belge doğrulaması yapmaz.
          </p>
        </section>
      ) : null}

      {/* ------------------------------------------------------------- ADRES */}
      {page.address || page.directions ? (
        <section className="clinic-section">
          <h2 className="clinic-h2">Adres ve ulaşım</h2>
          {page.address ? <p className="clinic-text">{page.address}</p> : null}
          {konum ? <p className="clinic-text clinic-muted">{konum}</p> : null}
          {page.directions ? <p className="clinic-text">{page.directions}</p> : null}
        </section>
      ) : null}

      {/* ------------------------------------------------------ SOSYAL MEDYA */}
      {sosyal.length > 0 || page.website ? (
        <section className="clinic-section">
          <h2 className="clinic-h2">Bizi takip edin</h2>
          <div className="clinic-social">
            {sosyal.map((s) => (
              <a
                key={s.key}
                className="clinic-social-link"
                href={socialUrl[s.key](s.value)}
                target="_blank"
                rel="noopener noreferrer">
                {socialLabel[s.key]}
              </a>
            ))}
            {page.website ? (
              <a
                className="clinic-social-link"
                href={page.website}
                target="_blank"
                rel="noopener noreferrer">
                Web sitesi
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* ------------------------------------------------------------ KAPANIŞ */}
      <section className="clinic-section clinic-cta">
        <h2 className="clinic-h2">Veterito&apos;da bul</h2>
        <p className="clinic-text">
          Randevu, sağlık kaydı ve mesajlaşma için Veterito uygulamasını kullanabilirsin.
        </p>
      </section>
    </div>
  );
}
