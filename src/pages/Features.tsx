import { Activity, Bell, Calendar, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Features.css';

const Features = () => {
  const { t } = useTranslation();

  const otherFeatures = [
    {
      icon: <Bell size={32} color="var(--color-coral)" />,
      title: t('feat_4_title'),
      description: t('feat_4_desc')
    },
    {
      icon: <Calendar size={32} color="var(--color-danger)" />,
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
          <p className="subtitle mx-auto">{t('feat_hero_p')}</p>
        </div>
      </section>

      {/* Feature 1: Zig-Zag */}
      <section className="section">
        <div className="container feature-zigzag">
          <div className="zigzag-content">
            <div className="icon-wrapper bg-primary-soft mb-4">
              <Activity size={28} color="var(--color-primary)" />
            </div>
            <h2>{t('feat_1_title')}</h2>
            <p>{t('feat_1_desc')}</p>
            <ul className="feature-bullets">
              <li>Track weight, vaccinations, and lab results</li>
              <li>Sync directly with your veterinarian</li>
              <li>Get smart health insights</li>
            </ul>
          </div>
          <div className="zigzag-image">
             <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" alt="Health Tracking" className="rounded-img shadow-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Feature 2: Zig-Zag Reversed */}
      <section className="section bg-secondary">
        <div className="container feature-zigzag reversed">
          <div className="zigzag-content">
            <div className="icon-wrapper bg-accent-soft mb-4">
              <Users size={28} color="var(--color-accent)" />
            </div>
            <h2>{t('feat_2_title')}</h2>
            <p>{t('feat_2_desc')}</p>
            <ul className="feature-bullets">
              <li>Join breed-specific groups</li>
              <li>Organize local playdates</li>
              <li>Share photos with the community</li>
            </ul>
          </div>
          <div className="zigzag-image">
             <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800" alt="Social Network" className="rounded-img shadow-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Feature 3: Zig-Zag */}
      <section className="section">
        <div className="container feature-zigzag">
          <div className="zigzag-content">
            <div className="icon-wrapper bg-success-soft mb-4" style={{ backgroundColor: 'var(--color-primary-soft)' }}>
              <Heart size={28} color="var(--color-success)" />
            </div>
            <h2>{t('feat_3_title')}</h2>
            <p>{t('feat_3_desc')}</p>
            <ul className="feature-bullets">
              <li>Secure form-based adoption system</li>
              <li>Rich photo galleries of adoptable pets</li>
              <li>Direct messaging with shelters</li>
            </ul>
          </div>
          <div className="zigzag-image">
             <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800" alt="Adoption Platform" className="rounded-img shadow-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Other Features Grid */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-center mb-12">More Powerful Features</h2>
          <div className="features-list-grid">
            {otherFeatures.map((feature, index) => (
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
            <Link to="/clinics" className="btn btn-primary mt-24">
              {t('feat_btn_learn')} <ArrowRight size={18} className="ml-2" style={{ display: 'inline', marginLeft: '8px' }} />
            </Link>
          </div>
          <div className="preview-image">
             <img src="https://images.unsplash.com/photo-1628009368231-7bb7cb18a4a5?auto=format&fit=crop&q=80&w=800" alt="Veterinary Clinic" className="rounded-img shadow-lg" loading="lazy" width="800" height="533" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
