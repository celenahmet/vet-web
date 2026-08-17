import { Search, Plus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import './Pets.css';

const Pets = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { id: 'All', label: t('pets_filter_all') },
    { id: 'Dog', label: t('pets_filter_dogs') },
    { id: 'Cat', label: t('pets_filter_cats') },
    { id: 'Bird', label: t('pets_filter_birds') },
    { id: 'Other', label: t('pets_filter_others') }
  ];

  // Mock database of pets
  const allPets = [
    { id: 1, name: 'Max', type: 'Dog', breed: 'Beagle', age: '3 yrs', weight: '14 kg', nextVax: 'Oct 12', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Luna', type: 'Cat', breed: 'Tabby (Tekir)', age: '2 yrs', weight: '4.5 kg', nextVax: 'Nov 05', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Charlie', type: 'Dog', breed: 'Labrador', age: '1 yr', weight: '22 kg', nextVax: 'Dec 01', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Bella', type: 'Cat', breed: 'British Shorthair', age: '4 yrs', weight: '5 kg', nextVax: 'Jan 15', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=400' },
    { id: 5, name: 'Rio', type: 'Bird', breed: 'Macaw', age: '5 yrs', weight: '1.2 kg', nextVax: 'Mar 10', image: 'https://images.unsplash.com/photo-1552728089-571692582847?auto=format&fit=crop&q=80&w=400' },
    { id: 6, name: 'Rocky', type: 'Dog', breed: 'Mix / Melez', age: '2 yrs', weight: '18 kg', nextVax: 'Feb 20', image: 'https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?auto=format&fit=crop&q=80&w=400' },
  ];

  const filteredPets = allPets.filter(pet => {
    const matchesFilter = activeFilter === 'All' || pet.type === activeFilter;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pets-page">
      <SEO 
        title={t('nav_pets')} 
        description={t('seo_desc_pets')} 
      />
      <section className="section bg-secondary text-center">
        <div className="container">
          <h1>{t('pets_hero_h1')}</h1>
          <p className="subtitle mx-auto mb-8">{t('pets_hero_p')}</p>

          <div className="pets-search-container mx-auto">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                className="search-input" 
                placeholder={t('pets_search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-pills">
              {filters.map(filter => (
                <button 
                  key={filter.id}
                  className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filteredPets.length === 0 ? (
            <div className="no-results text-center py-12">
              <p className="text-secondary text-lg">{t('pets_no_results')}</p>
            </div>
          ) : (
            <div className="pets-grid">
              {filteredPets.map(pet => (
                <div key={pet.id} className="pet-profile-card">
                  <div className="pet-card-header">
                    <img src={pet.image} alt={pet.type} className="pet-avatar" loading="lazy" width="400" height="266" />
                    <div className="pet-info-short">
                      <h3>{pet.name}</h3>
                      <span className="pet-breed">{pet.breed} • {pet.age}</span>
                    </div>
                  </div>
                  <div className="pet-stats">
                    <div className="stat">
                      <span className="stat-label">{t('pets_stat_weight')}</span>
                      <span className="stat-value">{pet.weight}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">{t('pets_stat_next_vax')}</span>
                      <span className="stat-value text-primary">{pet.nextVax}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Pet Card */}
              <div className="pet-profile-card add-pet-card">
                <div className="add-icon-wrapper">
                  <Plus size={32} color="var(--color-primary)" />
                </div>
                <h3>{t('pets_add_h3')}</h3>
                <p>{t('pets_add_p')}</p>
              </div>
            </div>
          )}
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
