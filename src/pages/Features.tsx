import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Calendar, Stethoscope, Users, CheckCircle2, 
  ShieldCheck, Activity, QrCode, PhoneCall, 
  PawPrint, Bell, FileText, Share2, Heart, MessageCircle, MoreHorizontal,
  ArrowLeft, Syringe, Bookmark, Plus, ArrowRight, Image as ImageIcon, Menu,
  MapPin, Globe, Building2
} from 'lucide-react';

import SEO from '../components/SEO';

export default function Features() {
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
      <SEO title="Özellikler - Veterito" description="Veterito'nun hayvan sahipleri ve klinikler için sunduğu tüm özellikleri detaylıca keşfedin." />

      {/* 1. HERO / ECOSYSTEM OVERVIEW (Snap Section 1) */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start py-20 lg:py-0 snap-always relative z-0">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="sticky top-0 left-0 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden z-0 pt-24 pb-12"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[50%] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center relative z-10 flex flex-col items-center justify-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold shadow-sm mb-6 bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-sm">
                <ShieldCheck size={16} />
                Uçtan Uca Sağlık Ekosistemi
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
                Hayatı Kolaylaştıran <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-vet-primary)] to-[var(--color-vet-accent)]">
                  Dijital Sağlık Ağı
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-[var(--text-muted)] max-w-2xl lg:max-w-3xl leading-relaxed font-medium">
                Veterito; evcil hayvanların, sahiplerinin ve kliniklerin hayatını kolaylaştırmak için tasarlandı. Sadece bir hatırlatıcı değil; hastalıklara erken müdahale edilmesini sağlayan, kliniklerin iş yükünü azaltan ve hayvan severleri bir araya getiren devasa bir ağdır.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. INTERACTIVE APP SHOWCASE (Snap Section 2) */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-surface)] flex flex-col justify-center pt-24 pb-8 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center h-full">
          <div className="text-center mb-2 transform translate-y-4 lg:translate-y-8 relative z-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6 py-1 leading-tight">
              Herkes İçin <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500 dark:from-teal-400 dark:to-teal-300">Tek Bir Uygulama</span>
            </h2>
            
            {/* Tab Navigation */}
            <div className="inline-flex flex-wrap justify-center gap-2 bg-slate-200 dark:bg-slate-800 p-1.5 rounded-3xl">
              <button 
                onClick={() => setActiveTab('owners')} 
                className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'owners' ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <Calendar size={16} /> Evcil Hayvan Sahipleri
              </button>
              <button 
                onClick={() => setActiveTab('pets')} 
                className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'pets' ? 'bg-white dark:bg-slate-700 text-sky-500 dark:text-sky-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <QrCode size={16} /> Patili Dostlar
              </button>
              <button 
                onClick={() => setActiveTab('community')} 
                className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'community' ? 'bg-white dark:bg-slate-700 text-rose-500 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <Heart size={16} /> Pati Topluluğu
              </button>
            </div>
          </div>

          <div className="relative w-full flex items-start justify-center flex-1">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: OWNERS */}
              {activeTab === 'owners' && (
                <motion.div key="owners" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 w-full max-w-6xl mx-auto lg:pl-8 mt-6 lg:mt-8">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-4 text-center lg:text-left">
                    <div>
                      <h2 className="text-sm font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">EVCİL HAYVAN SAHİPLERİ İÇİN</h2>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">Sıfır Stres, <br/>Kesintisiz Takip.</h3>
                    </div>
                    <p className="text-base lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-2">
                      Fiziksel aşı karnesini kaybetme veya rutin uygulamaları unutma derdine son verin. Veterito, patili dostunuzun yaşına ve türüne göre yapılması gerekenleri hesaplar ve tam zamanında size hatırlatır.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-transform">
                        <Bell size={24} className="text-amber-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Akıllı Bildirimler</h4>
                        <p className="text-xs text-[var(--text-muted)]">Zamanı gelen aşı ve parazit uygulamaları için.</p>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-transform">
                        <Users size={24} className="text-rose-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Çoklu Profil</h4>
                        <p className="text-xs text-[var(--text-muted)]">Birden fazla dostunuzu tek ekrandan yönetin.</p>
                      </div>
                      <div className="sm:col-span-2 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 transition-transform">
                        <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-full flex items-center justify-center text-sky-500 shrink-0"><FileText size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Resmi PDF Dökümü</h4>
                          <p className="text-xs text-[var(--text-muted)]">Seyahatlerde zorunlu evraklar tek tıkla elinizde.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[40%] flex justify-center lg:justify-end h-[520px] relative perspective-1000 mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.85] origin-top lg:origin-top-right bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col z-10 border border-slate-100 dark:border-slate-800">

                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <div>
                          <div className="text-[var(--text-muted)] mb-1"><Menu size={20} className="text-emerald-900 dark:text-emerald-100" /></div>
                          <h2 className="text-2xl font-serif font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-2 mt-4">
                            Günaydın <span className="text-amber-500">✦</span>
                          </h2>
                          <p className="text-xs text-emerald-800/70 dark:text-emerald-200/70">Bugün harika bir gün <br/> Senorita için.</p>
                        </div>
                        <div className="absolute top-14 right-6">
                          <Bell size={20} className="text-emerald-900 dark:text-emerald-100" />
                        </div>
                      </div>
                      <div className="px-4 flex-1 flex flex-col gap-4 overflow-y-auto pb-20 no-scrollbar">
                        <div className="bg-white dark:bg-[#233120] rounded-[24px] p-4 flex gap-4 items-center shadow-sm relative">
                          <div className="w-24 h-24 rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 opacity-60"></div>
                            <ImageIcon size={32} className="relative z-10 opacity-50" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">Senorita 👑</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">7 yaşında • Dişi<br/>Maine Coon</p>
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 border-t border-slate-100 dark:border-slate-600 pt-2 mt-2">
                              Profilini Gör <ArrowRight size={12}/>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center px-2 mb-3">
                            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 text-sm">Yaklaşanlar</h4>
                            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">Tümünü Gör</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white dark:bg-[#233120] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400"><ShieldCheck size={18} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-slate-100 text-xs">Aşı Hatırlatması</h5>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">Karma Aşı (FVRCP)<br/>24 Mayıs 2024</p>
                              </div>
                              <div className="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">3 gün kaldı</div>
                            </div>
                            <div className="bg-white dark:bg-[#233120] rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400"><Activity size={18} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-slate-100 text-xs">Parazit Hatırlatması</h5>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">İç Parazit Uygulaması<br/>12 Haziran 2024</p>
                              </div>
                              <div className="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">22 gün kaldı</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center px-2 mb-2 mt-2">
                            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 text-sm">Sağlık Özeti</h4>
                            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">Bu aya ait</span>
                          </div>
                          <div className="bg-white dark:bg-[#233120] rounded-2xl p-4 shadow-sm">
                            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100 dark:divide-slate-700">
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-1"><Activity size={12} className="text-emerald-700"/></div>
                                <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">7.2 kg</div>
                                <div className="text-[9px] text-slate-500">Kilo</div>
                              </div>
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-1"><Plus size={12} className="text-emerald-700"/></div>
                                <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">İyi</div>
                                <div className="text-[9px] text-slate-500">Genel Durum</div>
                              </div>
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-1"><PawPrint size={12} className="text-emerald-700"/></div>
                                <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">Aktif</div>
                                <div className="text-[9px] text-slate-500">Yaşam Seviyesi</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800 flex justify-around items-center px-4 pb-2">
                        <div className="flex flex-col items-center text-emerald-800 dark:text-emerald-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px] font-bold">Ana Sayfa</span></div>
                        <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px]">Sağlık</span></div>
                        <div className="w-14 h-14 bg-emerald-800 dark:bg-emerald-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-white dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">Randevular</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Users size={22} className="mb-1"/><span className="text-[9px]">Profil</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-2 lg:left-4 top-24 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-amber-500/10 border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center"><Bell size={18} className="text-amber-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 mb-0.5">Hatırlatma</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Aşı Zamanı!</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: PETS */}
              {activeTab === 'pets' && (
                <motion.div key="pets" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 w-full max-w-6xl mx-auto lg:pl-8 mt-6 lg:mt-8">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-4 text-center lg:text-left">
                    <div>
                      <h2 className="text-sm font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-2">PATİLİ DOSTLAR İÇİN</h2>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">Hayat Kurtaran <br/>Dijital Kimlik.</h3>
                    </div>
                    <p className="text-base lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-2">
                      Acil durumlarda veya farklı bir veteriner kliniğine gidildiğinde saniyeler önemlidir. Yanlış tedavi riskini sıfıra indirmek için tüm tıbbi geçmiş tek bir dijital kimlik altında tutulur.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-transform">
                        <Activity size={24} className="text-amber-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Anında Veri Akışı</h4>
                        <p className="text-xs text-[var(--text-muted)]">Tüm medikal geçmiş anında hekimin ekranında.</p>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-transform">
                        <QrCode size={24} className="text-cyan-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Gelişim Takibi</h4>
                        <p className="text-xs text-[var(--text-muted)]">Kilo takibi ve anomalilerin erken tespiti.</p>
                      </div>
                      <div className="sm:col-span-2 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 transition-transform">
                        <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-500 shrink-0"><ShieldCheck size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Kayıp Durumunda Bulunma</h4>
                          <p className="text-xs text-[var(--text-muted)]">Çip numarası ve dijital profille kolay eşleşme.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[40%] flex justify-center lg:justify-end h-[520px] relative perspective-1000 mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.85] origin-top lg:origin-top-right bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col z-10 border border-slate-100 dark:border-slate-800">

                      <div className="flex justify-between items-center px-4 pt-10 pb-2">
                        <ArrowLeft size={24} className="text-slate-800 dark:text-slate-200" />
                        <h3 className="font-serif font-bold text-lg text-slate-800 dark:text-slate-200">Senorita</h3>
                        <MoreHorizontal size={24} className="text-slate-800 dark:text-slate-200" />
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pb-20 no-scrollbar">
                        <div className="flex justify-center mt-4 mb-6 relative">
                          <div className="w-32 h-32 rounded-full border-4 border-amber-300 dark:border-amber-600 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden relative shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 opacity-60"></div>
                            <ImageIcon size={40} className="relative z-10 opacity-50 text-slate-600" />
                          </div>
                          <div className="absolute bottom-0 right-1/2 translate-x-12 w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                            <PawPrint size={14} />
                          </div>
                        </div>
                        <div className="flex justify-between px-2 mb-6">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#233120] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-700"><Activity size={24} className="text-emerald-800 dark:text-emerald-400" /></div>
                            <span className="text-[10px] font-bold text-emerald-900 dark:text-emerald-300">Sağlık Özeti</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#233120] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-700"><Syringe size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400">Aşılar</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#233120] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-700"><FileText size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400">Kayıtlar</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#233120] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-700"><Calendar size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-600 dark:text-slate-400">Randevular</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#233120] rounded-3xl p-5 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-serif font-bold text-emerald-900 dark:text-emerald-100">Dijital Sağlık Kartı</h4>
                            <ShieldCheck size={24} className="text-emerald-800 dark:text-emerald-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="flex border-b border-slate-100 dark:border-slate-700 pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-slate-400">Tür</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">Kedi</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-slate-700 pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-slate-400">Irk</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">Maine Coon</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-slate-700 pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-slate-400">Yaş</div>
                              <div className="w-2/3">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7 yaşında</div>
                                <div className="text-[10px] text-slate-400">(12 Mayıs 2017)</div>
                              </div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-slate-700 pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-slate-400">Kilo</div>
                              <div className="w-2/3">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7.2 kg</div>
                                <div className="text-[10px] text-slate-400">Son güncelleme: 10 Mayıs 2024</div>
                              </div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-slate-700 pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-slate-400">Kısırlaştırma</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">Kısırlaştırıldı</div>
                            </div>
                            <div className="flex pb-4">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-slate-400 mt-0.5">Mikroçip No</div>
                              <div className="w-2/3 text-sm font-bold text-slate-900 dark:text-slate-100">900215000123456</div>
                            </div>
                            <div className="bg-[#f2f7ed] dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-xl p-3 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-emerald-700 dark:text-emerald-400" />
                                <div>
                                  <div className="text-sm font-bold text-emerald-900 dark:text-emerald-100">Aşıları güncel</div>
                                  <div className="text-[9px] text-emerald-700/70 dark:text-emerald-300/70">Son güncelleme: 10 Mayıs 2024</div>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-emerald-700 dark:text-emerald-400" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#233120] rounded-3xl p-5 shadow-sm">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-serif font-bold text-emerald-900 dark:text-emerald-100">Veteriner Bilgileri</h4>
                            <div className="text-amber-500"><Users size={18}/></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">Vet. Hekim</div>
                              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Dr. Ece Yılmaz</div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Patili Dostlar Kliniği</div>
                            </div>
                            <div className="w-10 h-10 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300"><PhoneCall size={18} /></div>
                          </div>
                        </div>
                      </div>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800 flex justify-around items-center px-4 pb-2 z-10">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px]">Ana Sayfa</span></div>
                        <div className="flex flex-col items-center text-teal-800 dark:text-teal-400"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px] font-bold">Sağlık</span></div>
                        <div className="w-14 h-14 bg-teal-800 dark:bg-teal-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-white dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">Randevular</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Users size={22} className="mb-1"/><span className="text-[9px]">Profil</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-2 lg:left-4 top-32 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center"><QrCode size={18} className="text-teal-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 mb-0.5">Sistem Bildirimi</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Dijital Küpe Okundu</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {/* TAB 3: COMMUNITY */}
              {activeTab === 'community' && (
                <motion.div key="community" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 w-full max-w-6xl mx-auto lg:pl-8 mt-6 lg:mt-8">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-4 text-center lg:text-left">
                    <div>
                      <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-2">PATİ TOPLULUĞU</h2>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2 leading-tight">Yalnız Değilsiniz. <br/>Deneyimleri Paylaşın.</h3>
                    </div>
                    <p className="text-base lg:text-lg text-[var(--text-muted)] font-medium leading-relaxed mb-2">
                      Sadece bir tıbbi aracı değiliz; aynı zamanda kocaman bir hayvanseverler ağıyız. Kendi şehrinizdeki evcil hayvan sahipleriyle tanışın, bilgi alın ve eğlenceli anları paylaşın.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-transform">
                        <ImageIcon size={24} className="text-fuchsia-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Anıları Paylaşın</h4>
                        <p className="text-xs text-[var(--text-muted)]">En sevdiğiniz anları toplulukla paylaşın.</p>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-transform">
                        <MessageCircle size={24} className="text-sky-500 mb-2" />
                        <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Deneyim Alışverişi</h4>
                        <p className="text-xs text-[var(--text-muted)]">Sizinle aynı ırka sahip diğer dostlarla tanışın.</p>
                      </div>
                      <div className="sm:col-span-2 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 transition-transform">
                        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-500 shrink-0"><Heart size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Yerel Dayanışma</h4>
                          <p className="text-xs text-[var(--text-muted)]">Kayıp ve sahiplendirme ilanlarıyla hızlıca organize olun.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[40%] flex justify-center lg:justify-end h-[520px] relative perspective-1000 mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.85] origin-top lg:origin-top-right bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col z-10 border border-slate-100 dark:border-slate-800">

                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <div className="w-6"></div>
                        <h3 className="font-serif font-bold text-xl text-emerald-900 dark:text-emerald-100">Topluluk</h3>
                        <div className="w-8 h-8 rounded-full border border-emerald-900 dark:border-emerald-100 flex items-center justify-center">
                          <Plus size={16} className="text-emerald-900 dark:text-emerald-100" />
                        </div>
                      </div>
                      <div className="flex justify-around items-center px-6 pt-2 pb-0">
                        <div className="pb-3 border-b-2 border-emerald-800 dark:border-emerald-400 px-2">
                          <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">Keşfet</span>
                        </div>
                        <div className="pb-3 border-b-2 border-transparent px-2">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Takip Ettiklerim</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-4 no-scrollbar">
                        <div className="bg-white dark:bg-[#233120] rounded-[24px] p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><ImageIcon size={16} className="text-slate-400" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Defne & Misket</div>
                                <div className="text-[10px] text-slate-500">2 saat önce</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-800 dark:text-slate-200" />
                          </div>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mb-3">Gün batımında sahil yürüyüşü. 🌅 En sevdiğimiz anlardan biri! ✨</p>
                          <div className="w-full h-40 bg-gradient-to-r from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-800/30 rounded-xl mb-3 flex items-center justify-center">
                            <ImageIcon size={40} className="text-amber-600/30" />
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1"><Heart size={18} className="text-orange-500 fill-orange-500" /><span className="text-xs font-bold text-orange-500">128</span></div>
                              <div className="flex items-center gap-1"><MessageCircle size={18} className="text-slate-600 dark:text-slate-400" /><span className="text-xs text-slate-600 dark:text-slate-400 font-medium">12</span></div>
                            </div>
                            <div className="flex gap-3"><Share2 size={18} className="text-slate-600 dark:text-slate-400" /><Bookmark size={18} className="text-slate-600 dark:text-slate-400" /></div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">12 yorumun tümünü gör</div>
                        </div>
                        <div className="bg-white dark:bg-[#233120] rounded-[24px] p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><ImageIcon size={16} className="text-slate-400" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Can & Pati</div>
                                <div className="text-[10px] text-slate-500">5 saat önce</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-800 dark:text-slate-200" />
                          </div>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mb-3">Hafta sonu kaçamağı planı yapan var mı? 🐾</p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1"><Heart size={18} className="text-orange-500 fill-orange-500" /><span className="text-xs font-bold text-orange-500">67</span></div>
                              <div className="flex items-center gap-1"><MessageCircle size={18} className="text-slate-600 dark:text-slate-400" /><span className="text-xs text-slate-600 dark:text-slate-400 font-medium">8</span></div>
                            </div>
                            <div className="flex gap-3"><Share2 size={18} className="text-slate-600 dark:text-slate-400" /></div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#233120] rounded-[24px] p-4 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><ImageIcon size={16} className="text-slate-400" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Selin & Leo</div>
                                <div className="text-[10px] text-slate-500">1 gün önce</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-800 dark:text-slate-200" />
                          </div>
                          <p className="text-xs text-slate-800 dark:text-slate-200 mb-2">Leo'nun yeni oyuncağına bayıldı! 😻</p>
                          <div className="w-full h-12 bg-slate-100 dark:bg-slate-800 rounded-xl rounded-b-none"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800 flex justify-around items-center px-4 pb-2 z-10">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px]">Ana Sayfa</span></div>
                        <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px]">Sağlık</span></div>
                        <div className="w-14 h-14 bg-emerald-800 dark:bg-emerald-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-white dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-emerald-800 dark:text-emerald-400"><Users size={22} className="mb-1"/><span className="text-[9px] font-bold">Topluluk</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">Profil</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-2 lg:left-4 top-24 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-rose-500/10 border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center"><Heart size={18} className="text-rose-500 fill-rose-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 mb-0.5">Yeni Gönderi</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Leo ile tanışın!</div>
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

      {/* 3. SMART HEALTH ASSISTANT (Bento Box) */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start snap-always relative z-20 bg-[var(--bg-main)] flex flex-col justify-center pt-16 pb-8 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.3)] border-t border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6">Sadece Bir Karne Değil, <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-orange-500">Akıllı Yaşam Koçu</span></h2>
            <p className="text-lg text-[var(--text-muted)] font-medium max-w-xl lg:max-w-2xl mx-auto">Verileri analiz eden sistemimiz, dostunuzun ırkına ve yaşına özel proaktif tavsiyeler sunar. İhtiyaç duyduğunuz tüm bilgiler tek bakışta karşınızda.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {/* Bento Item 1: Weight Tracker */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 border-rose-200 dark:border-rose-900 shadow-lg relative overflow-hidden group">
               <div className="relative z-10 w-2/3">
                 <Activity className="text-rose-500 mb-2" size={28} />
                 <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">Gelişim Analizi</h3>
                 <p className="text-sm text-[var(--text-muted)] leading-relaxed">"Leo'nun kilosu ideal aralığın %5 üzerinde. Porsiyonlarını hafifçe azaltmayı düşünebilirsiniz." Sistem, periyodik olarak verileri okur ve anlamlı çıkarımlar yapar.</p>
               </div>
               <div className="absolute right-0 bottom-0 w-[45%] h-[80%] bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-tl-2xl border-t border-l border-white/60 dark:border-slate-700/60 p-4 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                  <div className="flex items-end gap-2 h-[80%] w-full">
                     <div className="w-1/4 bg-rose-200 dark:bg-rose-900/40 rounded-t h-[40%]"></div>
                     <div className="w-1/4 bg-rose-300 dark:bg-rose-900/60 rounded-t h-[55%]"></div>
                     <div className="w-1/4 bg-rose-400 dark:bg-rose-900/80 rounded-t h-[75%]"></div>
                     <div className="w-1/4 bg-rose-500 dark:bg-rose-600 rounded-t h-[95%] relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded-full shadow-sm">Trend</div></div>
                  </div>
               </div>
            </motion.div>
            
            {/* Bento Item 2: Reminders */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 border-indigo-200 dark:border-indigo-900 shadow-lg flex flex-col justify-between group">
               <div>
                 <Bell className="text-indigo-500 mb-2" size={28} />
                 <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Sıfır Unutkanlık</h3>
                 <p className="text-sm text-[var(--text-muted)]">Aşılar, iç-dış parazit ve rutin kontroller... Sizin yerinize biz takip ediyor, tam vaktinde hatırlatıyoruz.</p>
               </div>
               <div className="mt-4 bg-white/70 dark:bg-slate-800/70 p-4 rounded-2xl backdrop-blur-sm border border-white/60 dark:border-slate-700/60 flex items-center justify-between group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                 <span className="text-sm font-bold text-[var(--text-main)]">Parazit Damlası</span>
                 <span className="text-xs font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">Yarın</span>
               </div>
            </motion.div>
            
            {/* Bento Item 3: Digital ID */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 border-emerald-200 dark:border-emerald-900 shadow-lg flex flex-col justify-center group text-center relative overflow-hidden">
               <QrCode className="text-emerald-500 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" size={32} />
               <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">QR Küpe ile Tam Güvenlik</h3>
               <p className="text-sm text-[var(--text-muted)]">Fiziksel akıllı tasmanızla dijital profilinizi eşleştirin. Bulan kişi anında iletişime geçsin.</p>
            </motion.div>

            {/* Bento Item 4: Emergency Radar */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 bg-slate-900 rounded-3xl p-6 border border-slate-700 shadow-xl flex items-center justify-between overflow-hidden group relative">
               <div className="z-10 w-3/5 lg:w-1/2">
                 <MapPin className="text-sky-400 mb-2" size={28} />
                 <h3 className="text-2xl font-bold text-white mb-2">Acil Durum Radarı</h3>
                 <p className="text-sm text-slate-300 leading-relaxed">Kötü bir sürpriz mi yaşadınız? Tek tuşla 5km çevredeki tüm hastalara, hayvanseverlere ve veteriner kliniklerine anında acil durum bildirimi (push) göndererek saniyeler içinde organize olun.</p>
               </div>
               <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center pointer-events-none">
                  <div className="relative w-48 h-48 flex items-center justify-center translate-x-12">
                    <div className="absolute w-20 h-20 bg-sky-500/20 rounded-full animate-ping"></div>
                    <div className="absolute w-32 h-32 border border-sky-500/30 rounded-full"></div>
                    <div className="absolute w-48 h-48 border border-sky-500/10 rounded-full"></div>
                    <div className="w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.5)] z-10 relative">
                       <Globe size={24} />
                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. DIGITAL ECOSYSTEM (Clinic Sync) */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] w-full snap-start snap-always relative z-20 bg-[var(--bg-surface)] flex flex-col justify-center pt-24 pb-8 border-t border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center h-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:gap-8 lg:gap-12 lg:gap-24">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 space-y-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 dark:border-teal-900/50 text-teal-700 dark:text-teal-400 text-xs font-bold shadow-sm bg-teal-50/50 dark:bg-teal-900/20">
                  <Building2 size={16} /> Kusursuz Senkronizasyon
               </div>
               <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">
                  Kliniğinizle <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">Asla Kopmayın</span>
               </h2>
               <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Telefon başında beklemeye, karmaşık evraklara son! Kliniğinizle Veterito üzerinden bağlantı kurun; işlemlerinizi saniyeler içinde halledin ve dostunuzun tüm medikal geçmişini cebinizde taşıyın.
               </p>
               <ul className="space-y-6 pt-4">
                  <li className="flex gap-4 items-start group">
                     <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                        <Calendar size={24} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-[var(--text-main)] mb-1">7/24 Online Randevu</h4>
                       <p className="text-[var(--text-muted)]">Kliniğin kapalı olduğu gece saatlerinde bile, hekiminizin uygun saatlerini görüntüleyip randevunuzu onaylatın.</p>
                     </div>
                  </li>
                  <li className="flex gap-4 items-start group">
                     <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        <FileText size={24} />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-[var(--text-main)] mb-1">Şeffaf Tedavi Geçmişi</h4>
                       <p className="text-[var(--text-muted)]">Hekiminizin girdiği aşılar, muayene notları ve reçeteler eşzamanlı olarak profilinize yansır.</p>
                     </div>
                  </li>
               </ul>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2 flex justify-center">
               <div className="relative w-full max-w-[340px] aspect-[1/2] perspective-1000">
                  {/* Phone UI Frame */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 border-[10px] border-slate-900 dark:border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-10">
                     {/* Dynamic Island */}
                     <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-slate-900 dark:bg-slate-800 rounded-full z-50 flex items-center justify-between px-3">
                       <div className="w-2.5 h-2.5 rounded-full bg-black shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_#10b981]"></div>
                     </div>
                     
                     <div className="px-6 py-2 flex flex-col h-full pt-14">
                       {/* Clinic Header inside Phone */}
                       <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 mb-6 flex items-center gap-4 border border-[var(--border-color)]">
                          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400">
                             <Stethoscope size={24} />
                          </div>
                          <div>
                             <div className="font-bold text-[var(--text-main)] text-sm">Patili Dostlar Kliniği</div>
                             <div className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin size={10}/> Kadıköy, İstanbul</div>
                          </div>
                       </div>
                       
                       <div className="font-bold text-xs text-[var(--text-muted)] mb-3 uppercase tracking-wider">Aktif Randevu</div>
                       
                       {/* Appointment Card */}
                       <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-5 text-white shadow-xl shadow-teal-500/20 mb-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-12 blur-2xl"></div>
                          <div className="flex justify-between items-start mb-6 relative z-10">
                             <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold border border-white/20">Onaylandı</div>
                             <div className="text-right">
                                <div className="font-bold text-lg">24 Eki</div>
                                <div className="text-xs opacity-90 font-medium">14:30</div>
                             </div>
                          </div>
                          <div className="relative z-10">
                            <div className="font-extrabold text-xl mb-1">Genel Kontrol & Karma Aşı</div>
                            <div className="text-sm opacity-90">Dt. Mert Yılmaz</div>
                          </div>
                       </div>
                       
                       <div className="font-bold text-xs text-[var(--text-muted)] mb-3 uppercase tracking-wider">Hızlı İşlemler</div>
                       
                       <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-[var(--border-color)] flex flex-col items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                             <Calendar size={20} className="text-indigo-500" />
                             <span className="text-xs font-bold text-[var(--text-main)]">Randevu Al</span>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-[var(--border-color)] flex flex-col items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                             <FileText size={20} className="text-rose-500" />
                             <span className="text-xs font-bold text-[var(--text-main)]">Laboratuvar</span>
                          </div>
                       </div>
                     </div>
                  </div>
                  
                  {/* Floating Notification */}
                  <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 md:-right-12 top-[30%] bg-[var(--bg-surface)] p-4 rounded-2xl shadow-2xl border border-[var(--border-color)] flex items-center gap-4 z-20">
                     <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                       <CheckCircle2 size={20}/>
                     </div>
                     <div>
                       <div className="text-sm font-bold text-[var(--text-main)]">Laboratuvar Sonuçları</div>
                       <div className="text-xs text-[var(--text-muted)]">Kan tahlili sisteme yüklendi.</div>
                     </div>
                  </motion.div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="min-h-[60dvh] w-full snap-start snap-always relative z-20 bg-[var(--bg-main)] flex flex-col justify-center py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="relative bg-[var(--color-vet-primary)] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(20,184,166,0.4)] border border-teal-400/30 p-12 lg:p-20 text-white overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-[30rem] h-[30rem] border-[40px] border-white rounded-full"></div>
              <div className="absolute -bottom-40 -right-20 w-[40rem] h-[40rem] border-[60px] border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <PawPrint size={48} className="mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">Dostunuzun Tüm İhtiyaçları <br/>Tek Bir Yerde.</h2>
              <p className="text-lg opacity-90 mb-10 max-w-xl lg:max-w-2xl mx-auto font-medium">Veterito'yu hemen indirin, hem dostunuzun sağlığını güvence altına alın hem de binlerce hayvanseverin arasına katılın.</p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                <button className="bg-white text-[var(--color-vet-primary)] font-bold text-base px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto">
                   <img src="/apple-logo.png" alt="App Store" className="w-9 h-9 object-contain" />
                   App Store’da Çok Yakında
                </button>
                <button className="bg-transparent border-2 border-white/80 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto">
                   <img src="/google-play-logo.png" alt="Google Play" className="w-9 h-9 object-contain scale-[2.8]" />
                   Google Play’de Çok Yakında
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
