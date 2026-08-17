import { Link } from 'react-router-dom';
import { Stethoscope, Globe, MessageCircle, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { brandConfig } from '../config/brand';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Stethoscope size={24} />
            <span>{brandConfig.name}</span>
          </Link>
          <p className="footer-desc">
            {t('footer_desc')}
          </p>
          <div className="social-links">
            <a href={brandConfig.social.website} aria-label="Website" target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
            <a href={brandConfig.social.community} aria-label="Community" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
            <a href={`mailto:${brandConfig.social.contactEmail}`} aria-label="Contact"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h3>{t('footer_explore')}</h3>
            <Link to="/features">{t('nav_features')}</Link>
            <Link to="/pets">{t('nav_pets')}</Link>
            <Link to="/about">{t('nav_about')}</Link>
            <Link to="/blog">{t('nav_blog')}</Link>
          </div>
          <div className="link-group">
            <h3>{t('footer_legal')}</h3>
            <a href="#">{t('footer_privacy')}</a>
            <a href="#">{t('footer_terms')}</a>
            <a href="#">{t('footer_deletion')}</a>
          </div>
          <div className="link-group">
            <h3>{t('footer_contact')}</h3>
            <a href={`mailto:${brandConfig.social.contactEmail}`}>{brandConfig.social.contactEmail}</a>
            <p>{brandConfig.address}</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer_copyright').replace('{{year}}', year.toString()).replace('Patika', brandConfig.name)}</p>
      </div>
    </footer>
  );
};

export default Footer;
