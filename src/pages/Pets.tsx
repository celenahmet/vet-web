import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const PETS_DATA = [
  {
    id: 1,
    name: "Max",
    breed: "Beagle",
    age: "3 yrs",
    weight: "14 kg",
    nextVaccine: "Oct 12",
    type: "dog",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Luna",
    breed: "Tabby (Tekir)",
    age: "2 yrs",
    weight: "4.5 kg",
    nextVaccine: "Nov 05",
    type: "cat",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Labrador",
    age: "1 yr",
    weight: "22 kg",
    nextVaccine: "Dec 01",
    type: "dog",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=200"
  }
];

const FILTERS = [
  { id: 'all', label: 'Tümü' },
  { id: 'dog', label: 'Köpekler' },
  { id: 'cat', label: 'Kediler' },
  { id: 'bird', label: 'Kuşlar' },
  { id: 'other', label: 'Diğerleri' }
];

export default function Pets() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPets = PETS_DATA.filter(pet => {
    const matchesFilter = activeFilter === 'all' || pet.type === activeFilter;
    const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      <SEO title={t('seo_title_pets')} description={t('seo_desc_pets_v2')} />
      
      {/* Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-extrabold mb-4 text-[var(--text-main)]">{t('pets_h1')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-[var(--text-muted)] font-medium">{t('pets_desc')}</motion.p>
        </div>

        <div className="max-w-3xl mx-auto mb-16 space-y-8">
          {/* Search Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="text-[var(--text-muted)]" size={20} />
            </div>
            <input 
              type="text" 
              placeholder={t('pets_search')} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-[var(--border-color)] bg-white/70 backdrop-blur-md focus:outline-none focus:border-[var(--color-vet-primary)] text-lg transition-all shadow-sm focus:shadow-md"
            />
          </motion.div>

          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-3">
            {FILTERS.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all border ${
                  activeFilter === filter.id 
                    ? 'bg-[var(--color-vet-primary)] text-white border-[var(--color-vet-primary)] shadow-md' 
                    : 'bg-white/70 text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--color-vet-primary)] hover:text-[var(--color-vet-primary)] backdrop-blur-sm'
                }`}
              >
                {t(`pets_f_${filter.id}`)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet, index) => (
            <motion.div 
              key={pet.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
              className="glass-card bg-white/90 dark:bg-white/5 backdrop-blur-lg rounded-[2rem] p-6 shadow-xl border border-[var(--border-color)] cursor-pointer hover:shadow-[var(--color-vet-primary)]/20 hover:border-[var(--color-vet-primary)]/30 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-6 mb-6">
                <motion.img whileHover={{ scale: 1.1, rotate: 5 }} src={pet.image} alt={pet.name} className="w-24 h-24 rounded-full object-cover shadow-inner border-2 border-white dark:border-[var(--bg-secondary)]" />
                <div>
                  <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-1 group-hover:text-[var(--color-vet-primary)] transition-colors">{pet.name}</h3>
                  <p className="text-[var(--text-muted)] font-medium text-lg">{pet.breed} • {pet.age}</p>
                </div>
              </div>
              
              <div className="border-t border-[var(--border-color)] pt-6 flex justify-between">
                <div>
                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">{t('pets_w')}</p>
                  <p className="text-xl font-extrabold text-[var(--text-main)]">{pet.weight}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">{t('pets_vax')}</p>
                  <p className="text-xl font-extrabold text-[var(--color-vet-primary)]">{pet.nextVaccine}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
