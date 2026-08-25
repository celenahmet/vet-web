import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Heart, Activity, QrCode, ArrowRight, Users, Stethoscope, CheckCircle2, PawPrint, Calendar, ShieldCheck, Check, Bell, MessageCircle, Sparkles, Search, User, FileText, LayoutDashboard, MessageSquare, LogOut, MoreHorizontal, Send, Bookmark} from 'lucide-react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Home() {
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
        title="Veterito - Evcil Hayvanınız İçin En İyi Bakım"
        description="Evcil hayvanınızın tüm sağlık bilgilerini güvenle saklayın, aşılarını takip edin ve sosyalleşin."
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
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 lg:gap-8 lg:gap-12 lg:gap-24 w-full">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col items-start z-10 w-full lg:w-auto">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold shadow-sm mb-6 bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-sm">
                  <Sparkles size={16} />
                  {/* ⚠️ "ilk yil ucretsiz" YANLISTI (Ahmet, 24.08.2026): hayvan
                      sahipleri icin sure sinirli bir deneme degil, TAMAMEN
                      ucretsiz. Ucretli paketler klinik tarafinda. */}
                  Evcil hayvan sahipleri için tamamen ücretsiz
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-extrabold leading-[1.1] tracking-tight mb-8 text-[var(--text-main)] max-w-2xl lg:max-w-3xl">
                  <span className="text-5xl lg:text-[4.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-vet-primary)] to-[var(--color-vet-accent)]">Veterito</span> 
                  <span className="text-4xl lg:text-5xl leading-tight"> ile <br/>
                  Hayvanseverler ve Klinikler <span className="whitespace-nowrap">Tek Çatıda.</span></span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[var(--text-muted)] mb-14 max-w-xl lg:max-w-lg xl:max-w-xl leading-relaxed font-medium">
                  Evcil hayvanınızın tüm sağlık geçmişini, aşı takvimini ve veteriner randevularını tek bir güvenli dijital kimlik altında toplayın. Karma, kuduz ve iç-dış parazit gibi uygulamaları otomatik olarak planlayıp akıllı bildirimler alın ve binlerce hayvan severin yer aldığı pati topluluğuyla etkileşime geçin.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                  <Link to="/features" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:scale-105 transition-transform shadow-xl">
                    Evcil Hayvan Sahibiyim <PawPrint size={20} className="group-hover:rotate-12 transition-transform" />
                  </Link>
                  <Link to="/clinics" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-3xl font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 hover:scale-105 transition-transform shadow-sm">
                    Klinik Yönetiyorum <Stethoscope size={20} className="group-hover:rotate-12 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* ABSTRACT UI: Composite Mockup */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center items-center w-full lg:w-auto h-[600px] lg:h-[700px] lg:-translate-x-16 mt-16 lg:mt-0"
              >
                
                {/* 1) Central Phone Frame (Dashboard) */}
                <div className="relative z-20 w-[300px] h-[620px] bg-[var(--bg-secondary)] border-[10px] border-[var(--border-color)] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center px-5 pt-8 pb-4">
                    <div>
                      <h2 className="text-xl font-serif font-bold text-[var(--text-main)] flex items-center gap-2">
                        Günaydın <span className="text-[var(--color-vet-accent)]">✦</span>
                      </h2>
                      <p className="text-[10px] text-[var(--text-muted)]">Bugün harika bir gün <br/> Senorita için.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center bg-[var(--bg-surface)]">
                      <Bell size={14} className="text-[var(--text-main)]" />
                    </div>
                  </div>
                  {/* Scrollable Content Area */}
                  <div className="px-4 flex-1 flex flex-col gap-3 overflow-hidden">
                    {/* Pet Profile Minimal Card */}
                    <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl p-3 flex gap-3 items-center shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500">
                        <PawPrint size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[var(--text-main)] text-sm">Senorita 👑</h3>
                        <p className="text-[10px] text-[var(--text-muted)]">7 yaşında • Dişi</p>
                      </div>
                    </div>
                    {/* Upcoming */}
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-2xl p-3 flex items-center gap-3 relative overflow-hidden">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-500 z-10 shadow-sm">
                        <ShieldCheck size={18} />
                      </div>
                      <div className="flex-1 z-10">
                        <h5 className="font-bold text-indigo-900 dark:text-indigo-200 text-xs">Aşı Hatırlatması</h5>
                        <p className="text-[9px] text-indigo-700 dark:text-indigo-300/70">Karma Aşı (FVRCP)</p>
                      </div>
                      <div className="z-10 bg-indigo-500 text-white font-bold text-[10px] px-2 py-1 rounded-full whitespace-nowrap shadow-sm">
                        3 gün kaldı
                      </div>
                      <div className="absolute -right-4 -bottom-4 opacity-10">
                         <Calendar size={60} />
                      </div>
                    </div>
                    {/* Vitals summary */}
                    <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl p-3 mt-1 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                         <h4 className="font-bold text-[var(--text-main)] text-[11px]">Sağlık Özeti</h4>
                         <Activity size={12} className="text-emerald-500" />
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-center divide-x divide-[var(--border-color)]">
                        <div>
                          <div className="text-[9px] text-[var(--text-muted)] mb-0.5">Kilo</div>
                          <div className="font-bold text-[var(--text-main)] text-xs">7.2 kg</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-[var(--text-muted)] mb-0.5">Durum</div>
                          <div className="font-bold text-emerald-500 text-xs">İyi</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-[var(--text-muted)] mb-0.5">Aktivite</div>
                          <div className="font-bold text-[var(--text-main)] text-xs">Aktif</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Navigation */}
                  <div className="h-14 bg-[var(--bg-surface)] border-t border-[var(--border-color)] flex justify-around items-center px-4 mt-auto">
                    <div className="flex flex-col items-center text-[var(--color-vet-primary)]"><PawPrint size={16}/></div>
                    <div className="flex flex-col items-center text-[var(--text-muted)]"><Activity size={16}/></div>
                    <div className="w-10 h-10 bg-[var(--color-vet-primary)] rounded-full flex items-center justify-center text-white -mt-4 border-4 border-[var(--bg-secondary)] shadow-lg"><Check size={16}/></div>
                    <div className="flex flex-col items-center text-[var(--text-muted)]"><Calendar size={16}/></div>
                    <div className="flex flex-col items-center text-[var(--text-muted)]"><Users size={16}/></div>
                  </div>
                </div>

                {/* 2) Left Floating Widget (Digital ID) */}
                <motion.div 
                  initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }} 
                  whileInView={{ opacity: 1, x: -165, y: 10, rotate: -12 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute z-10 hidden md:flex flex-col w-[260px] bg-gradient-to-bl from-teal-500 via-emerald-600 to-teal-800 rounded-[2rem] p-1 shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-white left-0 top-[45%]"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-[1.75rem] p-4 h-full flex flex-col border border-white/20 relative overflow-hidden">
                     {/* Decorative background paw */}
                     <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none">
                        <PawPrint size={100} />
                     </div>
                     
                     <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                          <div className="flex items-center gap-1 bg-emerald-900/40 border border-emerald-400/30 px-2 py-0.5 rounded-full mb-2 w-fit">
                             <ShieldCheck size={10} className="text-emerald-300" />
                             <span className="text-[8px] font-bold text-emerald-100 tracking-wide">DOĞRULANMIŞ KİMLİK</span>
                          </div>
                          <h3 className="text-xl font-extrabold mb-0.5">Senorita</h3>
                          <p className="text-teal-100 font-medium text-[10px]">Kedi • Maine Coon</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/30 backdrop-blur-md shrink-0 shadow-sm">
                           <QrCode size={20} className="text-white" />
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-2 mb-4 relative z-10">
                        <div className="bg-black/10 rounded-xl p-2.5 border border-white/10">
                           <div className="text-[7px] text-teal-200 uppercase font-bold tracking-wider mb-1">Yaş</div>
                           <div className="text-[11px] font-extrabold">7 Yaşında</div>
                           <div className="text-[7px] text-teal-100 opacity-80 mt-0.5">12 Mayıs 2017</div>
                        </div>
                        <div className="bg-black/10 rounded-xl p-2.5 border border-white/10">
                           <div className="text-[7px] text-teal-200 uppercase font-bold tracking-wider mb-1">Kilo</div>
                           <div className="text-[11px] font-extrabold">7.2 kg</div>
                           <div className="text-[7px] text-teal-100 opacity-80 mt-0.5">Son ölçüm: Dün</div>
                        </div>
                        <div className="bg-black/10 rounded-xl p-2.5 border border-white/10">
                           <div className="text-[7px] text-teal-200 uppercase font-bold tracking-wider mb-1">Kısırlaştırma</div>
                           <div className="text-[11px] font-extrabold text-emerald-300 flex items-center gap-1"><CheckCircle2 size={10}/> Kısır</div>
                        </div>
                        <div className="bg-black/10 rounded-xl p-2.5 border border-white/10">
                           <div className="text-[7px] text-teal-200 uppercase font-bold tracking-wider mb-1">Mikroçip</div>
                           <div className="text-[10px] font-mono font-bold tracking-wider mt-1">9002•1500</div>
                        </div>
                     </div>
                     
                     <div className="mt-auto bg-black/10 rounded-xl p-3 border border-white/10 flex items-center gap-3 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                           <Stethoscope size={14} className="text-white" />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold text-white leading-tight">Patili Dostlar Kliniği</div>
                           <div className="text-[8px] text-teal-100 mt-0.5">Dr. Ece Yılmaz</div>
                        </div>
                     </div>
                  </div>
                </motion.div>

                {/* 3) Right Floating Widget (Social/Community) */}
                <motion.div 
                  initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }} 
                  whileInView={{ opacity: 1, x: 120, y: 15, rotate: 12 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute z-30 hidden md:flex flex-col w-[240px] bg-white/90 dark:bg-slate-800/90 rounded-[2rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[var(--border-color)] backdrop-blur-xl right-0 top-[50%]"
                >
                   <div className="flex items-center gap-2 mb-3">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-[2px]">
                        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                           <Users size={12} className="text-amber-500" />
                        </div>
                     </div>
                     <div>
                       <div className="text-xs font-bold text-[var(--text-main)]">Pati Dostları 🐾</div>
                       <div className="text-[9px] text-[var(--text-muted)]">Az önce paylaştı</div>
                     </div>
                   </div>
                   
                   {/* Fake Image Area */}
                   <div className="w-full h-24 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 mb-3 relative overflow-hidden flex items-center justify-center">
                      <Heart size={24} className="text-white opacity-80 drop-shadow-md" />
                      {/* Overlapping small avatars */}
                      <div className="absolute bottom-2 right-2 flex -space-x-2">
                         <div className="w-5 h-5 rounded-full border border-white dark:border-slate-800 bg-sky-200"></div>
                         <div className="w-5 h-5 rounded-full border border-white dark:border-slate-800 bg-rose-200"></div>
                         <div className="w-5 h-5 rounded-full border border-white dark:border-slate-800 bg-emerald-200 flex items-center justify-center text-[7px] font-bold text-slate-700">+5</div>
                      </div>
                   </div>
                   
                   <p className="text-[10px] text-[var(--text-main)] font-medium leading-relaxed">
                     Hafta sonu gezmesinden kareler! 🌳 Havalar güzelleşiyor... 
                   </p>
                   
                   <div className="flex items-center gap-3 mt-3 pt-2 border-t border-[var(--border-color)]">
                      <div className="flex items-center gap-1 text-rose-500">
                         <Heart size={14} className="fill-current" /> <span className="text-[10px] font-bold">128</span>
                      </div>
                      <div className="flex items-center gap-1 text-[var(--text-muted)]">
                         <MessageCircle size={14} /> <span className="text-[10px] font-bold">24</span>
                      </div>
                   </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================

        {/* =========================================
            1. AKILLI AŞI TAKVİMİ (Sol Metin, Sağ Grid)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start snap-always py-20 lg:py-0 flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left: Text */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold border border-indigo-200 dark:border-indigo-800">
                  <Bell size={16} /> Hiçbir Dozu Kaçırmayın
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">Akıllı Takvim ve Hatırlatıcılar</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Karma, kuduz ve parazit aşılarını türe göre otomatik planlar ve yaklaşan uygulamaları akıllı bildirimlerle hatırlatır. Tüm aşı takvimi cihazınızla eşzamanlı çalışarak, dostunuzun hiçbir sağlık detayının atlanmamasını sağlar.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-[var(--text-main)] font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={18} className="text-indigo-500" /> Otomatik Planlama
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-main)] font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={18} className="text-indigo-500" /> Cihaz Senkronizasyonu
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
                <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[3rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                   
                   {/* Health Summary Box */}
                   <div className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 mb-8 relative z-10 shadow-sm">
                      <div className="text-sm font-black text-indigo-900 dark:text-indigo-200 mb-6 flex items-center gap-2">
                         <Activity size={16} className="text-indigo-500" /> Sağlık Özeti
                      </div>
                      <div className="flex justify-between items-center mb-6">
                         <div className="text-center w-full">
                            <div className="w-12 h-12 mx-auto bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-sm border border-emerald-200/50 dark:border-emerald-700/50 flex items-center justify-center mb-3 hover:scale-110 transition-transform"><Activity size={20}/></div>
                            <div className="font-black text-[var(--text-main)] text-lg">1 kg</div>
                            <div className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Kilo</div>
                         </div>
                         <div className="w-px h-12 bg-slate-200 dark:bg-slate-700/50"></div>
                         <div className="text-center w-full">
                            <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm border border-blue-200/50 dark:border-blue-700/50 flex items-center justify-center mb-3 hover:scale-110 transition-transform"><CheckCircle2 size={20}/></div>
                            <div className="font-black text-[var(--text-main)] text-lg">0</div>
                            <div className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Geciken</div>
                         </div>
                         <div className="w-px h-12 bg-slate-200 dark:bg-slate-700/50"></div>
                         <div className="text-center w-full">
                            <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-2xl shadow-sm border border-purple-200/50 dark:border-purple-700/50 flex items-center justify-center mb-3 hover:scale-110 transition-transform"><Calendar size={20}/></div>
                            <div className="font-black text-[var(--text-main)] text-lg">07.09</div>
                            <div className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wider">Sonraki</div>
                         </div>
                      </div>
                      <div className="bg-emerald-500 text-white p-4 rounded-2xl flex items-center justify-between shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                         <div className="flex items-center gap-3 font-bold text-sm">
                            <ShieldCheck size={20} className="text-white"/> Aşıları güncel
                         </div>
                         <ArrowRight size={16} className="text-emerald-100"/>
                      </div>
                   </div>

                   {/* Upcoming List */}
                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-5">
                         <div className="font-black text-[var(--text-main)] text-xl">Yaklaşanlar</div>
                         <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 cursor-pointer transition-colors">Tümünü Gör</div>
                      </div>
                      <div className="space-y-4">
                         <div className="bg-gradient-to-r from-emerald-500 to-teal-400 p-4 rounded-2xl flex items-center justify-between shadow-lg shadow-teal-500/20 hover:scale-[1.02] transition-transform cursor-pointer text-white">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/20"><Stethoscope size={20}/></div>
                               <div>
                                  <div className="font-black text-white text-md mb-1">Genel Muayene</div>
                                  <div className="text-xs text-teal-50 font-bold flex items-center gap-1"><Calendar size={12}/> 26.08.2026</div>
                               </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-black tracking-wide border border-white/20">2 GÜN</div>
                         </div>
                         
                         <div className="bg-gradient-to-r from-purple-500 to-indigo-400 p-4 rounded-2xl flex items-center justify-between shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform cursor-pointer text-white">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/20"><ShieldCheck size={20}/></div>
                               <div>
                                  <div className="font-black text-white text-md mb-1">Karma Aşı</div>
                                  <div className="text-xs text-indigo-100 font-bold flex items-center gap-1"><Calendar size={12}/> 07.09.2026</div>
                               </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-black tracking-wide border border-white/20">14 GÜN</div>
                         </div>
                      </div>
                   </div>
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
                 <div className="bg-[#fcfbfa] dark:bg-zinc-950 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl border border-slate-100 dark:border-zinc-800 relative z-10 overflow-hidden flex flex-col h-[660px]">
                    
                    {/* Top Header */}
                    <div className="px-6 pt-7 pb-4 flex items-center justify-between bg-white dark:bg-zinc-900 shrink-0">
                       <h3 className="text-3xl font-black text-slate-800 dark:text-white">Topluluk</h3>
                       <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"><Search size={20} /></div>
                          <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold text-2xl leading-none pb-1 cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-900/70 transition-colors">+</div>
                       </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex items-center justify-between px-6 py-2.5 border-b border-slate-200 dark:border-zinc-800 text-[13px] font-bold bg-white dark:bg-zinc-900 shrink-0 shadow-sm">
                       <div className="pb-1.5 border-b-[3px] border-slate-800 dark:border-white text-slate-800 dark:text-white cursor-pointer">Keşfet</div>
                       <div className="pb-1.5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Takip</div>
                       <div className="pb-1.5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Klinikler</div>
                       <div className="pb-1.5 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Rehber</div>
                    </div>

                    {/* Feed Container */}
                    <div className="flex-1 overflow-hidden px-4 py-5 space-y-5 relative">
                       {/* Fade out gradient at bottom */}
                       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fcfbfa] dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

                       {/* Post 1 */}
                       <div className="bg-white dark:bg-zinc-900 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-800">
                          <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-100 dark:border-zinc-700">
                                   <img src="/duman.jpg" alt="Can" className="w-full h-full object-cover object-[75%_35%] scale-[1.5]" />
                                </div>
                                <div>
                                   <div className="font-bold text-[14px] text-slate-800 dark:text-white leading-tight">Can Kılıç & Mia</div>
                                   <div className="text-[12px] text-slate-400 font-medium">az önce</div>
                                </div>
                             </div>
                             <MoreHorizontal size={20} className="text-slate-400 cursor-pointer" />
                          </div>
                          
                          <p className="text-[14px] text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-medium">
                            Veteriner kontrolü sonrası Moda parkında keyif ✨🐾
                          </p>
                          
                          <div className="rounded-2xl overflow-hidden mb-4 h-64 sm:h-72 bg-slate-100 dark:bg-zinc-800">
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
                                <div className="font-bold text-[14px] text-slate-800 dark:text-white leading-tight">Defne Aydın & Misket</div>
                                <div className="text-[12px] text-slate-400 font-medium">1 hafta önce</div>
                             </div>
                          </div>
                          <p className="text-[14px] text-slate-700 dark:text-slate-300 font-medium">Senorita bugün çok keyifli 🐾</p>
                       </div>
                    </div>
                 </div>

                 {/* Messaging Floating Card */}
                 <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-12 w-[95%] sm:w-[340px] bg-white dark:bg-slate-900 rounded-[1.5rem] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:shadow-2xl border border-slate-100 dark:border-slate-800 z-20 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-50 dark:border-slate-800/50 pb-2.5">
                       <div className="flex items-center gap-2.5">
                         <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">M</div>
                         <div>
                            <div className="font-bold text-[13px] text-slate-800 dark:text-white">Can Kılıç & Mia</div>
                            <div className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Çevrimiçi</div>
                         </div>
                       </div>
                       <ShieldCheck size={18} className="text-emerald-500 opacity-80" />
                    </div>
                    <div className="space-y-2">
                       <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2.5 rounded-xl rounded-tl-sm sm:rounded-tl-2xl sm:rounded-tr-sm text-[12px] sm:text-[13px] leading-snug text-white shadow-sm max-w-[90%] ml-auto">
                         Moda parkında mısınız şu an? 🐈
                       </div>
                       <div className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl rounded-tr-sm sm:rounded-tr-2xl sm:rounded-tl-sm text-[12px] sm:text-[13px] leading-snug text-slate-800 dark:text-white shadow-sm max-w-[85%]">
                         Evet buradayız! Mia diğer kediyle oynuyor, siz de gelin. 😊
                       </div>
                    </div>
                 </div>

                 {/* Decorative Background Element */}
                 <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200/50 dark:bg-amber-900/20 rounded-full blur-3xl -z-10"></div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-200/50 dark:bg-teal-900/20 rounded-full blur-3xl -z-10"></div>
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
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-sm font-bold border border-amber-200 dark:border-amber-800">
                      <MessageCircle size={16} /> Sosyal Ağ & Eşleşme
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">Topluluk ve Güvenli İletişim</h2>
                   <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                     Şehrinizdeki hayvanseverleri keşfedin, yürüyüş arkadaşları bulun veya anılarınızı paylaşın. Üstelik spam korumalı mesaj istekleri sayesinde yalnızca onayladığınız kişilerle iletişim kurarsınız.
                   </p>
                   <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 px-5 py-4 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 w-max mt-4">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800/50 rounded-full flex items-center justify-center shrink-0">
                         <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                         <div className="font-bold text-[15px] text-emerald-800 dark:text-emerald-300">Spam Korumalı Mesajlaşma</div>
                         <div className="text-[12px] text-emerald-600/80 dark:text-emerald-400/80 font-medium mt-0.5">Yalnızca onayladığınız kişilerden mesaj alırsınız.</div>
                      </div>
                   </div>
                </motion.div>
              </div>

            </div>
            
          </div>
        </section>

        {/* =========================================
            6. SAHİPLENDİRME (3'lü Kart Standard Grid)
            ========================================= */}
        <section className="min-h-[100dvh] h-auto snap-start py-20 lg:py-24 snap-always flex flex-col justify-center bg-[#fffbeb] dark:bg-amber-950/20 border-b border-[var(--border-color)] overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-bold border border-teal-200 dark:border-teal-800/50 mb-3">
                  <Heart size={16} /> Yeni bir yuva, yeni bir başlangıç.
               </div>
               <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-3">Sahiplendirme</h2>
               <p className="text-[14px] sm:text-[15px] lg:text-base text-[var(--text-muted)] font-medium mb-5 leading-relaxed">
                  Evcil hayvan sahiplenmek, sadece yeni bir dost edinmek değil, bir cana ömürlük umut olmaktır. <span className="whitespace-nowrap">Veterito olarak;</span> barınaklardan veya geçici yuvalardan gelen can dostlarımızı, onlara sıcak bir aile olacak hayvanseverlerle güvenle buluşturuyoruz. 
                  İlan verme ve başvuru süreçlerindeki denetim mekanizmamız sayesinde hem dostlarımızın güvenliğini sağlıyor hem de yeni ailenin uygunluğunu teyit ediyoruz. <span className="whitespace-nowrap">Şeffaf, güvenilir</span> ve tamamen ücretsiz bu ekosistemde siz de bir hayata dokunabilirsiniz.
                  <br className="hidden sm:block" />
                  <span className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-lg font-bold border border-rose-100 dark:bg-rose-950/30 dark:border-rose-900/50 shadow-sm"><PawPrint size={14}/> Para karşılığı hayvan satışı kesinlikle yasaktır.</span>
               </p>

               {/* Feature Badges */}
               <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><FileText size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">İlan Ver</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><Heart size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">Başvur</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><ShieldCheck size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">Güvenli Akış</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center border border-teal-100 dark:border-teal-800/50 shadow-sm"><Users size={20}/></div>
                      <span className="text-xs font-bold text-[var(--text-main)]">Topluluk</span>
                   </div>
               </div>
               
               <p className="mt-5 text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center gap-2 text-sm">
                  Sevgiyle yeni başlangıçlar. <Heart size={14} className="fill-teal-600 dark:fill-teal-400"/>
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Adoption Card 1 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                  <div className="h-40 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                     <img src="/pet3.jpg" alt="British Shorthair" className="w-full h-full object-cover object-[50%_40%]" />
                     <div className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur text-rose-600 text-[9px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"><Heart size={10}/> YUVA ARIYOR</div>
                  </div>
                  <h4 className="text-xl font-black text-[var(--text-main)] mb-1">Moka</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] mb-3">Kedi • British Shorthair • Dişi • 3 Aylık</p>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5 text-[11px] font-bold text-slate-500 text-center flex items-center justify-center gap-1.5">
                     <ShieldCheck size={14}/> Satış Yasaktır
                  </div>
               </motion.div>

               {/* Adoption Card 2 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                  <div className="h-40 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                     <img src="/pet2.jpg" alt="Golden Retriever" className="w-full h-full object-cover object-[50%_40%]" />
                     <div className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur text-rose-600 text-[9px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"><Heart size={10}/> YUVA ARIYOR</div>
                  </div>
                  <h4 className="text-xl font-black text-[var(--text-main)] mb-1">Max</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] mb-3">Köpek • Golden Retriever • Dişi • 2 Yaşında</p>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5 text-[11px] font-bold text-slate-500 text-center flex items-center justify-center gap-1.5">
                     <ShieldCheck size={14}/> Satış Yasaktır
                  </div>
               </motion.div>
               
               {/* Adoption Card 3 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform hidden md:block">
                  <div className="h-40 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                     <img src="/pet1.jpg" alt="Tekir" className="w-full h-full object-cover" />
                     <div className="absolute top-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur text-rose-600 text-[9px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"><Heart size={10}/> YUVA ARIYOR</div>
                  </div>
                  <h4 className="text-xl font-black text-[var(--text-main)] mb-1">Luna</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] mb-3">Kedi • Tekir • Erkek • 6 Aylık</p>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2.5 text-[11px] font-bold text-slate-500 text-center flex items-center justify-center gap-1.5">
                     <ShieldCheck size={14}/> Satış Yasaktır
                  </div>
               </motion.div>
            </div>

          </div>
        </section>

        
      {/* =========================================
            8. B2B KLİNİKLER İÇİN
            ========================================= */}
        <section className="min-h-[100dvh] h-auto snap-start py-12 lg:py-16 snap-always flex flex-col justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
            
            <div className="max-w-3xl mx-auto mb-8 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold border border-blue-200 dark:border-blue-800/50">
                  <Stethoscope size={16} /> B2B Portal
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] leading-tight">Klinikler İçin Veterito</h2>
              <p className="text-[14px] lg:text-[15px] text-[var(--text-muted)] font-medium leading-relaxed">
                Klinik sayfanızı oluşturun; hizmetlerinizi, baktığınız türleri ve çalışma saatlerinizi belirtin. Ekibinizi davet edin, müşteri kayıtlarını ve randevuları tek bir modern panelden yönetin.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none flex flex-col md:flex-row overflow-hidden"
            >
               {/* Sidebar (Dark Green matching the reference) */}
               <div className="w-full md:w-[240px] bg-[#0E3E37] text-white p-5 flex flex-col shrink-0">
                  <div className="flex items-center gap-2 mb-6">
                     <Heart size={24} className="fill-emerald-400 text-emerald-400"/>
                     <span className="text-xl font-black tracking-tight">Veterito</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6 bg-black/10 p-2.5 rounded-xl border border-white/5">
                     <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-sm">T</div>
                     <div>
                        <div className="text-[8px] text-emerald-200 uppercase font-black tracking-widest mb-0.5">Klinik</div>
                        <div className="text-xs font-bold leading-tight">Test Veteriner...</div>
                     </div>
                  </div>

                  <div className="space-y-0.5">
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10 font-bold text-xs text-white">
                        <LayoutDashboard size={16}/> Genel bakış
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <Calendar size={16}/> Randevular
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <Users size={16}/> Müşteriler
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <PawPrint size={16}/> Hastalar
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <FileText size={16}/> Sağlık kayıtları
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <Activity size={16}/> Aşı takvimi
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <User size={16}/> Klinik profili
                     </div>
                     <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 font-medium text-xs text-emerald-100/70 transition-colors cursor-pointer">
                        <MessageCircle size={16}/> Mesajlar
                     </div>
                     
                     <div className="mt-2 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-rose-500/10 font-medium text-xs text-emerald-100/50 hover:text-rose-400 transition-colors cursor-pointer">
                           <LogOut size={16}/> Çıkış yap
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Main Content Area */}
               <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-5 md:p-6 flex flex-col h-full min-h-[400px]">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-6">
                     <div>
                        <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 mb-0.5">Genel bakış</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Test Veteriner Kliniği</p>
                     </div>
                     <div className="hidden sm:flex items-center gap-3">
                        <div className="relative p-1.5 cursor-pointer">
                           <Bell size={18} className="text-slate-400"/>
                           <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-slate-50 dark:border-slate-900 text-[8px] text-white flex items-center justify-center font-bold">3</div>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer">
                           <div className="w-6 h-6 bg-[#0E3E37] rounded-full text-white flex items-center justify-center text-[10px] font-bold">V</div>
                           <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300 pr-2">vet@veterito.com</div>
                        </div>
                     </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-3">
                        <div className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-lg"><Calendar size={20}/></div>
                        <div>
                           <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-0.5">Yaklaşan randevu</div>
                           <div className="text-xl font-black text-slate-800 dark:text-slate-100">3</div>
                        </div>
                     </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-3">
                        <div className="text-amber-500 bg-amber-50 dark:bg-amber-900/30 p-2 rounded-lg"><MessageSquare size={20}/></div>
                        <div>
                           <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-0.5">Bekleyen talep</div>
                           <div className="text-xl font-black text-slate-800 dark:text-slate-100">0</div>
                        </div>
                     </div>
                     <div className="hidden lg:flex bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm items-start gap-3">
                        <div className="text-teal-500 bg-teal-50 dark:bg-teal-900/30 p-2 rounded-lg"><PawPrint size={20}/></div>
                        <div>
                           <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-0.5">Kayıtlı hasta</div>
                           <div className="text-xl font-black text-slate-800 dark:text-slate-100">0</div>
                        </div>
                     </div>
                  </div>

                  {/* Table Area Mock */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex-1 flex flex-col overflow-hidden">
                     <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-[#0E3E37] dark:text-emerald-500"/> Yaklaşan randevular</h4>
                        <span className="text-[10px] font-bold text-slate-500 border border-slate-200 dark:border-slate-600 rounded-full px-2 py-0.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Tüm randevular →</span>
                     </div>
                     
                     <div className="p-2 flex-1">
                        <div className="grid grid-cols-4 gap-3 text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1 px-3 py-1.5">
                           <div>Saat</div>
                           <div>Hasta</div>
                           <div>Hizmet</div>
                           <div>Durum</div>
                        </div>
                        
                        <div className="space-y-0.5">
                           <div className="grid grid-cols-4 gap-3 text-xs items-center px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                              <div className="font-bold text-slate-700 dark:text-slate-200">02:00<br/><span className="text-[9px] font-normal text-slate-400">27 Ağustos 2026</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300">girilmemiş <br/><span className="text-[9px] text-slate-400">Test Kullanıcı</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300 text-[11px]">Genel muayene</div>
                              <div><span className="px-2 py-0.5 bg-[#0E3E37]/10 dark:bg-emerald-500/20 text-[#0E3E37] dark:text-emerald-400 rounded-md text-[10px] font-bold">Onaylandı</span></div>
                           </div>
                           
                           <div className="grid grid-cols-4 gap-3 text-xs items-center px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                              <div className="font-bold text-slate-700 dark:text-slate-200">11:00<br/><span className="text-[9px] font-normal text-slate-400">10 Aralık 2026</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300">girilmemiş <br/><span className="text-[9px] text-slate-400">Test Kullanıcı</span></div>
                              <div className="font-medium text-slate-600 dark:text-slate-300 text-[11px]">Genel muayene</div>
                              <div><span className="px-2 py-0.5 bg-[#0E3E37]/10 dark:bg-emerald-500/20 text-[#0E3E37] dark:text-emerald-400 rounded-md text-[10px] font-bold">Onaylandı</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-4 flex justify-end">
                     <Link to="/clinic" className="bg-[#0E3E37] hover:bg-[#0b2f29] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors shadow-sm text-xs">
                        Ücretsiz Klinik Kaydı Başlat <ArrowRight size={14}/>
                     </Link>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            6. PRICING & FOOTER
            ========================================= */}
        <section className="snap-start snap-always bg-[var(--bg-main)] py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6">Hemen Başlayın</h2>
            {/* ⚠️ ESKI METIN: "Ilk yil tamamen ucretsiz! ... Sonrasinda butce
                dostu abonelik modeliyle kesintisiz hizmete devam edin."
                Iki yerde birden yanlisti: hayvan sahipleri icin ucretsizlik
                SURELI DEGIL, ve "sonrasinda abonelik" cumlesi kullaniciya
                olmayan bir ucret takvimi vaat ediyordu (Ahmet, 24.08.2026). */}
            <p className="text-xl text-[var(--text-main)] font-bold mb-4">
              Evcil hayvan sahipleri için tamamen ücretsiz
            </p>
            <p className="text-lg text-[var(--text-muted)] max-w-xl lg:max-w-2xl mx-auto mb-10 font-medium">
              Hayvanınızın sağlık kaydını tutmak, aşı takvimini takip etmek ve klinikten randevu almak ücretsizdir. Klinik paketleri de şu anda ücretsiz; kredi kartı istenmiyor.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing" className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-sm">
                {/* ⚠️ UYGULAMA HENUZ MAGAZADA YAYINDA DEGIL (Ahmet, 24.08.2026: "uygulama cikmadi ya, google play ve app store cok yakinda diyelim"). App Store incelemede, Google Play kapali testte. "Indir" demek, tiklayana indiremeyecegi bir sey vaat etmek. */}
                App Store ve Google Play’de Çok Yakında
              </Link>
              <Link to="/clinics" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[var(--text-main)] bg-[var(--bg-secondary)] hover:bg-[var(--border-color)] border border-[var(--border-color)] transition-colors">
                Kliniğini Kaydet
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
