import { Building, CalendarCheck, FileStack, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import './Clinics.css';

const Clinics = () => {
  const { t } = useTranslation();



  return (
    <div className="clinics-page">
      <SEO 
        title={t('nav_clinics')} 
        description={t('seo_desc_clinics')} 
      />
      
      {/* Hero Section */}
      <section className="section bg-secondary text-center">
        <div className="container">
          <div className="badge badge-primary mx-auto mb-4">B2B Software</div>
          <h1 className="mb-4">{t('clinics_hero_h1')}</h1>
          <p className="subtitle mx-auto mb-8">{t('clinics_hero_p')}</p>
          <button className="btn btn-primary">{t('clinics_btn_contact')}</button>
          
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&q=80&w=1200" 
              alt="Veterinary Clinic" 
              className="rounded-img shadow-xl mx-auto"
              fetchPriority="high"
              width="1200"
              height="800"
            />
          </div>
        </div>
      </section>

      {/* Detailed Feature Showcase */}
      <section className="section bg-surface">
        <div className="container">
          {/* Showcase 1 */}
          <div className="showcase-block">
            <div className="showcase-content">
              <div className="icon-wrapper mb-4">
                <CalendarCheck className="feature-icon text-primary" />
              </div>
              <h2 className="mb-4">{t('clinics_showcase_1_title')}</h2>
              <p className="text-secondary">{t('clinics_showcase_1_desc')}</p>
            </div>
            <div className="showcase-image">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Calendar Dashboard" 
                className="rounded-img shadow-lg"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>

          {/* Showcase 2 */}
          <div className="showcase-block reverse">
            <div className="showcase-content">
              <div className="icon-wrapper mb-4">
                <FileStack className="feature-icon text-primary" />
              </div>
              <h2 className="mb-4">{t('clinics_showcase_2_title')}</h2>
              <p className="text-secondary">{t('clinics_showcase_2_desc')}</p>
            </div>
            <div className="showcase-image">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=800" 
                alt="Medical Records" 
                className="rounded-img shadow-lg"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>

          {/* Showcase 3 */}
          <div className="showcase-block">
            <div className="showcase-content">
              <div className="icon-wrapper mb-4">
                <Building className="feature-icon text-primary" />
              </div>
              <h2 className="mb-4">{t('clinics_showcase_3_title')}</h2>
              <p className="text-secondary">{t('clinics_showcase_3_desc')}</p>
            </div>
            <div className="showcase-image">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800" 
                alt="Pharmacy Inventory" 
                className="rounded-img shadow-lg"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>

          {/* Showcase 4 */}
          <div className="showcase-block reverse">
            <div className="showcase-content">
              <div className="icon-wrapper mb-4">
                <Users className="feature-icon text-primary" />
              </div>
              <h2 className="mb-4">{t('clinics_showcase_4_title')}</h2>
              <p className="text-secondary">{t('clinics_showcase_4_desc')}</p>
            </div>
            <div className="showcase-image">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Analytics Dashboard" 
                className="rounded-img shadow-lg"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Patika Section */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-center mb-12">{t('clinics_why_title')}</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3 className="mb-2">{t('clinics_why_sec1_title')}</h3>
              <p className="text-secondary">{t('clinics_why_sec1_desc')}</p>
            </div>
            <div className="why-card">
              <h3 className="mb-2">{t('clinics_why_sec2_title')}</h3>
              <p className="text-secondary">{t('clinics_why_sec2_desc')}</p>
            </div>
            <div className="why-card">
              <h3 className="mb-2">{t('clinics_why_sec3_title')}</h3>
              <p className="text-secondary">{t('clinics_why_sec3_desc')}</p>
            </div>
            <div className="why-card">
              <h3 className="mb-2">{t('clinics_why_sec4_title')}</h3>
              <p className="text-secondary">{t('clinics_why_sec4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-on-primary text-center">
        <div className="container">
          <h2 className="mb-4">{t('clinics_cta_h2')}</h2>
          <p className="subtitle mx-auto mb-8 opacity-90">{t('clinics_cta_p')}</p>
          <a href={`mailto:${brandConfig.social.contactEmail}`} className="btn btn-secondary">
            {t('clinics_btn_contact')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clinics;
