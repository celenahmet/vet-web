import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart, Activity, QrCode, ArrowRight,
  Users, Stethoscope, CheckCircle2, Star,
  PawPrint, Calendar, PhoneCall, PlayCircle,
  Award, Clock
} from 'lucide-react';
import { useState } from 'react';
import { brandConfig } from '../config/brand';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [likes, setLikes] = useState(124);
  const [isLiked, setIsLiked] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <SEO 
        title={t('seo_title_home', 'Veterito - Evcil Hayvanınız İçin En İyi Bakım')}
        description={t('seo_desc_home', 'Veterito ile evcil hayvanınızın sağlık takibini yapın.')}
      />
      
      {/* AMBIENT BACKGROUND ORBS (Awwwards Style) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-200/50 dark:bg-emerald-900/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-amber-100/70 dark:bg-amber-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] bg-teal-100/70 dark:bg-teal-900/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Subtle background pattern (tiny paw prints) */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-vet-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 container mx-auto px-6 max-w-7xl relative overflow-hidden min-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start z-10">
              
              <motion.div variants={fadeInUp} className="animate-float inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-emerald-900/10 dark:border-emerald-500/20 text-sm font-bold text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)] mb-8 shadow-sm">
                <PawPrint size={16} className="text-[var(--color-vet-accent)]" />
                50.000'den Fazla Mutlu Patili Dostumuzun Tercihi
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-[var(--text-main)]">
                Sevginiz. Sağlığı. Huzuru. <br/>
                <span className="text-emerald-700 dark:text-emerald-400 underline decoration-amber-400 decoration-4 underline-offset-8">Her an, yanınızda.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-[var(--text-muted)] mb-10 max-w-lg leading-relaxed font-medium">
                Patili dostunuzun aşı takviminden dijital pasaportuna, veteriner randevularından sevgi dolu topluluğumuza kadar her şey tek bir akıllı uygulamada.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#download" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-[var(--color-vet-primary)]/20 hover:shadow-[var(--color-vet-primary)]/40 hover:-translate-y-1 transition-all rounded-2xl flex items-center gap-2">
                  <ArrowRight size={20} /> Hemen İndir
                </a>
                <Link to="/features" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[var(--color-vet-primary)] dark:text-emerald-400 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm border border-emerald-900/10 transition-all">
                  <PlayCircle size={22} className="group-hover:scale-110 transition-transform" /> Özellikleri İncele
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative h-[500px] lg:h-[700px] flex justify-center items-center mt-12 lg:mt-0"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-400/20 rounded-full blur-[4rem]"></div>
              
              {/* Phone Mockup */}
              <div className="relative z-10 h-[90%] drop-shadow-2xl flex items-center justify-center">
                <img src="/app-home.png" alt="App Screen" className="h-full w-auto object-contain rounded-[3rem] border-[8px] border-white/50 dark:border-gray-800 shadow-[0_30px_60px_-15px_rgba(45,90,67,0.3)]" />
              </div>

              {/* FLOATING WIDGET 1 - VACCINE */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 z-20 glass-card p-4 flex gap-4 items-center w-64 rounded-3xl"
              >
                <div className="relative bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 p-3 rounded-2xl flex-shrink-0">
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse-glow"></span>
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-[var(--text-main)] font-bold text-sm">Aşı Hatırlatması</div>
                  <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold mt-1 bg-emerald-50 dark:bg-emerald-900/30 inline-block px-2 py-1 rounded-md">Karma Aşı: 3 gün kaldı!</div>
                </div>
              </motion.div>

              {/* FLOATING WIDGET 2 - VET */}
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-10 bottom-1/3 z-20 glass-card p-4 flex gap-4 items-center w-64 rounded-3xl"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 p-3 rounded-2xl flex-shrink-0">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <div className="text-[var(--text-main)] font-bold text-sm">Dr. Ece Yılmaz</div>
                  <div className="text-[var(--text-muted)] text-xs font-medium">Tek Tıkla Ara</div>
                </div>
              </motion.div>

              {/* FLOATING WIDGET 3 - SCORE */}
              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute left-10 bottom-10 z-20 glass-card p-4 flex gap-3 items-center rounded-3xl"
              >
                <div className="bg-amber-100 dark:bg-amber-900/50 text-amber-600 p-2 rounded-xl flex-shrink-0">
                  <Star size={20} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-[var(--text-main)] font-bold text-sm">%98 Sağlık Skoru</div>
                  <div className="text-[var(--text-muted)] text-[10px] font-medium">Aktif & Mutlu</div>
                </div>
              </motion.div>
              
              {/* FLOATING WIDGET 4 - COMMUNITY */}
              <motion.div 
                animate={{ y: [0, 12, 0], x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-0 top-10 z-20 glass-card p-4 flex gap-3 items-center w-64 rounded-3xl"
              >
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Dogs" />
                <div>
                  <div className="text-[var(--text-main)] font-bold text-sm">Defne & Misket</div>
                  <div className="text-[var(--text-muted)] text-[11px] font-medium">Sahil yürüyüşünde 🐾</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* 2. SOCIAL PROOF (Counters) */}
        <section className="py-10 border-y border-emerald-900/5 dark:border-emerald-500/10 bg-gradient-to-r from-emerald-50/50 via-white/50 to-emerald-50/50 dark:from-emerald-950/20 dark:via-emerald-900/20 dark:to-emerald-950/20 backdrop-blur-md relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-900/5 dark:divide-emerald-500/10">
              <div className="px-4 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-extrabold text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)] mb-1">50K+</div>
                <div className="text-sm font-bold text-[var(--text-muted)] flex items-center justify-center gap-1">
                  <PawPrint size={14} className="text-amber-500"/> Mutlu Kedi & Köpek
                </div>
              </div>
              <div className="px-4 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-extrabold text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)] mb-1">150+</div>
                <div className="text-sm font-bold text-[var(--text-muted)] flex items-center justify-center gap-1">
                  <Stethoscope size={14} className="text-blue-500"/> Anlaşmalı Veteriner
                </div>
              </div>
              <div className="px-4 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-extrabold text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)] mb-1">%99.9</div>
                <div className="text-sm font-bold text-[var(--text-muted)] flex items-center justify-center gap-1">
                  <Clock size={14} className="text-emerald-500"/> Zamanında Hatırlatma
                </div>
              </div>
              <div className="px-4 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-extrabold text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)] mb-1">4.9/5</div>
                <div className="text-sm font-bold text-[var(--text-muted)] flex items-center justify-center gap-1">
                  <Star size={14} className="fill-amber-500 text-amber-500"/> Binlerce Yorum
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BENTO GRID FEATURES */}
        <section id="ozellikler" className="py-32 container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[var(--text-main)]">İhtiyacınız olan her şey <br/> tek bir yerde</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Dijital Sağlık Kartı */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }} className="lg:col-span-2 glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-4 rounded-2xl bg-amber-100 text-amber-600 mb-6 shadow-sm">
                    <Award size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-[var(--text-main)] mb-3">Dijital Sağlık Kartı & Mikroçip</h3>
                  <p className="text-[var(--text-muted)] text-lg max-w-md font-medium leading-relaxed">
                    Altın mühürlü, mikroçip no, yaş, kilo ve ırk bilgilerinin yer aldığı gerçek bir pasaport kartı tasarımı.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="bg-white/90 dark:bg-gray-900/90 p-5 rounded-3xl shadow-sm border border-emerald-900/10 flex-1 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider mb-1">MİKROÇİP NO</div>
                      <div className="text-xl font-extrabold text-[var(--text-main)] font-mono">TR-98274-001</div>
                    </div>
                    <QrCode size={40} className="text-[var(--color-vet-primary)]"/>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Akıllı Aşı */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="inline-flex p-4 rounded-2xl bg-emerald-100 text-emerald-600 mb-6 shadow-sm">
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">Akıllı Aşı Takvimi</h3>
                <p className="text-[var(--text-muted)] font-medium mb-6">Renkli zaman çizelgesi ve canlı geri sayım etiketleriyle sağlık takibi.</p>
                
                <div className="mt-auto bg-white/90 dark:bg-gray-900/90 p-4 rounded-2xl border border-emerald-900/10 shadow-sm relative">
                   <span className="absolute -top-3 -right-3 w-4 h-4 bg-red-500 rounded-full animate-pulse-glow"></span>
                   <div className="text-sm font-bold text-red-500 mb-1">3 Gün Kaldı!</div>
                   <div className="font-bold text-[var(--text-main)]">İç Parazit Uygulaması</div>
                </div>
              </div>
            </motion.div>

            {/* 3. Veteriner */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="inline-flex p-4 rounded-2xl bg-blue-100 text-blue-600 mb-6 shadow-sm">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">Veteriner Sistemi</h3>
                <p className="text-[var(--text-muted)] font-medium mb-6">Harita iğneli klinik kartı ve acil nöbetçi veteriner erişimi.</p>
                
                <button className="mt-auto w-full py-4 rounded-2xl bg-red-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
                  <PhoneCall size={20} /> Acil Nöbetçi Vet
                </button>
              </div>
            </motion.div>

            {/* 4. Sosyal Alan */}
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-purple-100/50 to-pink-100/50 blur-3xl"></div>
              
              <div className="flex-1 relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-purple-100 text-purple-600 mb-6 shadow-sm">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[var(--text-main)] mb-4">Pati Topluluğu</h3>
                <p className="text-[var(--text-muted)] text-lg mb-8 max-w-md font-medium leading-relaxed">
                  Evcil hayvan sahiplerinin fotoğraf paylaştığı, deneyim aktardığı, etkileşimli canlı sosyal medya alanı.
                </p>
              </div>
              
              <div className="w-full md:w-80 relative z-10 bg-white/90 dark:bg-gray-900/90 rounded-3xl p-5 shadow-xl border border-emerald-900/10 transform rotate-2 group-hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full object-cover" alt="Avatar"/>
                  <div>
                    <div className="font-bold text-sm">Defne & Misket</div>
                    <div className="text-xs text-gray-500">2 saat önce</div>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" className="w-full h-40 object-cover rounded-2xl mb-4" alt="Post"/>
                <div className="flex items-center gap-2">
                  <button onClick={() => { setLikes(likes+1); setIsLiked(true); }} className={`p-2 rounded-full transition-colors ${isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500'}`}>
                    <Heart size={24} className={isLiked ? "fill-red-500 scale-110 transition-transform" : "transition-transform"} />
                  </button>
                  <span className="font-bold text-sm">{likes} Beğeni</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. NEW TRUSTED CLINICS SECTION (Replacing Pet Tour) */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-[var(--color-vet-primary)]/10 rounded-[3rem] transform -rotate-3 scale-105"></div>
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800" alt="Trusted Clinics" className="w-full h-[500px] object-cover rounded-[3rem] relative z-10 shadow-2xl" />
              </div>

              <div className="flex-1 space-y-8">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">En İyi Veteriner Klinikleri <br/> Tarafından Güvenilir</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  Veterito sadece bir uygulama değildir; sizinle profesyonel veteriner bakımı arasında bir köprüdür. Platformumuz, kesintisiz veri paylaşımı ve güvenilir sağlık yönetimi sağlamak için önde gelen kliniklerle entegre çalışır.
                </p>
                
                <ul className="space-y-6 text-lg font-bold text-[var(--text-main)]">
                  <li className="flex items-center gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={24} />
                    </div>
                    Doğrulanmış Veteriner Hekimler
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={24} />
                    </div>
                    Güvenli Tıbbi Kayıtlar
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={24} />
                    </div>
                    7/24 Acil Destek Yönlendirmesi
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 5. CLINICS B2B */}
        <section id="klinikler-icin" className="py-24 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="glass-card rounded-[3rem] p-10 lg:p-16 bg-[var(--color-vet-primary)] text-white overflow-hidden relative">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 text-sm font-bold mb-8 backdrop-blur-md">
                    <Stethoscope size={16} /> Klinikler ve Veteriner Hekimler İçin
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">Modern Klinikler İçin<br/> Dijital İşletim Sistemi</h2>
                  <p className="text-lg text-white/90 font-medium mb-10 max-w-xl leading-relaxed">
                    Dijital hasta takip sistemi, tek tıkla aşı onayı ve akıllı randevu yönetimi. Kliniğinizi dijitalleştirin ve hayvanseverlerle doğrudan bağlantı kurun.
                  </p>
                  
                  <button className="bg-[var(--color-vet-accent)] hover:bg-[var(--color-vet-accent-light)] hover:text-[var(--text-main)] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <CheckCircle2 size={20} /> Kliniğinizi Ekleyin
                  </button>
                </div>
                
                <div className="flex-1 flex justify-center w-full">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" alt="Vet Clinic" className="rounded-3xl shadow-2xl object-cover h-[350px] w-full border-4 border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. STORIES */}
        <section id="yorumlar" className="py-24 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-extrabold text-center mb-16">Pati Hikayeleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Ayşe & Pamuk", breed: "Golden Retriever", text: "Aşı tarihlerini sürekli unutuyordum. Veterito sayesinde hem veterinerimizle iletişimde kalıyoruz hem de yürüyüş arkadaşları bulduk!" },
                { name: "Can & Duman", breed: "British Shorthair", text: "Acil bir durumda gece nöbetçi veterineri tek tıkla bulabilmek bana inanılmaz güven veriyor. Harika bir uygulama." },
                { name: "Zeynep & Çapkın", breed: "Siyam", text: "Dijital pasaport özelliği hayat kurtarıyor. Seyahatlerimizde tüm belgeleri telefonumdan tek tıkla gösterebiliyorum." }
              ].map((story, i) => (
                <div key={i} className="glass-card p-8 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <PawPrint key={s} size={16} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-lg font-medium text-[var(--text-muted)] italic mb-6">"{story.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                       <img src={`https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=100&sat=${i}`} alt="Avatar" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <div className="font-bold flex items-center gap-1">{story.name} <CheckCircle2 size={14} className="text-blue-500"/></div>
                      <div className="text-xs text-gray-500 font-medium">{story.breed}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. BLOG */}
        <section id="blog" className="py-24 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-extrabold text-center mb-16">Pati Sağlık Rehberi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Kedilerde Aşı Takvimi ve Parazit Önlemleri", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba", tag: "Sağlık", time: "5 dk okuma" },
                { title: "Köpeklerde Doğru Beslenme ve Kilo Kontrolü", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b", tag: "Beslenme", time: "4 dk okuma" },
                { title: "Evcil Hayvan Pasaportu Hakkında Bilmeniz Gerekenler", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", tag: "Rehber", time: "6 dk okuma" }
              ].map((blog, i) => (
                <div key={i} className="glass-card rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    <img src={`${blog.img}?auto=format&fit=crop&q=80&w=500`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">{blog.tag}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-1"><Clock size={12}/> {blog.time}</div>
                    <h3 className="font-bold text-xl mb-4 leading-tight group-hover:text-[var(--color-vet-primary)] transition-colors">{blog.title}</h3>
                    <div className="mt-auto flex items-center gap-2 text-[var(--color-vet-primary)] font-bold text-sm">Devamını Oku <ArrowRight size={16}/></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      </div>
    </>
  );
}
