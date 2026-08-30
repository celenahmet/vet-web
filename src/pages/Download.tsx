import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { QrCode, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
/**
 * MAGAZA ROZETI — durum ADRESTEN turetiliyor.
 *
 * `url` varsa gercek baglanti, yoksa TIKLANAMAZ "Cok yakinda" rozeti. Ayri bir
 * "yayinda mi" bayragi bilerek yok: iki kaynak olsaydi biri guncellenip oteki
 * unutulurdu ve sayfa "yayinda" deyip bos adrese baglanirdi.
 *
 * ⚠️ Yayinda olmayan rozet `<a>` DEGIL `<div>`: eskiden `<a href>` idi ve
 * tiklaninca kullaniciyi magazanin ANA SAYFASINA goturuyordu. Ustunde "Cok
 * yakinda" yazdigi icin yalan degildi ama hicbir yere goturmeyen dugme,
 * olmayan dugmeden kotudur. `aria-disabled` ile ekran okuyucuya da soyleniyor.
 */
export default function Download() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 relative overflow-hidden bg-[var(--bg-main)] flex items-center justify-center">
      <SEO title="Download Veterito" description="Download the Veterito app." />
      
      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[var(--color-vet-primary)]/10 dark:bg-[var(--color-vet-primary)]/20 rounded-full blur-[120px] animate-float opacity-70"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[var(--color-vet-secondary)]/10 dark:bg-[var(--color-vet-secondary)]/10 rounded-full blur-[100px] animate-float-delayed opacity-70"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)] font-bold text-sm mb-4 border border-[var(--color-vet-primary)]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-vet-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-vet-primary)]"></span>
            </span>
            Mobil Uygulamamız Yayında!
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-4 leading-tight"
          >
            Veterito'yu <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Hemen İndirin
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-[var(--text-muted)] font-medium mb-8 max-w-3xl leading-relaxed mx-auto"
          >
            Patili dostunuzun tüm sağlık takibi artık cebinizde! <br className="hidden md:block" />
            Veterito uygulamasını hemen indirin ve minik dostunuz için akıllı sağlık yolculuğuna ilk adımı atın.
          </motion.p>

          {/* Cards Grid */}
          <motion.div variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* QR Card */}
            <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800">
              <a href={brandConfig.appGalleryUrl || undefined} target="_blank" rel="noopener noreferrer" className="bg-white/50 dark:bg-slate-900/50 p-6 rounded-3xl mb-6 relative group cursor-pointer shadow-sm hover:shadow-md transition-all">
                <QrCode size={100} strokeWidth={1.5} className="text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)] group-hover:scale-105 transition-transform" />
              </a>
              <h3 className="font-bold text-lg text-[var(--text-main)] mb-2">Hızlı ve Kolay İndirme</h3>
              <p className="text-[15px] text-[var(--text-muted)] font-medium max-w-sm leading-relaxed">
                Telefonunuzun kamerasını karekoda okutun, AppGallery üzerinden Veterito'ya saniyeler içinde ulaşın.
              </p>
            </div>

            {/* Store Badges Card */}
            <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-center space-y-4 border border-slate-100 dark:border-slate-800">
              
              <h3 className="font-bold text-lg text-[var(--text-main)] mb-2 text-left">Mağazalar</h3>
              
              {/* App Store (Active) */}
              <a href={brandConfig.appStoreUrl || undefined} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden bg-[#007AFF] text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-between gap-4 block w-full">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                    <img src="/apple-logo.png" alt="Apple" className="w-full h-full object-contain scale-100 dark:invert" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-white/90 tracking-[0.08em] -mb-0.5">Download on the</div>
                    <div className="text-[22px] font-bold leading-none tracking-tight">App Store</div>
                  </div>
                </div>
                <ArrowRight size={20} className="text-white/80 group-hover:text-white transition-colors relative z-10 shrink-0" />
              </a>

              {/* Google Play (Active) */}
              <a href={brandConfig.playStoreUrl || undefined} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden bg-emerald-50/80 dark:bg-emerald-900/20 hover:bg-[#0f9d58] rounded-2xl p-4 border border-emerald-100 dark:border-emerald-800/50 hover:border-[#0f9d58] transition-all duration-300 hover:-translate-y-1 flex items-center justify-between gap-4 block w-full">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform group-hover:duration-700 duration-0"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm p-1.5 transition-transform duration-300">
                    <img src="/google-play-logo.png" alt="Google Play" className="w-full h-full object-contain scale-[1.1]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold tracking-wide text-[#0f9d58]/80 group-hover:text-white/90 transition-colors duration-300">GET IT ON</div>
                    <div className="text-xl font-bold leading-none tracking-tight text-[#0f9d58] group-hover:text-white transition-colors duration-300">Google Play</div>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#0f9d58]/50 group-hover:text-white transition-colors duration-300 relative z-10 shrink-0" />
              </a>

              {/* AppGallery (Active, Secondary) */}
              <a href={brandConfig.appGalleryUrl || undefined} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden bg-red-50/80 dark:bg-red-900/20 hover:bg-[#ef4050] rounded-2xl p-4 border border-red-100 dark:border-red-800/50 hover:border-[#ef4050] transition-all duration-300 hover:-translate-y-1 flex items-center justify-between gap-4 block w-full">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform group-hover:duration-700 duration-0"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm p-1.5 transition-transform duration-300">
                    <img src="/appgallery-logo.png" alt="AppGallery" className="w-full h-full object-contain scale-[1.2]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold tracking-wide text-[#ef4050]/80 group-hover:text-white/90 transition-colors duration-300">EXPLORE IT ON</div>
                    <div className="text-xl font-bold leading-none tracking-tight text-[#ef4050] group-hover:text-white transition-colors duration-300">AppGallery</div>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#ef4050]/50 group-hover:text-white transition-colors duration-300 relative z-10 shrink-0" />
              </a>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
