import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[var(--color-vet-primary)]/10 dark:bg-[var(--color-vet-primary)]/20 rounded-full hidden animate-float opacity-70"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[var(--color-vet-secondary)]/10 dark:bg-[var(--color-vet-secondary)]/10 rounded-full hidden animate-float-delayed opacity-70"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6 leading-tight"
          >
            {t('dl_hero_title1')} <span className="text-[#009689]">{t('dl_hero_title2')}</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-[var(--text-muted)] font-medium mb-16 max-w-3xl leading-relaxed mx-auto"
          >{t('dl_hero_desc1')}<br className="hidden md:block" />{t('dl_hero_desc2')}</motion.p>



          {/* Cards Grid */}
          <motion.div variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* App Store Card */}
            <div className="glass-card p-6 sm:p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-between border border-slate-100 dark:border-transparent gap-8">
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 w-full flex justify-center">
                <img src="/qr-code.svg" alt="App Store QR" className="w-40 h-40 object-contain" />
              </div>
              <a href={brandConfig.appStoreUrl || undefined} target="_blank" rel="noopener noreferrer" className="bg-[#000000] hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center w-[160px] mt-auto mx-auto">
                <div className="flex items-center justify-center gap-3 w-full">
                  <img src="/apple-logo.png" alt="App Store" className="w-7 h-7 object-contain shrink-0 invert" />
                  <div className="flex flex-col items-start leading-none pt-0.5 text-white">
                    <div className="text-[8px] font-semibold tracking-[0.08em] text-white">Download on the</div>
                    <div className="text-[18px] font-bold tracking-tight mt-0.5 text-white">App Store</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Google Play Card */}
            <div className="glass-card p-6 sm:p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-between border border-slate-100 dark:border-transparent gap-8">
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 w-full flex justify-center">
                <img src="/qr-code-3.svg" alt="Google Play QR" className="w-40 h-40 object-contain" />
              </div>
              <a href={brandConfig.playStoreUrl || undefined} target="_blank" rel="noopener noreferrer" className="bg-[#000000] hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center w-[160px] mt-auto mx-auto">
                <div className="flex items-center justify-center gap-3 w-full">
                  <img src="/google-play-logo.png" alt="Play Store" className="w-7 h-7 object-contain shrink-0" />
                  <div className="flex flex-col items-start leading-none pt-0.5 text-white">
                    <div className="text-[8px] font-semibold tracking-wide text-white">GET IT ON</div>
                    <div className="text-[16px] font-bold tracking-tight mt-0.5 text-white">Google Play</div>
                  </div>
                </div>
              </a>
            </div>

            {/* AppGallery Card */}
            <div className="glass-card p-6 sm:p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-between border border-slate-100 dark:border-transparent gap-8">
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 w-full flex justify-center">
                <img src="/qr-code-2.svg" alt="AppGallery QR" className="w-40 h-40 object-contain" />
              </div>
              <a href={brandConfig.appGalleryUrl || undefined} target="_blank" rel="noopener noreferrer" className="bg-[#000000] hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center w-[160px] mt-auto mx-auto">
                <div className="flex items-center justify-center gap-3 w-full">
                  <img src="/appgallery-logo.png" alt="AppGallery" className="w-7 h-7 object-contain shrink-0" />
                  <div className="flex flex-col items-start leading-none pt-0.5 text-white">
                    <div className="text-[8px] font-semibold tracking-wide text-white">EXPLORE IT ON</div>
                    <div className="text-[16px] font-bold tracking-tight mt-0.5 text-white">AppGallery</div>
                  </div>
                </div>
              </a>
            </div>
            
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
