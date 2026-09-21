import { useState } from 'react';
import { useTranslation } from 'react-i18next';


import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Calendar, Archive, Megaphone, Stethoscope, MapPin,
  Award, Grid, Activity,
  Bell,
  Phone, ChevronRight,
  Users, Edit3, CheckCircle2,
  PieChart, Wallet, Globe, Star, StarHalf, Clock,
  MessageCircle, ChevronDown,
  Scan, Barcode, BookOpen
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import PatientMgmtMockup from '../components/PatientMgmtMockup';
import LabInnovationMockup from '../components/LabInnovationMockup';
import DigitalGrowthSection from '../components/DigitalGrowthSection';
import ClinicsCTASection from '../components/ClinicsCTASection';



export default function Clinics() {
  const { t } = useTranslation();
  const [dashboardTab, setDashboardTab] = useState('shortcuts');

  return (
    <div className="fixed inset-0 z-[45] overflow-y-auto overflow-x-hidden scroll-smooth bg-[var(--bg-main)]">
      <SEO title={t('seo_title_clinics2')} description={t('seo_desc_clinics2')} />

      {/* Fake Navbar Background for visibility since we are full screen */}
      <div className="fixed top-0 left-0 right-0 h-[88px] bg-[var(--bg-main)]/80 backdrop-blur-md z-[60] pointer-events-none"></div>

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full hidden mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full hidden mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">

        {/* Section 0: New Macbook Hero */}
        <section className="min-h-[100dvh] py-24 lg:pt-32 lg:pb-16 flex flex-col justify-center relative">
          <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-10 xl:gap-16 w-full">
            {/* Left: Text Area */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[40%] space-y-6 lg:space-y-8 flex flex-col justify-center z-10">
              <div className="self-start inline-flex items-center gap-2 bg-white dark:bg-transparent text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full font-bold text-sm shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <CheckCircle2 size={16} /> {t('clinics_hero_badge')}
              </div>
              <h1 className="text-[30px] lg:text-[38px] xl:text-[44px] font-extrabold text-[var(--text-main)] leading-[1.2] tracking-tight">
                <span className="2xl:whitespace-nowrap">{t('clinics_hero_title1')}</span><br />
                <span className="text-teal-600 dark:text-teal-400 whitespace-nowrap">{t('clinics_hero_title2')}</span>
              </h1>
              <p className="text-[16px] lg:text-[18px] text-[var(--text-muted)] font-medium leading-[1.7] max-w-xl">
                {t('clinics_hero_desc')}
              </p>
            </motion.div>

            {/* Right: Macbook Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.95, rotateX: 15, y: 40 }} whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ perspective: 2000 }} className="w-full xl:w-[60%] relative flex justify-center items-center z-10 pl-8 pr-[60px] sm:pl-10 sm:pr-[76px] md:px-8 xl:px-10">

              {/* Sleek CSS Macbook Pro Mockup (Silver) */}
              <div className="relative w-full max-w-[900px] aspect-[1.46] mt-4 xl:mt-0">

                {/* Screen Lid (Ultra-thin Silver Outer Edge) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#e3e5e8] to-[#c7c9cc] dark:from-[#d1d3d6] dark:to-[#a9acb0] rounded-[8px] sm:rounded-[18px] rounded-b-[4px] sm:rounded-b-[8px] p-[1px] sm:p-[1.5px] shadow-2xl flex flex-col items-center border-b border-[#a9acb0] dark:border-[#838588] z-10">

                  {/* Black Bezel (Ultra-thin sides and top, slight chin) */}
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] sm:rounded-[16px] rounded-b-[3px] sm:rounded-b-[6px] p-[2px] sm:p-[5px] pb-[6px] sm:pb-[12px] relative overflow-hidden flex flex-col border border-[#222]">

                    {/* Sleek Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45px] sm:w-[100px] h-[10px] sm:h-[20px] bg-[#0a0a0a] rounded-b-[3px] sm:rounded-b-[6px] z-20 flex items-center justify-center">
                      <div className="w-[3px] sm:w-[5px] h-[3px] sm:h-[5px] bg-[#111] rounded-full border border-[#222] shadow-inner flex items-center justify-center">
                        <div className="w-[1.5px] sm:w-[2px] h-[1.5px] sm:h-[2px] bg-[#055c4d] rounded-full"></div>
                      </div>
                    </div>

                    {/* Actual Screen Area for Dashboard Image */}
                    <div className="flex-1 bg-zinc-950 rounded-[5px] sm:rounded-[10px] overflow-hidden relative">
                      <img
                        src="/dashboard-mockup.webp"
                        alt="Klinik Paneli Dashboard"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/0f3e36/ffffff?text=Dashboard+Gorseli+(dashboard-mockup.webp)';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Keyboard Base (Realistic Silver) */}
                <div className="absolute -bottom-[8px] sm:-bottom-[16px] left-[-14px] sm:left-[-32px] right-[-14px] sm:right-[-32px] h-[8px] sm:h-[16px] bg-gradient-to-b from-[#e3e5e8] via-[#c7c9cc] to-[#a0a3a8] dark:from-[#909398] dark:via-[#73767a] dark:to-[#5a5d61] rounded-t-[1px] sm:rounded-t-[2px] rounded-b-[6px] sm:rounded-b-[14px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex justify-center border-t border-[#fff] dark:border-[#a9acb0] z-0">
                  {/* Trackpad indentation */}
                  <div className="w-[50px] sm:w-[120px] h-[2px] sm:h-[4px] bg-[#b0b3b8] dark:bg-[#4a4d51] rounded-b-[2px] sm:rounded-b-[4px] shadow-inner mt-[1px]"></div>

                  {/* Left Rubber Foot */}
                  <div className="absolute -bottom-[1px] sm:-bottom-[2px] left-[15px] sm:left-[30px] w-[16px] sm:w-[36px] h-[1.5px] sm:h-[3px] bg-[#888] dark:bg-[#333] rounded-b-[2px] sm:rounded-b-[4px]"></div>

                  {/* Right Rubber Foot */}
                  <div className="absolute -bottom-[1px] sm:-bottom-[2px] right-[15px] sm:right-[30px] w-[16px] sm:w-[36px] h-[1.5px] sm:h-[3px] bg-[#888] dark:bg-[#333] rounded-b-[2px] sm:rounded-b-[4px]"></div>
                </div>

                {/* Mobile Phone Mockup Image (Overlapping right edge) */}
                <motion.div 
                  initial={{ scale: 0.95, rotateX: 15, y: 30 }} 
                  whileInView={{ scale: 1, rotateX: 0, y: 0 }} 
                  viewport={{once:true}} 
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="absolute z-30 bottom-[-10px] lg:bottom-[-20px] right-[-60px] sm:right-[-76px] md:right-[-104px] lg:right-[-123px] w-[136px] sm:w-[176px] md:w-[208px] lg:w-[246px] drop-shadow-2xl"
                >
                  <img 
                    src="/mobile-mockup.webp" 
                    alt="Mobil Uygulama Görünümü" 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/600x1200/transparent/333333?text=mobile-mockup.webp';
                    }}
                  />
                </motion.div>

              </div>

            </motion.div>
          </div>
        </section>

        {/* Section 1: Hero */}
        <section className="min-h-0 h-auto lg:min-h-[100dvh] py-10 lg:pt-32 lg:pb-16 flex flex-col justify-center">
          <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-10 xl:gap-16 w-full">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[48%] space-y-6 lg:space-y-8 xl:-translate-x-4 2xl:-translate-x-8">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-transparent text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-bold text-sm shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <Building2 size={16} />{t('clinics_hero_badge')}</div>
              <h1 className="text-[30px] lg:text-[42px] font-extrabold text-[var(--text-main)] leading-tight">{t('clinics_hero_title1')} <span className="text-inherit">{t('clinics_hero_title2')}</span>
              </h1>
              <p className="text-[16px] lg:text-[17px] text-[var(--text-muted)] font-medium leading-[1.8] max-w-xl">{t('clinics_hero_desc')}</p>
              <ul className="space-y-6 pt-2">
                <li className="flex items-center gap-6 text-slate-800 dark:text-slate-200 font-bold text-[14px] lg:text-[17px]">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                    <Calendar className="text-indigo-500 dark:text-indigo-400" size={26} />
                  </div>
                  {t('clinics_hero_li1')}
                </li>
                <li className="flex items-center gap-6 text-slate-800 dark:text-slate-200 font-bold text-[14px] lg:text-[17px]">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                    <Archive className="text-teal-500 dark:text-teal-400" size={26} />
                  </div>
                  {t('clinics_hero_li2')}
                </li>
                <li className="flex items-center gap-6 text-slate-800 dark:text-slate-200 font-bold text-[14px] lg:text-[17px]">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                    <Megaphone className="text-amber-500 dark:text-amber-400" size={26} />
                  </div>
                  {t('clinics_hero_li3')}
                </li>
              </ul>

            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[52%] relative min-h-[450px] xl:translate-x-6 2xl:translate-x-10">
              <div className="w-full h-full xl:absolute xl:inset-0">
                <div className="bg-white dark:bg-transparent rounded-[2rem] shadow-2xl border border-slate-100 dark:border-transparent p-6 xl:p-8 flex flex-col relative h-full">
                  {/* Header & Tabs */}
                  <div className="flex flex-col gap-4 mb-6 relative z-20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-800 rounded-xl shrink-0 shadow-inner flex items-center justify-center">
                          <Building2 size={24} className="text-teal-100" />
                        </div>
                        <div>
                          <div className="font-bold text-[var(--text-main)] dark:text-white text-lg flex items-center gap-1.5">{t('clinics_hero_card_title')}<CheckCircle2 size={16} className="text-teal-600" /></div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('clinics_hero_card_loc')}</div>
                        </div>
                      </div>
                      <div className="relative cursor-pointer w-10 h-10 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-100 dark:border-transparent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        <Bell size={20} className="text-slate-600 dark:text-slate-300" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">14</span>
                      </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide mt-4 px-1">
                      <button onClick={() => setDashboardTab('shortcuts')} className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-[12px] sm:text-sm transition-all whitespace-nowrap shadow-sm ${dashboardTab === 'shortcuts' ? 'bg-teal-700 text-white shadow-teal-700/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800/50 dark:text-slate-300'}`}>Kısayollar</button>
                      <button onClick={() => setDashboardTab('operations')} className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-[12px] sm:text-sm transition-all whitespace-nowrap shadow-sm ${dashboardTab === 'operations' ? 'bg-teal-700 text-white shadow-teal-700/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800/50 dark:text-slate-300'}`}>Klinik Operasyonları</button>
                      <button onClick={() => setDashboardTab('finance')} className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-[12px] sm:text-sm transition-all whitespace-nowrap shadow-sm ${dashboardTab === 'finance' ? 'bg-teal-700 text-white shadow-teal-700/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800/50 dark:text-slate-300'}`}>Gelir / Gider</button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide relative xl:min-h-0 min-h-[400px]">
                    <AnimatePresence mode="wait">
                      {dashboardTab === 'shortcuts' && (
                        <motion.div key="shortcuts" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4 h-full flex flex-col justify-between">
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { icon: Megaphone, label: 'Duyuru gönder' },
                              { icon: Edit3, label: 'Gönderi paylaş' },
                              { icon: Building2, label: 'Vitrini düzenle' },
                              { icon: Archive, label: 'Sunduğum hizmetler' },
                              { icon: Users, label: 'Ekip' },
                              { icon: Globe, label: 'Web sayfam' },
                              { icon: PieChart, label: 'Raporlar' },
                              { icon: Wallet, label: 'Gelir / Gider' },
                              { icon: Calendar, label: 'Randevular' },
                              { icon: Activity, label: 'Klinik Operasyonları' },
                            ].map((item, idx) => (
                              <div key={idx} className="bg-[#E8F3EF] dark:bg-teal-900/20 hover:bg-[#d8ebe4] dark:hover:bg-teal-900/40 transition-colors cursor-pointer rounded-xl p-4 flex items-center gap-3.5 border border-transparent dark:border-teal-800/30">
                                <item.icon size={20} className="text-teal-800 dark:text-teal-400 shrink-0" />
                                <span className="font-bold text-teal-950 dark:text-teal-100 text-[13.5px] leading-tight">{item.label}</span>
                              </div>
                            ))}
                            <div className="col-span-2 bg-[#E8F3EF] dark:bg-teal-900/20 hover:bg-[#d8ebe4] dark:hover:bg-teal-900/40 transition-colors cursor-pointer rounded-xl p-4 flex items-center gap-3.5 border border-transparent dark:border-teal-800/30">
                              <Building2 size={20} className="text-teal-800 dark:text-teal-400 shrink-0" />
                              <span className="font-bold text-teal-950 dark:text-teal-100 text-[13.5px] leading-tight">Klinik bilgileri</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {dashboardTab === 'operations' && (
                        <motion.div key="operations" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4 flex flex-col h-full justify-between pb-2">
                          <p className="text-xs font-medium text-slate-500 mb-1">Stok, laboratuvar ve kurumsal entegrasyonlar</p>
                          <div className="space-y-3">
                            {[
                              { icon: Archive, title: 'Ürün ve stok', desc: 'Lot, SKT, kritik seviye ve açıklanabilir hareket defteri', status: '1.452 ürün', color: 'text-teal-700 dark:text-teal-400' },
                              { icon: Activity, title: 'Laboratuvar', desc: 'Kaynaklı istem, sonuç ve hekim inceleme akışı', status: '12 açık istem', color: 'text-teal-700 dark:text-teal-400' },
                              { icon: MessageCircle, title: 'SMS ve WhatsApp', desc: 'Amaç bazlı izin kanıtları ve güvenli gönderim kuyruğu', status: '2 aktif kanal', color: 'text-teal-700 dark:text-teal-400' },
                              { icon: Grid, title: 'Entegrasyon ayarları', desc: 'Tüm kurumsal sağlayıcı bağlantılarını tek yerden yönet', status: '4 bağlantı yapılandırıldı', color: 'text-teal-700 dark:text-teal-400' }
                            ].map((item, idx) => (
                              <div key={idx} className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer rounded-xl p-4 flex items-center justify-between border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md group">
                                <div className="flex items-center gap-3.5">
                                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                                    <item.icon size={20} className="text-teal-600 dark:text-teal-400" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{item.title}</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                                    <p className={`text-[11px] font-bold mt-1 ${item.color}`}>{item.status}</p>
                                  </div>
                                </div>
                                <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-teal-600 transition-colors" />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {dashboardTab === 'finance' && (
                        <motion.div key="finance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-3 flex flex-col h-full justify-between pb-2">
                          <p className="text-[11px] font-medium text-slate-500 leading-normal max-w-sm">Bu defter kliniğin kendi kaydıdır. Platform üzerinden tahsilat yapılmaz, ödeme alınmaz; rakamlar kliniğin beyanıdır.</p>

                          <div className="flex gap-1.5">
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold text-[10px] rounded-full cursor-pointer hover:bg-slate-200">Bu ay</span>
                            <span className="px-2.5 py-1 bg-teal-600 text-white font-bold text-[10px] rounded-full shadow-md">Geçen ay</span>
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold text-[10px] rounded-full cursor-pointer hover:bg-slate-200">Bu yıl</span>
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold text-[10px] rounded-full cursor-pointer hover:bg-slate-200">Tümü</span>
                          </div>

                          <div className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl p-3 flex shadow-sm divide-x divide-slate-100 dark:divide-slate-700">
                            <div className="flex-1 text-center px-1">
                              <div className="text-sm font-bold text-teal-600">846.500,00</div>
                              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Gelir</div>
                            </div>
                            <div className="flex-1 text-center px-1">
                              <div className="text-sm font-bold text-rose-500">423.250,00</div>
                              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Gider</div>
                            </div>
                            <div className="flex-1 text-center px-1">
                              <div className="text-sm font-bold text-slate-800 dark:text-white">423.250,00</div>
                              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Fark</div>
                            </div>
                          </div>

                          {/* Add Record Form */}
                          <div className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl p-3 shadow-sm mt-auto">
                            <h4 className="font-bold text-slate-900 dark:text-white text-[11px] mb-2">Kayıt ekle</h4>

                            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 mb-2">
                              <div className="flex-1 bg-white dark:bg-slate-700 rounded-md text-teal-700 dark:text-teal-400 font-bold text-[10px] py-1 text-center shadow-sm cursor-pointer">Gelir</div>
                              <div className="flex-1 text-slate-500 dark:text-slate-400 font-bold text-[10px] py-1 text-center cursor-pointer hover:text-slate-700 dark:hover:text-slate-200">Gider</div>
                            </div>

                            <div className="space-y-2">
                              <div>
                                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mb-0.5 block">Tutar (TL)</label>
                                <input type="text" placeholder="1.250,00" className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg px-2 py-1 text-[11px] outline-none focus:border-teal-500 transition-colors placeholder:text-slate-400 dark:text-white text-slate-800 font-medium" />
                              </div>
                              <div>
                                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mb-0.5 block">Kategori</label>
                                <div className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg px-2 py-1 text-[11px] flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium cursor-pointer">
                                  Muayene ve Tedavi <ChevronDown size={14} className="text-slate-400" />
                                </div>
                              </div>
                              <div>
                                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mb-0.5 block">Ödeme yöntemi (isteğe bağlı)</label>
                                <div className="flex flex-wrap gap-1">
                                  {['Nakit', 'Kredi Kartı', 'Banka Kartı', 'Havale / EFT', 'FAST'].map((tag, i) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-[#E8F3EF] dark:bg-teal-900/20 text-teal-800 dark:text-teal-400 rounded-full text-[9px] font-bold cursor-pointer hover:bg-teal-100">{tag}</span>
                                  ))}
                                </div>
                              </div>
                              <button className="w-full bg-[#94A9A0] hover:bg-[#7d9289] text-white font-bold text-[11px] py-1.5 rounded-xl transition-colors mt-1">Kaydet</button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Dijital Klinik Profili */}
        <section className="min-h-0 h-auto lg:min-h-[100dvh] py-10 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 p-7 lg:p-8 relative w-full xl:min-w-[550px] mx-auto min-h-[480px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                <div className="border border-slate-200 dark:border-transparent rounded-xl p-3 flex items-center gap-3 bg-white dark:bg-transparent">
                  <Phone size={20} className="text-slate-500 dark:text-slate-400" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">{t('clinics_prof_phone')}</div>
                    <div className="text-xs font-bold text-[var(--text-main)] dark:text-white">0216 111 22 33</div>
                  </div>
                </div>

                <div className="border border-[#25D366]/20 bg-[#25D366]/5 dark:bg-[#25D366]/10 rounded-xl p-3 flex items-center gap-3">
                  <img src="/whatsapp.webp" alt="WhatsApp" className="w-6 h-6 object-contain" />
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
                        <img src="/team-1.webp" alt={t('clinics_prof_team_1')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_1')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{ __html: t('clinics_prof_team_1_role') }} /></div>
                    </div>
                    {/* Person 2 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-2.webp" alt={t('clinics_prof_team_2')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_2')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{ __html: t('clinics_prof_team_2_role') }} /></div>
                    </div>
                    {/* Person 3 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-3.webp" alt={t('clinics_prof_team_3')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_3')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{ __html: t('clinics_prof_team_3_role') }} /></div>
                    </div>
                    {/* Person 4 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-4.webp" alt={t('clinics_prof_team_4')} className="w-full h-full object-cover object-[70%_center]" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_4')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{ __html: t('clinics_prof_team_4_role') }} /></div>
                    </div>
                    {/* Person 5 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-5.webp" alt={t('clinics_prof_team_5')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_5')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{ __html: t('clinics_prof_team_5_role') }} /></div>
                    </div>
                    {/* Person 6 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-6.webp" alt={t('clinics_prof_team_6')} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-[var(--text-main)] dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{t('clinics_prof_team_6')}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug"><span dangerouslySetInnerHTML={{ __html: t('clinics_prof_team_6_role') }} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-8">
            <h2 className="text-[30px] lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('clinics_prof_sec_title')}</h2>
            <p className="text-[16px] lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-xl">{t('clinics_prof_sec_desc')}</p>
            <div className="flex flex-col gap-3 mt-4 relative">
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_prof_sec_f1')}</h3>
                </div>
              </div>
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_prof_sec_f2')}</h3>
                </div>
              </div>
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <Award size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_prof_sec_f3')}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </section>



        {/* Section 3.5: Hasta ve Müşteri Yönetimi (Düzen ve Esneklik) */}
        <section className="min-h-0 h-auto lg:min-h-[100dvh] py-10 lg:py-32 flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12">
          {/* Left: Text Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[45%] space-y-4 lg:space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full font-bold text-sm shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent w-fit">
              <Users size={16} /> {t('clinics_s4_badge')}
            </div>
            
            <h2 className="text-[30px] lg:text-[42px] font-extrabold text-[var(--text-main)] leading-[1.15] tracking-tight">
              {t('clinics_s4_title')}
            </h2>
            
            <p className="text-[16px] lg:text-[18px] text-[var(--text-secondary)] leading-relaxed font-medium">
              {t('clinics_s4_desc')}
            </p>
            
            <div className="flex flex-col gap-3 mt-4 relative">
              {/* Feature 1 */}
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_s4_t1_title')}</h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <Grid size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_s4_t2_title')}</h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <Activity size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_s4_t3_title')}</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: UI Mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[52%] relative min-h-[600px] xl:translate-x-6 2xl:translate-x-10 mt-12 xl:mt-0">
            <PatientMgmtMockup />
          </motion.div>
        </section>

        {/* Section 5: İnovasyon (Laboratuvar ve Stok) */}
        <section className="min-h-0 h-auto lg:min-h-[100dvh] py-10 lg:py-32 flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12">
          
          {/* Left: UI Mockup */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[52%] relative h-[650px] xl:-translate-x-6 2xl:-translate-x-10 mt-12 xl:mt-0 order-2 lg:order-1">
            <LabInnovationMockup />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full xl:w-[45%] space-y-4 lg:space-y-6 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full font-bold text-sm shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent w-fit">
              <Scan size={16} /> {t('clinics_s5_badge')}
            </div>
            
            <h2 className="text-[30px] lg:text-[42px] font-extrabold text-[var(--text-main)] leading-[1.15] tracking-tight">
              {t('clinics_s5_title')}
            </h2>
            
            <p className="text-[16px] lg:text-[18px] text-[var(--text-secondary)] leading-relaxed font-medium">
              {t('clinics_s5_desc')}
            </p>
            
            <div className="flex flex-col gap-3 mt-4 relative">
              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Scan size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_s5_f1')}</h3>
                </div>
              </div>

              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <Barcode size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_s5_f2')}</h3>
                </div>
              </div>

              <div className="text-left p-3 lg:p-4 rounded-2xl border-2 border-transparent hover:bg-white/50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-[14px] lg:text-lg text-[var(--text-main)]">{t('clinics_s5_f3')}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 6: İletişim ve Dijital Görünürlük (Scroll Spy Layout) */}
        <DigitalGrowthSection />

        {/* Section 7: Closing CTA Section */}
        <ClinicsCTASection />



      </div>

      {/* Footer Section - Outside of container but still part of scroll snap wrapper */}
      <section className="flex flex-col justify-end min-h-[40vh] bg-[var(--bg-secondary)] w-full">
        <Footer />
      </section>    </div>
  );
}
