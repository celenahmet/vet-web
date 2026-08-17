import { ArrowRight, CheckCircle2, Heart, Calendar, Activity, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brand';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <SEO 
        title={t('home_hero_badge')} 
        description={t('seo_desc_home')} 
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">{t('home_hero_badge')}</span>
            <h1 className="hero-title">
              {t('home_hero_title')} <span>{t('home_hero_title_span')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('home_hero_subtitle')}
            </p>
            <div className="hero-actions">
              <a href="#download" className="btn btn-primary btn-lg">
                {t('home_btn_download')}
              </a>
              <Link to="/features" className="btn btn-secondary btn-lg">
                {t('home_btn_explore')} <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="app-badges">
              <a href={brandConfig.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Download on App Store">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" width="135" height="40" fetchPriority="high" />
              </a>
              <a href={brandConfig.playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Get it on Google Play">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width="135" height="40" fetchPriority="high" />
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="mockup-header">
                  <h3>{t('home_mockup_greeting')}</h3>
                  <div className="mockup-avatar"></div>
                </div>
                <div className="mockup-card">
                  <Heart className="mockup-icon" color="var(--color-coral)" />
                  <h4>{t('home_mockup_card1_title')}</h4>
                  <p>{t('home_mockup_card1_desc')}</p>
                </div>
                <div className="mockup-card">
                  <Calendar className="mockup-icon" color="var(--color-primary)" />
                  <h4>{t('home_mockup_card2_title')}</h4>
                  <p>{t('home_mockup_card2_desc')}</p>
                </div>
              </div>
            </div>
            {/* Background decorative elements */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section features-preview bg-secondary">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t('home_features_h2')}</h2>
            <p>{t('home_features_p')}</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-wrapper bg-primary-soft">
                <Activity size={28} color="var(--color-primary)" />
              </div>
              <h3>{t('home_f1_title')}</h3>
              <p>{t('home_f1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper bg-accent-soft">
                <Calendar size={28} color="var(--color-accent)" />
              </div>
              <h3>{t('home_f2_title')}</h3>
              <p>{t('home_f2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper bg-coral-soft">
                <Heart size={28} color="var(--color-coral)" />
              </div>
              <h3>{t('home_f3_title')}</h3>
              <p>{t('home_f3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust-section">
        <div className="container trust-container">
          <div className="trust-image">
             <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800" alt="Veterinarian with dog" className="rounded-img" loading="lazy" width="800" height="533" />
          </div>
          <div className="trust-content">
            <h2>{t('home_trust_h2')}</h2>
            <p>{t('home_trust_p')}</p>
            
            <ul className="trust-list">
              <li><CheckCircle2 color="var(--color-success)" size={20} /> {t('home_trust_li1')}</li>
              <li><CheckCircle2 color="var(--color-success)" size={20} /> {t('home_trust_li2')}</li>
              <li><CheckCircle2 color="var(--color-success)" size={20} /> {t('home_trust_li3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="section download-section bg-secondary text-center">
        <div className="container">
          <div className="download-content mx-auto" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4">{t('download_h2')}</h2>
            <p className="subtitle mb-8 text-secondary">{t('download_p')}</p>
            
            <div className="download-options" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              <div className="qr-code-box" style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: 'var(--radius-lg)', display: 'inline-block', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '150px', height: '150px', backgroundColor: 'var(--color-border)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)' }}>
                  <QrCode size={64} color="var(--color-text-muted)" />
                </div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{t('download_qr_text')}</p>
              </div>

              <div className="app-badges" style={{ justifyContent: 'center' }}>
                <a href={brandConfig.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Download on App Store">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" width="135" height="40" loading="lazy" />
                </a>
                <a href={brandConfig.playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-badge" aria-label="Get it on Google Play">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width="135" height="40" loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
