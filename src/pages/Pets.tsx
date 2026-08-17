import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Pets.css';

const Pets = () => {
  const { t } = useTranslation();

  return (
    <div className="pets-page">
      <SEO 
        title={t('nav_pets')} 
        description={t('seo_desc_pets')} 
      />
      <section className="section bg-secondary text-center">
        <div className="container">
          <h1>{t('pets_hero_h1')}</h1>
          <p className="subtitle mx-auto">{t('pets_hero_p')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pets-grid">
            {/* Example Pet Card 1 */}
            <div className="pet-profile-card">
              <div className="pet-card-header">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400" alt="Dog" className="pet-avatar" loading="lazy" width="400" height="266" />
                <div className="pet-info-short">
                  <h3>Max</h3>
                  <span className="pet-breed">Golden Retriever • 3 yrs</span>
                </div>
              </div>
              <div className="pet-stats">
                <div className="stat">
                  <span className="stat-label">{t('pets_stat_weight')}</span>
                  <span className="stat-value">32 kg</span>
                </div>
                <div className="stat">
                  <span className="stat-label">{t('pets_stat_next_vax')}</span>
                  <span className="stat-value text-primary">Oct 12</span>
                </div>
              </div>
            </div>

            {/* Example Pet Card 2 */}
            <div className="pet-profile-card">
              <div className="pet-card-header">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" alt="Cat" className="pet-avatar" loading="lazy" width="400" height="266" />
                <div className="pet-info-short">
                  <h3>Luna</h3>
                  <span className="pet-breed">Scottish Fold • 2 yrs</span>
                </div>
              </div>
              <div className="pet-stats">
                <div className="stat">
                  <span className="stat-label">{t('pets_stat_weight')}</span>
                  <span className="stat-value">4.5 kg</span>
                </div>
                <div className="stat">
                  <span className="stat-label">{t('pets_stat_next_appt')}</span>
                  <span className="stat-value text-accent">Nov 05</span>
                </div>
              </div>
            </div>

            {/* Add Pet Card */}
            <div className="pet-profile-card add-pet-card">
              <div className="add-icon-wrapper">
                <Plus size={32} color="var(--color-primary)" />
              </div>
              <h3>{t('pets_add_h3')}</h3>
              <p>{t('pets_add_p')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-soft">
        <div className="container text-center">
          <h2 className="mb-4">{t('pets_multi_h2')}</h2>
          <p className="subtitle mx-auto mb-6">{t('pets_multi_p')}</p>
          <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1000" alt="Multiple pets" className="rounded-img shadow-lg mx-auto max-w-800" loading="lazy" width="1000" height="667" />
        </div>
      </section>
    </div>
  );
};

export default Pets;
