import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brandConfig } from '../config/brand';
import logoUrl from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();
  const year = 2026;

  return (
    <footer className="snap-end relative z-10 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img src={logoUrl} alt="Veterito Logo" className="h-10 md:h-12 w-auto" />
            </Link>
            <p className="max-w-xs text-sm mt-2">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4 mt-4">
              <a href={brandConfig.social.website} aria-label="Website" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors"><Globe size={20} /></a>
              <a href={brandConfig.social.community} aria-label="Community" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors"><MessageCircle size={20} /></a>
              <a href={`mailto:${brandConfig.social.contactEmail}`} aria-label="Contact" className="hover:text-emerald-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('footer_explore')}</h3>
              <Link to="/features" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_features')}</Link>
              <Link to="/pets" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_pets')}</Link>
              <Link to="/clinics" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_clinics')}</Link>
              <Link to="/about" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_about')}</Link>
              <Link to="/blog" className="text-sm hover:text-emerald-600 transition-colors">{t('nav_blog')}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('footer_legal')}</h3>
              <Link to="/privacy" className="text-sm hover:text-emerald-600 transition-colors">{t('footer_privacy')}</Link>
              <Link to="/terms" className="text-sm hover:text-emerald-600 transition-colors">{t('footer_terms')}</Link>
              <Link to="/deletion" className="text-sm hover:text-emerald-600 transition-colors">{t('footer_deletion')}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('footer_contact')}</h3>
            <Link to="/contact" className="text-sm hover:text-emerald-600 transition-colors">{t('contact_title')}</Link>
              <a href={`mailto:${brandConfig.social.contactEmail}`} className="text-sm hover:text-emerald-600 transition-colors">{brandConfig.social.contactEmail}</a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t('footer_copyright').replace('{{year}}', year.toString()).replace('Veterito', brandConfig.name)}</p>
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <img src={logoUrl} alt="Veterito Logo" className="h-5 md:h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
