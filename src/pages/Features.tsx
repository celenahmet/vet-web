import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {Calendar, Home, Stethoscope, Users, CheckCircle2, ShieldCheck, Activity, QrCode, PhoneCall, PawPrint, Bell, FileText, Share2, Heart, MessageCircle, MoreHorizontal, ArrowLeft, Syringe, Bookmark, Plus, ArrowRight, Image as ImageIcon, Menu, MapPin, Globe, AlertTriangle, Eye, Search, User, BookOpen, Bone, Smile, Send, LayoutDashboard, LogOut, MessageSquare} from 'lucide-react';

import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';

export default function Features() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('owners');
  const { scrollY } = useScroll();
  
  // Geri çekilme ve silinme animasyonu
  // Scroll 0'dan 500'e giderken Hero görünmez olur ve küçülür.
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.8]);

  // Sayfaya özel Snap Scroll (Tam Ekran Kaydırma) Efekti
  useEffect(() => {
    // Sayfa yüklendiğinde global html etiketine snap özelliklerini ekle
    document.documentElement.classList.add('snap-y', 'snap-mandatory', 'scroll-smooth');
    return () => {
      // Sayfadan çıkıldığında eski haline döndür
      document.documentElement.classList.remove('snap-y', 'snap-mandatory', 'scroll-smooth');
    };
  }, []);

  const fadeInUp: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { type: "spring", stiffness: 300, damping: 20, duration: 0.5 }
  };

  const staggerContainer: any = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="w-full relative bg-[var(--bg-main)]">
      <SEO title={t('seo_title_features')} description={t('seo_desc_features2')} />

      {/* 1. HERO / ECOSYSTEM OVERVIEW (Snap Section 1) */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start py-20 lg:py-0 snap-always relative z-0">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="sticky top-0 left-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden z-0 pt-24 pb-12"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full hidden"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[50%] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full hidden"></div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center relative z-10 flex flex-col items-center justify-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent text-indigo-600 dark:text-indigo-400 text-sm font-bold shadow-sm mb-6 bg-white dark:bg-transparent backdrop-blur-sm">
                <ShieldCheck size={16} />{t('feat_hero_badge')}</motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">{t('feat_hero_title1')}<br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#038d91] to-[#33c8c2]">{t('feat_hero_title2')}</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-[var(--text-muted)] max-w-2xl lg:max-w-3xl leading-relaxed font-medium">{t('feat_hero_desc')}</motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. INTERACTIVE APP SHOWCASE (Snap Section 2) */}
      <section className="h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-surface)] flex flex-col justify-center pt-[100px] pb-2 overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center h-full">
          <div className="text-center mb-2 relative z-20 transform translate-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">{t('feat_sec2_title1')}<br className="lg:hidden"/>
              <span className="text-inherit">{t('feat_sec2_title2')}</span>
            </h2>
            
            {/* Tab Navigation */}
            <div className="inline-flex flex-wrap justify-center gap-2 bg-slate-200 dark:bg-transparent p-1.5 rounded-3xl">
              <button 
                onClick={() => setActiveTab('owners')} 
                className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'owners' ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <Calendar size={16} />{t('feat_tab_owners')}</button>
              <button 
                onClick={() => setActiveTab('pets')} 
                className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'pets' ? 'bg-white dark:bg-slate-700 text-sky-500 dark:text-sky-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <QrCode size={16} />{t('feat_tab_pets')}</button>
              <button 
                onClick={() => setActiveTab('community')} 
                className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'community' ? 'bg-white dark:bg-slate-700 text-rose-500 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <Heart size={16} />{t('feat_tab_community')}</button>
            </div>
          </div>

          <div className="relative w-full flex items-start justify-center flex-1">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: OWNERS */}
              {activeTab === 'owners' && (
                <motion.div key="owners" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16 w-full max-w-6xl mx-auto lg:pl-8 mt-4 lg:mt-4">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-4 text-center lg:text-left">
                    <div className="flex flex-col space-y-4 transform -translate-y-4 lg:-translate-y-8">
                    <div>
                      <h2 className="text-sm font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">{t('feat_own_badge')}</h2>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">{t('feat_own_title1')}<br/>{t('feat_own_title2')}</h3>
                    </div>
                    <p className="text-base lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-2">{t('feat_own_desc')}</p>
                    
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent transition-transform">
                        <Bell size={24} className="text-amber-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_own_f1_title')}</h4>
                        <p className="text-base text-[var(--text-muted)]">{t('feat_own_f1_desc')}</p>
                      </div>
                      <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent transition-transform">
                        <Users size={24} className="text-rose-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_own_f2_title')}</h4>
                        <p className="text-base text-[var(--text-muted)]">{t('feat_own_f2_desc')}</p>
                      </div>
                      <div className="sm:col-span-2 bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent flex items-center gap-4 transition-transform">
                        <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-full flex items-center justify-center text-sky-500 shrink-0"><FileText size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_own_f3_title')}</h4>
                          <p className="text-base text-[var(--text-muted)]">{t('feat_own_f3_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[40%] flex justify-center lg:justify-end h-[640px] relative perspective-1000 mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.85] lg:scale-[0.92] origin-top lg:origin-top-right bg-white dark:bg-[#08100C] rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col z-10 border border-slate-100 dark:border-transparent">

                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <div>
                          <div className="text-[var(--text-muted)] mb-1"><Menu size={20} className="text-emerald-900 dark:text-white" /></div>
                          <h2 className="text-2xl font-bold text-emerald-900 dark:text-white flex items-center gap-2 mt-4">
                            {t('feat_g_morning')} <span className="text-amber-500">✦</span>
                          </h2>
                          <p className="text-xs text-emerald-800/70 dark:text-[#678D7E]">{t('feat_own_ui_greet')}<br/>{t('feat_own_ui_greet2')}</p>
                        </div>
                        <div className="absolute top-14 right-6 flex items-center gap-4">
                          <Send size={20} className="text-emerald-900 dark:text-white" />
                          <div className="relative">
                            <Bell size={20} className="text-emerald-900 dark:text-white" />
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#E77873] text-white rounded-full text-[9px] font-bold flex items-center justify-center">25</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 flex-1 flex flex-col gap-4 overflow-y-auto pb-24 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-slate-200 dark:[&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-thumb]:bg-slate-500/90 dark:[&::-webkit-scrollbar-thumb]:bg-slate-400/90 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 flex gap-4 items-center shadow-sm relative">
                          <div className="w-24 h-24 rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 overflow-hidden relative">
                            <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Senorita 👑</h3>
                            <p className="text-xs text-slate-500 dark:text-[#789085] mb-2">{t('feat_g_cat_desc1')}<br/>Maine Coon</p>
                            <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1 border-t border-slate-100 dark:border-[#24352D] pt-2 mt-2">{t('feat_own_ui_profile')}<ArrowRight size={12}/>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center px-2 mb-3">
                            <h4 className="font-bold text-emerald-900 dark:text-white text-sm">{t('feat_own_ui_upcoming')}</h4>
                            <span className="text-[10px] text-emerald-700 dark:text-[#34B38A] font-bold">{t('feat_own_ui_seeall')}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white dark:bg-[#192823] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-[#0E1B15] flex items-center justify-center text-emerald-700 dark:text-[#34B38A]"><ShieldCheck size={18} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-xs">{t('home_w1_title')}</h5>
                                <p className="text-[10px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_vax')}<br/>{t('feat_g_date1')}</p>
                              </div>
                              <div className="bg-emerald-50 dark:bg-[#133126] text-emerald-700 dark:text-[#34B38A] font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">3 {t('feat_g_days_left')}</div>
                            </div>
                            <div className="bg-white dark:bg-[#192823] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-[#0E1B15] flex items-center justify-center text-emerald-700 dark:text-[#34B38A]"><Activity size={18} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-xs">{t('feat_own_ui_para')}</h5>
                                <p className="text-[10px] text-slate-500 dark:text-[#789085]">{t('home_bento2_alert_desc')}<br/>{t('feat_g_date2')}</p>
                              </div>
                              <div className="bg-emerald-50 dark:bg-[#133126] text-emerald-700 dark:text-[#34B38A] font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">22 {t('feat_g_days_left')}</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center px-2 mb-2 mt-2">
                            <h4 className="font-bold text-emerald-900 dark:text-white text-sm">{t('feat_own_ui_health')}</h4>
                            <span className="text-[10px] text-emerald-700 dark:text-[#34B38A] font-bold">{t('feat_own_ui_thismonth')}</span>
                          </div>
                          <div className="bg-white dark:bg-[#192823] rounded-2xl p-4 shadow-sm">
                            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100 dark:divide-[#24352D]">
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-50 dark:bg-[#0E1B15] rounded-full flex items-center justify-center mb-1"><Activity size={12} className="text-emerald-700"/></div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">7.2 kg</div>
                                <div className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_weight')}</div>
                              </div>
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-50 dark:bg-[#0E1B15] rounded-full flex items-center justify-center mb-1"><Plus size={12} className="text-emerald-700"/></div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{t('feat_own_ui_good')}</div>
                                <div className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_status')}</div>
                              </div>
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-50 dark:bg-[#0E1B15] rounded-full flex items-center justify-center mb-1"><PawPrint size={12} className="text-emerald-700"/></div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{t('feat_own_ui_active')}</div>
                                <div className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_activity')}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#08100C] border-t border-slate-100 dark:border-transparent flex justify-around items-center px-4 pb-2">
                        <div className="flex flex-col items-center text-emerald-800 dark:text-[#34B38A]"><Home size={22} className="mb-1"/><span className="text-[9px] font-bold">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px]">{t('blog_p1_cat')}</span></div>
                        <div className="w-14 h-14 bg-emerald-800 dark:bg-[#34B38A] rounded-full flex items-center justify-center text-white dark:text-[#08100C] -mt-8 border-4 border-white dark:border-[#08100C] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><Users size={22} className="mb-1"/><span className="text-[9px]">{t('blog_p3_category')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><User size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-2 lg:left-4 top-24 bg-white dark:bg-transparent p-3 rounded-2xl shadow-xl shadow-black/5 border border-slate-100 dark:border-transparent z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center"><Bell size={18} className="text-amber-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 mb-0.5">{t('feat_g_reminder')}</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_ui_vax_time')}</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: PETS */}
              {activeTab === 'pets' && (
                <motion.div key="pets" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16 w-full max-w-6xl mx-auto lg:pl-8 mt-4 lg:mt-4">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-4 text-center lg:text-left">
                    <div className="flex flex-col space-y-4 transform -translate-y-4 lg:-translate-y-8">
                    <div>
                      <h2 className="text-sm font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-2">{t('feat_pet_badge')}</h2>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">{t('feat_pet_title1')}<br/>{t('feat_pet_title2')}</h3>
                    </div>
                    <p className="text-base lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-2">{t('feat_pet_desc')}</p>
                    
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent transition-transform">
                        <Activity size={24} className="text-amber-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_pet_f1_title')}</h4>
                        <p className="text-base text-[var(--text-muted)]">{t('feat_pet_f1_desc')}</p>
                      </div>
                      <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent transition-transform">
                        <QrCode size={24} className="text-cyan-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_pet_f2_title')}</h4>
                        <p className="text-base text-[var(--text-muted)]">{t('feat_pet_f2_desc')}</p>
                      </div>
                      <div className="sm:col-span-2 bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent flex items-center gap-4 transition-transform">
                        <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-500 shrink-0"><ShieldCheck size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_pet_f3_title')}</h4>
                          <p className="text-base text-[var(--text-muted)]">{t('feat_pet_f3_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[40%] flex justify-center lg:justify-end h-[640px] relative perspective-1000 mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.85] lg:scale-[0.92] origin-top lg:origin-top-right bg-white dark:bg-transparent rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col z-10 border border-slate-100 dark:border-transparent">

                      <div className="flex justify-between items-center px-4 pt-10 pb-2">
                        <ArrowLeft size={24} className="text-slate-800 dark:text-slate-200" />
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Senorita</h3>
                        <MoreHorizontal size={24} className="text-slate-800 dark:text-slate-200" />
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pb-20 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-slate-200 dark:[&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-thumb]:bg-slate-500/90 dark:[&::-webkit-scrollbar-thumb]:bg-slate-400/90 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="flex justify-center mt-4 mb-6 relative">
                          <div className="w-32 h-32 rounded-full border-4 border-amber-300 dark:border-amber-600 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden relative shadow-md">
                            <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 right-1/2 translate-x-12 w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                            <PawPrint size={14} />
                          </div>
                        </div>
                        <div className="flex justify-between px-2 mb-6">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><Activity size={24} className="text-emerald-800 dark:text-emerald-400" /></div>
                            <span className="text-[10px] font-bold text-emerald-900 dark:text-emerald-300">{t('feat_own_ui_health')}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><Syringe size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400">{t('feat_pet_ui_vax')}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><FileText size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400">{t('feat_pet_ui_records')}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><Calendar size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400">{t('feat_pet_ui_appts')}</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-3xl p-5 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">{t('home_w3_title')}</h4>
                            <ShieldCheck size={24} className="text-emerald-800 dark:text-emerald-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_species')}</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_g_species_cat')}</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_breed')}</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">Maine Coon</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_age')}</div>
                              <div className="w-2/3">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7 {t('feat_g_years_old')}</div>
                                <div className="text-[10px] text-slate-400">({t('feat_g_date3')})</div>
                              </div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_own_ui_weight')}</div>
                              <div className="w-2/3">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7.2 kg</div>
                                <div className="text-[10px] text-slate-400">{t('feat_g_last_update')}: 10 {t('feat_g_may')} 2024</div>
                              </div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_neuter')}</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_pet_ui_neutered')}</div>
                            </div>
                            <div className="flex pb-4">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085] mt-0.5">{t('feat_pet_ui_microchip')}</div>
                              <div className="w-2/3 text-sm font-bold text-slate-900 dark:text-slate-100">900215000123456</div>
                            </div>
                            <div className="bg-[#f2f7ed] dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-xl p-3 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-emerald-700 dark:text-emerald-400" />
                                <div>
                                  <div className="text-sm font-bold text-emerald-900 dark:text-emerald-100">{t('feat_pet_ui_vax_uptodate')}</div>
                                  <div className="text-[9px] text-emerald-700/70 dark:text-emerald-300/70">{t('feat_g_last_update')}: 10 {t('feat_g_may')} 2024</div>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-emerald-700 dark:text-emerald-400" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-3xl p-5 shadow-sm">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-100">{t('feat_pet_ui_vetinfo')}</h4>
                            <div className="text-amber-500"><Users size={18}/></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-[10px] text-slate-500 dark:text-[#789085] mb-0.5">{t('feat_pet_ui_vet')}</div>
                              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Dr. Ece Yılmaz</div>
                              <div className="text-[10px] text-slate-500 dark:text-[#789085] mt-0.5">{t('feat_sync_clinic')}</div>
                            </div>
                            <div className="w-10 h-10 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300"><PhoneCall size={18} /></div>
                          </div>
                        </div>
                      </div>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-transparent flex justify-around items-center px-4 pb-2 z-10">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-teal-800 dark:text-teal-400"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px] font-bold">{t('blog_p1_cat')}</span></div>
                        <div className="w-14 h-14 bg-teal-800 dark:bg-teal-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-white dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">{t('feat_pet_ui_appts')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><Users size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-2 lg:left-4 top-32 bg-white dark:bg-transparent p-3 rounded-2xl shadow-xl shadow-black/5 border border-slate-100 dark:border-transparent z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center"><QrCode size={18} className="text-teal-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 mb-0.5">{t('feat_pet_ui_sysnotif')}</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_pet_ui_tagread')}</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {/* TAB 3: COMMUNITY */}
              {activeTab === 'community' && (
                <motion.div key="community" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-16 w-full max-w-6xl mx-auto lg:pl-8 mt-4 lg:mt-4">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-4 text-center lg:text-left">
                    <div className="flex flex-col space-y-4 transform -translate-y-4 lg:-translate-y-8">
                    <div>
                      <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-2">{t('feat_com_badge')}</h2>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">{t('feat_com_title1')}<br/>{t('feat_com_title2')}</h3>
                    </div>
                    <p className="text-base lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-2">{t('feat_com_desc')}</p>
                    
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent transition-transform">
                        <ImageIcon size={24} className="text-fuchsia-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_com_f1_title')}</h4>
                        <p className="text-base text-[var(--text-muted)]">{t('feat_com_f1_desc')}</p>
                      </div>
                      <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent transition-transform">
                        <MessageCircle size={24} className="text-sky-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_com_f2_title')}</h4>
                        <p className="text-base text-[var(--text-muted)]">{t('feat_com_f2_desc')}</p>
                      </div>
                      <div className="sm:col-span-2 bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-200 dark:border-transparent flex items-center gap-4 transition-transform">
                        <div className="w-12 h-12 bg-emerald-50 dark:bg-[#0B1310] rounded-full flex items-center justify-center text-emerald-500 shrink-0"><Heart size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-lg mb-1">{t('feat_com_f3_title')}</h4>
                          <p className="text-base text-[var(--text-muted)]">{t('feat_com_f3_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[40%] flex justify-center lg:justify-end h-[640px] relative perspective-1000 mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.85] lg:scale-[0.92] origin-top lg:origin-top-right bg-white dark:bg-transparent rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col z-10 border border-slate-100 dark:border-transparent">

                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <div className="w-6"></div>
                        <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-100">{t('blog_p3_category')}</h3>
                        <div className="w-8 h-8 rounded-full border border-emerald-900 dark:border-emerald-100 flex items-center justify-center">
                          <Plus size={16} className="text-emerald-900 dark:text-emerald-100" />
                        </div>
                      </div>
                      <div className="flex justify-around items-center px-6 pt-2 pb-0">
                        <div className="pb-3 border-b-2 border-emerald-800 dark:border-emerald-400 px-2">
                          <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">{t('footer_explore')}</span>
                        </div>
                        <div className="pb-3 border-b-2 border-transparent px-2">
                          <span className="text-sm font-medium text-slate-500 dark:text-[#789085]">{t('feat_com_ui_following')}</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-4 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-slate-200 dark:[&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-thumb]:bg-slate-500/90 dark:[&::-webkit-scrollbar-thumb]:bg-slate-400/90 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><img src="/pet2.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{t('home_bento4_author')}</div>
                                <div className="text-[10px] text-slate-500">{t('home_bento4_time')}</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-800 dark:text-slate-200" />
                          </div>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mb-3">{t('feat_com_ui_post1')}</p>
                          <div className="w-full h-40 bg-slate-200 dark:bg-slate-700 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                            <img src="/pet2.jpg" alt="Post" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1"><Heart size={18} className="text-orange-500 fill-orange-500" /><span className="text-xs font-bold text-orange-500">128</span></div>
                              <div className="flex items-center gap-1"><MessageCircle size={18} className="text-slate-600 dark:text-slate-400" /><span className="text-xs text-slate-600 dark:text-slate-400 font-medium">12</span></div>
                            </div>
                            <div className="flex gap-3"><Share2 size={18} className="text-slate-600 dark:text-slate-400" /><Bookmark size={18} className="text-slate-600 dark:text-slate-400" /></div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">{t('feat_com_ui_comments12')}</div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><img src="/pet1.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Can & Pati</div>
                                <div className="text-[10px] text-slate-500">{t('feat_com_5_hours_ago')}</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-800 dark:text-slate-200" />
                          </div>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mb-3">{t('feat_com_ui_post2')}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1"><Heart size={18} className="text-orange-500 fill-orange-500" /><span className="text-xs font-bold text-orange-500">67</span></div>
                              <div className="flex items-center gap-1"><MessageCircle size={18} className="text-slate-600 dark:text-slate-400" /><span className="text-xs text-slate-600 dark:text-slate-400 font-medium">8</span></div>
                            </div>
                            <div className="flex gap-3"><Share2 size={18} className="text-slate-600 dark:text-slate-400" /></div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><img src="/duman.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Selin & Leo</div>
                                <div className="text-[10px] text-slate-500">{t('feat_com_1_day_ago')}</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-800 dark:text-slate-200" />
                          </div>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mb-2">{t('feat_com_ui_post3')}</p>
                          <div className="w-full h-40 bg-white dark:bg-transparent rounded-xl overflow-hidden mb-3"><img src="/pet3.jpg" alt="Post" className="w-full h-full object-cover" /></div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-transparent flex justify-around items-center px-4 pb-2 z-10">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px]">{t('blog_p1_cat')}</span></div>
                        <div className="w-14 h-14 bg-emerald-800 dark:bg-emerald-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-white dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-emerald-800 dark:text-emerald-400"><Users size={22} className="mb-1"/><span className="text-[9px] font-bold">{t('blog_p3_category')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-2 lg:left-4 top-24 bg-white dark:bg-transparent p-3 rounded-2xl shadow-xl shadow-black/5 border border-slate-100 dark:border-transparent z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center"><Heart size={18} className="text-rose-500 fill-rose-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 mb-0.5">{t('feat_com_ui_newpost')}</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_meet_leo')}</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================
            2. SAĞLIK GEÇMİŞİ (Bento Grid)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start pt-24 pb-8 flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
               <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                  <Activity size={16} /> {t('feat_timeline_title_label')}
               </div>
               <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_timeline_title2')}</h2>
               <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                 {t('feat_timeline_desc2')}
               </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min"
            >
              {/* Box 1: Wide Chart */}
              <div className="col-span-1 md:col-span-2 bg-white dark:bg-transparent rounded-3xl p-6 border border-slate-200 dark:border-transparent shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-[var(--text-main)] text-lg">{t('feat_ai_chart_title')}</h4>
                </div>
                <div className="h-44 flex items-end gap-2 px-2 mt-auto pt-6 pb-2">
                   {[
                      { h: 30, label: '+0.2', isDrop: false, month: 'Şub' },
                      { h: 60, label: '+0.5', isDrop: false, month: 'Mar' },
                      { h: 30, label: '-0.2', isDrop: true, month: 'Nis' },
                      { h: 90, label: '+0.8', isDrop: false, month: 'May' },
                      { h: 80, label: '+0.7', isDrop: false, month: 'Haz' },
                      { h: 60, label: '+0.5', isDrop: false, month: 'Tem' },
                      { h: 50, label: '+0.4', isDrop: false, isLatest: true, month: 'Ağu' },
                   ].map((item, i) => (
                     <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                       {/* Label */}
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }} 
                         whileInView={{ opacity: 1, y: 0 }} 
                         transition={{ delay: i * 0.1 + 0.3 }}
                         className={`text-[9px] font-black px-1.5 py-0.5 rounded-md whitespace-nowrap mb-1 ${
                           item.isLatest ? 'bg-emerald-500 text-white shadow-sm' : 
                           item.isDrop ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400' : 
                           'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400'
                         }`}
                       >
                         {item.label}
                       </motion.div>
                       
                       {/* Bar Wrapper */}
                       <div className="w-full flex-1 flex items-end">
                         <motion.div 
                           initial={{ height: 0 }} 
                           whileInView={{ height: `${item.h}%` }} 
                           transition={{ delay: i * 0.1 }} 
                           className={`w-full rounded-t-xl ${
                             item.isLatest ? 'bg-emerald-500 shadow-sm' : 
                             item.isDrop ? 'bg-rose-200 dark:bg-rose-800/50' : 
                             'bg-emerald-100 dark:bg-emerald-900/50'
                           }`}
                         ></motion.div>
                       </div>

                       {/* Month */}
                       <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-2">
                         {item.month}
                       </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Box 2: Tall List */}
              <div className="col-span-1 row-span-2 bg-white dark:bg-transparent rounded-3xl p-6 border border-slate-200 dark:border-transparent shadow-sm flex flex-col">
                <h4 className="font-bold text-[var(--text-main)] text-lg mb-4">{t('feat_timeline_visits')}</h4>
                <div className="space-y-3 flex-1">
                   {[
                      { type: t('feat_timeline_v1_type'), date: t('feat_g_aug_12'), note: t('feat_timeline_v1_note'), icon: <CheckCircle2 size={18}/> },
                      { type: t('feat_timeline_v2_type'), date: t('feat_g_jul_12'), note: t('feat_timeline_v2_note'), icon: <Stethoscope size={18}/> },
                      { type: t('feat_timeline_v3_type'), date: t('feat_g_jun_12'), note: t('feat_timeline_v3_note'), icon: <Activity size={18}/> },
                      { type: t('feat_timeline_v4_type'), date: t('feat_g_may_12'), note: t('feat_timeline_v4_note'), icon: <Activity size={18}/> },
                   ].map((visit, i) => (
                      <div key={i} className="flex gap-3 items-center py-2.5 px-3 bg-white dark:bg-transparent rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                         <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shrink-0">
                            {visit.icon}
                         </div>
                         <div className="text-left flex-1">
                            <div className="flex justify-between items-center">
                               <div className="font-black text-[15px] text-[var(--text-main)] leading-tight">{visit.type}</div>
                               <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">{visit.date}</div>
                            </div>
                            <div className="text-[11px] text-[var(--text-muted)] font-medium mt-1">{visit.note}</div>
                         </div>
                      </div>
                   ))}
                </div>
              </div>

              {/* Box 3: Square Stats */}
              <div className="col-span-1 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl p-6 text-white flex items-center justify-center shadow-md relative overflow-hidden min-h-[160px]">
                 <div className="absolute top-6 left-6">
                    <Activity size={28} className="opacity-80" />
                 </div>
                 <div className="text-center">
                   <div className="text-3xl font-black mb-1">{t('feat_ai_excellent')}</div>
                   <div className="text-cyan-100 text-xs font-medium">{t('feat_timeline_score_label')}</div>
                 </div>
              </div>

              {/* Box 4: Square Info */}
              <div className="col-span-1 bg-white dark:bg-transparent rounded-3xl p-6 border border-slate-200 dark:border-transparent shadow-sm flex flex-col justify-center items-center text-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center"><Heart size={24}/></div>
                 <div>
                   <div className="font-bold text-sm text-[var(--text-main)]">{t('feat_sec_card_allergy')}</div>
                   <div className="text-[10px] text-[var(--text-muted)] mt-1">{t('feat_g_allergy_val')}</div>
                 </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* =========================================
            1. AKILLI AŞI TAKVİMİ (Sol Metin, Sağ Grid)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start snap-always py-20 lg:py-0 flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left: Text */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-indigo-600 dark:text-indigo-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                  <Bell size={16} /> {t('feat_vax_label')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_timeline_f1')}</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  {t('feat_vax_desc')}
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-[var(--text-main)] font-bold bg-white dark:bg-transparent px-4 py-2 rounded-xl">
                    <CheckCircle2 size={18} className="text-indigo-500" /> {t('feat_vax_f1')}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-main)] font-bold bg-white dark:bg-transparent px-4 py-2 rounded-xl">
                    <CheckCircle2 size={18} className="text-indigo-500" /> {t('feat_vax_f2')}
                  </div>
                </div>
              </div>

              {/* Right: Dynamic Dashboard Visual */}
              {/* Right: Dynamic Dashboard Visual */}
              {/* Right: Dynamic Dashboard Visual */}
              {/* Right: Dynamic Dashboard Visual */}
              {/* Right: Dynamic Dashboard Visual */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md bg-white dark:bg-transparent rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-teal-100 dark:border-transparent relative overflow-hidden">
                   
                   {/* Health Summary Box */}
                   <div className="bg-slate-50 dark:bg-transparent rounded-3xl p-6 border border-slate-100 dark:border-transparent mb-8 relative z-10 shadow-sm">
                      <div className="text-sm font-black text-indigo-900 dark:text-indigo-200 mb-6 flex items-center gap-2">
                         <Activity size={16} className="text-indigo-500" />{t('feat_own_ui_health')}</div>
                      <div className="flex justify-between items-center mb-6">
                         <div className="text-center w-full">
                            <div className="w-12 h-12 mx-auto bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-sm border border-emerald-200/50 dark:border-emerald-700/50 flex items-center justify-center mb-3 hover:scale-110 transition-transform"><Activity size={20}/></div>
                            <div className="font-black text-[var(--text-main)] text-lg">1 kg</div>
                            <div className="text-[11px] font-medium text-slate-500 mt-1 uppercase tracking-wider">{t('feat_own_ui_weight')}</div>
                         </div>
                         <div className="w-px h-12 bg-slate-200 dark:bg-slate-700/50"></div>
                         <div className="text-center w-full">
                            <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm border border-blue-200/50 dark:border-blue-700/50 flex items-center justify-center mb-3 hover:scale-110 transition-transform"><CheckCircle2 size={20}/></div>
                            <div className="font-black text-[var(--text-main)] text-lg">0</div>
                            <div className="text-[11px] font-medium text-slate-500 mt-1 uppercase tracking-wider">{t('feat_vax_delayed')}</div>
                         </div>
                         <div className="w-px h-12 bg-slate-200 dark:bg-slate-700/50"></div>
                         <div className="text-center w-full">
                            <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-2xl shadow-sm border border-purple-200/50 dark:border-purple-700/50 flex items-center justify-center mb-3 hover:scale-110 transition-transform"><Calendar size={20}/></div>
                            <div className="font-black text-[var(--text-main)] text-lg">07.09</div>
                            <div className="text-[11px] font-medium text-slate-500 mt-1 uppercase tracking-wider">{t('feat_vax_next')}</div>
                         </div>
                      </div>
                      <div className="bg-emerald-500 text-white p-4 rounded-2xl flex items-center justify-between shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                         <div className="flex items-center gap-3 font-bold text-sm">
                            <ShieldCheck size={20} className="text-white"/>{t('feat_pet_ui_vax_uptodate')}</div>
                         <ArrowRight size={16} className="text-emerald-100"/>
                      </div>
                   </div>

                   {/* Upcoming List */}
                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-5">
                         <div className="font-black text-[var(--text-main)] text-lg">{t('feat_own_ui_upcoming')}</div>
                         <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 cursor-pointer transition-colors">{t('feat_own_ui_seeall')}</div>
                      </div>
                      <div className="space-y-4">
                         <div className="bg-emerald-500 p-4 rounded-2xl flex items-center justify-between shadow-lg shadow-black/10 dark:shadow-black/20 hover:scale-[1.02] transition-transform cursor-pointer text-white">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/20"><Stethoscope size={20}/></div>
                               <div>
                                  <div className="font-black text-white text-md mb-1">{t('feat_appt_svc2')}</div>
                                  <div className="text-xs text-teal-50 font-bold flex items-center gap-1"><Calendar size={12}/> 26.08.2026</div>
                               </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-black tracking-wide border border-white/20">2 {t('feat_vax_days')}</div>
                         </div>
                         
                         <div className="bg-indigo-500 p-4 rounded-2xl flex items-center justify-between shadow-lg shadow-black/10 dark:shadow-black/20 hover:scale-[1.02] transition-transform cursor-pointer text-white">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/20"><ShieldCheck size={20}/></div>
                               <div>
                                  <div className="font-black text-white text-md mb-1">{t('feat_timeline_vax')}</div>
                                  <div className="text-xs text-indigo-100 font-bold flex items-center gap-1"><Calendar size={12}/> 07.09.2026</div>
                               </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-black tracking-wide border border-white/20">14 {t('feat_vax_days')}</div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
{/* =========================================
            3. RANDEVU YÖNETİMİ (Sol Görsel, Sağ Metin)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
              
              {/* Left: Dynamic Visual */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full flex justify-center lg:justify-start"
              >
                <div className="w-full max-w-md bg-white dark:bg-transparent rounded-[2rem] p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-teal-100 dark:border-transparent relative overflow-hidden flex flex-col gap-4">

                   {/* Top Vibrant Card - Appointment Summary & Info */}
                   <div className="bg-emerald-500 rounded-3xl p-5 shadow-xl shadow-black/10 dark:shadow-black/20 relative overflow-hidden group">
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 hidden rounded-full"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                         <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[11px] font-black tracking-wider border border-white/20 flex items-center gap-1.5">
                            <Calendar size={14} /> 20.07.2027
                         </div>
                         <Stethoscope className="text-white/80" size={22} />
                      </div>

                      <div className="relative z-10 mb-6">
                         <div className="text-teal-50 text-xs font-bold mb-1 uppercase tracking-wider">{t('feat_appt_sel_time')}</div>
                         <div className="text-white text-4xl font-black drop-shadow-sm">
                            16:30
                         </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-md text-white p-3.5 rounded-2xl flex items-start gap-3 shadow-sm border border-white/20 relative z-10">
                         <div className="bg-white/20 rounded-full p-1.5 shrink-0 mt-0.5">
                            <CheckCircle2 size={16} className="text-white"/>
                         </div>
                         <div>
                            <div className="font-bold text-sm mb-0.5">{t('feat_appt_timeok')}</div>
                            <div className="text-[10px] text-teal-50 leading-tight font-medium">{t('feat_appt_s2')}</div>
                         </div>
                      </div>
                   </div>

                   {/* Bottom Section - Selection Form */}
                   <div className="relative z-10 flex flex-col gap-3.5">
                      
                      {/* Ne randevusu? */}
                      <div>
                         <div className="font-black text-[var(--text-main)] text-base mb-2">{t('feat_appt_what')}</div>
                         <div className="flex flex-wrap gap-2">
                            {[t('feat_appt_gen_exam'), t('feat_appt_vax_app'), t('feat_appt_par_pro'), t('feat_timeline_v1_type')].map(type => (
                               <div key={type} className={`px-3 py-2 rounded-full text-xs font-bold cursor-pointer transition-colors ${
                                  type === t('feat_appt_opt1')
                                  ? 'bg-emerald-500 text-white shadow-sm'
                                  : 'bg-slate-50 dark:bg-transparent text-[var(--text-muted)] hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-transparent'
                               }`}>
                                  {type}
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Uygun Saatler */}
                      <div>
                         <div className="font-black text-[var(--text-main)] text-base mb-2">{t('feat_appt_s1')}</div>
                         <div className="grid grid-cols-4 gap-2">
                            {['14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'].map(time => (
                               <div key={time} className={`py-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                                  time === '16:30' 
                                  ? 'bg-emerald-500 text-white shadow-md shadow-black/10 dark:shadow-black/20 scale-105' 
                                  : 'bg-slate-50 dark:bg-transparent text-[var(--text-muted)] hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-transparent'
                               }`}>
                                  {time}
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Not */}
                      <div>
                         <div className="font-black text-[var(--text-main)] text-base mb-1.5">{t('feat_appt_note')}</div>
                         <div className="w-full bg-white dark:bg-transparent border border-slate-200 dark:border-transparent rounded-xl p-2.5 text-xs text-slate-400 font-medium">
                            Veteriner hekime iletmek istediğiniz notlar...
                         </div>
                      </div>

                      {/* Button */}
                      <button className="w-full py-3 mt-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-black/10 dark:shadow-black/20 hover:-translate-y-0.5">
                         {t('feat_appt_btn')} <ArrowRight size={18}/>
                      </button>

                   </div>
                </div>
              </motion.div>

              {/* Right: Text */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-blue-600 dark:text-blue-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                  <Calendar size={16} /> {t('feat_appt_label')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_appt_title')}</h2>
                <div className="space-y-4">
                  <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                    {t('feat_appt_desc1')}
                  </p>
                  <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                    {t('feat_appt_desc2')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SMART HEALTH ASSISTANT (Bento Box) */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start snap-always relative z-20 bg-[var(--bg-main)] flex flex-col justify-center pt-16 pb-8 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.3)] border-t border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6">{t('feat_ai_sub1')}<br/><span className="text-inherit">{t('feat_ai_title')}</span></h2>
            <p className="text-lg text-[var(--text-muted)] font-medium max-w-xl lg:max-w-2xl mx-auto">{t('feat_ai_desc')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {/* Bento Item 1: Weight Tracker */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 bg-white dark:bg-transparent rounded-3xl p-6 border-2 border-rose-200 dark:border-rose-900 shadow-lg relative overflow-hidden group">
               <div className="relative z-10 w-2/3">
                 <Activity className="text-rose-500 mb-2" size={28} />
                 <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{t('feat_ai_f1_title')}</h3>
                 <p className="text-sm text-[var(--text-muted)] leading-relaxed">"{t('feat_ai_advice')}" {t('feat_ai_system')}</p>
               </div>
               <div className="absolute right-0 bottom-0 w-[45%] h-[80%] bg-white/50 dark:bg-transparent backdrop-blur-sm rounded-tl-2xl border-t border-l border-white/60 dark:border-transparent p-4 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                  <div className="flex items-end gap-2 h-[80%] w-full">
                     <div className="w-1/4 bg-rose-200 dark:bg-rose-900/40 rounded-t h-[40%]"></div>
                     <div className="w-1/4 bg-rose-300 dark:bg-rose-900/60 rounded-t h-[55%]"></div>
                     <div className="w-1/4 bg-rose-400 dark:bg-rose-900/80 rounded-t h-[75%]"></div>
                     <div className="w-1/4 bg-rose-500 dark:bg-rose-600 rounded-t h-[95%] relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded-full shadow-sm">Trend</div></div>
                  </div>
               </div>
            </motion.div>
            
            {/* Bento Item 2: Reminders */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-transparent rounded-3xl p-6 border-2 border-indigo-200 dark:border-indigo-900 shadow-lg flex flex-col justify-between group">
               <div>
                 <Bell className="text-indigo-500 mb-2" size={28} />
                 <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{t('feat_timeline_title')}</h3>
                 <p className="text-sm text-[var(--text-muted)]">{t('feat_vax_summary')}</p>
               </div>
               <div className="mt-4 bg-white/70 dark:bg-transparent p-4 rounded-2xl backdrop-blur-sm border border-white/60 dark:border-transparent flex items-center justify-between group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                 <span className="text-sm font-bold text-[var(--text-main)]">{t('feat_timeline_para')}</span>
                 <span className="text-xs font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">{t('feat_tomorrow')}</span>
               </div>
            </motion.div>
            
            {/* Bento Item 3: Digital ID */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-transparent rounded-3xl p-6 border-2 border-emerald-200 dark:border-emerald-900 shadow-lg flex flex-col justify-center group text-center relative overflow-hidden">
               <QrCode className="text-emerald-500 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" size={32} />
               <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{t('feat_sec_qr')}</h3>
               <p className="text-sm text-[var(--text-muted)]">{t('feat_radar_f1')}</p>
            </motion.div>

            {/* Bento Item 4: Emergency Radar */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-xl flex items-center justify-between overflow-hidden group relative">
               <div className="z-10 w-3/5 lg:w-1/2">
                 <MapPin className="text-sky-400 mb-2" size={28} />
                 <h3 className="text-2xl font-bold text-white mb-2">{t('feat_radar_title')}</h3>
                 <p className="text-sm text-slate-300 leading-relaxed">{t('feat_radar_desc')}</p>
               </div>
               <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center pointer-events-none">
                  <div className="relative w-48 h-48 flex items-center justify-center translate-x-12">
                    <div className="absolute w-20 h-20 bg-sky-500/20 rounded-full animate-ping"></div>
                    <div className="absolute w-32 h-32 border border-sky-500/30 rounded-full"></div>
                    <div className="absolute w-48 h-48 border border-sky-500/10 rounded-full"></div>
                    <div className="w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-black/5 z-10 relative">
                       <Globe size={24} />
                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* =========================================================
          ANA SAYFADAN TAŞINAN BÖLÜMLER AŞAĞIDADIR
          ========================================================= */}

        {/* =========================================
            4. ACİL DURUM KARTI
            ========================================= */}
        <section className="min-h-[100dvh] lg:h-[100dvh] overflow-hidden snap-start snap-always flex items-center justify-center bg-white dark:bg-zinc-950 border-b border-[var(--border-color)] relative">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              
              {/* Left Side: Text and Features */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-teal-600 dark:text-teal-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                      <Heart size={16} /> {t('feat_emerg_label')}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight tracking-tight">{t('feat_sec_card')}</h2>
                  <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {t('feat_emerg_desc')}
                  </p>
                </div>

                {/* Features List */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 max-w-md mx-auto lg:mx-0 text-left"
                >
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Share2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">{t('feat_sec_card_share_btn')}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{t('feat_sec_card_share')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">{t('feat_sec_title2')}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{t('feat_sec_desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">{t('feat_emerg_f3')}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{t('feat_sec_card_desc')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Card */}
              <div className="flex-1 w-full max-w-[36rem] shrink-0 mx-auto mt-6 lg:mt-10">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl shadow-slate-200/50 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-teal-100 dark:border-teal-900/30 text-left relative group">
                    
                    {/* Header Bar (Teal) */}
                    <div className="bg-teal-600 dark:bg-teal-700 px-6 py-4 flex items-center justify-between relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                      <div className="flex items-center gap-2.5 text-white font-bold tracking-wide relative z-10">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-sm">
                          <Activity size={18} />
                        </div>
                        <span className="text-base">{t('feat_sec_card_badge')}</span>
                      </div>
                      <Heart size={20} className="text-teal-400/50 relative z-10" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      
                      {/* Profile Section */}
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-[3px] border-teal-50 dark:border-teal-900/20 shadow-sm shrink-0">
                          <img src="/duman.jpg" alt="Duman" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-1.5">Duman</h3>
                          <div className="inline-flex items-center gap-1.5 bg-white dark:bg-zinc-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-zinc-700">
                            <User size={14} className="text-teal-600 dark:text-teal-400" />
                            <span className="text-slate-600 dark:text-slate-300 text-xs font-semibold">{t('feat_emerg_owner')}: Aslı Yılmaz</span>
                          </div>
                        </div>
                        <div className="hidden sm:flex w-14 h-14 bg-teal-50 dark:bg-teal-900/20 rounded-full items-center justify-center shrink-0">
                           <ShieldCheck size={28} className="text-teal-600 dark:text-teal-400" />
                        </div>
                      </div>

                      {/* Table-like list (as in the poster) */}
                      <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800/20 shadow-inner">
                         
                         {/* Tür / Cinsiyet / Kilo */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-[#789085] font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Heart size={16} />
                             </div>
                             {t('feat_emerg_lbl_species')}
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-800 dark:text-white font-semibold text-sm sm:text-[15px]">{t('feat_emerg_val_species')}</div>
                         </div>

                         {/* Yaş */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-[#789085] font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Calendar size={16} />
                             </div>{t('feat_pet_ui_age')}</div>
                           <div className="w-7/12 sm:w-2/3 text-slate-800 dark:text-white font-semibold text-sm sm:text-[15px]">8 {t('feat_emerg_months')}</div>
                         </div>

                         {/* {t('feat_emerg_lbl_chronic')}lar */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-[#789085] font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-rose-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Activity size={16} />
                             </div>
                             {t('feat_emerg_lbl_chronic')}
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-[15px]">{t('feat_sec_card_asthma')}</div>
                         </div>

                         {/* İlaçlar & Alerjiler */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-[#789085] font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-amber-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <AlertTriangle size={16} />
                             </div>
                             {t('feat_emerg_lbl_allergy')}
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-[15px]">{t('feat_sec_card_diet')}</div>
                         </div>

                         {/* {t('feat_emerg_lbl_vax')} */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-[#789085] font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-emerald-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <ShieldCheck size={16} />
                             </div>
                             {t('feat_emerg_lbl_vax')}
                           </div>
                           <div className="w-7/12 sm:w-2/3 flex flex-wrap items-center gap-2">
                             <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                               {t('feat_emerg_val_uptodate')}
                             </span>
                             <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-white dark:bg-zinc-800 px-2 py-1 rounded">{t('feat_emerg_last')}: 24.07.26</span>
                           </div>
                         </div>

                         {/* Mikroçip No */}
                         <div className="flex items-center p-3.5 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-[#789085] font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-indigo-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Eye size={16} />
                             </div>{t('feat_pet_ui_microchip')}</div>
                           <div className="w-7/12 sm:w-2/3 text-slate-800 dark:text-white font-mono font-bold tracking-widest text-sm sm:text-base">
                             9810 •••• •••• 234
                           </div>
                         </div>

                      </div>

                      {/* Footer of the card */}
                      <div className="flex items-center justify-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-medium pt-5 pb-1">
                        <Heart size={14} className="text-rose-400" />
                        {t('feat_emerg_note')}
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            7. IRK REHBERİ (Sağ Metin, Sol Görsel)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 snap-always flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)] relative overflow-hidden">
          {/* Background Decorative Blurs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full hidden pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full hidden pointer-events-none"></div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center">
              
              {/* Right: Dynamic Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md bg-white dark:bg-transparent rounded-[2rem] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-teal-100 dark:border-transparent">
                   {/* Card Header with Image */}
                   <div className="relative h-48 rounded-[2.5rem] overflow-hidden mb-6">
                      <img src="/pet2.jpg" alt="Golden Retriever" className="w-full h-full object-cover object-[50%_35%]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-5 left-5">
                         <div className="text-white font-black text-2xl drop-shadow-md mb-1">Golden Retriever</div>
                         <div className="text-white/90 text-xs font-bold flex items-center gap-1.5"><Search size={14}/> {t('feat_breed_result')}</div>
                      </div>
                   </div>

                   <div className="px-4 pb-4 space-y-5">
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>{t('feat_ai_energy')}</span> <span className="text-cyan-500">{t('feat_ai_veryhigh')}</span>
                         </div>
                         <div className="h-2.5 bg-white dark:bg-transparent rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ delay: 0.5, duration: 1 }} className="h-full bg-cyan-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>{t('feat_ai_kids')}</span> <span className="text-blue-500">{t('feat_ai_excellent')}</span>
                         </div>
                         <div className="h-2.5 bg-white dark:bg-transparent rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ delay: 0.7, duration: 1 }} className="h-full bg-blue-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>{t('feat_ai_train')}</span> <span className="text-indigo-500">{t('feat_ai_high')}</span>
                         </div>
                         <div className="h-2.5 bg-white dark:bg-transparent rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ delay: 0.9, duration: 1 }} className="h-full bg-indigo-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>{t('feat_ai_strangers')}</span> <span className="text-emerald-500">{t('feat_ai_friendly')}</span>
                         </div>
                         <div className="h-2.5 bg-white dark:bg-transparent rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ delay: 1.1, duration: 1 }} className="h-full bg-emerald-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>{t('feat_ai_shed')}</span> <span className="text-amber-500">{t('feat_ai_overweight')}</span>
                         </div>
                         <div className="h-2.5 bg-white dark:bg-transparent rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ delay: 1.3, duration: 1 }} className="h-full bg-amber-500"></motion.div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Left: Text & Features */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-cyan-600 dark:text-cyan-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent mb-6">
                    <BookOpen size={16} />{t('feat_encyclopedia_title')}</div>
                  <h2 className="text-4xl lg:text-5xl lg:leading-[1.1] font-extrabold text-[var(--text-main)] mb-6">
                    {t('feat_ai_over_1100')} <span className="text-inherit">{t('feat_ai_breed')}</span>
                  </h2>
                  <p className="text-[15px] lg:text-[17px] text-[var(--text-muted)] font-medium leading-relaxed">{t('feat_encyclopedia_desc')}</p>
                </div>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-100 dark:border-transparent flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl"><Activity size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-lg mb-0.5">{t('feat_ai_genetics')}</div>
                         <div className="text-base text-[var(--text-muted)] font-medium">{t('feat_ai_genetics_desc')}</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-100 dark:border-transparent flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl"><Bone size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-lg mb-0.5">{t('feat_breed_diet')}</div>
                         <div className="text-base text-[var(--text-muted)] font-medium">{t('feat_ai_diet')}</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-100 dark:border-transparent flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl"><Smile size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-lg mb-0.5">{t('feat_ai_char')}</div>
                         <div className="text-base text-[var(--text-muted)] font-medium">{t('feat_ai_behavior')}</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-transparent p-4 rounded-2xl border border-slate-100 dark:border-transparent flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-emerald-50 dark:bg-[#0B1310] text-emerald-600 dark:text-emerald-400 rounded-xl"><ShieldCheck size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-lg mb-0.5">{t('feat_breed_env')}</div>
                         <div className="text-base text-[var(--text-muted)] font-medium">{t('feat_ai_env')}</div>
                      </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            6. SAHİPLENDİRME (3'lü Kart Standard Grid)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto snap-start py-20 lg:py-24 snap-always flex flex-col justify-center bg-white dark:bg-amber-950/20 border-b border-[var(--border-color)] overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-teal-600 dark:text-teal-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent mb-3">
                  <Heart size={16} /> {t('feat_adoption_new_home')}
               </div>
               <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-3">{t('feat_adopt_title')}</h2>
               <p className="text-[14px] sm:text-[15px] lg:text-base text-[var(--text-muted)] font-medium mb-5 leading-relaxed">
                  {t('feat_adopt_desc1_p1')} <span className="whitespace-nowrap">{t('feat_adopt_desc1_p2')}</span> {t('feat_adopt_desc1_p3')} 
                  {t('feat_adopt_desc2_p1')} <span className="whitespace-nowrap">{t('feat_sec_title')}</span> {t('feat_adopt_desc2_p2')}
                  <br className="hidden sm:block" />
                  <span className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-white dark:bg-transparenttext-rose-600 dark:text-rose-400rounded-lg font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparentdark:bg-rose-950/30 dark:border-rose-900/50 shadow-sm"><PawPrint size={14}/> {t('feat_adoption_no_sale')}</span>
               </p>

               {/* Feature Badges */}
               <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><FileText size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">{t('feat_adoption_post_ad')}</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><Heart size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">{t('feat_appt_submit')}</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><ShieldCheck size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">{t('feat_sec_f1')}</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><Users size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">{t('blog_p3_category')}</span>
                   </div>
               </div>
               
               <p className="mt-5 text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center gap-2 text-sm">
                  {t('feat_adoption_love_beginnings')} <Heart size={14} className="fill-teal-600 dark:fill-teal-400"/>
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Adoption Card 1 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-transparent rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-transparent hover:-translate-y-1 transition-transform">
                  <div className="h-40 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                     <img src="/pet3.jpg" alt="British Shorthair" className="w-full h-full object-cover object-[50%_40%]" />
                     <div className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur text-rose-600 text-[9px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"><Heart size={10}/> {t('feat_adoption_seeking_home')}</div>
                  </div>
                  <h4 className="text-lg font-black text-[var(--text-main)] mb-1">Moka</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] mb-3">{t('feat_breed_cat1')}</p>
                  <div className="bg-slate-50 dark:bg-transparent rounded-lg p-2.5 text-[11px] font-bold text-slate-500 text-center flex items-center justify-center gap-1.5">
                     <ShieldCheck size={14}/> {t('feat_adoption_sale_forbidden')}
                  </div>
               </motion.div>

               {/* Adoption Card 2 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-transparent rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-transparent hover:-translate-y-1 transition-transform">
                  <div className="h-40 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                     <img src="/pet2.jpg" alt="Golden Retriever" className="w-full h-full object-cover object-[50%_40%]" />
                     <div className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur text-rose-600 text-[9px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"><Heart size={10}/> {t('feat_adoption_seeking_home')}</div>
                  </div>
                  <h4 className="text-lg font-black text-[var(--text-main)] mb-1">Max</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] mb-3">{t('feat_adoption_dog_desc')}</p>
                  <div className="bg-slate-50 dark:bg-transparent rounded-lg p-2.5 text-[11px] font-bold text-slate-500 text-center flex items-center justify-center gap-1.5">
                     <ShieldCheck size={14}/> {t('feat_adoption_sale_forbidden')}
                  </div>
               </motion.div>
               
               {/* Adoption Card 3 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-transparent rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-transparent hover:-translate-y-1 transition-transform hidden md:block">
                  <div className="h-40 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                     <img src="/pet1.jpg" alt="Tekir" className="w-full h-full object-cover" />
                     <div className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur text-rose-600 text-[9px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"><Heart size={10}/> {t('feat_adoption_seeking_home')}</div>
                  </div>
                  <h4 className="text-lg font-black text-[var(--text-main)] mb-1">Luna</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] mb-3">{t('feat_breed_cat2')}</p>
                  <div className="bg-slate-50 dark:bg-transparent rounded-lg p-2.5 text-[11px] font-bold text-slate-500 text-center flex items-center justify-center gap-1.5">
                     <ShieldCheck size={14}/> {t('feat_adoption_sale_forbidden')}
                  </div>
               </motion.div>
            </div>

          </div>
        </section>

        
      {/* =========================================
            5. TOPLULUK (Sol Görsel, Sağ Metin)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 snap-always flex items-center justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)] overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              
              {/* Left Column: Abstract Community & Messaging Card */}
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.7 }}
                 className="flex-1 w-full max-w-[36rem] shrink-0 relative mt-8 lg:mt-0"
              >
                 {/* Main Community Feed Card (Tall Rectangular) */}
                 <div className="bg-[#ffffff] dark:bg-zinc-950 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl border border-slate-100 dark:border-zinc-800 relative z-10 overflow-hidden flex flex-col h-[660px]">
                    
                    {/* Top Header */}
                    <div className="px-6 pt-7 pb-4 flex items-center justify-between bg-white dark:bg-zinc-900 shrink-0">
                       <h3 className="text-3xl font-black text-slate-800 dark:text-white">{t('blog_p3_category')}</h3>
                       <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"><Search size={20} /></div>
                          <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold text-2xl leading-none pb-1 cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-900/70 transition-colors">+</div>
                       </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex items-center justify-between px-6 py-2.5 border-b border-slate-200 dark:border-zinc-800 text-[13px] font-bold bg-white dark:bg-zinc-900 shrink-0 shadow-sm">
                       <div className="pb-1.5 border-b-[3px] border-slate-800 dark:border-white text-slate-800 dark:text-white cursor-pointer">{t('footer_explore')}</div>
                       <div className="pb-1.5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">{t('feat_com_ui_tab2')}</div>
                       <div className="pb-1.5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">{t('feat_com_ui_tab3')}</div>
                       <div className="pb-1.5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">{t('blog_p3_cat')}</div>
                    </div>

                    {/* Feed Container */}
                    <div className="flex-1 overflow-hidden px-4 py-5 space-y-5 relative">
                       {/* Fade out gradient at bottom */}
                       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffffff] dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

                       {/* Post 1 */}
                       <div className="bg-white dark:bg-zinc-900 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-800">
                          <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-100 dark:border-zinc-700">
                                   <img src="/duman.jpg" alt="Can" className="w-full h-full object-cover object-[75%_35%] scale-[1.5]" />
                                </div>
                                <div>
                                   <div className="font-bold text-[14px] text-slate-800 dark:text-white leading-tight">{t('feat_com_ui_author1')}</div>
                                   <div className="text-[12px] text-slate-400 font-medium">{t('feat_com_ui_time1')}</div>
                                </div>
                             </div>
                             <MoreHorizontal size={20} className="text-slate-400 cursor-pointer" />
                          </div>
                          
                          <p className="text-[14px] text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-medium">
                            {t('feat_social_post1')}
                          </p>
                          
                          <div className="rounded-2xl overflow-hidden mb-4 h-64 sm:h-72 bg-white dark:bg-zinc-800">
                             <img src="/moda-kedi.jpg" alt="Cat in park" className="w-full h-full object-cover object-bottom" />
                          </div>
                          
                          <div className="flex items-center justify-between text-slate-400">
                             <div className="flex items-center gap-5">
                                <div className="flex items-center gap-1.5 cursor-pointer text-rose-500 transition-colors"><Heart size={18} className="fill-rose-500" /> <span className="text-sm font-bold">35</span></div>
                                <div className="flex items-center gap-1.5 cursor-pointer hover:text-teal-600 transition-colors"><MessageCircle size={18} /> <span className="text-sm font-medium">10</span></div>
                             </div>
                             <div className="flex items-center gap-4">
                                <Send size={18} className="cursor-pointer hover:text-teal-600 transition-colors" />
                                <Bookmark size={18} className="text-teal-600 fill-teal-600 dark:text-teal-500 dark:fill-teal-500 cursor-pointer" />
                             </div>
                          </div>
                       </div>
                       
                       {/* Post 2 Snippet */}
                       <div className="bg-white dark:bg-zinc-900 rounded-t-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-800 h-28 overflow-hidden relative opacity-70">
                          <div className="flex items-center gap-3 mb-2">
                             <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-slate-100"><PawPrint size={18}/></div>
                             <div>
                                <div className="font-bold text-[14px] text-slate-800 dark:text-white leading-tight">{t('feat_com_ui_author2')}</div>
                                <div className="text-[12px] text-slate-400 font-medium">1 hafta önce</div>
                             </div>
                          </div>
                          <p className="text-[14px] text-slate-700 dark:text-slate-300 font-medium">Senorita bugün çok keyifli 🐾</p>
                       </div>
                    </div>
                 </div>

                 {/* Messaging Floating Card */}
                 <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-12 w-[95%] sm:w-[340px] bg-white dark:bg-transparent rounded-[1.5rem] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-2xl border border-slate-100 dark:border-transparent z-20 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-50 dark:border-transparent pb-2.5">
                       <div className="flex items-center gap-2.5">
                         <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">M</div>
                         <div>
                            <div className="font-bold text-[13px] text-slate-800 dark:text-white">{t('feat_com_ui_author1')}</div>
                            <div className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> {t('feat_social_online')}</div>
                         </div>
                       </div>
                       <ShieldCheck size={18} className="text-emerald-500 opacity-80" />
                    </div>
                    <div className="space-y-2">
                       <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2.5 rounded-xl rounded-tl-sm sm:rounded-tl-2xl sm:rounded-tr-sm text-[12px] sm:text-[13px] leading-snug text-white shadow-sm max-w-[90%] ml-auto">
                         {t('feat_social_msg1')}
                       </div>
                       <div className="bg-slate-100 dark:bg-transparent p-2.5 rounded-xl rounded-tr-sm sm:rounded-tr-2xl sm:rounded-tl-sm text-[12px] sm:text-[13px] leading-snug text-slate-800 dark:text-white shadow-sm max-w-[85%]">
                         {t('feat_social_msg2')}
                       </div>
                    </div>
                 </div>

                 {/* Decorative Background Element */}
                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200/50 dark:bg-amber-900/20 rounded-full hidden -z-10"></div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-200/50 dark:bg-teal-900/20 rounded-full hidden -z-10"></div>
              </motion.div>

              {/* Right Column: Text */}
              <div className="flex-1 flex flex-col gap-8 max-w-[500px]">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-amber-600 dark:text-amber-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                      <MessageCircle size={16} /> {t('feat_social_network_match')}
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_radar_f2')}</h2>
                   <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                     {t('feat_social_network_desc')}
                   </p>
                   <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 px-5 py-4 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 w-max mt-4">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800/50 rounded-full flex items-center justify-center shrink-0">
                         <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                         <div className="font-bold text-[15px] text-emerald-800 dark:text-emerald-300">{t('feat_com_spam_title')}</div>
                         <div className="text-[12px] text-emerald-600/80 dark:text-emerald-400/80 font-medium mt-0.5">{t('feat_radar_f3')}</div>
                      </div>
                   </div>
                </motion.div>
              </div>

            </div>
            
          </div>
        </section>

        {/* =========================================
            8. B2B KLİNİKLER İÇİN
            ========================================= */}
        <section className="min-h-[100dvh] h-auto snap-start py-12 lg:py-16 snap-always flex flex-col justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
            
            <div className="max-w-3xl mx-auto mb-8 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-blue-600 dark:text-blue-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                  <Stethoscope size={16} /> B2B Portal
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_b2b_title')}</h2>
              <p className="text-[14px] lg:text-[15px] text-[var(--text-muted)] font-medium leading-relaxed">
                {t('feat_clinic_desc')}
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl bg-white dark:bg-transparent rounded-[2rem] border border-slate-200 dark:border-transparent shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none flex flex-col md:flex-row overflow-hidden"
            >
               {/* Sidebar (Dark Green matching the reference) */}
               <div className="w-full md:w-[240px] bg-[#0E3E37] text-white p-5 flex flex-col shrink-0">
                  <div className="flex items-center gap-2 mb-6">
                     <Heart size={24} className="fill-emerald-400 text-emerald-400"/>
                     <span className="text-lg font-black tracking-tight">Veterito</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6 bg-black/10 p-2.5 rounded-xl border border-white/5">
                     <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-sm">T</div>
                     <div>
                        <div className="text-[8px] text-emerald-200 uppercase font-black tracking-widest mb-0.5">{t('feat_appt_clinic')}</div>
                        <div className="text-xs font-bold leading-tight">Test Veteriner...</div>
                     </div>
                  </div>

                  <div className="space-y-0.5">
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10 font-bold text-xs text-white">
                        <LayoutDashboard size={16}/> {t('feat_b2b_overview')}
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <Calendar size={16}/>{t('feat_pet_ui_appts')}</div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <Users size={16}/> {t('feat_b2b_customers')}
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <PawPrint size={16}/> {t('feat_b2b_patients')}
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <FileText size={16}/> {t('feat_b2b_health_records')}
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <Activity size={16}/> {t('feat_b2b_vax_calendar')}
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <User size={16}/> {t('feat_b2b_clinic_profile')}
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <MessageCircle size={16}/> {t('feat_b2b_messages')}
                     </div>
                     
                     <div className="mt-2 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-rose-500/10 font-medium text-xs text-emerald-100/50 hover:text-rose-400 transition-colors cursor-pointer">
                           <LogOut size={16}/> {t('feat_b2b_logout')}
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Main Content Area */}
               <div className="flex-1 bg-white dark:bg-transparent p-5 md:p-6 flex flex-col h-full min-h-[400px]">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-6">
                     <div>
                        <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-0.5">{t('feat_b2b_menu1')}</h3>
                        <p className="text-xs text-slate-500 dark:text-[#789085] font-medium">{t('feat_b2b_clinic_name')}</p>
                     </div>
                     <div className="hidden sm:flex items-center gap-3">
                        <div className="relative p-1.5 cursor-pointer">
                           <Bell size={18} className="text-slate-400"/>
                           <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-slate-50 dark:border-transparent text-[8px] text-white flex items-center justify-center font-bold">3</div>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-transparent px-2 py-1 rounded-full border border-slate-200 dark:border-transparent shadow-sm cursor-pointer">
                           <div className="w-6 h-6 bg-[#0E3E37] rounded-full text-white flex items-center justify-center text-[10px] font-bold">V</div>
                           <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 pr-2">vet@veterito.com</div>
                        </div>
                     </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                     <div className="bg-white dark:bg-transparent p-4 rounded-xl border border-slate-200 dark:border-transparent shadow-sm flex items-start gap-3">
                        <div className="text-emerald-500 bg-emerald-50 dark:bg-[#0B1310] p-2 rounded-lg"><Calendar size={20}/></div>
                        <div>
                           <div className="text-[10px] font-bold text-slate-500 dark:text-[#789085] mb-0.5">{t('feat_b2b_stat1')}</div>
                           <div className="text-lg font-black text-slate-800 dark:text-slate-100">3</div>
                        </div>
                     </div>
                     <div className="bg-white dark:bg-transparent p-4 rounded-xl border border-slate-200 dark:border-transparent shadow-sm flex items-start gap-3">
                        <div className="text-amber-500 bg-amber-50 dark:bg-amber-900/30 p-2 rounded-lg"><MessageSquare size={20}/></div>
                        <div>
                           <div className="text-[10px] font-bold text-slate-500 dark:text-[#789085] mb-0.5">{t('feat_b2b_stat2')}</div>
                           <div className="text-lg font-black text-slate-800 dark:text-slate-100">0</div>
                        </div>
                     </div>
                     <div className="hidden lg:flex bg-white dark:bg-transparent p-4 rounded-xl border border-slate-200 dark:border-transparent shadow-sm items-start gap-3">
                        <div className="text-teal-500 bg-teal-50 dark:bg-teal-900/30 p-2 rounded-lg"><PawPrint size={20}/></div>
                        <div>
                           <div className="text-[10px] font-bold text-slate-500 dark:text-[#789085] mb-0.5">{t('feat_b2b_stat3')}</div>
                           <div className="text-lg font-black text-slate-800 dark:text-slate-100">0</div>
                        </div>
                     </div>
                  </div>

                  {/* Table Area Mock */}
                  <div className="bg-white dark:bg-transparent rounded-xl border border-slate-200 dark:border-transparent shadow-sm flex-1 flex flex-col overflow-hidden">
                     <div className="px-4 py-3 border-b border-slate-100 dark:border-transparent flex justify-between items-center">
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-[#0E3E37] dark:text-emerald-500"/> {t('feat_b2b_upcoming_appts')}</h4>
                        <span className="text-[10px] font-bold text-slate-500 border border-slate-200 dark:border-slate-600 rounded-full px-2 py-0.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">{t('feat_b2b_appt_all')} →</span>
                     </div>
                     
                     <div className="p-2 flex-1">
                        <div className="grid grid-cols-4 gap-3 text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1 px-3 py-1.5">
                           <div>{t('feat_appt_time')}</div>
                           <div>Hasta</div>
                           <div>{t('feat_appt_svc')}</div>
                           <div>{t('feat_ai_status')}</div>
                        </div>
                        
                        <div className="space-y-0.5">
                           <div className="grid grid-cols-4 gap-3 text-xs items-center px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                              <div className="font-bold text-slate-700 dark:text-slate-200">02:00<br/><span className="text-[9px] font-normal text-slate-400">27 Ağustos 2026</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300">{t('feat_b2b_not_entered')} <br/><span className="text-[9px] text-slate-400">{t('feat_b2b_test_user')}</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300 text-[11px]">{t('feat_timeline_gen')}</div>
                              <div><span className="px-2 py-0.5 bg-[#0E3E37]/10 dark:bg-emerald-500/20 text-[#0E3E37] dark:text-emerald-400 rounded-md text-[10px] font-bold">{t('feat_b2b_status_ok')}</span></div>
                           </div>
                           
                           <div className="grid grid-cols-4 gap-3 text-xs items-center px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                              <div className="font-bold text-slate-700 dark:text-slate-200">11:00<br/><span className="text-[9px] font-normal text-slate-400">10 Aralık 2026</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300">{t('feat_b2b_not_entered')} <br/><span className="text-[9px] text-slate-400">{t('feat_b2b_test_user')}</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300 text-[11px]">{t('feat_timeline_gen')}</div>
                              <div><span className="px-2 py-0.5 bg-[#0E3E37]/10 dark:bg-emerald-500/20 text-[#0E3E37] dark:text-emerald-400 rounded-md text-[10px] font-bold">{t('feat_b2b_status_ok')}</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-4 flex justify-end">
                     <Link to="/clinic" className="bg-[#0E3E37] hover:bg-[#0b2f29] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors shadow-sm text-xs">
                        {t('feat_b2b_free_reg')} <ArrowRight size={14}/>
                     </Link>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
          ANA SAYFADAN TAŞINAN BÖLÜMLER BİTTİ
          ========================================================= */}


      {/* 5. CALL TO ACTION */}
      <section className="min-h-[60dvh] w-full snap-start snap-always relative z-20 bg-[var(--bg-main)] flex flex-col justify-center py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="relative bg-[var(--color-vet-primary)] rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-teal-400/30 px-12 py-8 lg:px-20 lg:py-12 text-white overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-[30rem] h-[30rem] border-[40px] border-white rounded-full"></div>
              <div className="absolute -bottom-40 -right-20 w-[40rem] h-[40rem] border-[60px] border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <PawPrint size={48} className="mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: t('feat_allinone_title') }}></h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl lg:max-w-2xl mx-auto font-medium">{t('feat_dl_desc_part1')}<br className="hidden md:block"/>{t('feat_dl_desc_part2')}</p>
              
              <div className="flex flex-col items-center gap-4 w-full mt-6">
                {/* Top Row: App Store */}
                <a href={brandConfig.appStoreUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-2.5 rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center sm:w-auto min-w-[210px]">
                  <div className="flex items-center justify-center gap-3 w-full">
                    <img src="/apple-logo.png" alt="App Store" className="w-10 h-10 object-contain shrink-0" />
                    <div className="flex flex-col items-start leading-none pt-0.5">
                      <div className="text-[11px] font-medium tracking-[0.08em] -mb-1">Download on the</div>
                      <div className="text-2xl font-semibold tracking-tight">App Store</div>
                    </div>
                  </div>
                </a>
                
                {/* Bottom Row: Play Store & AppGallery */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                  <a href={brandConfig.playStoreUrl || undefined} target="_blank" rel="noopener noreferrer" className="group bg-transparent border-[1.5px] border-white/80 hover:bg-white hover:border-white px-6 py-2.5 rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center sm:w-auto min-w-[210px]">
                    <div className="flex items-center justify-center gap-3 w-full">
                      <img src="/google-play-logo.png" alt="Play Store" className="w-10 h-10 object-contain shrink-0 scale-[1.15] transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex flex-col items-start leading-none pt-0.5">
                        <div className="text-[11px] font-medium tracking-wide text-white group-hover:text-[#0f9d58] transition-all duration-300 group-hover:duration-0">GET IT ON</div>
                        <div className="text-[22px] font-semibold tracking-tight text-white group-hover:text-[#0f9d58] transition-colors duration-300 group-hover:duration-0">Google Play</div>
                      </div>
                    </div>
                  </a>

                  <a href={brandConfig.appGalleryUrl} target="_blank" rel="noopener noreferrer" className="group bg-transparent border-[1.5px] border-white/80 hover:bg-white hover:border-white px-6 py-2.5 rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center sm:w-auto min-w-[210px]">
                    <div className="flex items-center justify-center gap-3 w-full">
                      <img src="/appgallery-logo.png" alt="AppGallery" className="w-10 h-10 object-contain shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex flex-col items-start leading-none pt-0.5">
                        <div className="text-[11px] font-medium tracking-wide text-white group-hover:text-[#ef4050] transition-all duration-300 group-hover:duration-0">EXPLORE IT ON</div>
                        <div className="text-[22px] font-semibold tracking-tight text-white group-hover:text-[#ef4050] transition-colors duration-300 group-hover:duration-0">AppGallery</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
