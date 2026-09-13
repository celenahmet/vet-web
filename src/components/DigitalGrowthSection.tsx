import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Search, ShieldCheck, ArrowRight, Link as LinkIcon, FileText, CheckCircle2 } from 'lucide-react';

const DigitalGrowthSection = () => {
  const { t } = useTranslation();

  // Array of sections for the scroll spy


  const [activeSection, setActiveSection] = useState<string>('');

  // Refs for each card to detect visibility
  const f1Ref = useRef<HTMLDivElement>(null);
  const f2Ref = useRef<HTMLDivElement>(null);
  const f3Ref = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer to track which card is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Trigger line exactly at 45% (where the sticky container is)
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (f1Ref.current) observer.observe(f1Ref.current);
    if (f2Ref.current) observer.observe(f2Ref.current);
    if (f3Ref.current) observer.observe(f3Ref.current);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="snap-always snap-start py-24 lg:py-32 w-full relative bg-[var(--bg-main)]">



      {/* Independent Top Left Title Block */}
      <div className="w-full px-4 md:px-8 lg:px-12 mb-8 lg:mb-12 lg:sticky lg:top-24 z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 py-1.5 rounded-full font-semibold text-xs mb-4 border border-teal-100 dark:border-teal-800/30">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
            Büyüme ve Kurumsallaşma
          </div>
          <h2 className="text-[32px] lg:text-[42px] font-extrabold text-[var(--text-main)] leading-tight tracking-tight mb-6">
            Kliniğinizin Dijital Yüzünü ve <span className="text-teal-600 dark:text-teal-400">İletişimini Güçlendirin</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[var(--text-muted)] leading-relaxed">
            İnternetteki görünürlüğünüzü otomatik olarak artırın ve hastalarınızla en profesyonel kanallardan iletişim kurun. Resmi izinlerle güvence altında kalın.
          </p>
        </motion.div>
      </div>

      {/* Grid for Left Menu and Right Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 relative w-full px-4 md:px-8 lg:px-12">
        {/* Left Column: Sticky Sidebar with Menu Only */}
        <div className="lg:col-span-3 xl:col-span-3 lg:sticky lg:top-[45vh] h-fit pr-0 xl:pr-4 pt-4 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 lg:gap-8"
          >

            <nav className="flex flex-col gap-6 mt-0 border-l-2 border-slate-100 dark:border-zinc-800 pl-6 relative">
              {[
                { id: 'f1', icon: Globe, title: t('clinics_s6_f1_title') },
                { id: 'f2', icon: MessageCircle, title: t('clinics_s6_f2_title') },
                { id: 'f3', icon: ShieldCheck, title: t('clinics_s6_f3_title') }
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-4 transition-all flex items-center gap-4 text-lg ${
                      isActive ? 'text-teal-600 dark:text-teal-400 font-bold scale-[1.03] origin-left' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-medium'
                    }`}
                  >
                    <item.icon size={isActive ? 24 : 20} className={`transition-all ${isActive ? 'text-teal-500' : 'text-slate-300 dark:text-slate-600'}`} />
                    {item.title}
                    {isActive && <ArrowRight size={18} className="ml-auto opacity-50" />}
                  </button>
                );
              })}
              {/* Active Indicator Line */}
              <div 
                className={`absolute left-[-2px] w-1 bg-teal-500 transition-all duration-300 rounded-full ${activeSection === '' ? 'opacity-0' : 'opacity-100'}`}
                style={{
                  top: activeSection === 'f1' ? '0%' : activeSection === 'f2' ? '33.33%' : activeSection === 'f3' ? '66.66%' : '0%',
                  height: '33.33%'
                }}
              ></div>
            </nav>
          </motion.div>
        </div>

        {/* Right Column: Scrollable Stacking Cards */}
        <div className="lg:col-span-9 xl:col-span-9 w-full relative">

          {/* Invisible Scroll Trackers */}
          <div className="absolute inset-x-0 top-0 w-full pointer-events-none">
            {/* The distance between trackers is exactly how much you must scroll to get the next card */}
            <div id="f1" ref={f1Ref} className="absolute top-[45vh] h-[25vh] w-full" />
            <div id="f2" ref={f2Ref} className="absolute top-[70vh] h-[25vh] w-full" />
            <div id="f3" ref={f3Ref} className="absolute top-[95vh] h-[25vh] w-full" />
          </div>

          {/* Sticky Visual Container */}
          <div className="sticky top-[45vh] w-full pointer-events-none" style={{ height: '350px' }}>
            {/* Card 1: SEO Page */}
            <div 
              className="absolute inset-x-0 top-0 w-full z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top pointer-events-auto"
              style={{
                transform: activeSection === 'f2' || activeSection === 'f3' ? 'scale(0.94)' : 'scale(1)',
              }}
            >
            <div
              className={`border rounded-[2.5rem] p-6 lg:p-8 xl:p-10 shadow-lg transition-all duration-500 relative overflow-hidden group min-h-[220px] flex items-center bg-[#edf6f1] dark:bg-[#0c1a14] border-[#d1e8db] dark:border-teal-900/40`}
            >
              {/* Fade Overlay for Stacking Effect */}
              <div className={`absolute inset-0 bg-white/70 dark:bg-black/70 z-50 pointer-events-none transition-opacity duration-700 ${activeSection === 'f2' || activeSection === 'f3' ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Background gradient blob */}
              

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-6 border border-teal-200/50 dark:border-teal-800/30 shadow-sm">
                    <Globe size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl xl:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-tight">
                    {t('clinics_s6_f1_title')}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-base xl:text-lg leading-relaxed mb-0">
                    {t('clinics_s6_f1_desc')}
                  </p>
                </div>

                {/* Mini UI Mockup */}
                <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
                  {/* Floating SEO Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 z-20 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-lg rounded-xl py-2.5 px-4 flex items-center gap-2"
                  >
                    <Search size={16} className="text-teal-600" strokeWidth={2.5} />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Bölgedeki en iyi klinik</span>
                  </motion.div>

                  <div className="w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/50 dark:border-zinc-800 rounded-[1.5rem] p-6 lg:p-8 shadow-md">
                    <div className="flex items-center gap-4 border-b border-slate-200/60 dark:border-zinc-800 pb-4 mb-5">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                      </div>
                      <div className="flex-1 bg-white/90 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700 rounded-lg py-1.5 px-3 flex items-center gap-2 text-xs text-slate-400">
                        <LinkIcon size={12} />
                        <span className="truncate">veterito.com/klinik/sizin-kliniginiz</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-teal-100/80 dark:bg-teal-900/40 shrink-0"></div>
                      <div className="flex-1 space-y-3 mt-1.5">
                        <div className="h-4 w-1/3 bg-slate-200/80 dark:bg-zinc-800 rounded-md"></div>
                        <div className="h-2.5 w-1/2 bg-slate-100 dark:bg-zinc-800/50 rounded-md"></div>
                        <div className="flex gap-2.5 pt-2">
                          <div className="h-8 px-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full flex items-center gap-1.5">
                            <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                            <div className="h-2 w-8 bg-[#25D366]/50 rounded-md"></div>
                          </div>
                          <div className="h-8 w-20 bg-slate-200/70 dark:bg-zinc-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Card 2: Comm Network */}
            <div 
              className={`absolute inset-x-0 top-[3vh] w-full z-20 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top pointer-events-auto ${
                activeSection === 'f2' || activeSection === 'f3' ? 'translate-y-0 opacity-100' : 'translate-y-[20vh] opacity-0 pointer-events-none'
              }`}
              style={{
                transform: activeSection === 'f3' ? 'scale(0.94)' : 'scale(1)',
              }}
            >
            <div
              className={`border rounded-[2.5rem] p-6 lg:p-8 xl:p-10 shadow-lg transition-all duration-500 relative overflow-hidden group min-h-[220px] flex items-center bg-[#edf6f1] dark:bg-[#0c1a14] border-[#d1e8db] dark:border-teal-900/40`}
            >
              {/* Fade Overlay for Stacking Effect */}
              <div className={`absolute inset-0 bg-white/70 dark:bg-black/70 z-50 pointer-events-none transition-opacity duration-700 ${activeSection === 'f3' ? 'opacity-100' : 'opacity-0'}`} />
              

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-6 border border-blue-200/50 dark:border-blue-800/30 shadow-sm">
                    <MessageCircle size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl xl:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-tight">
                    {t('clinics_s6_f2_title')}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-base xl:text-lg leading-relaxed mb-0">
                    {t('clinics_s6_f2_desc')}
                  </p>
                </div>

                {/* Mini UI Mockup */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/50 dark:border-zinc-800 rounded-2xl p-5 shadow-sm space-y-3 relative">

                    {/* WhatsApp - Outgoing (Clinic) */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#e6f4ea] dark:bg-[#132c1e] border border-[#c4e3d0] dark:border-green-800/30 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[90%] ml-auto"
                    >
                      <div className="flex justify-end items-center gap-1.5 text-[10px] text-green-600/80 dark:text-green-400/70 mb-1.5 font-medium">
                        Klinik <CheckCircle2 size={12} className="text-green-500" />
                      </div>
                      <p className="text-[12px] leading-snug text-green-900 dark:text-green-300">
                        Sayın hasta sahibimiz, Leo'nun laboratuvar sonuçları temiz çıkmıştır. Yarınki karma aşı randevusunda görüşmek üzere! 🐾
                      </p>
                    </motion.div>

                    {/* WhatsApp - Incoming (Customer) */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] mt-3"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1.5 font-medium">
                        Hasta Sahibi (Leo)
                      </div>
                      <p className="text-[12px] leading-snug text-slate-700 dark:text-slate-300">
                        Harika haber! Çok sevindik, yarın 14:00'te oradayız. Teşekkürler 😊
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Card 3: Secure Tracking */}
            <div 
              className={`absolute inset-x-0 top-[6vh] w-full z-30 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top pointer-events-auto ${
                activeSection === 'f3' ? 'translate-y-0 opacity-100' : 'translate-y-[20vh] opacity-0 pointer-events-none'
              }`}
            >
            <div
              className={`border rounded-[2.5rem] p-6 lg:p-8 xl:p-10 shadow-lg transition-all duration-500 relative overflow-hidden group min-h-[220px] flex items-center bg-[#edf6f1] dark:bg-[#0c1a14] border-[#d1e8db] dark:border-teal-900/40`}
            >
              

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 flex items-center justify-center mb-6 border border-orange-200/50 dark:border-orange-800/30 shadow-sm">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl xl:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-tight">
                    {t('clinics_s6_f3_title')}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-base xl:text-lg leading-relaxed mb-0">
                    {t('clinics_s6_f3_desc')}
                  </p>
                </div>

                {/* Mini UI Mockup */}
                <div className="w-full lg:w-1/2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/50 dark:border-zinc-800 rounded-2xl p-4 lg:p-5 shadow-sm">
                  <div className="flex flex-col gap-2">
                    {/* Item 1: KVKK */}
                    <div className="bg-white/90 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700 p-2.5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#e6f4ea] dark:bg-green-900/30 text-green-700">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                            KVKK Aydınlatma Metni
                          </div>
                          <div className="text-[10px] text-slate-500">
                            IP Log: 192.168.1.42
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 bg-[#e6f4ea] dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[9px] font-bold rounded-full">
                        ARŞİVLENDİ
                      </div>
                    </div>

                    {/* Item 2: Iletisim */}
                    <div className="bg-white/90 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700 p-2.5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#e6f4ea] dark:bg-green-900/30 text-green-700">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                            Dijital İletişim İzni
                          </div>
                          <div className="text-[10px] text-slate-500">
                            SMS & WhatsApp (Onaylı)
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 bg-[#e6f4ea] dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[9px] font-bold rounded-full">
                        ONAYLI
                      </div>
                    </div>

                    {/* Item 3: Bekleyen */}
                    <div className="bg-white/90 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700 p-2.5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-orange-50 dark:bg-orange-900/20 text-orange-500">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                            Operasyon Muvafakatnamesi
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Bekliyor... SMS Gönderildi
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[9px] font-bold rounded-full">
                        BEKLİYOR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>

          {/* Total physical height of the column to allow scrolling so the sticky container can slide down */}
          <div className="w-full" style={{ height: '140vh' }}></div>

        </div>
      </div>
    </section>
  );
};

export default DigitalGrowthSection;
