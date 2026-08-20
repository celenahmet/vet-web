import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import './Legal.css';

const Legal = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [content, setContent] = useState({ title: '', body: '' });

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const path = location.pathname;
    
    if (path === '/privacy') {
      setContent({
        title: t('legal_privacy_title'),
        body: t('legal_privacy_content')
      });
    } else if (path === '/terms') {
      setContent({
        title: t('legal_terms_title'),
        body: t('legal_terms_content')
      });
    } else if (path === '/deletion') {
      setContent({
        title: t('legal_deletion_title'),
        body: t('legal_deletion_content')
      });
    } else {
      setContent({
        title: t('legal_default_title'),
        body: t('legal_default_body')
      });
    }
  }, [location.pathname, t]);

  return (
    <div className="legal-page">
      <SEO 
        title={`${content.title} - ${brandConfig.name}`} 
        description={`${brandConfig.name} ${content.title}`} 
      />
      <div className="legal-container container">
        <div className="legal-content">
          <h1>{content.title}</h1>
          <div className="legal-body">
            <p>{content.body}</p>
            {/* Real terms can be added here using markdown or rich text later */}
            <br />
            <p><strong>{t('legal_contact')}:</strong> <a href={`mailto:${brandConfig.social.contactEmail}`}>{brandConfig.social.contactEmail}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
