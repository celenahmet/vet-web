import { motion } from 'framer-motion';
import { QrCode, Apple } from 'lucide-react';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Download() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[var(--bg-main)] flex flex-col items-center justify-center">
      <SEO title="Download Veterito" description="Download the Veterito app." />
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-3xl animate-float-delayed opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10 flex flex-col items-center text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6"
        >
          {t('dl_title')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[var(--text-muted)] font-medium mb-12 max-w-xl leading-relaxed"
        >
          {t('dl_desc')}
        </motion.p>

        {/* QR Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="glass-card p-10 rounded-[3rem] shadow-2xl flex flex-col items-center mb-12"
        >
          <div className="bg-gray-200/50 dark:bg-gray-800/50 p-8 rounded-3xl mb-6 relative group cursor-pointer border border-[var(--border-color)]">
             <QrCode size={120} strokeWidth={1.5} className="text-[var(--color-vet-primary)] dark:text-[var(--color-vet-primary-glow)]" />
             <div className="absolute inset-0 bg-[var(--color-vet-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
          </div>
          <div className="font-bold text-lg text-[var(--text-main)]">{t('dl_qr_text')}</div>
        </motion.div>

        {/* Store Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#" className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform shadow-lg group">
            <Apple size={32} className="fill-white" />
            <div className="text-left">
              <div className="text-[10px] opacity-80 font-medium">Download on the</div>
              <div className="text-xl font-bold leading-tight">App Store</div>
            </div>
          </a>
          
          <a href="#" className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform shadow-lg group">
            <svg viewBox="0 0 512 512" width="32" height="32" className="mr-1">
              <path fill="#4285F4" d="M37.3 22.4L337.8 194.2c20.5 11.7 34.2 33.3 34.2 57.8s-13.8 46.1-34.2 57.8L37.3 481.6C13.8 495.3 0 473.4 0 445V59c0-28.4 13.8-50.3 37.3-36.6z"></path>
              <path fill="#34A853" d="M37.3 22.4C13.8 8.7 0 30.6 0 59v386l225-225L37.3 22.4z"></path>
              <path fill="#FBBC04" d="M37.3 481.6L225 294 337.8 406.8c11.7 6.7 21 16 27.6 27-18.7 20.3-46.7 32-77.4 32-41.5 0-77.8-21.7-98-54l-152.7-87.5z"></path>
              <path fill="#EA4335" d="M225 294l112.8-112.8c-6.6 11-15.9 20.3-27.6 27L37.3 481.6l152.7-87.5z"></path>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-80 font-medium uppercase tracking-wider">Get it on</div>
              <div className="text-xl font-bold leading-tight">Google Play</div>
            </div>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
