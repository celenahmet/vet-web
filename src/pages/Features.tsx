import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {Calendar, Stethoscope, Users, CheckCircle2, ShieldCheck, Activity, QrCode, PhoneCall, PawPrint, Bell, FileText, Share2, Heart, MessageCircle, MoreHorizontal, ArrowLeft, Syringe, Bookmark, Plus, ArrowRight, Image as ImageIcon, Menu, MapPin, Globe, Building2, AlertTriangle, Eye, Search, User, BookOpen, Bone, Smile} from 'lucide-react';

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

      
      {/* =========================================================
          ANA SAYFADAN TAŞINAN BÖLÜMLER AŞAĞIDADIR
          ========================================================= */}

        {/* =========================================
            2. SAĞLIK GEÇMİŞİ (Bento Grid)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start pt-24 pb-8 flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
               <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-bold border border-emerald-200 dark:border-emerald-800">
                  <Activity size={16} /> Detaylı Sağlık Karnesi
               </div>
               <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">Tüm Sağlık Geçmişi Tek Ekranda</h2>
               <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                 Kilo gelişiminden geçmiş muayene notlarına, laboratuvar sonuçlarından genel sağlık skoruna kadar her detayı akıllı ve şık bir arayüzle takip edin. Karmaşık dosyalarla vedalaşın; dostunuzun sağlık serüvenini profesyonelce izlemenin huzurunu yaşayın.
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
              <div className="col-span-1 md:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-[var(--text-main)] text-lg">Kilo Gelişimi</h4>
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
              <div className="col-span-1 row-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col">
                <h4 className="font-bold text-[var(--text-main)] text-lg mb-4">Son Ziyaretler</h4>
                <div className="space-y-3 flex-1">
                   {[
                      { type: 'Kısırlaştırma', date: '12 Ağu', note: 'Dr. Ece Y. • Operasyon başarılı', icon: <CheckCircle2 size={18}/> },
                      { type: 'Genel Muayene', date: '12 Tem', note: 'Dr. Ali K. • Her şey normal', icon: <Stethoscope size={18}/> },
                      { type: 'Diş Temizliği', date: '12 Haz', note: 'Dr. Ece Y. • Tartar temizlendi', icon: <Activity size={18}/> },
                      { type: 'Rutin Kan Testi', date: '12 May', note: 'Dr. Ayşe Y. • Değerler stabil', icon: <Activity size={18}/> },
                   ].map((visit, i) => (
                      <div key={i} className="flex gap-3 items-center py-2.5 px-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                         <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shrink-0">
                            {visit.icon}
                         </div>
                         <div className="text-left flex-1">
                            <div className="flex justify-between items-center">
                               <div className="font-black text-[15px] text-[var(--text-main)] leading-tight">{visit.type}</div>
                               <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500">{visit.date}</div>
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
                   <div className="text-3xl font-black mb-1">Mükemmel</div>
                   <div className="text-cyan-100 text-xs font-medium">Genel Sağlık Skoru</div>
                 </div>
              </div>

              {/* Box 4: Square Info */}
              <div className="col-span-1 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col justify-center items-center text-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center"><Heart size={24}/></div>
                 <div>
                   <div className="font-bold text-sm text-[var(--text-main)]">Alerji Testi</div>
                   <div className="text-[10px] text-[var(--text-muted)] mt-1">Negatif • 2 Ay Önce</div>
                 </div>
              </div>

            </motion.div>
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
                <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[3rem] p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden flex flex-col gap-6">

                   {/* Top Vibrant Card - Appointment Summary & Info */}
                   <div className="bg-gradient-to-br from-emerald-500 to-teal-400 rounded-3xl p-6 shadow-xl shadow-emerald-500/20 relative overflow-hidden group">
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                         <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[11px] font-black tracking-wider border border-white/20 flex items-center gap-1.5">
                            <Calendar size={14} /> 20.07.2027
                         </div>
                         <Stethoscope className="text-white/80" size={22} />
                      </div>

                      <div className="relative z-10 mb-6">
                         <div className="text-teal-50 text-xs font-bold mb-1 uppercase tracking-wider">Seçilen Saat</div>
                         <div className="text-white text-4xl font-black drop-shadow-sm">
                            16:30
                         </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-md text-white p-3.5 rounded-2xl flex items-start gap-3 shadow-sm border border-white/20 relative z-10">
                         <div className="bg-white/20 rounded-full p-1.5 shrink-0 mt-0.5">
                            <CheckCircle2 size={16} className="text-white"/>
                         </div>
                         <div>
                            <div className="font-bold text-sm mb-0.5">Saat kesin randevu için uygun</div>
                            <div className="text-[10px] text-teal-50 leading-tight font-medium">Talebin kliniğe iletilir; klinik onaylayabilir veya alternatif saat önerebilir.</div>
                         </div>
                      </div>
                   </div>

                   {/* Bottom Section - Selection Form */}
                   <div className="relative z-10 flex flex-col gap-5">
                      
                      {/* Ne randevusu? */}
                      <div>
                         <div className="font-black text-[var(--text-main)] text-sm mb-3">Ne randevusu?</div>
                         <div className="flex flex-wrap gap-2">
                            {['Genel muayene', 'Aşı uygulaması', 'Parazit koruma', 'Kısırlaştırma'].map(type => (
                               <div key={type} className={`px-3 py-2 rounded-full text-xs font-bold cursor-pointer transition-colors ${
                                  type === 'Genel muayene'
                                  ? 'bg-emerald-500 text-white shadow-sm'
                                  : 'bg-slate-50 dark:bg-slate-800 text-[var(--text-muted)] hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700'
                               }`}>
                                  {type}
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Uygun Saatler */}
                      <div>
                         <div className="font-black text-[var(--text-main)] text-sm mb-3">Kliniğin uygun saatleri</div>
                         <div className="grid grid-cols-4 gap-2">
                            {['14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'].map(time => (
                               <div key={time} className={`py-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                                  time === '16:30' 
                                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105' 
                                  : 'bg-slate-50 dark:bg-slate-800 text-[var(--text-muted)] hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700'
                               }`}>
                                  {time}
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Not */}
                      <div>
                         <div className="font-black text-[var(--text-main)] text-sm mb-2">Not (isteğe bağlı)</div>
                         <div className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 text-xs text-slate-400 font-medium">
                            Veteriner hekime iletmek istediğiniz notlar...
                         </div>
                      </div>

                      {/* Button */}
                      <button className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5">
                         Randevu İste <ArrowRight size={18}/>
                      </button>

                   </div>
                </div>
              </motion.div>

              {/* Right: Text */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold border border-blue-200 dark:border-blue-800">
                  <Calendar size={16} /> Akıllı Randevu Sistemi
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">Telefon Trafiğine Son: Randevunuz Saniyeler İçinde Hazır</h2>
                <div className="space-y-4">
                  <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                    Veteriner kliniğinizi aramakla veya mesaj beklemekle vakit kaybetmeyin. Kliniğinizin canlı takvimine anında erişin, size en uygun saati seçin ve randevu talebinizi tek tıkla iletin.
                  </p>
                  <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                    Randevu durumunuzu tek bir akıllı panel üzerinden kolayca takip edin. Kliniğiniz onayladığında telefonunuza gelen anlık bildirimle içiniz rahat etsin.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            4. ACİL DURUM KARTI
            ========================================= */}
        <section className="min-h-[100dvh] lg:h-[100dvh] overflow-hidden snap-start snap-always flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 border-b border-[var(--border-color)] relative">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              
              {/* Left Side: Text and Features */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-bold border border-teal-200 dark:border-teal-800/50">
                      <Heart size={14} /> Hayati Önem Taşıyan Detaylar
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight tracking-tight">Acil Durum Kartı</h2>
                  <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Önemli bilgiler gerektiğinde her an elinizin altında. Tür, yaş, kronik hastalıklar ve kullanılan ilaçlar gibi kritik detayları tek ekranda toplayın. Acil durumlarda veteriner hekiminize anında sunarak dostunuz için hayat kurtaran saniyeler kazanın.
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
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">Anında Paylaşın</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">Kartı tek tıkla veterinerinizle veya güvendiğiniz bakıcılarla anında paylaşın.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">Güvenli Veri Saklama</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">Tüm sağlık bilgileri uçtan uca şifrelemeyle bulutta son derece güvenli şekilde korunur.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">Hayat Kurtarır</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">Kritik alerji, hastalık ve ilaç bilgileri acil durumlarda tıbbi müdahaleyi hızlandırır.</p>
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
                  <div className="bg-white dark:bg-zinc-900 rounded-[2rem] shadow-[0_20px_50px_rgba(13,148,136,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-teal-100 dark:border-teal-900/30 text-left relative group">
                    
                    {/* Header Bar (Teal) */}
                    <div className="bg-teal-600 dark:bg-teal-700 px-6 py-4 flex items-center justify-between relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                      <div className="flex items-center gap-2.5 text-white font-bold tracking-wide relative z-10">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-sm">
                          <Activity size={18} />
                        </div>
                        <span className="text-base">ACİL DURUM KARTI</span>
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
                          <div className="inline-flex items-center gap-1.5 bg-slate-50 dark:bg-zinc-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-zinc-700">
                            <User size={14} className="text-teal-600 dark:text-teal-400" />
                            <span className="text-slate-600 dark:text-slate-300 text-xs font-semibold">Sahibi: Aslı Yılmaz</span>
                          </div>
                        </div>
                        <div className="hidden sm:flex w-14 h-14 bg-teal-50 dark:bg-teal-900/20 rounded-full items-center justify-center shrink-0">
                           <ShieldCheck size={28} className="text-teal-600 dark:text-teal-400" />
                        </div>
                      </div>

                      {/* Table-like list (as in the poster) */}
                      <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-zinc-800/20 shadow-inner">
                         
                         {/* Tür / Cinsiyet / Kilo */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Heart size={16} />
                             </div>
                             Tür / Bilgi
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-800 dark:text-white font-semibold text-sm sm:text-[15px]">Kedi • Dişi • 2.3 kg</div>
                         </div>

                         {/* Yaş */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Calendar size={16} />
                             </div>
                             Yaş
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-800 dark:text-white font-semibold text-sm sm:text-[15px]">8 Aylık</div>
                         </div>

                         {/* Kronik Durumlar */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-rose-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Activity size={16} />
                             </div>
                             Kronik Durum
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-[15px]">Hafif Astım (İzleniyor)</div>
                         </div>

                         {/* İlaçlar & Alerjiler */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-amber-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <AlertTriangle size={16} />
                             </div>
                             Alerji / İlaçlar
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-[15px]">Tavuk Proteini, Günlük Vit.</div>
                         </div>

                         {/* Aşı Durumu */}
                         <div className="flex items-center p-3.5 border-b border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-emerald-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <ShieldCheck size={16} />
                             </div>
                             Aşı Durumu
                           </div>
                           <div className="w-7/12 sm:w-2/3 flex flex-wrap items-center gap-2">
                             <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800/50">
                               Güncel
                             </span>
                             <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded">Son: 24.07.26</span>
                           </div>
                         </div>

                         {/* Mikroçip No */}
                         <div className="flex items-center p-3.5 hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                           <div className="w-5/12 sm:w-1/3 flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-bold text-sm">
                             <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center text-indigo-500 shrink-0 border border-slate-100 dark:border-zinc-600">
                                <Eye size={16} />
                             </div>
                             Mikroçip No
                           </div>
                           <div className="w-7/12 sm:w-2/3 text-slate-800 dark:text-white font-mono font-bold tracking-widest text-sm sm:text-base">
                             9810 •••• •••• 234
                           </div>
                         </div>

                      </div>

                      {/* Footer of the card */}
                      <div className="flex items-center justify-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-medium pt-5 pb-1">
                        <Heart size={14} className="text-rose-400" />
                        Bu bilgiler veteriner hekime yol göstermek için paylaşılmıştır.
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

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
                <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[3rem] p-4 shadow-2xl border border-slate-100 dark:border-slate-800">
                   {/* Card Header with Image */}
                   <div className="relative h-48 rounded-[2.5rem] overflow-hidden mb-6">
                      <img src="/pet2.jpg" alt="Golden Retriever" className="w-full h-full object-cover object-[50%_35%]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-5 left-5">
                         <div className="text-white font-black text-2xl drop-shadow-md mb-1">Golden Retriever</div>
                         <div className="text-white/90 text-xs font-bold flex items-center gap-1.5"><Search size={14}/> Ansiklopedi Sonucu</div>
                      </div>
                   </div>

                   <div className="px-4 pb-4 space-y-5">
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>Enerji Seviyesi</span> <span className="text-cyan-500">Çok Yüksek</span>
                         </div>
                         <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ delay: 0.5, duration: 1 }} className="h-full bg-cyan-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>Çocuklarla İletişim</span> <span className="text-blue-500">Mükemmel</span>
                         </div>
                         <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ delay: 0.7, duration: 1 }} className="h-full bg-blue-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>Eğitilebilirlik</span> <span className="text-indigo-500">Yüksek</span>
                         </div>
                         <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ delay: 0.9, duration: 1 }} className="h-full bg-indigo-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>Yabancılara Yaklaşım</span> <span className="text-emerald-500">Sevecen</span>
                         </div>
                         <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ delay: 1.1, duration: 1 }} className="h-full bg-emerald-500"></motion.div>
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm font-bold mb-2 text-[var(--text-main)]">
                            <span>Tüy Dökme Eğilimi</span> <span className="text-amber-500">Fazla</span>
                         </div>
                         <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ delay: 1.3, duration: 1 }} className="h-full bg-amber-500"></motion.div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Left: Text & Features */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-bold border border-cyan-200 dark:border-cyan-800/50 mb-6">
                    <BookOpen size={16} /> Ansiklopedi Veritabanı
                  </div>
                  <h2 className="text-4xl lg:text-5xl lg:leading-[1.1] font-extrabold text-[var(--text-main)] mb-6">
                    1.100'den Fazla <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Irk Rehberi</span>
                  </h2>
                  <p className="text-[15px] lg:text-[17px] text-[var(--text-muted)] font-medium leading-relaxed">
                    Platformumuz sadece popüler kedi ve köpek türlerini değil; kuşlardan sürüngenlere, kemirgenlerden egzotik canlılara kadar geniş bir yelpazeyi kapsar. Binden fazla ırkın tüm detaylarını devasa ansiklopedi veritabanımızda bulabilirsiniz. Doğru bakım, onu anlamakla başlar.
                  </p>
                </div>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl"><Activity size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-sm mb-0.5">Genetik Yatkınlık</div>
                         <div className="text-xs text-[var(--text-muted)] font-medium">Kalıtsal hastalık riskleri</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl"><Bone size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-sm mb-0.5">Özel Beslenme</div>
                         <div className="text-xs text-[var(--text-muted)] font-medium">İdeal diyet programları</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl"><Smile size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-sm mb-0.5">Karakter Analizi</div>
                         <div className="text-xs text-[var(--text-muted)] font-medium">Davranış ve huyları</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl"><ShieldCheck size={20}/></div>
                      <div>
                         <div className="font-bold text-[var(--text-main)] text-sm mb-0.5">İdeal Yaşam Alanı</div>
                         <div className="text-xs text-[var(--text-muted)] font-medium">Fiziksel çevre ihtiyaçları</div>
                      </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
          ANA SAYFADAN TAŞINAN BÖLÜMLER BİTTİ
          ========================================================= */}

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
