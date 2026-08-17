import { Building, CalendarCheck, FileStack, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import './Clinics.css';

const Clinics = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Building className="feature-icon text-primary" />,
      title: t('clinics_f1_title'),
      desc: t('clinics_f1_desc')
    },
    {
      icon: <CalendarCheck className="feature-icon text-primary" />,
      title: t('clinics_f2_title'),
      desc: t('clinics_f2_desc')
    },
    {
      icon: <FileStack className="feature-icon text-primary" />,
      title: t('clinics_f3_title'),
      desc: t('clinics_f3_desc')
    },
    {
      icon: <Users className="feature-icon text-primary" />,
      title: t('clinics_f4_title'),
      desc: t('clinics_f4_desc')
    }
  ];

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

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <div className="features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="feature-card text-center">
                <div className="icon-wrapper mx-auto mb-4">
                  {feat.icon}
                </div>
                <h3 className="mb-2">{feat.title}</h3>
                <p className="text-secondary">{feat.desc}</p>
              </div>
            ))}
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
