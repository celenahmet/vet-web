import { useTranslation } from 'react-i18next';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertTriangle, ArrowLeft, ArrowRight, Bell, Bookmark, Building2, Calendar, CalendarDays, Camera, CheckCircle2, ChevronDown, ChevronRight, ChevronUp, ChevronsUpDown, FileText, Heart, Home, LayoutDashboard, LogOut, MapPin, MessageCircle, MoreHorizontal, PawPrint, Phone, Plus, Search, Send, Share2, ShieldCheck, Star, StarHalf, Stethoscope, User, Users } from 'lucide-react';
import SEO from '../components/SEO';

import logoNew from '../assets/showcase-logo-new.png';
import logoNewDark from '../assets/showcase-logo-new-dark.png';

export default function Features() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('owners');


  // Sayfaya özel Snap Scroll (Tam Ekran Kaydırma) Efekti
  useEffect(() => {
    // Sayfa yüklendiğinde global html etiketine snap özelliklerini ekle
    document.documentElement.classList.add('snap-y', 'snap-proximity', 'scroll-smooth');
    return () => {
      // Sayfadan çıkıldığında eski haline döndür
      document.documentElement.classList.remove('snap-y', 'snap-proximity', 'scroll-smooth');
    };
  }, []);

  return (
    <div className="w-full relative bg-[var(--bg-main)] overflow-x-hidden">
      <SEO title={t('seo_title_features')} description={t('seo_desc_features2')} />


      {/* 2. INTERACTIVE APP SHOWCASE (Snap Section 2) */}
      <section
        id="app-showcase"
        className="w-full snap-start snap-always relative z-10 flex flex-col items-center justify-center overflow-hidden py-16 lg:py-24 bg-white dark:bg-[#060A08]"
        style={{ minHeight: '100dvh' }}
      >
        {/* ── ANA YUVARLAK KAPSAYICI (Island Window) ── */}
        <div
          className="relative z-10 w-[96%] lg:max-w-[1150px] mx-auto h-auto lg:h-[85vh] min-h-[700px] lg:max-h-[800px] rounded-[3rem] lg:rounded-[4rem] border-[6px] border-white dark:border-white/10 shadow-2xl flex flex-col bg-[url('/showcase-bg-final.jpg')] dark:bg-[url('/showcase-bg-dark.jpg')] bg-cover bg-center overflow-hidden"
        >
          {/* Pencere İçi İnce Gölge / Işık */}
          <div className="absolute inset-0 rounded-[3rem] lg:rounded-[4rem] bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none"></div>

          <div className="relative z-20 flex flex-col h-full">
            {/* 1. ÜSTTE 3'LÜ TAB MENÜSÜ (Notch Design on Desktop, Floating Pill on Mobile) */}
            <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 z-50 flex justify-center w-full">
              <div className="bg-white dark:bg-[#060A08] px-3 py-3 rounded-b-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-b border-l border-r border-slate-200/50 dark:border-white/5 flex gap-2 items-center relative">

                {/* Sol Ters Köşe (Inverted Corner) */}
                <svg className="absolute top-0 left-[-40px] w-[40px] h-[40px] pointer-events-none drop-shadow-[-5px_10px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 40 40">
                  <path d="M 40 0 L 0 0 A 40 40 0 0 1 40 40 Z" className="fill-white dark:fill-[#060A08]" />
                </svg>

                {/* Sağ Ters Köşe (Inverted Corner) */}
                <svg className="absolute top-0 right-[-40px] w-[40px] h-[40px] pointer-events-none drop-shadow-[5px_10px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 40 40">
                  <path d="M 0 0 L 40 0 A 40 40 0 0 0 0 40 Z" className="fill-white dark:fill-[#060A08]" />
                </svg>

                {/* İçerideki Tablar */}
                <div className="flex gap-1 md:gap-2 bg-slate-100/60 dark:bg-white/5 p-1 md:p-1.5 rounded-[2rem] border border-slate-200/50 dark:border-white/5 relative z-10 w-full max-w-[90vw] overflow-x-auto no-scrollbar justify-start md:justify-center">
                  <button
                    onClick={() => setActiveTab('owners')}
                    className={`whitespace-nowrap px-3 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${activeTab === 'owners'
                      ? 'bg-white dark:bg-[#113123] text-emerald-900 dark:text-[#6ee7b7] shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-white'}`}
                  >
                    {t('feat_tab_owners')}
                  </button>
                  <button
                    onClick={() => setActiveTab('pets')}
                    className={`whitespace-nowrap px-3 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${activeTab === 'pets'
                      ? 'bg-white dark:bg-[#113123] text-emerald-900 dark:text-[#6ee7b7] shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-white'}`}
                  >
                    {t('feat_tab_pets')}
                  </button>
                  <button
                    onClick={() => setActiveTab('community')}
                    className={`whitespace-nowrap px-3 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${activeTab === 'community'
                      ? 'bg-white dark:bg-[#113123] text-emerald-900 dark:text-[#6ee7b7] shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-white'}`}
                  >
                    {t('feat_tab_community')}
                  </button>
                </div>
              </div>
            </div>

            {/* Üst Kısım: Başlık */}
            <div className="pt-20 lg:pt-40 px-8 lg:px-12">
              {/* 2. ANA BAŞLIK (Sola Hizalı ve Siyah Renkli) */}
              <div className="w-[65%] lg:w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[550px] relative z-30 min-h-[150px] lg:min-h-0 flex items-start">
                <AnimatePresence mode="wait">
                  {activeTab === 'owners' && (
                    <motion.h2 key="title-owners" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-[18px] lg:text-[2.25rem] xl:text-[2.75rem] font-black leading-tight tracking-normal text-emerald-950 dark:text-emerald-50">
                      {t('feat_own_title1')}<br />{t('feat_own_title2')}<br />{t('feat_own_title3')}
                    </motion.h2>
                  )}
                  {activeTab === 'pets' && (
                    <motion.h2 key="title-pets" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-[18px] lg:text-[2.25rem] xl:text-[2.75rem] font-black leading-tight tracking-normal text-emerald-950 dark:text-emerald-50">
                      {t('feat_pet_title1')}<br />{t('feat_pet_title2')}<br />{t('feat_pet_title3')}<br />{t('feat_pet_title4')}
                    </motion.h2>
                  )}
                  {activeTab === 'community' && (
                    <motion.h2 key="title-community" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-[18px] lg:text-[2.25rem] xl:text-[2.75rem] font-black leading-tight tracking-normal text-emerald-950 dark:text-emerald-50 pr-4 lg:pr-12 xl:pr-24">
                      {t('feat_com_title1')}<br />{t('feat_com_title2')} <br className="md:hidden" /><span className="hidden md:inline"> </span>{t('feat_com_title3')}
                    </motion.h2>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ORTA & ALT KISIMLAR KAPSAYICISI (Mockup ve Kutular) */}
            <div className="relative flex-1 w-full h-full">

              {/* 3. TELEFON MOCKUP (Tam Merkezde Kaydırılabilir) */}
              <div className="absolute right-[-14px] -top-[146px] lg:top-auto lg:right-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 bottom-auto lg:bottom-6 z-10 flex justify-center items-center lg:items-end h-auto lg:h-full w-full">
                <AnimatePresence mode="wait">

                  {activeTab === 'owners' && (
                    <motion.div key="mockup-owners" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }} className="origin-top-right lg:origin-bottom scale-[0.60] lg:scale-[0.90] relative">



                      <div className="w-[320px] h-[640px] bg-white dark:bg-[#08100C] rounded-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-slate-200 dark:border-emerald-900/40">
                        {/* Notch Kaldırıldı */}

                        {/* Fixed Header */}
                        <div className="bg-white z-20 relative shrink-0 px-5 pt-12 pb-2">
                          <div className="flex justify-between items-center mb-6">
                            <MoreHorizontal size={22} className="text-emerald-900" />
                            <div className="flex items-center gap-4">
                              <Send size={20} className="text-emerald-900" />
                              <div className="relative">
                                <Bell size={20} className="text-emerald-900" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center border border-white">25</span>
                              </div>
                            </div>
                          </div>

                          <h2 className="text-3xl font-black text-emerald-900 flex items-center gap-2 mb-1">
                            {t('feat_g_morning')} <span className="text-amber-500">✦</span>
                          </h2>
                          <p className="text-xs text-emerald-800/60 font-medium leading-relaxed">{t('feat_g_morning_desc1')}<br />{t('feat_g_morning_desc2')}</p>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-24 bg-white relative pt-4">
                          <div className="border border-slate-100 rounded-[24px] p-2 flex gap-4 items-center mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="w-[84px] h-[84px] rounded-[18px] overflow-hidden shrink-0">
                              <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 py-1">
                              <h3 className="font-bold text-slate-900 text-base mb-1">Senorita 👑</h3>
                              <p className="text-[11px] text-slate-500 font-medium mb-3">{t('feat_pet_desc1')}<br />{t('feat_pet_desc2')}</p>
                              <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">{t('feat_pet_profile_btn')} <ArrowRight size={12} /></div>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mb-4 px-1">
                            <h4 className="font-bold text-emerald-900 text-[15px]">{t('feat_own_ui_upcoming')}</h4>
                            <span className="text-[11px] text-emerald-700 font-bold">{t('feat_own_ui_seeall')}</span>
                          </div>
                          <div className="space-y-3 mb-6">
                            <div className="border border-slate-100 rounded-[20px] p-4 flex gap-3 shadow-[0_4px_20px_rgb(0,0,0,0.02)] items-center">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><ShieldCheck size={20} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 text-xs mb-0.5">{t('home_w1_title')}</h5>
                                <p className="text-[10px] text-slate-500">{t('feat_vax_name')}<br />{t('feat_vax_date')}</p>
                              </div>
                              <div className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">{t('feat_days_left_3')}</div>
                            </div>
                            <div className="border border-slate-100 rounded-[20px] p-4 flex gap-3 shadow-[0_4px_20px_rgb(0,0,0,0.02)] items-center">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Activity size={20} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 text-xs mb-0.5">{t('feat_own_ui_para')}</h5>
                                <p className="text-[10px] text-slate-500">{t('feat_parasite_name')}<br />{t('feat_parasite_date')}</p>
                              </div>
                              <div className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">{t('feat_days_left_22')}</div>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mb-4 px-1">
                            <h4 className="font-bold text-emerald-900 text-[15px]">{t('feat_s1_summary_title')}</h4>
                            <span className="text-[11px] text-emerald-700 font-bold">{t('feat_this_month')}</span>
                          </div>
                          <div className="border border-slate-100 rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] mb-10">
                            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100">
                              <div className="flex flex-col items-center">
                                <Activity size={18} className="text-emerald-500 mb-2" />
                                <div className="font-black text-slate-900 text-[15px] mb-0.5">7.2 kg</div>
                                <div className="text-[9px] text-slate-400 font-medium">{t('feat_s1_weight_label')}</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <Plus size={18} className="text-emerald-500 mb-2" />
                                <div className="font-black text-slate-900 text-[15px] mb-0.5">{t('feat_hs_good')}</div>
                                <div className="text-[9px] text-slate-400 font-medium">{t('feat_hs_condition')}</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <PawPrint size={18} className="text-emerald-500 mb-2" />
                                <div className="font-black text-slate-900 text-[15px] mb-0.5">{t('feat_hs_active')}</div>
                                <div className="text-[9px] text-slate-400 font-medium">{t('feat_hs_activity_level')}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white flex justify-around items-center px-4 pb-1 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-slate-100">
                          <div className="flex flex-col items-center text-emerald-700"><Home size={20} className="mb-1" /><span className="text-[9px] font-bold">{t('feat_nav_home')}</span></div>
                          <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_health')}</span></div>
                          <div className="w-[56px] h-[56px] bg-emerald-800 rounded-full flex items-center justify-center text-white -mt-8 border-[4px] border-white shadow-lg relative z-30"><Plus size={24} /></div>
                          <div className="flex flex-col items-center text-slate-400"><Users size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_community')}</span></div>
                          <div className="flex flex-col items-center text-slate-400"><User size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_profile')}</span></div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'pets' && (
                    <motion.div key="mockup-pets" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }} className="origin-top-right lg:origin-bottom scale-[0.60] lg:scale-[0.90] relative">



                      <div className="w-[320px] h-[640px] bg-white dark:bg-[#1a2317] rounded-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-slate-200 dark:border-emerald-900/40">

                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-5 pt-12 pb-4 bg-white z-20 relative">
                          <ArrowLeft size={22} className="text-slate-800" />
                          <h3 className="font-black text-lg text-slate-900">Senorita</h3>
                          <MoreHorizontal size={22} className="text-slate-800" />
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-24 bg-white relative">
                          <div className="flex justify-center mt-2 mb-6">
                            <div className="relative">
                              <div className="w-[120px] h-[120px] rounded-full border-[3px] border-amber-400 bg-slate-200 overflow-hidden shadow-lg p-1">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                  <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                                <PawPrint size={14} />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between px-2 mb-8">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 shadow-[0_4px_15px_rgb(0,0,0,0.03)] flex items-center justify-center text-emerald-700"><Activity size={24} /></div>
                              <span className="text-[10px] font-bold text-emerald-800">{t('feat_s1_summary_title')}</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500"><div className="w-5 h-5 border-2 border-slate-400 rounded-full" /></div>
                              <span className="text-[10px] font-medium text-slate-600">{t('feat_menu_vaccines')}</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500"><FileText size={22} /></div>
                              <span className="text-[10px] font-medium text-slate-600">{t('feat_menu_records')}</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500"><Calendar size={22} /></div>
                              <span className="text-[10px] font-medium text-slate-600">{t('feat_menu_appointments')}</span>
                            </div>
                          </div>

                          <div className="border border-slate-100 rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] mb-6">
                            <div className="flex justify-between items-center mb-6">
                              <h4 className="text-[17px] font-black text-emerald-900">{t('feat_s1_card_title')}</h4>
                              <ShieldCheck size={22} className="text-emerald-700" />
                            </div>
                            <div className="space-y-4">
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">{t('feat_s1_type_label')}</div>
                                <div className="w-2/3 text-[12px] font-bold text-slate-900">{t('feat_s1_type_cat')}</div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">{t('feat_s1_breed_label')}</div>
                                <div className="w-2/3 text-[12px] font-bold text-slate-900">{t('feat_pet_desc2')}</div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">{t('feat_s1_age_label')}</div>
                                <div className="w-2/3">
                                  <div className="text-[12px] font-bold text-slate-900">{t('feat_pet_age')}</div>
                                  <div className="text-[9px] text-slate-400">{t('feat_pet_birth_date')}</div>
                                </div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">{t('feat_s1_weight_label')}</div>
                                <div className="w-2/3">
                                  <div className="text-[12px] font-bold text-slate-900">7.2 kg</div>
                                  <div className="text-[9px] text-slate-400">{t('feat_last_update_date')}</div>
                                </div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">{t('feat_s1_neutered_label')}</div>
                                <div className="w-2/3 text-[12px] font-bold text-slate-900">{t('feat_s1_neutered_false')}</div>
                              </div>
                              <div className="flex pb-2">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium mt-1">{t('feat_s1_chip_label')}</div>
                                <div className="w-2/3 text-[14px] font-black text-slate-900 tracking-wide">900215000123456</div>
                              </div>
                            </div>

                            <div className="mt-4 bg-emerald-50 rounded-xl p-4 flex justify-between items-center border border-emerald-100">
                              <div className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-emerald-700" />
                                <div>
                                  <div className="text-sm font-bold text-emerald-900">{t('feat_vax_up_to_date')}</div>
                                  <div className="text-[9px] text-emerald-700/60">{t('feat_last_update_date')}</div>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-emerald-700" />
                            </div>
                          </div>

                          <div className="border border-slate-100 rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] mb-10">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="text-[15px] font-bold text-emerald-900">{t('feat_vet_info_title')}</h4>
                              <Users size={20} className="text-amber-500" />
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium mb-0.5">{t('feat_vet_title')}</div>
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-[15px] font-black text-slate-900 mb-1">{t('feat_vet_name')}</div>
                                <div className="text-[11px] text-slate-500">{t('feat_vet_clinic_name')}</div>
                              </div>
                              <div className="w-10 h-10 rounded-[12px] border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                                <Phone size={18} />
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white flex justify-around items-center px-4 pb-1 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-slate-100">
                          <div className="flex flex-col items-center text-slate-400"><Home size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_home')}</span></div>
                          <div className="flex flex-col items-center text-emerald-700"><ShieldCheck size={20} className="mb-1" /><span className="text-[9px] font-bold">{t('feat_nav_health')}</span></div>
                          <div className="w-[56px] h-[56px] bg-emerald-800 rounded-full flex items-center justify-center text-white -mt-8 border-[4px] border-white shadow-lg relative z-30"><Plus size={24} /></div>
                          <div className="flex flex-col items-center text-slate-400"><Users size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_community')}</span></div>
                          <div className="flex flex-col items-center text-slate-400"><User size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_profile')}</span></div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'community' && (
                    <motion.div key="mockup-community" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }} className="origin-top-right lg:origin-bottom scale-[0.60] lg:scale-[0.90] relative">



                      <div className="w-[320px] h-[640px] bg-white dark:bg-[#08100C] rounded-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-slate-200 dark:border-emerald-900/40">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-5 pt-12 pb-2 bg-white z-20 relative">
                          <div className="w-8"></div>
                          <h2 className="font-black text-lg text-emerald-900">{t('feat_nav_community')}</h2>
                          <div className="w-8 h-8 rounded-full border border-emerald-900 flex items-center justify-center">
                            <Plus size={18} className="text-emerald-900" />
                          </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex px-5 bg-white border-b border-slate-100 z-20 relative">
                          <div className="flex-1 text-center pb-3 border-b-2 border-emerald-700">
                            <span className="font-bold text-[13px] text-emerald-900">{t('feat_discover_tab')}</span>
                          </div>
                          <div className="flex-1 text-center pb-3 border-b-2 border-transparent">
                            <span className="font-semibold text-[13px] text-slate-500">{t('feat_following_tab')}</span>
                          </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-50 relative pb-24">

                          <div className="bg-white m-3 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex gap-3 items-center">
                                <img src="/pet1.jpg" alt="Defne & Misket" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                  <div className="font-bold text-slate-900 text-sm">Defne & Misket</div>
                                  <div className="text-[10px] text-slate-400 font-medium">{t('feat_post1_time')}</div>
                                </div>
                              </div>
                              <MoreHorizontal size={18} className="text-slate-400" />
                            </div>
                            <p className="text-slate-700 text-[13px] mb-3">{t('feat_post1_text')}</p>
                            <div className="rounded-xl overflow-hidden mb-4">
                              <img src="/pet1.jpg" alt="Post" className="w-full h-40 object-cover" />
                            </div>
                            <div className="flex justify-between items-center pt-1 border-b border-slate-50 pb-4 mb-3">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 text-orange-500">
                                  <Heart size={18} fill="currentColor" />
                                  <span className="font-bold text-sm">128</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                  <MessageCircle size={18} />
                                  <span className="font-semibold text-sm">12</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Share2 size={18} className="text-slate-400" />
                                <Bookmark size={18} className="text-slate-400" />
                              </div>
                            </div>
                            <div className="text-xs text-slate-500 font-medium cursor-pointer">{t('feat_post1_comments')}</div>
                          </div>

                          <div className="bg-white m-3 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex gap-3 items-center">
                                <img src="/pet2.jpg" alt="Can & Pati" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                  <div className="font-bold text-slate-900 text-sm">Can & Pati</div>
                                  <div className="text-[10px] text-slate-400 font-medium">{t('feat_post2_time')}</div>
                                </div>
                              </div>
                              <MoreHorizontal size={18} className="text-slate-400" />
                            </div>
                            <p className="text-slate-700 text-[13px] mb-4">{t('feat_post2_text')}</p>
                            <div className="flex justify-between items-center pt-2 border-t border-slate-50">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 text-orange-500">
                                  <Heart size={18} fill="currentColor" />
                                  <span className="font-bold text-sm">67</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                  <MessageCircle size={18} />
                                  <span className="font-semibold text-sm">8</span>
                                </div>
                              </div>
                              <Share2 size={18} className="text-slate-400" />
                            </div>
                          </div>

                          <div className="bg-white m-3 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex gap-3 items-center">
                                <img src="/pet3.jpg" alt="Selin & Leo" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                  <div className="font-bold text-slate-900 text-sm">Selin & Leo</div>
                                  <div className="text-[10px] text-slate-400 font-medium">{t('feat_post3_time')}</div>
                                </div>
                              </div>
                              <MoreHorizontal size={18} className="text-slate-400" />
                            </div>
                            <p className="text-slate-700 text-[13px] mb-3">{t('feat_post3_text')}</p>
                            <div className="rounded-xl overflow-hidden mb-4">
                              <img src="/pet3.jpg" alt="Post" className="w-full h-40 object-cover" />
                            </div>
                            <div className="flex justify-between items-center pt-3 border-t border-slate-50">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5 text-orange-500">
                                  <Heart size={18} fill="currentColor" />
                                  <span className="font-bold text-sm">45</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                  <MessageCircle size={18} />
                                  <span className="font-semibold text-sm">10</span>
                                </div>
                              </div>
                              <Share2 size={18} className="text-slate-400" />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white flex justify-around items-center px-4 pb-1 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-slate-100">
                          <div className="flex flex-col items-center text-slate-400"><Home size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_home')}</span></div>
                          <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_health')}</span></div>
                          <div className="w-[56px] h-[56px] bg-emerald-800 rounded-full flex items-center justify-center text-white -mt-8 border-[4px] border-white shadow-lg relative z-30"><Plus size={24} /></div>
                          <div className="flex flex-col items-center text-emerald-700"><Users size={20} className="mb-1" /><span className="text-[9px] font-bold">{t('feat_nav_community')}</span></div>
                          <div className="flex flex-col items-center text-slate-400"><User size={20} className="mb-1" /><span className="text-[9px] font-medium">{t('feat_nav_profile')}</span></div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. SAĞ ALT: Özellikler ve Logo */}
              <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col w-[320px] lg:w-[350px] pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`right-${activeTab}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative pointer-events-auto flex flex-col p-8 pb-10 h-full"
                  >
                    {/* Arka Plan ve İçe Göçük (Cutout) - Tiled Pure CSS Mask (Flawless 40px fillets) */}
                    <div
                      className="absolute inset-0 rounded-[45px] shadow-2xl overflow-hidden"
                      style={{
                        WebkitMaskImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20viewBox%3D%220%200%20150%20150%22%3E%3Cpath%20d%3D%22M%200%200%20L%200%2018.7%20A%2040%2040%200%200%200%2035.39%2058.43%20A%2064%2064%200%200%201%2091.57%20114.62%20A%2040%2040%200%200%200%20131.3%20150%20L%20150%20150%20L%20150%200%20Z%22%20fill%3D%22black%22%20%2F%3E%3C%2Fsvg%3E"), linear-gradient(black, black), linear-gradient(black, black)',
                        maskImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20viewBox%3D%220%200%20150%20150%22%3E%3Cpath%20d%3D%22M%200%200%20L%200%2018.7%20A%2040%2040%200%200%200%2035.39%2058.43%20A%2064%2064%200%200%201%2091.57%20114.62%20A%2040%2040%200%200%200%20131.3%20150%20L%20150%20150%20L%20150%200%20Z%22%20fill%3D%22black%22%20%2F%3E%3C%2Fsvg%3E"), linear-gradient(black, black), linear-gradient(black, black)',
                        WebkitMaskPosition: 'bottom left, top left, bottom right',
                        maskPosition: 'bottom left, top left, bottom right',
                        WebkitMaskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px',
                        maskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                      }}
                    >
                      {/* The actual frosted glass layer, separated to avoid browser mask+blur bugs */}
                      <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[45px]" />
                    </div>


                    <div className="relative z-10 space-y-6 pt-2 w-full pl-6 pb-12">
                      {/* Madde 1 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-amber-500">
                          <Bell size={18} className="shrink-0" />
                          <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                            {activeTab === 'owners' ? t('feat_own_f1_title') : activeTab === 'pets' ? t('feat_pet_f1_title') : t('feat_com_f1_title')}
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">
                          {activeTab === 'owners' ? t('feat_own_f1_desc') : activeTab === 'pets' ? t('feat_pet_f1_desc') : t('feat_com_f1_desc')}
                        </p>
                      </div>

                      {/* Madde 2 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-rose-500">
                          <Users size={18} className="shrink-0" />
                          <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                            {activeTab === 'owners' ? t('feat_own_f2_title') : activeTab === 'pets' ? t('feat_pet_f2_title') : t('feat_com_f2_title')}
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">
                          {activeTab === 'owners' ? t('feat_own_f2_desc') : activeTab === 'pets' ? t('feat_pet_f2_desc') : t('feat_com_f2_desc')}
                        </p>
                      </div>

                      {/* Madde 3 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sky-500">
                          <FileText size={18} className="shrink-0" />
                          <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                            {activeTab === 'owners' ? t('feat_own_f3_title') : activeTab === 'pets' ? t('feat_pet_f3_title') : t('feat_com_f3_title')}
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">
                          {activeTab === 'owners' ? t('feat_own_f3_desc') : activeTab === 'pets' ? t('feat_pet_f3_desc') : t('feat_com_f3_desc')}
                        </p>
                      </div>
                    </div>

                    {/* Logo - Geniş kavisin içine tam oturur */}
                    <div className="absolute left-[-8px] bottom-[-8px] w-20 h-20 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-slate-200/50 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex items-center justify-center z-20 overflow-hidden">
                      <img src={logoNew} alt="Veterito" className="block dark:hidden w-[52px] h-[52px] object-contain drop-shadow-sm translate-y-1" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      <img src={logoNewDark} alt="Veterito" className="hidden dark:block w-[52px] h-[52px] object-contain drop-shadow-sm translate-y-1" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* MOBİL İÇİN ALT KUTULAR */}
              <div className="md:hidden mt-[261px] flex flex-col z-20 w-full relative pb-[17px] px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-${activeTab}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col w-full relative pointer-events-auto"
                  >
                    {/* 1. Kutu: Dikey Açıklama (Başlığın altında solda) */}
                    <div className={`absolute -left-[4px] w-[50%] ${activeTab === 'owners' ? '-top-[313px]' : activeTab === 'community' ? '-top-[313px]' : '-top-[293px]'}`}>
                      <div className="bg-white/40 dark:bg-black/40 backdrop-blur-[45px] p-4 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full">
                        <p className="text-[13px] text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                          {activeTab === 'owners' ? t('feat_own_desc') : activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                        </p>
                      </div>
                    </div>

                    {/* 2. Kutu: Özellik Maddeleri (Telefonun altında yatay tam genişlik) */}
                    <div className="bg-white/40 dark:bg-black/40 backdrop-blur-[45px] p-5 lg:p-6 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full flex flex-col items-start">
                      <div className="space-y-6 w-full">
                        {/* Madde 1 */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-amber-500">
                            <Bell size={18} className="shrink-0" />
                            <span className="font-bold text-slate-900 dark:text-white text-[13px]">
                              {activeTab === 'owners' ? t('feat_own_f1_title') : activeTab === 'pets' ? t('feat_pet_f1_title') : t('feat_com_f1_title')}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">
                            {activeTab === 'owners' ? t('feat_own_f1_desc') : activeTab === 'pets' ? t('feat_pet_f1_desc') : t('feat_com_f1_desc')}
                          </p>
                        </div>

                        {/* Madde 2 */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-rose-500">
                            <Users size={18} className="shrink-0" />
                            <span className="font-bold text-slate-900 dark:text-white text-[13px]">
                              {activeTab === 'owners' ? t('feat_own_f2_title') : activeTab === 'pets' ? t('feat_pet_f2_title') : t('feat_com_f2_title')}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">
                            {activeTab === 'owners' ? t('feat_own_f2_desc') : activeTab === 'pets' ? t('feat_pet_f2_desc') : t('feat_com_f2_desc')}
                          </p>
                        </div>

                        {/* Madde 3 */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-sky-500">
                            <FileText size={18} className="shrink-0" />
                            <span className="font-bold text-slate-900 dark:text-white text-[13px]">
                              {activeTab === 'owners' ? t('feat_own_f3_title') : activeTab === 'pets' ? t('feat_pet_f3_title') : t('feat_com_f3_title')}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">
                            {activeTab === 'owners' ? t('feat_own_f3_desc') : activeTab === 'pets' ? t('feat_pet_f3_desc') : t('feat_com_f3_desc')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
          {/* 4. SOL ALT: Açıklama Kutusu */}
          <div className="absolute -bottom-[6px] -left-[6px] z-20 hidden md:flex flex-col w-[346px] lg:w-[386px] pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${activeTab}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-auto relative p-10 pt-12 pl-[54px] pb-[46px] drop-shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
              >
                {/* The unified frosted glass background (main box) - Matches Right Box Exactly */}
                <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[45px] rounded-tr-[45px] rounded-tl-[45px] rounded-bl-[3rem] lg:rounded-bl-[4rem] rounded-br-none border border-white/50 dark:border-white/5 overflow-hidden z-0" />

                {/* İnce ve zarif kuyruk (Swoop Tail) Efekti - Tam Uyumlu Blurlu Versiyon */}
                <div className="absolute bottom-[0px] right-[-120px] w-[120px] h-[35px] pointer-events-none z-0" style={{ transform: 'translateZ(0)' }}>
                  <div
                    className="w-full h-full bg-white/40 dark:bg-black/40 backdrop-blur-[45px]"
                    style={{
                      WebkitMaskImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 120 35\'%3E%3Cpath d=\'M 0 0 L 0 35 L 120 35 Q 0 35 0 0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                      maskImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 120 35\'%3E%3Cpath d=\'M 0 0 L 0 35 L 120 35 Q 0 35 0 0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                      WebkitMaskSize: '100% 100%',
                      maskSize: '100% 100%',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      clipPath: "path('M 0 0 L 0 35 L 120 35 Q 0 35 0 0 Z')"
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {activeTab === 'owners' ? (
                    <>
                      <p className="text-[15px] lg:text-[16px] text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
                        {t('feat_own_desc')}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-[15px] lg:text-[16px] text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
                        {activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>{/* =========================================
            1. BÖLÜM: Sol Metin, Sağ Dashboard
            ========================================= */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 flex items-center bg-[var(--bg-secondary)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Sol Kısım: Metinler ve Maddeler */}
            <div className="flex-1 space-y-8 w-full">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                  <Activity size={16} /> {t('feat_s1_badge')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight tracking-tight whitespace-pre-line">
                  {t('feat_new_s1_title')}
                </h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  {t('feat_new_s1_desc')}
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {/* Madde 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <Activity size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s1_li1')}
                  </div>
                </div>
                {/* Madde 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <Heart size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s1_li2')}
                  </div>
                </div>
                {/* Madde 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s1_li3')}
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Kısım: Kare Dashboard (Masonry Layout) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[60%] shrink-0"
            >
              <div className="bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 flex flex-col md:flex-row gap-5 relative overflow-hidden">

                {/* Sütun 1: Sağlık Özeti + Dijital Sağlık Kartı */}
                <div className="flex-1 flex flex-col gap-5">

                  {/* 1. Sağlık Özeti */}
                  <div className="bg-white dark:bg-zinc-800/80 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px] mb-4">{t('feat_s1_summary_title')}</h3>
                    <div className="grid grid-cols-3 gap-2 divide-x divide-slate-100 dark:divide-zinc-700 mb-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-emerald-600 dark:text-emerald-400 mb-1"><Activity size={18} strokeWidth={2.5} /></div>
                        <div className="font-bold text-slate-800 dark:text-white text-[15px]">1.7 kg</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">{t('feat_s1_weight_label')}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-rose-500 mb-1"><AlertTriangle size={18} strokeWidth={2.5} /></div>
                        <div className="font-bold text-rose-500 text-[15px]">1</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">{t('feat_s1_delayed_label')}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-emerald-600 dark:text-emerald-400 mb-1"><CalendarDays size={18} strokeWidth={2.5} /></div>
                        <div className="font-bold text-slate-800 dark:text-white text-[13px] leading-tight mt-0.5">07.09.2026</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-1">{t('feat_s1_next_label')}</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-xl p-3 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-slate-400" />
                      <span className="text-[12px] font-medium text-slate-600 dark:text-slate-300">{t('feat_s1_vax_name')}</span>
                    </div>
                  </div>

                  {/* 2. Dijital Sağlık Kartı */}
                  <div className="bg-white dark:bg-zinc-800/80 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px] mb-3">{t('feat_s1_card_title')}</h3>
                    <div className="flex flex-col divide-y divide-slate-50 dark:divide-zinc-700/50 text-[12px]">
                      <div className="flex justify-between items-center py-2"><span className="text-slate-500">{t('feat_s1_type_label')}</span><span className="font-bold text-slate-800 dark:text-white">{t('feat_s1_type_cat')}</span></div>
                      <div className="flex justify-between items-center py-2"><span className="text-slate-500">{t('feat_s1_breed_label')}</span><span className="font-bold text-slate-800 dark:text-white">{t('feat_s1_breed_british')}</span></div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-500">{t('feat_s1_age_label')}</span>
                        <div className="text-right leading-tight"><div className="font-bold text-slate-800 dark:text-white">{t('feat_s1_age_val')}</div><div className="text-[9px] text-slate-400">16.04.2026</div></div>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-500">{t('feat_s1_weight_label')}</span>
                        <div className="text-right leading-tight"><div className="font-bold text-slate-800 dark:text-white">1.7 kg</div><div className="text-[9px] text-slate-400">{t('feat_s1_last_measure')} 24.08.2026</div></div>
                      </div>
                      <div className="flex justify-between items-center py-2"><span className="text-slate-500">{t('feat_s1_neutered_label')}</span><span className="font-bold text-slate-800 dark:text-white">{t('feat_s1_neutered_false')}</span></div>
                      <div className="flex justify-between items-center pt-2"><span className="text-slate-500">{t('feat_s1_chip_label')}</span><span className="font-bold text-slate-800 dark:text-white">9810 **** **** 234</span></div>
                    </div>
                  </div>

                </div>

                {/* Sütun 2: Acil Sağlık Kartı (Tam Boy) */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="bg-white dark:bg-zinc-800/80 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-full flex flex-col gap-3.5">

                    {/* Profil */}
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px] flex items-center gap-2">{t('feat_s1_em_title')}</h3>
                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-zinc-900/50 p-2.5 rounded-xl border border-slate-100 dark:border-zinc-700/50">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img src="/duman.jpg" alt="Pet Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="leading-tight">
                        <h4 className="text-[15px] font-bold text-slate-800 dark:text-white mb-0.5">Senorita</h4>
                        <p className="text-[10px] text-slate-500 font-medium">{t('feat_s1_type_cat')} • {t('feat_s1_age_val')} • {t('feat_s1_gender_female')}<br />1.7 kg • 24.08.2026</p>
                      </div>
                    </div>

                    {/* Alerjiler */}
                    <div className="border border-rose-200 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-900/10 rounded-xl p-3 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-400"></div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <AlertTriangle size={14} className="text-rose-500" />
                        <span className="font-bold text-slate-800 dark:text-white text-[12px]">{t('feat_s1_em_allergy_title')}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                          <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                          {t('feat_s1_em_allergy_val')}
                        </div>
                        <span className="text-[9px] font-bold text-rose-500">{t('feat_s1_em_allergy_level')}</span>
                      </div>
                    </div>

                    {/* Kronik Durumlar */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-2.5">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Activity size={14} className="text-slate-400" />
                        <span className="font-bold text-slate-800 dark:text-white text-[12px]">{t('feat_s1_em_chronic_title')}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 pl-5">{t('feat_s1_em_chronic_val')}</span>
                    </div>

                    {/* Aşı */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-2.5 flex items-center gap-2">
                      <ShieldCheck size={14} className="text-slate-400" />
                      <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">{t('feat_s1_vax_name')}</span>
                    </div>

                    {/* Sahibi */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-2.5">
                      <div className="font-bold text-slate-800 dark:text-white text-[12px] mb-0.5">{t('feat_s1_em_owner_title')}</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300">Melis Karaca</div>
                      <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">+90 5** *** ** **</div>
                    </div>

                    {/* Mikroçip No */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-3 mt-auto bg-white dark:bg-zinc-800">
                      <h4 className="font-bold text-slate-800 dark:text-white text-[12px] mb-1">{t('feat_s1_chip_label')}</h4>
                      <div className="font-mono text-[14px] font-bold text-slate-800 dark:text-white tracking-widest mb-1">
                        9810 **** **** 234
                      </div>
                      <p className="text-[8px] text-slate-400 font-medium">
                        {t('feat_s1_em_chip_desc')}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start snap-always py-20 lg:py-0 flex items-center bg-[var(--bg-main)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Dynamic Dashboard Visual (3-Card Stack) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full flex justify-center lg:justify-start lg:order-1 order-2"
            >
              <div className="w-full max-w-xl bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 relative overflow-hidden">

                {/* 1. Kişisel Hatırlatmalar */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px]">{t('feat_s2_reminders_title')}</h3>
                    <Plus size={18} className="text-emerald-600 dark:text-emerald-400 cursor-pointer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                        <AlertTriangle size={16} className="text-rose-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-white text-[13px]">{t('feat_s2_reminder_1')}</div>
                        <div className="text-[10px] text-slate-400">{t('feat_s2_reminder_1_desc')}</div>
                      </div>
                      <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap">
                        {t('feat_s2_reminder_1_time')}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                        <Bell size={16} className="text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-white text-[13px]">{t('feat_s2_reminder_2')}</div>
                        <div className="text-[10px] text-slate-400">{t('feat_s2_reminder_2_desc')}</div>
                      </div>
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap">
                        {t('feat_s2_reminder_2_time')}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                        <Bell size={16} className="text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-white text-[13px]">{t('feat_s2_reminder_3')}</div>
                        <div className="text-[10px] text-slate-400">{t('feat_s2_reminder_3_desc')}</div>
                      </div>
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap">
                        {t('feat_s2_reminder_3_time')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Alerji / Kronik Durum Ekle Özeti */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-3 text-slate-800 dark:text-white font-bold text-[13px]">
                    <ArrowLeft size={16} className="text-slate-400" />
                    {t('feat_s2_allergy_add_title')}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-medium mb-1">{t('feat_s2_allergy_type')}</div>
                      <div className="bg-emerald-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full inline-block">
                        {t('feat_s2_allergy_type_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-medium mb-1">{t('feat_s2_allergy_level')}</div>
                      <div className="bg-emerald-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full inline-block">
                        {t('feat_s2_allergy_level_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-medium mb-1">{t('feat_s2_allergy_name')}</div>
                      <div className="text-[11px] text-slate-700 dark:text-slate-200 font-bold">
                        {t('feat_s2_allergy_name_opt')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Kilo Ölçümleri (Grafik) */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <h3 className="font-bold text-slate-800 dark:text-white text-[15px] mb-1">{t('feat_s2_weight_title')}</h3>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="font-black text-2xl text-slate-800 dark:text-white leading-none">{t('feat_s2_weight_main')}</span>
                    <span className="text-amber-500 text-xs font-bold leading-none mb-1">{t('feat_s2_weight_diff')}</span>
                  </div>

                  {/* Mock Chart */}
                  <div className="relative h-20 w-full mt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <motion.path
                        d="M 5,35 L 25,25 L 50,30 L 75,15 L 95,5"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      {[
                        { cx: 5, cy: 35 },
                        { cx: 25, cy: 25 },
                        { cx: 50, cy: 30 },
                        { cx: 75, cy: 15 },
                        { cx: 95, cy: 5 },
                      ].map((point, i) => (
                        <motion.circle
                          key={i}
                          cx={point.cx}
                          cy={point.cy}
                          fill="#059669"
                          initial={{ r: 0, opacity: 0 }}
                          whileInView={{ r: 3.5, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (i * 0.2), duration: 0.4 }}
                        />
                      ))}
                    </svg>
                    <div className="absolute -bottom-4 left-0 text-[9px] text-slate-400">16.04.2026 • 0.5 kg</div>
                    <div className="absolute -bottom-4 right-0 text-[9px] text-slate-400">24.08.2026 • 1.7 kg</div>
                  </div>
                </div>

                {/* 4. Beslenme Kaydı Ekle Özeti */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-3 text-slate-800 dark:text-white font-bold text-[13px]">
                    <ArrowLeft size={16} className="text-slate-400" />
                    {t('feat_s2_nutrition_add_title')}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">{t('feat_s2_nutrition_type')}</div>
                      <div className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-1 rounded-full inline-block">
                        {t('feat_s2_nutrition_type_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">{t('feat_s2_nutrition_brand')}</div>
                      <div className="text-slate-700 dark:text-slate-200 text-[11px] font-bold">
                        {t('feat_s2_nutrition_brand_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">{t('feat_s2_nutrition_daily')}</div>
                      <div className="text-slate-700 dark:text-slate-200 text-[11px] font-bold">
                        {t('feat_s2_nutrition_daily_opt')}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right: Text */}
            <div className="flex-1 space-y-6 lg:order-2 order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-rose-500 dark:text-rose-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <Bell size={16} /> {t('feat_s2_badge')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight whitespace-pre-line">{t('feat_new_s2_title')}</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                {t('feat_new_s2_desc')}
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-100/50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Bell size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s2_li1')}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-100/50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Activity size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s2_li2')}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-100/50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s2_li3')}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-main)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Text */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-orange-500 dark:text-orange-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <Search size={16} /> {t('feat_new_s3_title')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_new_s3_title')}</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                {t('feat_new_s3_desc')}
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Search size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s3_li1')}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s3_li2')}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Send size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s3_li3')}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full flex justify-center lg:justify-end relative"
            >
              <div className="w-full max-w-[380px] relative lg:ml-8 mt-12 lg:mt-0 flex flex-col items-center justify-center mb-24 lg:mb-0">

                {/* Main Card: Clinic List */}
                <div className="w-full bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-zinc-800 z-10 flex flex-col gap-4 relative">

                  {/* Search Header */}
                  <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-white mb-2 ml-2">
                    <ArrowLeft size={20} /> {t('feat_s3_ui_title')}
                  </div>

                  {/* Dropdowns */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-white dark:bg-zinc-800 rounded-2xl p-3 border border-slate-100 dark:border-zinc-700">
                      <div className="text-[10px] text-slate-400 mb-0.5">{t('feat_s3_ui_city_label')}</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-200 flex justify-between">{t('feat_s3_ui_city')} <ChevronDown size={14} /></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-zinc-800 rounded-2xl p-3 border border-slate-100 dark:border-zinc-700">
                      <div className="text-[10px] text-slate-400 mb-0.5">{t('feat_s3_ui_district_label')}</div>
                      <div className="text-xs font-bold text-slate-400 flex justify-between">{t('feat_s3_ui_district')} <ChevronDown size={14} /></div>
                    </div>
                  </div>

                  {/* Search Input */}
                  <div className="bg-white dark:bg-zinc-800 rounded-full py-3 px-4 border border-slate-200 dark:border-zinc-700 flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400" />
                    <span className="text-xs text-slate-400 font-medium flex-1">{t('feat_s3_ui_search')}</span>
                    <Search size={16} className="text-teal-600" />
                  </div>

                  {/* Clinics */}
                  <div className="flex flex-col gap-3 mt-1">
                    {/* Clinic 1 */}
                    <div className="bg-white dark:bg-zinc-800 rounded-[2rem] p-4 flex flex-col gap-3 shadow-sm border border-slate-100 dark:border-zinc-700 relative overflow-hidden group">
                      <div className="flex gap-3 items-start">
                        <div className="w-12 h-12 bg-teal-100/50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400">
                          <Building2 size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight pr-5">{t('feat_s3_ui_clinic1')}</div>
                          <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{t('feat_s3_ui_clinic1_addr')}</div>
                        </div>
                        <CheckCircle2 size={16} className="text-amber-500 fill-amber-100 dark:fill-amber-900/30 absolute top-4 right-4" />
                      </div>
                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-full text-[11px] font-bold">
                          <Phone size={12} /> +90 312 000 0003
                        </div>
                        <div className="text-white border border-teal-600 dark:border-teal-500 px-4 py-1.5 rounded-full text-xs font-bold bg-teal-600 dark:bg-teal-500 flex items-center gap-1.5 shadow-sm">
                          <CheckCircle2 size={12} className="text-teal-100" /> {t('feat_s3_ui_following')}
                        </div>
                      </div>
                    </div>

                    {/* Clinic 2 */}
                    <div className="bg-white dark:bg-zinc-800 rounded-[2rem] p-4 flex flex-col gap-3 shadow-sm border border-slate-100 dark:border-zinc-700 relative overflow-hidden">
                      <div className="flex gap-3 items-start">
                        <div className="w-12 h-12 bg-teal-100/50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400">
                          <Building2 size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight pr-5">{t('feat_s3_ui_clinic2')}</div>
                          <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{t('feat_s3_ui_clinic2_addr')}</div>
                        </div>
                        <CheckCircle2 size={16} className="text-amber-500 fill-amber-100 dark:fill-amber-900/30 absolute top-4 right-4" />
                      </div>
                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-full text-[11px] font-bold">
                          <Phone size={12} /> +90 216 111 2233
                        </div>
                        <div className="text-white bg-teal-700 hover:bg-teal-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                          <CheckCircle2 size={14} /> {t('feat_s3_ui_following')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Chat Bubble (Left/Bottom) */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -left-8 -bottom-16 lg:-left-68 lg:-bottom-24 w-[320px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-3 pb-2 border-b border-slate-200 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <ArrowLeft size={18} className="text-slate-800 dark:text-white" />
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                        <Building2 size={16} />
                      </div>
                      <div className="font-bold text-sm text-slate-800 dark:text-white">{t('feat_s3_ui_msg_name')}</div>
                    </div>
                  </div>
                  {/* Chat Body */}
                  <div className="p-3 flex flex-col gap-1.5">
                    <div className="flex justify-center mb-1">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold px-3 py-1 bg-slate-200/70 dark:bg-zinc-800 rounded-full shadow-sm">{t('feat_s3_ui_msg_date')}</span>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-slate-100 dark:border-zinc-700 w-11/12">
                      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {t('feat_s3_ui_msg_content')}
                      </p>
                    </div>


                    <div className="bg-teal-600 dark:bg-teal-500 rounded-2xl rounded-tr-sm p-3 shadow-sm self-end max-w-[85%]">
                      <p className="text-[13px] text-white leading-relaxed font-medium">
                        {t('feat_s3_ui_msg_reply_content')}
                      </p>
                    </div>

                    <div className="mt-2 relative">
                      <input type="text" className="w-full bg-white dark:bg-zinc-800 rounded-full py-2.5 pl-10 pr-10 border border-slate-200 dark:border-zinc-700 text-xs outline-none" placeholder="Mesaj yaz..." disabled />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400">
                        <Camera size={14} />
                      </div>
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center text-white">
                        <Send size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Rating Card (Right/Bottom) */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -right-8 -bottom-24 lg:-right-24 lg:-bottom-32 w-[300px] bg-white dark:bg-zinc-900 rounded-[2rem] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-20 flex flex-col gap-3 hidden sm:flex"
                >
                  <div className="font-bold text-slate-800 dark:text-white text-[15px]">{t('feat_s3_ui_rating_title')}</div>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-slate-800 dark:text-white">4.3</span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex gap-1 text-amber-500">
                        <Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><StarHalf size={14} className="fill-current" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">{t('feat_s3_ui_rating_count')}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-zinc-800">
                    <div className="text-[11px] text-slate-400 font-medium mb-1.5">{t('feat_s3_ui_rating_your')}</div>
                    <div className="flex gap-1.5 text-amber-500 mb-2">
                      <Star size={18} className="fill-current" /><Star size={18} className="fill-current" /><Star size={18} className="fill-current" /><Star size={18} className="fill-current" /><Star size={18} className="fill-current" />
                    </div>
                    <div className="w-full bg-teal-50 dark:bg-teal-900/20 rounded-xl p-3 text-xs text-slate-500 dark:text-slate-400 font-medium border border-teal-100/50 dark:border-teal-800">
                      {t('feat_s3_ui_rating_placeholder')}
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-secondary)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Dynamic Dashboard Visual (Bento Grid) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full flex justify-center lg:justify-start lg:order-1 order-2 lg:-ml-4 xl:-ml-8 mt-6"
            >
              <div className="w-full max-w-4xl bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-4 lg:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 relative">

                {/* 1. Adoption Box (Top Left) */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[15px] font-bold text-slate-800 dark:text-white">{t("dashboard_adoption_title")}</div>
                      <MoreHorizontal size={16} className="text-slate-400" />
                    </div>
                    <div className="flex gap-1.5 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full">{t("dashboard_tag_cat")}</span>
                      <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full">{t("dashboard_tag_female")}</span>
                      <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full">{t("dashboard_tag_location")}</span>
                    </div>
                    <div className="text-xs text-slate-500">{t("dashboard_adoption_desc")}</div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-col gap-0.5 mb-2">
                      <div className="text-[13px] font-bold text-slate-800 dark:text-white">{t("dashboard_adoption_req_title")}</div>
                      <div className="text-[11px] text-slate-500">{t("dashboard_adoption_req_desc")}</div>
                      <div className="text-[10px] font-medium mt-1"><span className="text-emerald-700 dark:text-emerald-400">{t("dashboard_adoption_clinic")}</span> <span className="text-slate-400">· 24.08.2026</span></div>
                    </div>
                    <div className="w-full bg-[#0E3E37] text-white text-xs font-bold py-2 rounded-xl text-center shadow-sm cursor-pointer hover:bg-[#0b2f29] transition-colors">
                      {t("dashboard_adoption_btn")}
                    </div>
                  </div>
                </div>

                {/* 2. Guides Box (Top Right) */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-full">
                  <div className="flex flex-col justify-between h-full">
                    {/* Guide 1 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                        <PawPrint size={15} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight">{t("dashboard_guide1_title")}</div>
                        <div className="text-[9px] text-slate-400">{t("dashboard_guide1_desc")}</div>
                      </div>
                      <ChevronRight size={12} className="text-slate-300" />
                    </div>

                    {/* Guide 2 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                        <ShieldCheck size={15} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight">{t("dashboard_guide2_title")}</div>
                        <div className="text-[9px] text-slate-400">{t("dashboard_guide2_desc")}</div>
                      </div>
                      <ChevronRight size={12} className="text-slate-300" />
                    </div>

                    {/* Guide 3 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                        <Activity size={15} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight">{t("dashboard_guide3_title")}</div>
                        <div className="text-[9px] text-slate-400">{t("dashboard_guide3_desc")}</div>
                      </div>
                      <ChevronRight size={12} className="text-slate-300" />
                    </div>

                    {/* Guide 4 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                        <FileText size={15} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight">{t("dashboard_guide4_title")}</div>
                        <div className="text-[9px] text-slate-400">{t("dashboard_guide4_desc")}</div>
                      </div>
                      <ChevronRight size={12} className="text-slate-300" />
                    </div>
                  </div>
                </div>

                {/* 3. Post Box (Bottom, Spans 2 columns on desktop but restricted width) */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-zinc-700/50 md:col-span-2 w-full max-w-lg mx-auto flex flex-col gap-2 relative">

                  {/* Header & Tabs */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-extrabold text-lg text-slate-800 dark:text-white">{t("dashboard_community_title")}</h3>
                      <div className="flex gap-2">
                        <Search size={15} className="text-slate-400" />
                        <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                          <Plus size={12} />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between w-full border-b border-slate-100 dark:border-zinc-700/50 pb-1.5 mb-1.5 text-[11px] font-bold text-slate-400">
                      <div className="text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-1.5 -mb-[7px]">{t("dashboard_tab_discover")}</div>
                      <div>{t("dashboard_tab_following")}</div>
                      <div className="hidden sm:block">{t("dashboard_tab_clinics")}</div>
                      <div>{t("dashboard_tab_guide")}</div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5">
                      <img src="/moda-kedi.jpg" alt="User" className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <div className="font-bold text-xs text-slate-800 dark:text-white leading-tight">{t("dashboard_post_author")}</div>
                        <div className="text-[9px] text-slate-400">{t("dashboard_post_time")}</div>
                      </div>
                      <MoreHorizontal size={14} className="text-slate-400 ml-auto" />
                    </div>

                    <p className="text-[11px] md:text-[13px] text-slate-600 dark:text-slate-300 mb-1.5 leading-relaxed">
                      {t("dashboard_post_content")}
                    </p>

                    {/* Image below text */}
                    <div className="w-full rounded-xl overflow-hidden mb-2 h-[150px] md:h-[200px]">
                      <img src="/moda-kedi.jpg" alt="Post" className="w-full h-full object-cover object-[80%_85%]" />
                    </div>

                    <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                      <div className="flex items-center gap-1 text-rose-500"><Heart size={14} className="fill-current" /> 35</div>
                      <div className="flex items-center gap-1"><MessageCircle size={14} /> 10</div>
                    </div>
                  </div>

                  {/* Floating Chat Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -bottom-10 -right-8 lg:-bottom-12 lg:-right-12 bg-white dark:bg-zinc-800 rounded-2xl p-3.5 shadow-xl border border-slate-100 dark:border-zinc-700 w-64 md:w-[17rem] z-10 hidden sm:block"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-700 pb-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-[15px]">
                          M
                        </div>
                        <div>
                          <div className="text-[12px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t("dashboard_post_author")}</div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <div className="text-[10px] font-medium text-emerald-500">{t("dashboard_chat_status")}</div>
                          </div>
                        </div>
                      </div>
                      <ShieldCheck size={16} className="text-emerald-500" />
                    </div>

                    {/* Messages */}
                    <div className="flex flex-col gap-2">
                      <div className="bg-purple-600 text-white text-[11px] p-2.5 rounded-2xl rounded-tr-sm self-end max-w-[85%] shadow-sm leading-relaxed">
                        {t("dashboard_chat_msg1")}
                      </div>
                      <div className="bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-slate-200 text-[11px] p-2.5 rounded-2xl rounded-tl-sm self-start max-w-[85%] leading-relaxed shadow-sm">
                        {t("dashboard_chat_msg2")}
                      </div>
                    </div>
                  </motion.div>

                </div>

              </div>
            </motion.div>

            {/* Right: Text */}
            <div className="flex-1 space-y-6 lg:order-2 order-1 lg:pl-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-fuchsia-500 dark:text-fuchsia-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <Users size={16} /> {t("feat_community_badge")}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight whitespace-pre-line">{t("feat_community_title")}</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                {t("feat_community_desc")}
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
                    <Search size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t("feat_community_li1")}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t("feat_community_li2")}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
                    <Home size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t("feat_community_li3")}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Bölüm: Veteriner Klinikleri İçin Yönlendirme */}
      <section className="min-h-[100dvh] h-auto overflow-x-hidden snap-start flex flex-col bg-[#FAF9F6] dark:bg-zinc-950 relative pt-12 lg:pt-20">
        <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center flex-1 pb-12 lg:pb-20">

          {/* Header Text & CTA */}
          <div className="max-w-4xl text-center space-y-6 mb-12 lg:mb-16 mt-4 lg:mt-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-md border border-emerald-100 dark:border-emerald-900/30 mb-8">
                <Stethoscope size={18} /> B2B Portal
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                {t('feat_s5_title')}
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
                {t('feat_s5_desc')}
              </p>
              <button
                onClick={() => window.location.href = '/clinics'}
                className="bg-[#0f3e36] hover:bg-[#0a2e28] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 mx-auto"
              >
                {t('feat_s5_cta')} <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Detailed Dashboard Mockup */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[1200px] bg-[#F7F6F3] dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex overflow-hidden h-auto"
          >
            {/* Sidebar */}
            <div className="w-[220px] bg-[#0E3D35] text-white shrink-0 flex flex-col hidden lg:flex rounded-tl-2xl rounded-bl-2xl">
              <div className="p-4 pb-4 flex items-center">
                <img src="/vet-logo-full.png" alt="Veterito Logo" className="h-8 w-auto object-contain" />
              </div>

              <div className="px-4 mb-2">
                <div className="border border-white/10 rounded-lg p-3 bg-white/5">
                  <div className="text-[10px] text-emerald-200/80 font-bold mb-1 uppercase tracking-wider">{t('feat_s5_db_sidebar_clinic')}</div>
                  <div className="bg-gradient-to-b from-white/20 to-white/5 shadow-inner rounded-lg p-2.5 flex items-center justify-between cursor-pointer border border-white/10 hover:bg-white/20 transition-colors">
                    <span className="text-sm font-bold truncate pr-2">{t('feat_s5_db_clinic_name')}</span>
                    <ChevronsUpDown size={14} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 px-4 space-y-6 text-sm font-bold">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-emerald-100 font-extrabold mb-2 uppercase px-3 tracking-wider">
                    <span>{t('feat_s5_db_sidebar_daily')}</span>
                    <ChevronUp size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center gap-3 bg-[#1B5749] text-white px-4 py-2 rounded-lg cursor-pointer shadow-sm">
                    <LayoutDashboard size={16} /> {t('feat_s5_db_overview')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors mt-1">
                    <Calendar size={16} className="text-emerald-100/70" /> {t('feat_s5_db_appointments')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors mt-1">
                    <Users size={16} className="text-emerald-100/70" /> {t('feat_s5_db_customers')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors mt-1">
                    <PawPrint size={16} className="text-emerald-100/70" /> {t('feat_s5_db_patients')}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_clinic_care')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_operation')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_communication')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_clinic_management')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_management')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                </div>
              </div>

              <div className="p-3 mt-auto flex flex-col gap-2">
                <div className="bg-white/5 rounded-lg p-3 text-[9px] text-emerald-100/70 font-medium leading-relaxed">
                  {t('feat_s5_db_mobile_warning')}
                </div>
                <div className="flex items-center gap-2 text-white hover:bg-white/10 cursor-pointer transition-colors text-[11px] font-bold border border-white/10 px-3 py-2 rounded-lg">
                  <LogOut size={14} className="text-emerald-100/70" /> {t('feat_s5_db_logout')}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-slate-50/50 dark:bg-zinc-900 min-w-0">
              {/* Topbar */}
              <div className="h-[60px] shrink-0 flex items-center justify-between px-6 bg-white dark:bg-zinc-800 border-b border-slate-200 dark:border-zinc-700 shadow-sm">
                <div>
                  <h1 className="text-base font-extrabold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_overview')}</h1>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">{t('feat_s5_db_clinic_name')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 p-2 rounded-full transition-colors">
                    <Bell size={16} className="text-slate-500" />
                    <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow-sm">31</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer bg-white dark:bg-zinc-700 py-1 px-2 rounded-full border border-slate-200 dark:border-zinc-600 shadow-sm hover:shadow transition-shadow">
                    <div className="w-7 h-7 bg-[#0f3e36] text-white rounded-full flex items-center justify-center font-bold text-[11px]">Y</div>
                    <div className="hidden sm:block text-left pr-1">
                      <div className="text-[10px] font-bold text-slate-800 dark:text-white leading-none mb-0.5">info@yildizlarvet.com</div>
                      <div className="text-[9px] text-slate-500 font-medium leading-none">{t('feat_s5_db_user_role')}</div>
                    </div>
                    <ChevronRight size={14} className="text-slate-400 rotate-90 hidden sm:block mr-0.5" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 space-y-5">

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { icon: <Calendar size={14} className="text-emerald-600" />, count: '18', title: t('feat_s5_db_stat1_title'), desc: t('feat_s5_db_stat1_desc') },
                    { icon: <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center font-bold text-[11px] shadow-sm">5</div>, count: '5', title: t('feat_s5_db_stat2_title'), desc: t('feat_s5_db_stat2_desc') },
                    { icon: <PawPrint size={14} className="text-emerald-600" />, count: '2.840', title: t('feat_s5_db_stat3_title'), desc: t('feat_s5_db_stat3_desc') },
                    { icon: <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center shadow-sm"><Activity size={12} /></div>, count: '34', title: t('feat_s5_db_stat4_title'), desc: t('feat_s5_db_stat4_desc') }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white dark:bg-zinc-800 p-3 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex items-start gap-2.5 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-zinc-700 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-600 shadow-sm">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-600 dark:text-slate-300 mb-0.5">{stat.title}</div>
                        <div className="text-[15px] font-black text-slate-800 dark:text-white leading-tight mb-0.5">{stat.count}</div>
                        <div className="text-[9px] text-slate-400 font-medium">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warning Banner */}
                <div className="bg-[#fcf1df] text-[#8a6b32] dark:bg-amber-900/30 dark:text-amber-500 px-3 py-2 rounded-lg border border-[#ebd6af] dark:border-amber-700/50 flex items-center gap-2.5 text-[11px] font-bold shadow-sm">
                  <AlertTriangle size={14} className="shrink-0" />
                  {t('feat_s5_db_warning')}
                </div>

                {/* Main Row: Appointments & Agenda */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {/* Upcoming Appointments */}
                  <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-center bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <Calendar size={14} className="text-emerald-600" /> {t('feat_s5_db_upcoming_apps')}
                      </div>
                      <button className="text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors">
                        {t('feat_s5_db_all_apps')} <ChevronRight size={14} />
                      </button>
                    </div>
                    <div className="overflow-x-auto flex-1">
                      <table className="w-full text-left text-[11px] whitespace-nowrap">
                        <thead className="text-[9px] text-slate-400 bg-slate-50 dark:bg-zinc-800/80 uppercase font-bold tracking-wider border-b border-slate-100 dark:border-zinc-700">
                          <tr>
                            <th className="px-3 py-2">{t('feat_s5_db_col_time')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_patient')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_owner')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_service')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_status')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-zinc-700/50">
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="px-3 py-2">
                              <div className="font-bold text-slate-800 dark:text-white text-[11px]">10:30</div>
                              <div className="text-[9px] font-medium text-slate-500">{t('feat_s5_db_august_26')}</div>
                            </td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Tarçın</td>
                            <td className="px-3 py-2 font-bold text-slate-800 dark:text-white">Ahmet Yılmaz</td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">{t('feat_s5_db_reason_rabies')}</td>
                            <td className="px-3 py-2">
                              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 px-2 py-1 rounded-full text-[9px] font-bold shadow-sm">
                                {t('feat_s5_db_status_approved')}
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="px-3 py-2">
                              <div className="font-bold text-slate-800 dark:text-white text-[11px]">14:15</div>
                              <div className="text-[9px] font-medium text-slate-500">{t('feat_s5_db_august_26')}</div>
                            </td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Senorita</td>
                            <td className="px-3 py-2 font-bold text-slate-800 dark:text-white">Melis Karaca</td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">{t('feat_s5_db_reason_routine')}</td>
                            <td className="px-3 py-2">
                              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 px-2 py-1 rounded-full text-[9px] font-bold shadow-sm">
                                {t('feat_s5_db_status_approved')}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="p-2 border-t border-slate-100 dark:border-zinc-700 text-center bg-slate-50/30 dark:bg-zinc-800/30">
                      <button className="text-emerald-600 dark:text-emerald-400 text-[11px] font-bold flex items-center justify-center gap-1 w-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 py-2 rounded-lg transition-colors">
                        {t('feat_s5_db_view_all')} <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Agenda */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex items-center gap-2 font-bold text-slate-800 dark:text-white text-[11px] bg-slate-50/50 dark:bg-zinc-800/50">
                      <Calendar size={14} className="text-emerald-600" /> {t('feat_s5_db_agenda')}
                    </div>
                    <div className="p-3 flex-1 flex flex-col gap-2 justify-center">
                      <div className="bg-slate-50 dark:bg-zinc-700/30 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-700 flex justify-between items-center">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_agenda_i1_time')}</div>
                          <div className="text-[9px] text-slate-500 font-medium mt-0.5">{t('feat_s5_db_agenda_i1_desc')}</div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm"><CheckCircle2 size={10} strokeWidth={3} /></div>
                      </div>
                      <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-700 flex justify-between items-center shadow-sm ring-1 ring-emerald-500/20">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_agenda_i2_time')}</div>
                          <div className="text-[9px] text-emerald-600 font-medium mt-0.5">{t('feat_s5_db_agenda_i2_desc')}</div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-sm"><Activity size={10} strokeWidth={3} /></div>
                      </div>
                      <div className="bg-slate-50 dark:bg-zinc-700/30 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-700 flex justify-between items-center">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_agenda_i3_time')}</div>
                          <div className="text-[9px] text-slate-500 font-medium mt-0.5">{t('feat_s5_db_agenda_i3_desc')}</div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-zinc-600 text-slate-500 flex items-center justify-center shadow-sm"><MoreHorizontal size={10} strokeWidth={3} /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Recent Patients */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <PawPrint size={14} className="text-emerald-600 shrink-0 mt-0.5" /> {t('feat_s5_db_recent_patients')}
                      </div>
                      <button className="text-[9px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-2 py-1 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors">
                        {t('feat_s5_db_all_patients')} <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="p-3 space-y-2">
                      {[
                        { name: 'Senorita', species: t('feat_s5_db_species_cat'), owner: 'Melis Karaca' },
                        { name: 'Tarçın', species: t('feat_s5_db_species_dog'), owner: 'Ahmet Yılmaz' },
                        { name: 'Karamel', species: t('feat_s5_db_species_dog'), owner: 'Berk Tekin' }
                      ].map((pet, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2 hover:bg-slate-50 dark:hover:bg-zinc-700/50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-zinc-600">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                            <PawPrint size={14} />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{pet.name}</div>
                            <div className="text-[9px] font-medium text-slate-500">{pet.species} • {pet.owner}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Vaccines */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <div className="w-4 h-4 bg-emerald-100 text-emerald-600 rounded-md flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><Activity size={10} /></div>
                        {t('feat_s5_db_upcoming_vacs')}
                      </div>
                    </div>
                    <div className="p-3 space-y-2.5 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-center border-b border-slate-50 dark:border-zinc-700/50 pb-2.5">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac1_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac1_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 px-2.5 py-1 rounded-md shadow-sm border border-rose-100 dark:border-rose-500/20">{t('feat_s5_db_vac1_date')}</div>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-50 dark:border-zinc-700/50 pb-2.5">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac2_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac2_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-2.5 py-1 rounded-md shadow-sm border border-emerald-100 dark:border-emerald-500/20">{t('feat_s5_db_vac2_date')}</div>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-50 dark:border-zinc-700/50 pb-2.5">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac3_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac3_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 px-2.5 py-1 rounded-md shadow-sm border border-amber-100 dark:border-amber-500/20">{t('feat_s5_db_vac3_date')}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac4_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac4_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-slate-600 bg-slate-100 dark:bg-zinc-700 dark:text-slate-300 px-2.5 py-1 rounded-md shadow-sm border border-slate-200 dark:border-zinc-600">{t('feat_s5_db_vac4_date')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Summary */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <Users size={14} className="text-emerald-600 shrink-0 mt-0.5" /> {t('feat_s5_db_clinic_summary')}
                      </div>
                      <button className="text-[9px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-2 py-1 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors">
                        {t('feat_s5_db_reports')} <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">14</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_team_member')}</div>
                        </div>
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">2</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_clinic_owner')}</div>
                        </div>
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">2.145</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_customer')}</div>
                        </div>
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">34</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_service')}</div>
                        </div>
                      </div>
                      <div className="text-[10px] font-medium text-slate-500 leading-relaxed mb-2">
                        {t('feat_s5_db_summary_text')}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mt-auto pt-2 border-t border-slate-100 dark:border-zinc-700">
                        {t('feat_s5_db_occupancy')}
                        <span className="bg-slate-100 dark:bg-zinc-700 px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200/50 dark:border-zinc-600">{t('feat_s5_db_soon')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <MessageCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" /> {t('feat_s5_db_messages')}
                      </div>
                      <button className="text-[9px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-2 py-1 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors whitespace-nowrap">
                        {t('feat_s5_db_open_inbox')} <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="p-0 flex flex-col flex-1 divide-y divide-slate-100 dark:divide-zinc-700/50">
                      {[
                        { name: 'Melis Karaca', msg: t('feat_s5_db_msg1_text'), time: '10:42', unread: 1 },
                        { name: 'Ahmet Yılmaz', msg: t('feat_s5_db_msg2_text'), time: t('feat_s5_db_msg_time_yesterday'), unread: 2 },
                        { name: 'Berk Tekin', msg: t('feat_s5_db_msg3_text'), time: t('feat_s5_db_msg_time_monday'), unread: 1 },
                      ].map((chat, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-zinc-700/50 cursor-pointer transition-colors">
                          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-zinc-600 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                            {chat.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                              <div className="text-[11px] font-bold text-slate-800 dark:text-white truncate pr-2">{chat.name}</div>
                              <div className={`text-[9px] ${chat.unread ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-400'}`}>{chat.time}</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className={`text-[10px] truncate pr-2 ${chat.unread ? 'text-slate-800 dark:text-slate-200 font-medium' : 'text-slate-500'}`}>
                                {chat.msg}
                              </div>
                              {chat.unread > 0 && (
                                <div className="w-4 h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">
                                  {chat.unread}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>




    </div>
  );
}
