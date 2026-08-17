import { Building2, Award, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <SEO 
        title={t('nav_about')} 
        description={t('seo_desc_about')} 
      />
      {/* About Hero */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content text-center">
            <h1>{t('about_hero_h1')}</h1>
            <p className="subtitle mx-auto">
              {t('about_hero_p')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <Building2 size={40} color="var(--color-primary)" className="mb-4" />
              <h3>{t('about_m1_title')}</h3>
              <p>{t('about_m1_desc')}</p>
            </div>
            <div className="mission-card">
              <HeartHandshake size={40} color="var(--color-coral)" className="mb-4" />
              <h3>{t('about_m2_title')}</h3>
              <p>{t('about_m2_desc')}</p>
            </div>
            <div className="mission-card">
              <Award size={40} color="var(--color-accent)" className="mb-4" />
              <h3>{t('about_m3_title')}</h3>
              <p>{t('about_m3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Network Section */}
      <section className="section">
        <div className="container corporate-container">
          <div className="corporate-content">
            <h2>{t('about_corp_h2')}</h2>
            <p className="mb-4">
              {t('about_corp_p')}
            </p>
            <ul className="mb-6 check-list">
              <li>{t('about_corp_li1')}</li>
              <li>{t('about_corp_li2')}</li>
              <li>{t('about_corp_li3')}</li>
            </ul>
            <a href={`mailto:${brandConfig.social.contactEmail}`} className="btn btn-primary">
              {t('about_btn_partner')}
            </a>
          </div>
          <div className="corporate-image">
            <div className="image-grid">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" alt="Vet exam" className="rounded-img" loading="lazy" width="400" height="600" />
              <img src="https://images.unsplash.com/photo-1628009368231-7bb7cb18a4a5?auto=format&fit=crop&q=80&w=400" alt="Clinic" className="rounded-img offset-img" loading="lazy" width="400" height="600" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
