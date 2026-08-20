import { motion } from 'framer-motion';
import { Building2, HeartHandshake, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      <SEO title={t('seo_title_about')} description={t('seo_desc_about_v2')} />
      
      {/* Background Orbs (Standard Light Theme) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center text-[var(--text-main)]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-8 text-[var(--color-vet-primary)] tracking-tight">
            {t('about_h1')}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] font-medium leading-relaxed">
            {t('about_desc')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }} 
            className="glass-card bg-white/80 dark:bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border-t-4 border-t-[var(--color-vet-primary)] border-x border-b border-[var(--border-color)] shadow-xl cursor-pointer text-left relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-vet-primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-vet-primary)]/20 transition-colors duration-500"></div>
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6 inline-flex p-4 rounded-2xl bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]">
              <Building2 size={32} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-main)] group-hover:text-[var(--color-vet-primary)] transition-colors">{t('about_c1_title')}</h3>
            <p className="text-[var(--text-muted)] font-medium leading-relaxed">
              {t('about_c1_desc')}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }} 
            className="glass-card bg-white/80 dark:bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border-t-4 border-t-rose-400 border-x border-b border-[var(--border-color)] shadow-xl cursor-pointer text-left relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-400/5 rounded-full blur-2xl group-hover:bg-rose-400/20 transition-colors duration-500"></div>
            <motion.div whileHover={{ rotate: -10, scale: 1.1 }} className="mb-6 inline-flex p-4 rounded-2xl bg-rose-400/10 text-rose-500">
              <HeartHandshake size={32} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-main)] group-hover:text-rose-500 transition-colors">{t('about_c2_title')}</h3>
            <p className="text-[var(--text-muted)] font-medium leading-relaxed">
              {t('about_c2_desc')}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }} 
            className="glass-card bg-white/80 dark:bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border-t-4 border-t-amber-400 border-x border-b border-[var(--border-color)] shadow-xl cursor-pointer text-left relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors duration-500"></div>
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6 inline-flex p-4 rounded-2xl bg-amber-400/10 text-amber-500">
              <Award size={32} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-main)] group-hover:text-amber-500 transition-colors">{t('about_c3_title')}</h3>
            <p className="text-[var(--text-muted)] font-medium leading-relaxed">
              {t('about_c3_desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
