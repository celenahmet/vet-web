import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { LegalBlocks } from '../components/legal/LegalBlocks';
import {
  LEGAL_CONTACT_EMAIL,
  findLegalDocumentByPath,
  getLegalDocument,
  legalLocale,
} from '../data/legal';
import NotFound from './NotFound';
import './Legal.css';

/**
 * Tek bir hukuki belgeyi çizer.
 *
 * ⚠️ HANGİ BELGE OLDUĞU ADRESTEN OKUNUYOR, ayrı bir rota bileşeni yazılmıyor. Sekiz
 * belge için sekiz dosya açmak, her metin değişikliğinde iki yeri güncelleme borcu
 * doğururdu. Adres eşlemesi `data/legal/index.ts` içinde tek yerde.
 *
 * ⚠️ ESKİ ADRESLER ÇALIŞMAYA DEVAM EDİYOR (`/deletion` gibi). Mağaza formlarına
 * verilmiş bir bağlantının kırılması, Google Play tarafında doğrudan red sebebidir.
 *
 * ⚠️ TANINMAYAN ADRES 404 VERİYOR, boş sayfa değil. Yanlış bir hukuki adres sessizce
 * boş açılırsa kullanıcı belgenin var olmadığını değil, bizim onu kaldırdığımızı sanır.
 */
const LegalDocumentPage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const locale = legalLocale(i18n.language);
  const document = findLegalDocumentByPath(location.pathname, locale);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!document) return <NotFound />;

  return (
    <div className="legal-page">
      <SEO
        title={document.title}
        description={document.summary}
        url={`https://veterito.com${document.slug}`}
      />

      <div className="legal-container container">
        <nav className="legal-breadcrumb" aria-label={t('legal_hub_title')}>
          <Link to="/legal">{t('legal_hub_title')}</Link>
          <span aria-hidden="true">/</span>
          <span>{document.title}</span>
        </nav>

        <article className="legal-content">
          <header className="legal-header">
            <h1>{document.title}</h1>
            <p className="legal-meta">
              {t('legal_effective_date')}: <time>{document.effectiveDate}</time>
            </p>
          </header>

          <div className="legal-body">
            <LegalBlocks blocks={document.intro} />

            {document.sections.map((section) => (
              <section key={`${section.number ?? ''}${section.title}`} className="legal-section">
                <h2 id={dilimle(section.title)}>
                  {section.number ? <span className="legal-num">{section.number}.</span> : null}
                  {section.title}
                </h2>
                <LegalBlocks blocks={section.blocks} />
              </section>
            ))}

            {document.closing ? <LegalBlocks blocks={document.closing} /> : null}
          </div>

          <footer className="legal-footer">
            <p>
              <strong>{t('legal_contact')}:</strong>{' '}
              <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>
            </p>

            {document.related.length > 0 ? (
              <div className="legal-related">
                <h3>{t('legal_related')}</h3>
                <ul>
                  {document.related.map((id) => {
                    const other = getLegalDocument(id, locale);
                    return (
                      <li key={id}>
                        <Link to={other.slug}>{other.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </footer>
        </article>
      </div>
    </div>
  );
};

/** Başlıktan bağlantı verilebilir bir kimlik üretir. Türkçe harfler katlanıyor. */
function dilimle(baslik: string): string {
  return baslik
    .toLocaleLowerCase('tr')
    .replace(/[çğıöşü]/g, (h) => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' })[h] ?? h)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default LegalDocumentPage;
