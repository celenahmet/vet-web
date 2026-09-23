import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Target, ShieldCheck, HeartPulse, BookOpen, } from 'lucide-react';
import SEO from '../components/SEO';


export default function About() {
  const { t } = useTranslation();
  const [] = useState<'pet' | 'vet'>('pet');
  const [activeStory, setActiveStory] = useState<1 | 2>(1);
  return (
    <div className="min-h-screen pt-24 pb-12 md:pb-16 relative overflow-hidden bg-[var(--bg-main)]">
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
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[30px] lg:text-5xl font-extrabold text-[var(--text-main)] mb-8 leading-tight">
            {t('about_hero_title1')} <br className="hidden sm:block" />
            <span className="text-[#009689]">{t('about_hero_title2')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[16px] lg:text-xl text-[var(--text-muted)] font-medium leading-relaxed">{t('about_hero_desc')}</motion.p>
        </div>

        {/* Story Section - Sticky Layout */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-32 relative">
          {/* Left: Sticky Title */}
          <div className="md:w-1/3">
            <div className="md:sticky md:top-32">
              <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <BookOpen size={32} />
              </div>
              <h2 className="text-[30px] lg:text-5xl font-extrabold text-[var(--text-main)] mb-6 leading-tight">{t('about_story_title')}</h2>
              
              {/* Timeline Indicator (Fills empty space on scroll) */}
              {/* --- DESKTOP TIMELINE --- */}
              <div className="hidden md:flex flex-col mt-12 relative">
                {/* The vertical track line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
                {/* The active progress line */}
                <div className="absolute left-[5px] top-2 w-[2px] bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full transition-all duration-500" style={{ height: activeStory === 1 ? '30%' : '100%' }}></div>

                {/* Step 1: Problem */}
                <div className={`relative pl-8 pb-10 transition-all duration-300 ${activeStory === 1 ? 'opacity-100 translate-x-2' : 'opacity-40'}`}>
                  <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full z-10 transition-all duration-500 ${activeStory === 1 ? 'bg-teal-500 scale-125 shadow-[0_0_12px_rgba(20,184,166,0.6)]' : 'bg-slate-300 dark:bg-zinc-700'}`}></div>
                  <h4 className={`text-lg font-bold transition-colors duration-300 ${activeStory === 1 ? 'text-teal-600 dark:text-teal-400' : 'text-[var(--text-main)]'}`}>Sorun</h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">Kopuk iletişim, kaybolan veriler ve stresli evrak yükü.</p>
                </div>
                
                {/* Step 2: Solution */}
                <div className={`relative pl-8 transition-all duration-300 ${activeStory === 2 ? 'opacity-100 translate-x-2' : 'opacity-40'}`}>
                  <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full z-10 transition-all duration-500 ${activeStory === 2 ? 'bg-emerald-500 scale-125 shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'bg-slate-300 dark:bg-zinc-700'}`}></div>
                  <h4 className={`text-lg font-bold transition-colors duration-300 ${activeStory === 2 ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--text-main)]'}`}>Çözüm</h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">Veteriner hekimler ve hayvanseverler için kusursuz dijital asistan.</p>
                </div>
              </div>

              {/* --- MOBILE TIMELINE --- */}
              <div className="md:hidden flex flex-row mt-6 mb-8 relative">
                {/* The horizontal track line */}
                <div className="absolute top-[5px] left-1 right-1 h-[2px] bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
                {/* The active horizontal progress line */}
                <div className="absolute top-[5px] left-1 h-[2px] bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-500" style={{ width: activeStory === 1 ? '50%' : '100%' }}></div>

                {/* Step 1: Problem */}
                <div className={`flex-1 relative pt-6 pl-0 pr-4 pb-0 transition-all duration-300 ${activeStory === 1 ? 'opacity-100 translate-y-2' : 'opacity-40'}`}>
                  <div className={`absolute top-0 left-0 w-3 h-3 rounded-full z-10 transition-all duration-500 ${activeStory === 1 ? 'bg-teal-500 scale-125 shadow-[0_0_12px_rgba(20,184,166,0.6)]' : 'bg-slate-300 dark:bg-zinc-700'}`}></div>
                  <h4 className={`text-base font-bold transition-colors duration-300 ${activeStory === 1 ? 'text-teal-600 dark:text-teal-400' : 'text-[var(--text-main)]'}`}>Sorun</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">Kopuk iletişim, kaybolan veriler ve stresli evrak yükü.</p>
                </div>
                
                {/* Step 2: Solution */}
                <div className={`flex-1 relative pt-6 pl-0 pr-0 pb-0 transition-all duration-300 ${activeStory === 2 ? 'opacity-100 translate-y-2' : 'opacity-40'}`}>
                  <div className={`absolute top-0 left-0 w-3 h-3 rounded-full z-10 transition-all duration-500 ${activeStory === 2 ? 'bg-emerald-500 scale-125 shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'bg-slate-300 dark:bg-zinc-700'}`}></div>
                  <h4 className={`text-base font-bold transition-colors duration-300 ${activeStory === 2 ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--text-main)]'}`}>Çözüm</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">Veteriner hekimler ve hayvanseverler için kusursuz dijital asistan.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Scrolling Content */}
          <div className="md:w-2/3 space-y-12" onMouseLeave={() => setActiveStory(1)}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.6 }} 
              onMouseEnter={() => setActiveStory(1)}
              onClick={() => setActiveStory(1)}
              className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-200/50 dark:border-zinc-800/50 rounded-3xl p-8 lg:p-10 shadow-lg relative overflow-hidden transition-all duration-300 cursor-pointer md:cursor-default"
            >
              <motion.div onViewportEnter={() => setActiveStory(1)} viewport={{ amount: 0.5 }} className="absolute inset-0 pointer-events-none" />
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-400 to-emerald-500 transition-opacity duration-500 ${activeStory === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
              <p className={`text-[16px] lg:text-xl font-medium leading-relaxed transition-colors duration-300 ${activeStory === 1 ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'}`}>{t('about_story_p1')}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.6, delay: 0.1 }} 
              onMouseEnter={() => setActiveStory(2)}
              onClick={() => setActiveStory(2)}
              className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-slate-200/50 dark:border-zinc-800/50 rounded-3xl p-8 lg:p-10 shadow-lg relative overflow-hidden transition-all duration-300 cursor-pointer md:cursor-default"
            >
               <motion.div onViewportEnter={() => setActiveStory(2)} viewport={{ amount: 0.5 }} className="absolute inset-0 pointer-events-none" />
               <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-teal-400 transition-opacity duration-500 ${activeStory === 2 ? 'opacity-100' : 'opacity-0'}`}></div>
              <p className={`text-[16px] lg:text-xl font-medium leading-relaxed transition-colors duration-300 ${activeStory === 2 ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'}`}>{t('about_story_p2')}</p>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission - Single Unified Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#EAF3F0] dark:bg-zinc-900/80 backdrop-blur-xl border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden mb-32">
          {/* Subtle background gradients for each side */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-900/10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-emerald-50/50 to-transparent dark:from-emerald-900/10 pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-zinc-800 relative z-10">
            {/* Vision */}
            <div className="md:pr-8 group">
              <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Globe size={32} />
              </div>
              <h3 className="text-[30px] lg:text-3xl font-extrabold text-[var(--text-main)] mb-6">{t('about_vision_title')}</h3>
              <p className="text-[16px] lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed">{t('about_vision_desc')}</p>
            </div>

            {/* Mission */}
            <div className="md:pl-8 pt-12 md:pt-0 group">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Target size={32} />
              </div>
              <h3 className="text-[30px] lg:text-3xl font-extrabold text-[var(--text-main)] mb-6">{t('about_mission_title')}</h3>
              <p className="text-[16px] lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed">{t('about_mission_desc')}</p>
            </div>
          </div>
        </motion.div>



        {/* Why Veterito? (Values) */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] lg:text-3xl font-extrabold text-[var(--text-main)] mb-4">{t('about_values_title')}</h2>
          <div className="h-1.5 w-20 bg-teal-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val1_title')}</h4>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">{t('about_val1_desc')}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-sky-50 dark:bg-sky-950/30 text-sky-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Target size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val2_title')}</h4>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">{t('about_val2_desc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val3_title')}</h4>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">{t('about_val3_desc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-white dark:bg-transparent border border-slate-100 dark:border-transparent rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-950/30 text-amber-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <HeartPulse size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--text-main)] mb-3">{t('about_val4_title')}</h4>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">{t('about_val4_desc')}</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
