import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClinicsCTASection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[40vh] lg:min-h-screen h-auto snap-always snap-start py-12 lg:py-32 w-full flex items-center justify-center relative bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl mx-auto flex flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-2 lg:py-4 shadow-2xl shadow-teal-500/10 relative overflow-visible"
          >
            {/* Background Layer (Handles overflow for inner glows and shapes) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#115e59] to-[#0d4a46] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden -z-10 pointer-events-none shadow-inner">
              
              {/* Subtle glow effect inside the card */}
              <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-96 md:h-96 bg-white/10 blur-[50px] md:blur-[100px] rounded-full"></div>

              {/* Static Glass Sphere (Top Right) */}
              <div 
                className="absolute top-[5%] md:top-[8%] right-[5%] md:right-[12%] w-16 h-16 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-white/5 backdrop-blur-md border-t border-l border-white/40 shadow-[0_10px_20px_rgba(0,0,0,0.1)] md:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                {/* Inner glare */}
                <div className="absolute top-1 md:top-3 left-2 md:left-5 w-6 md:w-16 h-3 md:h-8 bg-white/60 rounded-full blur-[1px] md:blur-[2px] rotate-[-40deg]"></div>
              </div>

              {/* Static Glass Capsule (Bottom Right) */}
              <div 
                className="absolute -bottom-[5%] right-[2%] w-12 h-28 md:w-32 md:h-72 rounded-full bg-gradient-to-tr from-teal-400/20 via-white/10 to-white/30 backdrop-blur-lg border border-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:shadow-[0_25px_50px_rgba(0,0,0,0.3)] -rotate-[20deg]"
              >
                {/* Inner glare */}
                <div className="absolute top-3 md:top-8 right-2 md:right-5 w-2 md:w-6 h-10 md:h-24 bg-white/40 rounded-full blur-[1px] md:blur-[3px]"></div>
              </div>

              {/* Static Glass Ring (Top Center) */}
              <div 
                className="absolute -top-[10%] md:-top-[15%] left-[30%] md:left-[45%] w-24 h-24 md:w-56 md:h-56 rounded-full border-[6px] md:border-[16px] border-white/20 backdrop-blur-sm shadow-[0_5px_15px_rgba(0,0,0,0.1)] md:shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
              ></div>

            </div>

            {/* Left Column: Text Content */}
            <div className="w-[55%] lg:w-[65%] xl:w-[65%] flex flex-col items-start text-left relative z-10">
              <h2 className="text-[14px] sm:text-[20px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-extrabold text-white mb-2 md:mb-4 leading-[1.1] md:leading-tight uppercase tracking-tight max-w-4xl pr-1 md:pr-4">
                Kliniğinizin Dijital Dönüşümü <br />
                Sadece <br />
                Bir Tık Uzağınızda
              </h2>
              
              <p className="text-[9px] sm:text-[12px] md:text-[16px] lg:text-[18px] text-teal-50 mb-3 md:mb-6 leading-snug md:leading-relaxed max-w-2xl pr-1 md:pr-4">
                {t('clinics_cta_desc')}
              </p>

              <div className="mt-1 md:mt-4 inline-flex items-center gap-1 md:gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-2 sm:px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-white text-[8px] sm:text-[10px] md:text-sm font-medium shadow-lg">
                <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-teal-300" />
                <span>Kredi kartı gerekmez</span>
              </div>
            </div>

            {/* Right Column: Phone Mockup with Interactive Overlay Button */}
            <div className="w-[45%] lg:w-[35%] xl:w-[35%] flex justify-end mt-0 relative z-20">
              <div className="relative w-full max-w-[140px] sm:max-w-[200px] lg:max-w-[320px] drop-shadow-2xl scale-[1.15] sm:scale-110 lg:scale-105 xl:scale-110 origin-right translate-x-5 sm:translate-x-6 lg:translate-x-8 transition-transform">
                {/* Phone Image */}
                <img 
                  src="/phone-mockup.webp" 
                  alt="Veterito Phone App Mockup" 
                  className="w-full h-auto object-contain" 
                />
                
                {/* Invisible/Overlay Button precisely placed over 'Giriş Yap' in the PNG */}
                <style>{`
                  @keyframes button-shimmer {
                    0% { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
                    5% { opacity: 1; }
                    50% { transform: translateX(250%) skewX(-25deg); opacity: 1; }
                    55% { transform: translateX(250%) skewX(-25deg); opacity: 0; }
                    100% { transform: translateX(250%) skewX(-25deg); opacity: 0; }
                  }
                  .animate-btn-shimmer {
                    animation: button-shimmer 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
                  }
                `}</style>
                <Link 
                  to="/pricing" 
                  className="group absolute flex items-center justify-center bg-[#0d5e56] hover:bg-[#0a4943] text-white font-bold rounded-[4px] sm:rounded-[8px] md:rounded-[14px] transition-all duration-300 hover:scale-105 active:scale-95 text-center leading-tight whitespace-nowrap overflow-hidden text-[5px] sm:text-[7px] md:text-[11px]"
                  style={{ 
                    top: '59.5%', 
                    left: '19%', 
                    width: '62%', 
                    height: '5.5%'
                  }}
                  title="Ücretsiz Premium Denemeyi Başlat"
                >
                  {/* Shimmer sweep effect (Option 2) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 bottom-0 left-0 w-[40%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-btn-shimmer"></div>
                  </div>
                  <span className="relative z-10">Ücretsiz Premium Denemeyi Başlat</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
