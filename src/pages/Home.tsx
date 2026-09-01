import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {    Stethoscope, PawPrint, LayoutGrid, CheckCircle , Heart, Search , User, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { MockupGallery } from '../components/ui/MockupGallery';
import { brandConfig } from '../config/brand';

import SEO from '../components/SEO';

export default function Home() {
  const { t } = useTranslation();
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    // Enable snap scrolling for Home page
    document.documentElement.classList.add('snap-y', 'snap-mandatory', 'scroll-smooth');
    return () => {
      document.documentElement.classList.remove('snap-y', 'snap-mandatory', 'scroll-smooth');
    };
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <>
      <SEO 
        title={t('seo_title_home')}
        description={t('seo_desc_home2')}
      />
      
      {/* 
        Klasik çok sayfalı yapı: Sayfa aşağı doğru normal şekilde kayar,
        her bölüm ana mesajları verir ve detaylar için menüdeki sayfalara (Link) yönlendirir.
      */}
      <div className="w-full relative bg-[var(--bg-main)]">
        
        {/* =========================================
            1. HERO SECTION
            ========================================= */}
                <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start snap-always relative flex items-center justify-center pt-20 border-b border-[var(--border-color)] bg-[var(--bg-main)] overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col items-start z-10 w-full lg:w-1/2">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent text-indigo-600 dark:text-indigo-400 text-sm font-bold shadow-sm mb-6 bg-white dark:bg-transparent backdrop-blur-sm">{t('home_badge_new')}</motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-extrabold leading-[1.1] tracking-tight mb-6 text-[var(--text-main)]">
                  <span className="text-4xl lg:text-5xl leading-tight">{t('home_title_1')}<br/></span>
                  <span className="text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#038d91] to-[#33c8c2]">{t('home_title_2')}</span> 
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-xl leading-relaxed font-medium">{t('home_subtitle_new')}</motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                  <Link to="/features" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:scale-105 transition-transform shadow-xl">{t('home_btn_pet')}<PawPrint size={20} className="group-hover:rotate-12 transition-transform" />
                  </Link>
                  <Link to="/clinics" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 hover:scale-105 transition-transform shadow-sm">{t('home_btn_clinic')}<Stethoscope size={20} className="group-hover:rotate-12 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center items-center w-full lg:w-1/2 h-[500px] lg:h-[700px] mt-12 lg:mt-0"
              >
                 <img src="/ana-sayfa.png?v=2" alt="Veterito Ana Sayfa" className="h-[90%] lg:h-[100%] w-auto object-contain drop-shadow-2xl z-20 scale-x-[1.08]" />
                 
                 
              </motion.div>
            </div>
          </div>
        </section>

                {/* =========================================
            1.5. HIGHLIGHTS (Neden Veterito'yu İndirmelisiniz?)
            ========================================= */}
        
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col justify-center bg-[var(--bg-main)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6">{t('home_why_title')}</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">{t('home_why_sub1')}<br className="hidden md:block" />{t('home_why_sub2')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} className="bg-white dark:bg-transparent border-2 border-indigo-100 dark:border-indigo-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                  <LayoutGrid size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">{t('home_why_1_title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <User className="text-indigo-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_1_1')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <Stethoscope className="text-indigo-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_1_2')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <CheckCircle className="text-indigo-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_1_3')}</span>
                  </li>
                </ul>
                <LayoutGrid size={120} className="absolute -bottom-10 -right-10 text-indigo-50 dark:text-indigo-900/20 opacity-50 group-hover:scale-110 transition-transform" />
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: 0.1}} className="bg-white dark:bg-transparent border-2 border-rose-100 dark:border-rose-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-rose-300 dark:hover:border-rose-700 transition-colors">
                <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/50 text-rose-500 rounded-xl flex items-center justify-center mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">{t('clinics_why_sec3_title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <User className="text-rose-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_2_1')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <Stethoscope className="text-rose-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_2_2')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <CheckCircle className="text-rose-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_2_3')}</span>
                  </li>
                </ul>
                <Heart size={120} className="absolute -bottom-10 -right-10 text-rose-50 dark:text-rose-900/20 opacity-50 group-hover:scale-110 transition-transform" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: 0.2}} className="bg-white dark:bg-transparent border-2 border-sky-100 dark:border-sky-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
                <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/50 text-sky-500 rounded-xl flex items-center justify-center mb-6">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">{t('home_why_3_title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <CheckCircle className="text-sky-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_3_1')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <CheckCircle className="text-sky-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_3_2')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--text-muted)] font-medium">
                    <CheckCircle className="text-sky-500 shrink-0 mt-0.5" size={18} /> <span>{t('home_why_3_3')}</span>
                  </li>
                </ul>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-[20px] border-sky-50 dark:border-sky-900/20 opacity-50 group-hover:scale-110 transition-transform"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            5.5. APP SHOWCASE / MOCKUP GALLERY
            ========================================= */}
        <section className="w-full h-[100dvh] min-h-[600px] snap-start snap-always bg-[var(--bg-secondary)] overflow-hidden pt-16 pb-4 flex flex-col border-b border-[var(--border-color)]">
           <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col h-full items-center">
             
             {/* Title Area */}
             <div className="text-center w-full max-w-4xl mx-auto mt-6 lg:mt-8 mb-0 shrink-0 flex flex-col items-center">
               <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-extrabold text-[var(--text-main)] mb-3">{t('home_mockup_title')}</h2>
               <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-medium max-w-3xl mx-auto px-4 leading-relaxed mb-2">{t('home_mockup_subtitle')}</p>
             </div>
             
             {/* Gallery Area */}
             <div className="w-full flex-1 min-h-0 relative flex items-center justify-center">
               <MockupGallery />
               <div className="absolute right-0 md:right-1 lg:right-2 xl:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
                 <a href="/features" className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[var(--color-vet-primary)] hover:bg-[var(--color-vet-secondary)] text-white font-semibold rounded-full transition-all shadow-sm hover:shadow-md">{t('home_mockup_btn')}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
             </div>
             
           </div>
        </section>

        {/* =========================================
            6. PRICING & FOOTER
            ========================================= */}
        <section className="relative w-full h-[100dvh] snap-start snap-always bg-[var(--bg-main)] py-16 flex flex-col justify-center items-center overflow-hidden">
          
          {/* Animated Wavy Background Lines */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-60">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              {/* Wave 1: Starts top-left, dips deep below the text */}
              <path d="M -100 300 C 400 900, 600 900, 1100 300" fill="none" stroke="#038d91" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              {/* Wave 2: Starts mid-left, dips moderately below the text */}
              <path d="M -100 550 C 400 800, 600 800, 1100 550" fill="none" stroke="#027376" strokeWidth="2" opacity="0.8" vectorEffect="non-scaling-stroke" />
              {/* Wave 3: Starts bottom-left, arches high above the text */}
              <path d="M -100 650 C 400 0, 600 0, 1100 650" fill="none" stroke="var(--color-vet-primary)" strokeWidth="1.5" opacity="0.6" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[var(--text-main)] leading-tight mb-8 -mt-8">{t('home_dl_title1')}<br className="hidden sm:block" />{t('home_dl_title2')}</h2>
            
            {/* Description */}
            <div className="flex flex-col items-center justify-center w-full px-4 mb-12">
              <p className="text-xl md:text-2xl text-[var(--color-vet-primary)] font-bold mb-4">{t('home_dl_subtitle1')}</p>
              <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-xl lg:max-w-2xl font-medium leading-relaxed">{t('home_dl_subtitle2')}<br/>
                <strong>{t('home_dl_subtitle3')}</strong>{t('home_dl_subtitle4')}</p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 w-full">
              {/* App Store */}
              <a href={brandConfig.appStoreUrl} target="_blank" rel="noopener noreferrer" className="bg-[#000000] hover:bg-[#1a1a1a] text-white px-6 py-2.5 rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center sm:w-auto min-w-[210px]">
                <div className="flex items-center justify-center gap-3 w-full">
                  <img src="/apple-logo.png" alt="App Store" className="w-10 h-10 object-contain shrink-0 invert" />
                  <div className="flex flex-col items-start leading-none pt-0.5 text-white">
                    <div className="text-[11px] font-medium tracking-[0.08em] -mb-1 text-white">Download on the</div>
                    <div className="text-2xl font-semibold tracking-tight text-white">App Store</div>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a href={brandConfig.playStoreUrl || undefined} target="_blank" rel="noopener noreferrer" className="bg-[#000000] hover:bg-[#1a1a1a] text-white px-6 py-2.5 rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center sm:w-auto min-w-[210px]">
                <div className="flex items-center justify-center gap-3 w-full">
                  <img src="/google-play-logo.png" alt="Play Store" className="w-10 h-10 object-contain shrink-0 scale-[1.15]" />
                  <div className="flex flex-col items-start leading-none pt-0.5 text-white">
                    <div className="text-[11px] font-medium tracking-wide text-white">GET IT ON</div>
                    <div className="text-[22px] font-semibold tracking-tight text-white">Google Play</div>
                  </div>
                </div>
              </a>

              {/* AppGallery */}
              <a href={brandConfig.appGalleryUrl} target="_blank" rel="noopener noreferrer" className="bg-[#000000] hover:bg-[#1a1a1a] text-white px-6 py-2.5 rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center sm:w-auto min-w-[210px]">
                <div className="flex items-center justify-center gap-3 w-full">
                  <img src="/appgallery-logo.png" alt="AppGallery" className="w-10 h-10 object-contain shrink-0" />
                  <div className="flex flex-col items-start leading-none pt-0.5 text-white">
                    <div className="text-[11px] font-medium tracking-wide text-white">EXPLORE IT ON</div>
                    <div className="text-[22px] font-semibold tracking-tight text-white">AppGallery</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
