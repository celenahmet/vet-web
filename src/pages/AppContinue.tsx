import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import logoUrl from '../assets/logo.webp';
import logoKoyuUrl from '../assets/logo-koyu.webp';
import { brandConfig } from '../config/brand';
import './AppContinue.css';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const ALLOWED_KINDS = new Set([
  'pet',
  'announcement',
  'post',
  'profile',
  'messages',
  'clinic',
  'breed',
  'appointment',
]);

export default function AppContinue() {
  const { t } = useTranslation();
  const { kind = '', id = '' } = useParams();
  const valid = ALLOWED_KINDS.has(kind) && UUID.test(id);
  const appUrl = valid ? `veterito://${kind}/${id}` : null;

  return (
    <section className="app-continue-page">
      <Helmet>
        <title>{t('app_continue_title')} · Veterito</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="app-continue-card">
        {/* Navbar ile ayni logo cifti: acik zeminde koyu murekkep, koyu zeminde acik. */}
        <img className="app-continue-logo dark:hidden" src={logoUrl} alt="Veterito" width={567} height={144} />
        <img
          className="app-continue-logo hidden dark:block"
          src={logoKoyuUrl}
          alt="Veterito"
          width={567}
          height={127}
          loading="lazy"
        />
        <h1>{t('app_continue_title')}</h1>
        <p>{valid ? t('app_continue_description') : t('app_continue_invalid')}</p>
        {appUrl ? (
          <a className="app-continue-primary" href={appUrl} rel="external">
            {t('app_continue_button')}
          </a>
        ) : null}
        <p className="app-continue-download-title">{t('app_continue_download')}</p>
        <div className="app-continue-stores">
          <a
            className="app-continue-store"
            href={brandConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer">
            {t('app_continue_ios')}
          </a>
          <a
            className="app-continue-store"
            href={brandConfig.playStoreUrl}
            target="_blank"
            rel="noreferrer">
            {t('app_continue_android')}
          </a>
        </div>
      </div>
    </section>
  );
}
