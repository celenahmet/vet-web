import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_DOCUMENT_ORDER,
  getLegalDocuments,
  legalLocale,
} from '../data/legal';
import './Legal.css';

/**
 * `/legal` — tüm sözleşmelerin tek kapısı.
 *
 * ⚠️ TEK SAYFADA TOPLANMASININ SEBEBİ MAĞAZA DEĞİL, KULLANICI. Mağaza formları tek tek
 * adres istiyor (gizlilik, hesap silme) ve o adresler zaten var. Bu sayfa, "hangi
 * sözleşmeyi imzaladım" diye soran kullanıcının cevabı bulabileceği yer.
 *
 * ⚠️ ZORUNLU VE EK BELGELER AYRI BAŞLIKTA. Hepsi tek listede olsaydı, çocuk güvenliği
 * standartları gibi bilgilendirici bir metin, kabul ettiğiniz sözleşmelerle aynı
 * ağırlıkta görünürdü.
 */
const LegalHub = () => {
  const { t, i18n } = useTranslation();
  const locale = legalLocale(i18n.language);
  const documents = getLegalDocuments(locale);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sirali = LEGAL_DOCUMENT_ORDER.map((id) => documents[id]);
  const zorunlu = sirali.filter((belge) => belge.required);
  const ek = sirali.filter((belge) => !belge.required);

  return (
    <div className="legal-page">
      <SEO
        title={t('legal_hub_title')}
        description={t('legal_hub_desc')}
        url="https://veterito.com/legal"
      />

      <div className="legal-container container">
        <header className="legal-hub-header">
          <h1>{t('legal_hub_title')}</h1>
          <p>{t('legal_hub_desc')}</p>
        </header>

        <section className="legal-hub-group">
          <h2>{t('legal_hub_agreements')}</h2>
          <div className="legal-card-grid">
            {zorunlu.map((belge) => (
              <Link key={belge.id} to={belge.slug} className="legal-card">
                <h3>{belge.title}</h3>
                <p>{belge.summary}</p>
                <span className="legal-card-date">
                  {t('legal_effective_date')}: {belge.effectiveDate}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {ek.length > 0 ? (
          <section className="legal-hub-group">
            <h2>{t('legal_hub_additional')}</h2>
            <div className="legal-card-grid">
              {ek.map((belge) => (
                <Link key={belge.id} to={belge.slug} className="legal-card">
                  <h3>{belge.title}</h3>
                  <p>{belge.summary}</p>
                  <span className="legal-card-date">
                    {t('legal_effective_date')}: {belge.effectiveDate}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <aside className="legal-callout legal-hub-contact">
          {t('legal_hub_contact')}{' '}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>
        </aside>
      </div>
    </div>
  );
};

export default LegalHub;
