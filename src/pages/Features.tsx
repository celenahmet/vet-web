import { Activity, Bell, FileText, Heart, Shield, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Features.css';

const Features = () => {
  const { t } = useTranslation();

  const featureList = [
    {
      icon: <Activity size={32} color="var(--color-primary)" />,
      title: t('feat_1_title'),
      description: t('feat_1_desc')
    },
    {
      icon: <Bell size={32} color="var(--color-accent)" />,
      title: t('feat_2_title'),
      description: t('feat_2_desc')
    },
    {
      icon: <FileText size={32} color="var(--color-success)" />,
      title: t('feat_3_title'),
      description: t('feat_3_desc')
    },
    {
      icon: <Users size={32} color="var(--color-coral)" />,
      title: t('feat_4_title'),
      description: t('feat_4_desc')
    },
    {
      icon: <Heart size={32} color="var(--color-danger)" />,
      title: t('feat_5_title'),
      description: t('feat_5_desc')
    },
    {
      icon: <Shield size={32} color="var(--color-primary-deep)" />,
      title: t('feat_6_title'),
      description: t('feat_6_desc')
    }
  ];

  return (
    <div className="features-page">
      <SEO 
        title={t('nav_features')} 
        description={t('seo_desc_features')} 
      />
      <section className="features-hero section bg-secondary">
        <div className="container text-center">
          <h1>{t('feat_hero_h1')}</h1>
          <p className="subtitle">{t('feat_hero_p')}</p>
        </div>
      </section>

      <section className="section features-list-section">
        <div className="container">
          <div className="features-list-grid">
            {featureList.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section app-preview-section bg-primary-soft">
        <div className="container preview-container">
          <div className="preview-content">
            <h2>{t('feat_preview_h2')}</h2>
            <p>
              {t('feat_preview_p')}
            </p>
            <button className="btn btn-primary mt-24">{t('feat_btn_learn')}</button>
          </div>
          <div className="preview-image">
             <img src="https://images.unsplash.com/photo-1628009368231-7bb7cb18a4a5?auto=format&fit=crop&q=80&w=800" alt="Veterinary Clinic" className="rounded-img" loading="lazy" width="800" height="533" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
