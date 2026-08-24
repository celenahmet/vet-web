import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { brandConfig } from '../config/brand';

const SITE = 'https://veterito.com';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
  /**
   * Arama motoru bu sayfayi indekslemesin. Tek bir adresi temsil etmeyen
   * sayfalar icin (404 gibi) zorunlu: aksi halde "bulunamadi" basligi arama
   * sonuclarina cikar. `follow` korunuyor, sayfadaki baglantilar izlensin.
   */
  noindex?: boolean;
}

export default function SEO({ title, description, name, type, image, url, noindex }: SEOProps) {
  const siteName = name || brandConfig.name;
  const pageTitle = `${title} | ${siteName}`;

  /**
   * ⚠️ CANONICAL ARTIK KENDILIGINDEN URETILIYOR (24.08.2026).
   *
   * Olculdu: sekiz sayfada canonical HIC yoktu (ana sayfa, ozellikler, klinikler,
   * hakkimizda, fiyatlandirma, evcil hayvanlar, indir, bulunamadi). Her sayfada
   * `url` yazmayi hatirlamak calismiyor; yeni sayfa acan kisi unutuyor. Varsayilan
   * artik bulunulan adres, `url` verildiginde o kazaniyor.
   *
   * ⚠️ SORGU DIZISI ATILIYOR. `/blog?kategori=Kedi` ile `/blog` ayni sayfa; her
   * parametre kombinasyonuna ayri canonical vermek, arama motoruna ayni icerigin
   * onlarca kopyasi varmis gibi gosterirdi.
   *
   * ⚠️ Takip eden egik cizgi de atiliyor: site haritasi ve prerender ciktisi
   * cizgisiz bicimi kullaniyor, ikisi ayrisirsa canonical kendi haritamizla
   * celisir.
   */
  const { pathname } = useLocation();
  const otoAdres = `${SITE}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;
  const kanonik = url ?? otoAdres;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      {noindex && <meta name='robots' content='noindex, follow' />}
      {/* ⚠️ Indekslenmeyen sayfaya canonical YAZILMIYOR: tek bir adresi temsil
          etmeyen sayfanin kendine isaret eden canonical'i yanlis bilgidir. */}
      {!noindex && <link rel="canonical" href={kanonik} />}
      
      {/* Open Graph tags for social media sharing */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}
      <meta property='og:url' content={kanonik} />
      <meta property='og:site_name' content={siteName} />

      {/* Twitter Card tags */}
      <meta name='twitter:creator' content={siteName} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  );
}
