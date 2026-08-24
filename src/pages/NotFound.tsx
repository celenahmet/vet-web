import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './NotFound.css';

/**
 * BULUNAMADI SAYFASI
 *
 * ⚠️ METIN TURKCELESTIRILDI (24.08.2026). Sayfa bastan asaga Ingilizceydi
 * ("Page Not Found", "Oops! It looks like...", "Return Home") ve dil secimini
 * hic dinlemiyordu; sitenin varsayilan dili Turkce. Metinler artik `i18n`
 * uzerinden geliyor, yani TR/EN dugmesiyle birlikte degisiyor.
 *
 * ⚠️ `noindex` EKLENDI. Bu sayfa tek bir adrese ait degil; butun bulunamayan
 * adresler icin cizilir. Indekslenmesine izin vermek, arama sonuclarinda
 * "Sayfa bulunamadi" baslikli bir kayit demek.
 *
 * ⚠️ Sunucu tarafi karsiligi ayri: `scripts/prerender.mjs` ayni metinlerle bir
 * `dist/404.html` uretiyor ve Vercel onu GERCEK 404 durum koduyla veriyor. Bu
 * bilesen yalniz uygulama icinde gezinirken devreye giriyor. Ikisi de gerekli:
 * biri tarayici botunun gordugu durum kodu, digeri kullanicinin gordugu ekran.
 */
const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <SEO
        title={t('nf_title')}
        description={t('nf_seo_desc')}
        noindex
      />
      <div className="container text-center">
        <h1 className="error-code">404</h1>
        <h2>{t('nf_title')}</h2>
        <p className="subtitle mx-auto">{t('nf_subtitle')}</p>
        <Link to="/" className="btn btn-primary mt-24 return-btn">
          <ArrowLeft size={18} /> {t('nf_home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
