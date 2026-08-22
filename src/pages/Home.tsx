import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart, Activity, QrCode, ArrowRight,
  Users, Stethoscope, CheckCircle2,
  PawPrint, Calendar, PhoneCall, ShieldCheck,
  Check, Bell, MessageCircle, Share2, MoreHorizontal, Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
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
        <section className="h-[100dvh] w-full snap-start snap-always relative flex items-center justify-center pt-20 border-b border-[var(--border-color)] bg-[var(--bg-main)] overflow-hidden">
          <div className="container mx-auto px-6 max-w-[85rem] relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 w-full">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col items-start z-10 w-full lg:w-auto">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-200 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold shadow-sm mb-6 bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-sm">
                  <Sparkles size={16} />
                  Evcil hayvan sahipleri ve klinikler için ilk yıl ücretsiz
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-extrabold leading-[1.1] tracking-tight mb-8 text-[var(--text-main)] max-w-3xl">
                  <span className="text-5xl lg:text-[4.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-vet-primary)] to-[var(--color-vet-accent)]">Veterito</span> 
                  <span className="text-4xl lg:text-5xl leading-tight"> ile <br/>
                  Hayvanseverler ve Klinikler <span className="whitespace-nowrap">Tek Çatıda.</span></span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl leading-relaxed font-medium">
                  Evcil hayvanınızın tüm sağlık geçmişini, aşı takvimini ve veteriner randevularını tek bir güvenli dijital kimlik altında toplayın. Karma, kuduz ve iç-dış parazit gibi uygulamaları otomatik olarak planlayıp akıllı bildirimler alın ve binlerce hayvan severin yer aldığı pati topluluğuyla etkileşime geçin.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
                className="relative flex justify-center items-center w-full lg:w-auto h-[600px] lg:h-[700px] lg:-translate-x-16"
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
            1.5. HIGHLIGHTS (Neden Veterito?)
            ========================================= */}
        <section className="h-[100dvh] w-full snap-start snap-always flex items-center justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6">Her Şey Kontrol Altında</h2>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-medium">Veterito ile evcil hayvanınızın sağlık süreçlerini yönetmek çok daha keyifli ve güvenilir.</p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-indigo-50/80 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 rounded-[2rem] bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-6 shadow-sm">
                  <Calendar size={40} />
                </div>
                <h3 className="text-2xl font-extrabold text-[var(--text-main)] mb-3">Akıllı Takvim</h3>
                <p className="text-[var(--text-muted)] text-base font-medium leading-relaxed">
                  Karma, kuduz ve parazit aşılarını türe göre otomatik planlar ve bildirimle hatırlatır.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-cyan-50/80 dark:bg-cyan-900/20 border-2 border-cyan-200 dark:border-cyan-800 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 rounded-[2rem] bg-cyan-100 dark:bg-cyan-800 text-cyan-600 dark:text-cyan-300 flex items-center justify-center mb-6 shadow-sm">
                  <QrCode size={40} />
                </div>
                <h3 className="text-2xl font-extrabold text-[var(--text-main)] mb-3">Dijital Kimlik</h3>
                <p className="text-[var(--text-muted)] text-base font-medium leading-relaxed">
                  Irk, kilo ve mikroçip numarası gibi tüm tıbbi geçmişe tek dokunuşla erişim sağlar.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] bg-amber-50/80 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 rounded-[2rem] bg-amber-100 dark:bg-amber-800 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-6 shadow-sm">
                  <MessageCircle size={40} />
                </div>
                <h3 className="text-2xl font-extrabold text-[var(--text-main)] mb-3">Pati Topluluğu</h3>
                <p className="text-[var(--text-muted)] text-base font-medium leading-relaxed">
                  Hayvan sahiplerinin fotoğraf paylaşabildiği ve klinikler ile etkileşime geçtiği sosyal ağ.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            2. DIGITAL ID & HEALTH (Dijital Sağlık Kartı)
            ========================================= */}
        <section className="h-[100dvh] snap-start snap-always flex items-center bg-[var(--bg-surface)] border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
              
              {/* Abstract UI: Digital Health Card (Wallet Style) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full flex justify-center perspective-1000"
              >
                <div className="w-full max-w-[360px] transform hover:scale-105 transition-transform duration-500 relative group">
                  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    <motion.rect
                      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="38"
                      fill="none" stroke="var(--color-vet-primary)" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </motion.svg>
                  {/* Digital Wallet Card */}
                  <div className="relative bg-gradient-to-bl from-teal-500 via-emerald-600 to-teal-800 rounded-[2.5rem] p-1 shadow-[0_30px_60px_-15px_rgba(20,184,166,0.4)] overflow-hidden text-white">
                    {/* Inner Content */}
                    <div className="bg-white/10 backdrop-blur-md rounded-[2.25rem] p-6 h-full flex flex-col border border-white/20">
                       <div className="flex justify-between items-start mb-6">
                          <div>
                            <div className="flex items-center gap-1.5 bg-emerald-900/40 border border-emerald-400/30 px-3 py-1 rounded-full mb-3 w-fit shadow-inner">
                               <ShieldCheck size={14} className="text-emerald-300" />
                               <span className="text-[10px] font-bold text-emerald-100 tracking-wide">DOĞRULANMIŞ KİMLİK</span>
                            </div>
                            <h3 className="text-3xl font-extrabold mb-1">Senorita</h3>
                            <p className="text-teal-100 font-medium text-sm">Kedi • Maine Coon</p>
                          </div>
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 backdrop-blur-xl shrink-0 shadow-lg">
                             <QrCode size={32} className="text-white" />
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                          <div className="bg-black/10 rounded-2xl p-3 border border-white/10 backdrop-blur-sm">
                             <div className="text-[9px] text-teal-200 uppercase font-bold tracking-wider mb-1">Yaş</div>
                             <div className="text-sm font-extrabold">7 Yaşında</div>
                             <div className="text-[8px] text-teal-100 opacity-80 mt-0.5">12 Mayıs 2017</div>
                          </div>
                          <div className="bg-black/10 rounded-2xl p-3 border border-white/10 backdrop-blur-sm">
                             <div className="text-[9px] text-teal-200 uppercase font-bold tracking-wider mb-1">Kilo</div>
                             <div className="text-sm font-extrabold">7.2 kg</div>
                             <div className="text-[8px] text-teal-100 opacity-80 mt-0.5">Son ölçüm: Dün</div>
                          </div>
                          <div className="bg-black/10 rounded-2xl p-3 border border-white/10 backdrop-blur-sm">
                             <div className="text-[9px] text-teal-200 uppercase font-bold tracking-wider mb-1">Kısırlaştırma</div>
                             <div className="text-sm font-extrabold text-emerald-300 flex items-center gap-1"><CheckCircle2 size={12}/> Kısır</div>
                          </div>
                          <div className="bg-black/10 rounded-2xl p-3 border border-white/10 backdrop-blur-sm">
                             <div className="text-[9px] text-teal-200 uppercase font-bold tracking-wider mb-1">Mikroçip</div>
                             <div className="text-xs font-mono font-bold tracking-wider mt-1">9002•1500</div>
                          </div>
                       </div>
                       
                       <div className="mt-auto bg-black/10 rounded-2xl p-4 border border-white/10 flex items-center gap-4 relative z-10 backdrop-blur-sm">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                             <Stethoscope size={20} className="text-white" />
                          </div>
                          <div>
                             <div className="text-xs font-bold text-white mb-0.5">Patili Dostlar Kliniği</div>
                             <div className="text-[10px] text-teal-100">Dr. Ece Yılmaz</div>
                          </div>
                       </div>
                       
                       {/* Background decoration */}
                       <div className="absolute -bottom-10 -right-10 opacity-10">
                          <PawPrint size={150} />
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 space-y-6">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)]">Tek Bir Güvenli <br/> Dijital Kimlik</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Evcil hayvanınızın tüm bilgilerini (ırk, kilo, doğum tarihi, kısırlaştırma durumu, mikroçip numarası) eksiksiz olarak kaydedin.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[var(--color-vet-primary)] flex-shrink-0" />
                    <span className="text-[var(--text-main)] font-medium">Veteriner ziyaretlerinde veya seyahatte tüm tıbbi geçmişe tek dokunuşla erişim sağlayın.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[var(--color-vet-primary)] flex-shrink-0" />
                    <span className="text-[var(--text-main)] font-medium">Fiziksel karne kaybetme derdine son verin; tüm veriler güvende.</span>
                  </li>
                </ul>
                <div className="pt-6">
                  <Link to="/features" className="text-[var(--color-vet-primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Tüm Özellikleri Keşfedin <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            3. SMART REMINDERS
            ========================================= */}
        <section className="h-[100dvh] snap-start snap-always flex items-center border-b border-[var(--border-color)] bg-[var(--bg-main)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="flex-1 space-y-6 text-left">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)]">Akıllı Takvim ve Hatırlatıcılar</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Karma, kuduz ve iç-dış parazit aşı/uygulamalarını türe ve yaşa göre otomatik olarak planlıyor, yaklaşan uygulamaları akıllı geri sayım ve bildirimlerle hatırlatıyor.
                </p>
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-main)] mb-1">Otomatik Planlama</h4>
                      <p className="text-[var(--text-muted)] font-medium">Zorunlu aşı takvimini saniyeler içinde oluşturun.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center shrink-0">
                      <Bell size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-main)] mb-1">Akıllı Bildirimler</h4>
                      <p className="text-[var(--text-muted)] font-medium">Uygulamalar yaklaşırken önceden uyarı alın.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract UI: Timeline */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full flex justify-center"
              >
                <div className="w-full max-w-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[2.5rem] p-6 shadow-xl relative group overflow-hidden">
                  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    <motion.rect
                      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="38"
                      fill="none" stroke="#8b5cf6" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </motion.svg>
                  <h3 className="font-serif font-bold text-xl text-[var(--text-main)] mb-6 text-center relative z-10">Sağlık Takvimi</h3>
                  <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-[1.4rem] before:w-0.5 before:bg-gradient-to-b before:from-[var(--border-color)] before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
                     
                     {/* Timeline Item 1 */}
                     <div className="relative">
                        <div className="absolute -left-[2.85rem] w-8 h-8 rounded-full bg-indigo-500 border-[6px] border-[var(--bg-secondary)] flex items-center justify-center z-10 shadow-sm">
                           <Check size={14} className="text-white" />
                        </div>
                        <div className="bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow">
                           <span className="text-[10px] font-bold text-indigo-500 mb-1 block uppercase tracking-wider">Geçmiş: 12 Mayıs</span>
                           <h4 className="font-bold text-[var(--text-main)] text-sm">Karma Aşı 1. Doz</h4>
                           <p className="text-xs text-[var(--text-muted)] mt-1">Uygulandı: Dr. Ece Y.</p>
                        </div>
                     </div>

                     {/* Timeline Item 2 (Current) */}
                     <div className="relative">
                        <div className="absolute -left-[2.85rem] w-8 h-8 rounded-full bg-amber-500 border-[6px] border-[var(--bg-secondary)] flex items-center justify-center z-10 shadow-sm">
                           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                        <div className="bg-gradient-to-r from-amber-50 to-[var(--bg-surface)] dark:from-amber-900/10 dark:to-[var(--bg-surface)] p-4 rounded-2xl border-2 border-amber-400 shadow-md">
                           <div className="flex justify-between items-start mb-1">
                             <span className="text-[10px] font-bold text-amber-600 block uppercase tracking-wider">Gelecek: 24 Mayıs</span>
                             <span className="bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">3 GÜN KALDI</span>
                           </div>
                           <h4 className="font-bold text-[var(--text-main)] text-sm">İç Dış Parazit</h4>
                           <p className="text-xs text-[var(--text-muted)] mt-1">Randevu Saati: 14:30</p>
                        </div>
                     </div>

                     {/* Timeline Item 3 (Future) */}
                     <div className="relative">
                        <div className="absolute -left-[2.85rem] w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-[6px] border-[var(--bg-secondary)] z-10 shadow-sm"></div>
                        <div className="bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-color)] opacity-70 border-dashed">
                           <span className="text-[10px] font-bold text-[var(--text-muted)] mb-1 block uppercase tracking-wider">Planlanan: 15 Haziran</span>
                           <h4 className="font-bold text-[var(--text-main)] text-sm">Kuduz Aşısı</h4>
                           <p className="text-xs text-[var(--text-muted)] mt-1">Yıllık Tekrar</p>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. COMMUNITY (Sosyal Alan)
            ========================================= */}
        <section className="h-[100dvh] snap-start snap-always flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)]">Pati Topluluğu</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Veterito sadece bir sağlık aracı değil, aynı zamanda sosyal bir alan. Hayvan sahipleri fotoğraf paylaşabiliyor, ortak ilgi alanlarına sahip insanlarla etkileşime geçebiliyor.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-amber-500 flex-shrink-0" />
                    <span className="text-[var(--text-main)] font-medium">En sevdiğiniz anları toplulukla paylaşın.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-amber-500 flex-shrink-0" />
                    <span className="text-[var(--text-main)] font-medium">Deneyimleri okuyun ve diğer evcil hayvan sahipleriyle iletişimde kalın.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link to="/blog" className="text-[var(--color-vet-primary)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Topluluğa Katıl <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              {/* Abstract UI: Community Feed */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full flex justify-center perspective-1000"
              >
                <div className="w-full max-w-sm transform hover:scale-105 transition-transform duration-500 relative group">
                  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    <motion.rect
                      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="46"
                      fill="none" stroke="#f97316" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </motion.svg>
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[3rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    {/* Top Nav */}
                    <div className="text-center mb-6 pt-2">
                      <div className="flex justify-center gap-8 border-b border-[var(--border-color)] pb-2">
                        <div className="text-[var(--color-vet-primary)] font-bold text-sm border-b-2 border-[var(--color-vet-primary)] pb-2 -mb-[10px]">Keşfet</div>
                        <div className="text-[var(--text-muted)] font-bold text-sm">Takip Ettiklerim</div>
                      </div>
                    </div>

                    {/* Post Card */}
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] p-4 shadow-sm mb-2 relative overflow-hidden group">
                      <div className="flex justify-between items-center mb-3 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 p-[2px]">
                            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full border border-white dark:border-slate-800 flex items-center justify-center">
                              <PawPrint size={16} className="text-amber-500" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-sm text-[var(--text-main)]">Defne & Misket</div>
                            <div className="text-[10px] text-[var(--text-muted)]">İstanbul, Moda Sahili</div>
                          </div>
                        </div>
                        <MoreHorizontal size={16} className="text-[var(--text-muted)]" />
                      </div>
                      
                      <p className="text-sm text-[var(--text-main)] mb-3 font-medium relative z-10">Gün batımında sahil yürüyüşü. 🌅 En sevdiğimiz anlardan! 🐾</p>
                      
                      {/* Abstract Image Area with Glassmorphism */}
                      <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 mb-4 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-inner">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <Heart size={48} className="text-white/80 drop-shadow-lg" />
                        
                        {/* Floating Interaction Pill */}
                        <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
                           <div className="flex -space-x-2">
                             <div className="w-5 h-5 rounded-full border border-white/50 bg-sky-400"></div>
                             <div className="w-5 h-5 rounded-full border border-white/50 bg-amber-400"></div>
                             <div className="w-5 h-5 rounded-full border border-white/50 bg-rose-400"></div>
                           </div>
                           <span className="text-white text-[10px] font-bold">ve 125 diğer kişi</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center relative z-10">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1.5 text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-3 py-1.5 rounded-full">
                            <Heart size={16} className="fill-current" /> <span className="text-xs font-bold">128</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 px-3 py-1.5 rounded-full">
                            <MessageCircle size={16} /> <span className="text-xs font-bold">12</span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-300">
                          <Share2 size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================
            5. CLINICS B2B
            ========================================= */}
        <section className="h-[100dvh] snap-start snap-always flex items-center bg-[var(--bg-surface)] border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="flex-1 space-y-6 text-left">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)]">Klinikler İçin Veterito</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Klinikler için tasarlanmış panel sayesinde iş akışınızı hızlandırın: Randevu yönetimi, müşteriyle iletişim, kliniği ve doktorları tanıtma.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[var(--color-vet-accent)] flex-shrink-0" />
                    <span className="text-[var(--text-main)] font-medium">Randevu ve aşı takiplerini tek ekranda yönetin.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-[var(--color-vet-accent)] flex-shrink-0" />
                    <span className="text-[var(--text-main)] font-medium">Hastalarınıza otomatik sms/bildirimler gönderin.</span>
                  </li>
                </ul>
                <div className="pt-6">
                  <Link to="/clinics" className="btn-primary text-lg px-8 py-4 rounded-2xl inline-flex shadow-sm">
                    Klinik Çözümlerini İncele
                  </Link>
                </div>
              </div>

              {/* Abstract UI: Clinic Dashboard */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full flex justify-center perspective-1000"
              >
                <div className="w-full max-w-[420px] bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 relative group">
                  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 20 }}>
                    <motion.rect
                      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="38"
                      fill="none" stroke="var(--color-vet-primary)" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </motion.svg>
                   {/* Header */}
                   <div className="bg-[var(--bg-surface)] px-5 py-4 border-b border-[var(--border-color)] flex justify-between items-center shadow-sm relative z-10">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-lg bg-[var(--color-vet-primary)] text-white flex items-center justify-center">
                            <Stethoscope size={16} />
                         </div>
                         <div>
                            <div className="font-bold text-sm text-[var(--text-main)]">Klinik Paneli</div>
                            <div className="text-[9px] text-[var(--text-muted)]">Patili Dostlar Vet</div>
                         </div>
                      </div>
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      </div>
                   </div>

                   {/* Body */}
                   <div className="p-5 flex flex-col gap-4 relative">
                      {/* Decorative Background gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 relative z-10">
                         <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                            <div className="text-[10px] text-indigo-600 dark:text-indigo-300 font-bold uppercase tracking-wider mb-1">Bugünkü Randevular</div>
                            <div className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-200">14</div>
                         </div>
                         <div className="bg-amber-50/50 dark:bg-amber-900/10 p-3 rounded-xl border border-amber-100 dark:border-amber-800/30">
                            <div className="text-[10px] text-amber-600 dark:text-amber-300 font-bold uppercase tracking-wider mb-1">Bekleyen Aşılar</div>
                            <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">8</div>
                         </div>
                      </div>

                      {/* List */}
                      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm relative z-10">
                         <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2 border-b border-[var(--border-color)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                            Sıradaki Hastalar
                         </div>
                         <div className="divide-y divide-[var(--border-color)]">
                            <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <PawPrint size={14} />
                                  </div>
                                  <div>
                                     <div className="font-bold text-xs text-[var(--text-main)]">Senorita</div>
                                     <div className="text-[10px] text-[var(--text-muted)]">Karma Aşı • 14:30</div>
                                  </div>
                               </div>
                               <button className="bg-[var(--color-vet-primary)] text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm hover:shadow-md transition-shadow">Onayla</button>
                            </div>
                            <div className="px-4 py-3 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <PawPrint size={14} />
                                  </div>
                                  <div>
                                     <div className="font-bold text-xs text-[var(--text-main)]">Zeus</div>
                                     <div className="text-[10px] text-[var(--text-muted)]">Genel Muayene • 15:00</div>
                                  </div>
                               </div>
                               <button className="bg-slate-200 dark:bg-slate-700 text-[var(--text-main)] px-3 py-1 rounded-full text-[10px] font-bold">Bekliyor</button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            6. PRICING & FOOTER
            ========================================= */}
        <section className="snap-start snap-always bg-[var(--bg-main)] py-24">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6">Hemen Başlayın</h2>
            <p className="text-xl text-[var(--text-main)] font-bold mb-4">
              İlk yıl tamamen ücretsiz!
            </p>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 font-medium">
              Veterito ekosistemini risk almadan deneyin. Sonrasında bütçe dostu abonelik modeliyle kesintisiz hizmete devam edin.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/pricing" className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-sm">
                Uygulamayı İndir
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
