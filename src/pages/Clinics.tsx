import { useTranslation } from 'react-i18next';


import { motion } from 'framer-motion';
import { 
  Building2, Calendar, Archive, Megaphone, Stethoscope, MapPin, 
  Award, ArrowRight, Grid, FileText, Activity, 
  CheckCircle, Bell, 
  Phone, ChevronRight, ChevronLeft,
  Users, Edit3, CheckCircle2,
  PieChart, Wallet, Globe, Star, StarHalf, Clock,
  List, Hourglass, ArrowRightLeft
} from 'lucide-react';
import SEO from '../components/SEO';

import Footer from '../components/Footer';

const AnimatedBorder = ({ color, rx = "32" }: { color: string, rx?: string }) => (
  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
    <motion.rect
      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx={rx}
      fill="none" stroke={color} strokeWidth="2" 
      style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </motion.svg>
);

export default function Clinics() {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-[45] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[var(--bg-main)]">
      <SEO title={t('seo_title_clinics2')} description={t('seo_desc_clinics2')} />
      
      {/* Fake Navbar Background for visibility since we are full screen */}
      <div className="fixed top-0 left-0 right-0 h-[88px] bg-[var(--bg-main)]/80 backdrop-blur-md z-[60] pointer-events-none"></div>

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full hidden mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full hidden mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section 1: Hero */}
        <section className="min-h-[100dvh] snap-always snap-start py-24 lg:pt-32 lg:pb-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="w-full lg:w-[45%] space-y-8">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-transparent text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-bold text-sm shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
              <Building2 size={16} />{t('clinics_hero_badge')}</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('clinics_hero_title1')}<br/> <span className="text-inherit">{t('clinics_hero_title2')}</span>
            </h1>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-xl">{t('clinics_hero_desc')}</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <Calendar className="text-indigo-500 mt-0.5 shrink-0" size={20} />{t('clinics_hero_li1')}</li>
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <Archive className="text-teal-500 mt-0.5 shrink-0" size={20} />{t('clinics_hero_li2')}</li>
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <Megaphone className="text-amber-500 mt-0.5 shrink-0" size={20} />{t('clinics_hero_li3')}</li>
            </ul>
            <div className="pt-4">
              <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-colors flex items-center gap-2 shadow-xl shadow-black/10 dark:shadow-black/20">{t('clinics_hero_btn')}<ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="w-full lg:w-[55%] relative">
            <div className="bg-white dark:bg-transparent rounded-[2rem] shadow-2xl border border-slate-100 dark:border-transparent p-8 lg:p-10 flex flex-col relative h-auto lg:h-auto lg:min-h-[450px]">
              <AnimatedBorder color="#8B5CF6" />
              
              {/* Header (Profile Card style) */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100 dark:border-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-800 rounded-xl shrink-0 shadow-inner flex items-center justify-center">
                    <Building2 size={24} className="text-teal-100" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--text-main)] dark:text-white text-lg flex items-center gap-1.5">{t('clinics_hero_card_title')}<CheckCircle2 size={16} className="text-teal-600" />
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('clinics_hero_card_loc')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative cursor-pointer w-12 h-12 bg-white dark:bg-transparent rounded-full flex items-center justify-center border border-slate-100 dark:border-transparent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <Bell size={24} className="text-[var(--text-muted)] dark:text-slate-300" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold border-2 border-white dark:border-transparent">10</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1">
                {/* Sidebar */}
                <div className="w-full lg:w-48 flex flex-col gap-6 shrink-0">

                  {/* Sidebar Menu */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">{t('clinics_sidebar_fast')}</div>
                    
                    <div className="flex items-center gap-3 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-3 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border border-teal-100/50 dark:border-teal-800/30">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-800/50 flex items-center justify-center shrink-0">
                        <Calendar size={16} className="text-teal-600 dark:text-teal-400" />
                      </div>{t('clinics_sidebar_appts')}</div>
                    
                    <div className="flex items-center gap-3 text-[var(--text-muted)] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Users size={16} className="text-blue-500 dark:text-blue-400" />
                      </div>{t('clinics_sidebar_clients')}</div>
                    
                    <div className="flex items-center gap-3 text-[var(--text-muted)] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/20 group-hover:bg-amber-100 dark:group-hover:bg-amber-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Megaphone size={16} className="text-amber-500 dark:text-amber-400" />
                      </div>{t('clinics_sidebar_announce')}</div>
                    
                    <div className="flex items-center gap-3 text-[var(--text-muted)] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Edit3 size={16} className="text-purple-500 dark:text-purple-400" />
                      </div>{t('clinics_sidebar_post')}</div>
                    
                    <div className="flex items-center gap-3 text-[var(--text-muted)] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <PieChart size={16} className="text-rose-500 dark:text-rose-400" />
                      </div>{t('clinics_sidebar_reports')}</div>
                    
                    <div className="flex items-center gap-3 text-[var(--text-muted)] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Wallet size={16} className="text-emerald-500 dark:text-emerald-400" />
                      </div>{t('clinics_sidebar_finance')}</div>
                    
                    <div className="flex items-center gap-3 text-[var(--text-muted)] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Globe size={16} className="text-indigo-500 dark:text-indigo-400" />
                      </div>{t('clinics_sidebar_web')}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-8">
                  {/* Klinik Nabzı */}
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-main)] dark:text-white mb-4">{t('clinics_pulse_title')}</h3>
                    <div className="grid grid-cols-4 divide-x divide-slate-100 dark:divide-slate-800 border border-slate-100 dark:border-transparent rounded-2xl py-5 bg-gradient-to-br from-white via-teal-50/30 to-slate-50 dark:from-slate-800/50 dark:via-teal-900/10 dark:to-slate-800/50 shadow-sm">
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-[var(--text-main)] dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">{t('clinics_pulse_today')}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-[var(--text-main)] dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">{t('clinics_pulse_waiting')}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-[var(--text-main)] dark:text-white">50</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">{t('clinics_pulse_client')}</div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-[var(--text-main)] dark:text-white">200</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">{t('clinics_pulse_follower')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 px-2 text-xs font-semibold text-slate-400">
                      <span>{t('clinics_pulse_stats1')}</span>
                      <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                      <span>{t('clinics_pulse_stats2')}</span>
                    </div>
                  </div>
                  
                  {/* Bugünün Akışı */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-[var(--text-main)] dark:text-white">{t('clinics_flow_title')}</h3>
                      <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold cursor-pointer hover:underline">{t('clinics_flow_calendar_link')}</span>
                    </div>
                    <div className="border border-teal-100 dark:border-teal-900/50 border-l-4 border-l-teal-500 rounded-2xl p-5 flex items-center justify-between bg-gradient-to-r from-teal-50/30 to-white dark:from-teal-900/10 dark:to-slate-800/50 shadow-sm">
                      <div className="flex flex-col">
                        <div className="font-bold text-[var(--text-main)] dark:text-white text-base mb-1 flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                            <Calendar size={14} />
                          </div>{t('clinics_flow_empty')}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm pl-[38px]">{t('clinics_flow_empty_desc')}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-transparent flex items-center justify-center shrink-0">
                        <ChevronRight size={16} className="text-teal-600 dark:text-teal-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Dijital Klinik Profili */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 p-7 lg:p-8 relative w-full xl:min-w-[550px] mx-auto min-h-[480px]">
              <AnimatedBorder color="#F59E0B" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                <div className="border border-slate-200 dark:border-transparent rounded-xl p-3 flex items-center gap-3 bg-white dark:bg-transparent">
                  <Phone size={20} className="text-slate-500 dark:text-slate-400" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">{t('clinics_prof_phone')}</div>
                    <div className="text-xs font-bold text-[var(--text-main)] dark:text-white">0216 111 22 33</div>
                  </div>
                </div>
                
                <div className="border border-[#25D366]/20 bg-[#25D366]/5 dark:bg-[#25D366]/10 rounded-xl p-3 flex items-center gap-3">
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">{t('clinics_prof_wp')}</div>
                    <div className="text-xs font-bold text-[var(--text-main)] dark:text-white">+90 532 111 2233</div>
                  </div>
                </div>

                <div className="border border-teal-200 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors">
                  <Calendar size={20} className="text-teal-600 dark:text-teal-400" />
                  <div>
                    <div className="text-[10px] font-bold text-teal-600/70 dark:text-teal-400/70 uppercase">{t('clinics_prof_online')}</div>
                    <div className="text-xs font-bold text-teal-700 dark:text-teal-300">{t('clinics_prof_online_req')}</div>
                  </div>
                </div>

                <div className="border border-slate-200 dark:border-transparent rounded-xl p-3 flex items-center gap-3 bg-white dark:bg-transparent cursor-pointer">
                  <MapPin size={20} className="text-rose-500" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">{t('clinics_prof_dir')}</div>
                    <div className="text-xs font-bold text-[var(--text-main)] dark:text-white">{t('clinics_prof_map')}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 h-full">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-bold text-[var(--text-main)] dark:text-white text-sm mb-1.5">{t('clinics_prof_rating')}</h3>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-black text-[var(--text-main)] dark:text-white">4.8</div>
                      <div>
                        <div className="flex text-amber-400 gap-0.5">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <StarHalf size={16} fill="currentColor" />
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">{t('clinics_prof_rating_desc')}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-[var(--text-main)] dark:text-white text-sm mb-1.5">{t('clinics_prof_hours')}</h3>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-700 dark:text-slate-300">
                        <Clock size={16} className="text-teal-500" />{t('clinics_prof_hours_wd')}</div>
                      <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                        <Clock size={16} className="text-slate-400" />{t('clinics_prof_hours_we')}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-[var(--text-main)] dark:text-white text-sm mb-1.5">{t('clinics_prof_addr')}</h3>
                    <p className="text-[13px] font-bold text-[var(--text-main)] dark:text-slate-200 mb-0.5">{t('clinics_prof_addr_st')}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">{t('clinics_prof_addr_city')}</p>
                    <p className="text-[11px] text-[var(--text-muted)] dark:text-slate-400 mb-3 leading-relaxed">{t('clinics_prof_addr_desc')}</p>
                    <button className="w-full bg-teal-500 hover:bg-teal-600 transition-colors text-white rounded-lg py-1.5 text-[13px] font-bold flex items-center justify-center gap-2">
                      <MapPin size={16} />{t('clinics_prof_view')}</button>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-[var(--text-main)] dark:text-white text-sm mb-1.5">{t('clinics_prof_about')}</h3>
                    <p className="text-[11px] text-[var(--text-muted)] dark:text-slate-400 leading-relaxed">{t('clinics_prof_about_desc')}</p>
                  </div>
                </div>
                
                <div className="flex-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-transparent pt-6 lg:pt-0">
                  <h3 className="font-bold text-[var(--text-main)] dark:text-white text-lg mb-6">{t('clinics_prof_team')}</h3>
                  <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                    {/* Person 1 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-1.jpg" alt={t('clinics_prof_team_1')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_1')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{__html: t('clinics_prof_team_1_role')}} /></div>
                    </div>
                    {/* Person 2 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-2.jpg" alt={t('clinics_prof_team_2')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_2')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{__html: t('clinics_prof_team_2_role')}} /></div>
                    </div>
                    {/* Person 3 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-3.jpg" alt={t('clinics_prof_team_3')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_3')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{__html: t('clinics_prof_team_3_role')}} /></div>
                    </div>
                    {/* Person 4 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-4.jpg" alt={t('clinics_prof_team_4')} className="w-full h-full object-cover object-[70%_center]" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_4')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{__html: t('clinics_prof_team_4_role')}} /></div>
                    </div>
                    {/* Person 5 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-5.jpg" alt={t('clinics_prof_team_5')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_5')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{__html: t('clinics_prof_team_5_role')}} /></div>
                    </div>
                    {/* Person 6 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-6.jpg" alt={t('clinics_prof_team_6')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_6')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{__html: t('clinics_prof_team_6_role')}} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('clinics_prof_sec_title')}</h2>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-xl">{t('clinics_prof_sec_desc')}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <Stethoscope className="text-blue-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_prof_sec_f1')}</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <MapPin className="text-rose-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_prof_sec_f2')}</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <Award className="text-purple-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_prof_sec_f3')}</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Akıllı Ajanda Yönetimi */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('clinics_agenda_title')}</h2>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-xl">{t('clinics_agenda_desc')}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <Calendar className="text-blue-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_agenda_f1')}</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <Grid className="text-teal-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_agenda_f2')}</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <Bell className="text-amber-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_agenda_f3')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 p-8 relative xl:min-w-[550px] mx-auto min-h-[480px]">
              <AnimatedBorder color="#10B981" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                 <div>
                   <h3 className="text-lg font-extrabold text-[var(--text-main)]">{t('clinics_sidebar_appts')}</h3>
                   <p className="text-xs text-slate-500 font-medium">{t('clinics_agenda_sub')}</p>
                 </div>
                 <div className="text-teal-600 cursor-pointer p-2 hover:bg-teal-50 rounded-full transition-colors"><List size={20} /></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <Calendar size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-[var(--text-main)] text-lg">24</div>
                  <div className="text-[10px] text-slate-500 font-medium">{t('clinics_agenda_stat1')}</div>
                </div>
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <Hourglass size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-[var(--text-main)] text-lg">8</div>
                  <div className="text-[10px] text-slate-500 font-medium">{t('clinics_agenda_stat2')}</div>
                </div>
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <ArrowRightLeft size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-[var(--text-main)] text-lg">3</div>
                  <div className="text-[10px] text-slate-500 font-medium leading-tight"><span dangerouslySetInnerHTML={{__html: t('clinics_agenda_stat3')}} /></div>
                </div>
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <CheckCircle2 size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-[var(--text-main)] text-lg">45</div>
                  <div className="text-[10px] text-slate-500 font-medium">{t('clinics_agenda_stat4')}</div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 bg-white dark:bg-zinc-900 p-1.5 rounded-xl">
                <button className="flex-1 bg-teal-600 text-white rounded-lg py-1.5 text-xs font-bold shadow-sm">{t('clinics_agenda_tab1')}</button>
                <button className="flex-1 text-slate-500 hover:text-slate-700 py-1.5 text-xs font-bold transition-colors">{t('clinics_agenda_tab2')}</button>
                <button className="flex-1 text-slate-500 hover:text-slate-700 py-1.5 text-xs font-bold transition-colors">{t('clinics_agenda_tab3')}</button>
                <button className="flex-1 text-slate-500 hover:text-slate-700 py-1.5 text-xs font-bold transition-colors">{t('clinics_agenda_tab4')}</button>
              </div>

              {/* Main Content: Calendar + Appointment Card */}
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Calendar */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <ChevronLeft size={18} className="text-[var(--text-muted)] cursor-pointer" />
                    <span className="font-bold text-[var(--text-main)] text-sm">{t('clinics_agenda_month')}</span>
                    <ChevronRight size={18} className="text-[var(--text-muted)] cursor-pointer" />
                  </div>
                  
                  {/* Days of week */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
                      <div key={day} className="text-[10px] font-bold text-slate-400">{day}</div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm font-medium">
                    <div className="text-slate-300"></div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">1</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">2</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">3</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">4</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">5</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">6</div>
                    
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">7</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">8</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">9</div>
                    <div className="bg-teal-700 text-white py-1 rounded-full shadow-md font-bold">10</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">11</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">12</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">13</div>
                    
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">14</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">15</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">16</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">17</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">18</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">19</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">20</div>

                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">21</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">22</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">23</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">24</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">25</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">26</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">27</div>
                    
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">28</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">29</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">30</div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="text-[11px] font-bold text-teal-600 cursor-pointer hover:underline">{t('clinics_agenda_clear_filter')}</span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden lg:block w-px bg-white mx-1"></div>

                {/* Appointment Card */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="border border-slate-100 dark:border-zinc-800 rounded-2xl p-4 shadow-sm relative bg-white dark:bg-zinc-900">
                    <div className="absolute top-4 right-4 bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-[10px] font-bold">{t('clinics_agenda_approved')}</div>
                    
                    <h4 className="font-bold text-[var(--text-main)] text-sm mb-0.5">{t('clinics_agenda_appt_title')}</h4>
                    <p className="text-[11px] text-slate-500 mb-4 font-medium">{t('clinics_agenda_appt_patient')}</p>
                    
                    <div className="bg-teal-50 rounded-lg p-2.5 flex items-center gap-2 mb-4">
                      <Clock size={14} className="text-teal-600" />
                      <span className="text-xs font-bold text-slate-700">{t('clinics_agenda_appt_time')}</span>
                    </div>
                    
                    <button className="bg-teal-50 hover:bg-teal-100 transition-colors text-teal-700 text-xs font-bold py-2 px-4 rounded-xl w-fit">{t('clinics_agenda_appt_btn')}</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: {t('clinics_ehr_title')} */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 p-0 relative h-auto lg:h-auto lg:min-h-[450px] flex flex-col lg:flex-row overflow-hidden">
              <AnimatedBorder color="#3B82F6" />
              {/* Sidebar */}
              <div className="w-full lg:w-1/3 bg-white dark:bg-zinc-950 border-r border-slate-200 dark:border-zinc-800 p-6 flex flex-col items-center">
                <div className="w-24 h-24 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center border-4 border-white dark:border-zinc-800 shadow-sm mb-4 overflow-hidden">
                   <img src="/leo-dog.jpg" alt="Leo" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg text-[var(--text-main)]">Leo</h3>
                <p className="text-xs font-medium text-slate-500 mb-8 text-center">{t('clinics_ehr_owner')}</p>
                
                <div className="w-full space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">{t('clinics_ehr_breed_lbl')}</span>
                    <span className="font-bold text-[var(--text-main)] text-right leading-tight">{t('clinics_ehr_breed_val')}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">{t('clinics_ehr_gender_lbl')}</span>
                    <span className="font-bold text-[var(--text-main)] text-right">{t('clinics_ehr_gender_val')}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">{t('clinics_ehr_age_lbl')}</span>
                    <span className="font-bold text-[var(--text-main)] text-right">{t('clinics_ehr_age_val')}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">{t('clinics_ehr_weight_lbl')}</span>
                    <span className="font-bold text-[var(--text-main)] text-right">{t('clinics_ehr_weight_val')}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">{t('clinics_ehr_chip_lbl')}</span>
                    <span className="font-bold text-[var(--text-main)] text-right text-[11px] xl:text-xs">900213000142981</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-2/3 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-[var(--text-main)]">{t('clinics_ehr_history')}</h3>
                  <button className="text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1">{t('clinics_ehr_add_btn')}</button>
                </div>
                
                <div className="relative border-l-2 border-slate-100 ml-4 space-y-6 flex-1 overflow-y-auto pr-2">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"></div>
                    <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">{t('clinics_ehr_d1')}</div>
                    <div className="border border-slate-200 dark:border-zinc-800 rounded-xl p-3 lg:p-4 bg-white dark:bg-zinc-900 shadow-sm">
                      <h4 className="font-bold text-[var(--text-main)] text-sm mb-1 flex items-center gap-2"><Activity size={16} className="text-emerald-500" />{t('clinics_ehr_t2')}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{t('clinics_ehr_desc2')}</p>
                    </div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white"></div>
                    <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">{t('clinics_ehr_d2')}</div>
                    <div className="border border-slate-200 dark:border-zinc-800 rounded-xl p-3 lg:p-4 bg-white dark:bg-zinc-900 shadow-sm">
                      <h4 className="font-bold text-[var(--text-main)] text-sm mb-1 flex items-center gap-2"><Activity size={16} className="text-indigo-500" />{t('clinics_ehr_t1')}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{t('clinics_ehr_desc1')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight" dangerouslySetInnerHTML={{ __html: t('clinics_ehr_title_html') }}></h2>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-xl">
              {t('clinics_feat_cloud_desc')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <FileText className="text-teal-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_ehr_f1')}</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <Activity className="text-emerald-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_ehr_f2')}</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent p-3 lg:p-4 rounded-2xl shadow-sm">
                <CheckCircle className="text-indigo-500 shrink-0" size={24} />
                <span className="font-bold text-[var(--text-main)] text-lg">{t('clinics_ehr_f3')}</span>
              </div>
            </div>
          </motion.div>
        </section>

        

      </div>

      {/* Footer Section - Outside of container but still part of scroll snap wrapper */}
      <section className="snap-always snap-start flex flex-col justify-end min-h-[40vh] bg-[var(--bg-secondary)] w-full">
        <Footer />
      </section>

    </div>
  );
}
