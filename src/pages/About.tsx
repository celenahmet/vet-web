import { useTranslation } from 'react-i18next';


import { motion } from 'framer-motion';
import { Heart, Globe, Users, Target, ShieldCheck, HeartPulse } from 'lucide-react';
import SEO from '../components/SEO';


export default function About() {
  const { t } = useTranslation();

  
  
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden bg-[var(--bg-main)]">
      <SEO title={t('seo_title_about2')} description={t('seo_desc_about2')} />
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-200/40 rounded-full hidden mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/60 rounded-full hidden mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-white dark:bg-transparent text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full font-bold text-sm shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent mb-6">
            <Heart size={16} className="fill-teal-500" />{t('about_hero_badge')}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-extrabold text-[var(--text-main)] mb-8 leading-tight">{t('about_hero_title1')}<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#038d91] to-[#33c8c2]">{t('about_hero_title2')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-[var(--text-muted)] font-medium leading-relaxed">{t('about_hero_desc')}</motion.p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/80 dark:bg-transparent backdrop-blur-xl border border-slate-100 dark:border-[var(--border-color)] rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:border-teal-200 transition-colors">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-50 rounded-full hidden group-hover:bg-teal-100 transition-colors duration-500"></div>
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Globe size={32} />
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-4 relative z-10">{t('about_vision_title')}</h3>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed relative z-10">{t('about_vision_desc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/80 dark:bg-transparent backdrop-blur-xl border border-slate-100 dark:border-[var(--border-color)] rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:border-emerald-200 transition-colors">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-50 rounded-full hidden group-hover:bg-emerald-100 transition-colors duration-500"></div>
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Target size={32} />
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-4 relative z-10">{t('about_mission_title')}</h3>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed relative z-10">{t('about_mission_desc')}</p>
          </motion.div>
        </div>

        {/* Why Veterito? */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[var(--text-main)] mb-4">{t('about_values_title')}</h2>
          <div className="h-1.5 w-20 bg-teal-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <HeartPulse size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val1_title')}</h4>
            <p className="text-base text-[var(--text-muted)]">{t('about_val1_desc')}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-sky-50 dark:bg-sky-950/30 text-sky-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val2_title')}</h4>
            <p className="text-base text-[var(--text-muted)]">{t('about_val2_desc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-950/30 text-amber-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val3_title')}</h4>
            <p className="text-base text-[var(--text-muted)]">{t('about_val3_desc')}</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
