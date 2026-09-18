import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, ShieldCheck, Trash2, Baby, Plus, Minus, KeyRound, CalendarDays, CreditCard, ArrowRightLeft, Mail, Search, MessageCircle, BookOpen, Smartphone, FileText, Barcode, Globe, FilePlus, Download, UserPlus, ChartColumn, Users, Syringe, Eye, MapPin, HeartPulse, Heart, Megaphone, BellOff, WifiOff, MonitorSmartphone, Zap, Cloud } from 'lucide-react';
import SEO from '../components/SEO';

const HighlightText = ({ text, highlight }: { text: string, highlight: string }) => {
  if (!highlight.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-[#009689]/20 text-[#009689] rounded px-1">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      key: 'clinics',
      titleKey: 'contact_faq_cat_clinics',
      icon: Building2,
      activeColor: 'bg-[#009689]/10 dark:bg-[#009689]/20 text-[#009689] dark:text-[#009689] border-[#009689] shadow-sm',
      inactiveColor: 'bg-white dark:bg-zinc-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-zinc-800 hover:border-[#009689]/50 hover:text-[#009689] dark:hover:text-[#009689]',
      items: [
        { icon: Building2, key: 'clinic', to: '/clinics' },
        { icon: CreditCard, key: 'trial', to: '/pricing' },
        { icon: ArrowRightLeft, key: 'data_transfer', to: undefined },
        { icon: UserPlus, key: 'manual_patient', to: undefined },
        { icon: MessageCircle, key: 'whatsapp_sms', to: undefined },
        { icon: ChartColumn, key: 'appointment_stats', to: undefined },
        { icon: ShieldCheck, key: 'kvkk_tracking', to: undefined },
        { icon: FileText, key: 'lab_result', to: undefined },
        { icon: FilePlus, key: 'prescription_upload', to: undefined },
        { icon: Barcode, key: 'barcode_stock', to: undefined },
        { icon: Download, key: 'monthly_balance', to: undefined },
        { icon: Users, key: 'team_roles', to: undefined },
        { icon: Globe, key: 'clinic_seo_web', to: undefined }
      ]
    },
    {
      key: 'pet_owners',
      titleKey: 'contact_faq_cat_pet_owners',
      icon: KeyRound,
      activeColor: 'bg-[#009689]/10 dark:bg-[#009689]/20 text-[#009689] dark:text-[#009689] border-[#009689] shadow-sm',
      inactiveColor: 'bg-white dark:bg-zinc-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-zinc-800 hover:border-[#009689]/50 hover:text-[#009689] dark:hover:text-[#009689]',
      items: [
        { icon: MapPin, key: 'find_clinic', to: undefined },
        { icon: CalendarDays, key: 'appointment', to: undefined },
        { icon: MessageCircle, key: 'message_vet', to: undefined },
        { icon: Syringe, key: 'upcoming_vaccines', to: undefined },
        { icon: HeartPulse, key: 'allergies_chronic', to: undefined },
        { icon: Trash2, key: 'delete_health_record', to: undefined },
        { icon: Eye, key: 'profile_visibility', to: undefined },
        { icon: ShieldCheck, key: 'hidden_microchip', to: undefined },
        { icon: Heart, key: 'active_mating', to: undefined },
        { icon: Megaphone, key: 'adoption_post', to: undefined }
      ]
    },
    {
      key: 'general',
      titleKey: 'contact_faq_cat_general',
      icon: ShieldCheck,
      activeColor: 'bg-[#009689]/10 dark:bg-[#009689]/20 text-[#009689] dark:text-[#009689] border-[#009689] shadow-sm',
      inactiveColor: 'bg-white dark:bg-zinc-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-zinc-800 hover:border-[#009689]/50 hover:text-[#009689] dark:hover:text-[#009689]',
      items: [
        { icon: KeyRound, key: 'gen_forgot_pwd', to: undefined },
        { icon: ArrowRightLeft, key: 'wrong_role', to: undefined },
        { icon: Smartphone, key: 'change_contact', to: undefined },
        { icon: MonitorSmartphone, key: 'multi_device', to: undefined },
        { icon: WifiOff, key: 'offline_mode', to: undefined },
        { icon: Zap, key: 'app_slow', to: undefined },
        { icon: BellOff, key: 'no_notifications', to: undefined },
        { icon: Cloud, key: 'update_data_loss', to: undefined },
        { icon: ShieldCheck, key: 'privacy', to: '/kvkk' },
        { icon: Baby, key: 'child', to: '/child-safety' },
        { icon: Trash2, key: 'gen_delete_account', to: '/account-deletion' }
      ]
    }
  ];

  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('clinics');
  const [searchQuery, setSearchQuery] = useState('');

  const isSearching = searchQuery.trim().length > 0;
  
  const searchResults = isSearching 
    ? faqCategories.flatMap(cat => cat.items).filter(({ key }) => {
        const q = t(`contact_faq_q_${key}`).toLowerCase();
        const a = t(`contact_faq_a_${key}`).toLowerCase();
        const sq = searchQuery.toLowerCase().trim();
        return q.includes(sq) || a.includes(sq);
      })
    : [];

  const itemsToRender = isSearching 
    ? searchResults 
    : (faqCategories.find(cat => cat.key === activeCategory)?.items || []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 overflow-hidden pt-24 lg:pt-32 pb-24">
      <SEO
        title={t('faq_page_title')}
        description={t('faq_page_desc')}
        url="https://veterito.com/sss"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION - Colored Banner with Blurred Logo */}
        <div className="relative bg-[#009689] rounded-3xl overflow-hidden mb-8 mt-4 pt-16 pb-32 px-4 sm:px-8 max-w-6xl mx-auto shadow-xl">
          
          {/* Flue (Blurred) Logo Background */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none flex justify-end items-center -mr-32 opacity-30 blur-sm">
            <img src="/vet-logo-v.png" alt="" className="w-[600px] h-auto object-contain transform -rotate-12" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-[940px] mx-auto">
            <div className="text-left mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
                <MessageCircle size={16} />
                {t('faq_hero_badge')}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                {t('contact_faq_title')}
              </h1>
              
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl whitespace-pre-line">
                {t('faq_hero_subtitle')}
              </p>
            </div>

            {/* BIG SEARCH BAR */}
            <div className="relative max-w-[620px] mx-auto">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10">
                <Search className="h-6 w-6 text-[#009689]" />
              </div>
              <input
                type="text"
                className="block w-full pl-16 pr-6 py-5 rounded-2xl border-0 ring-4 ring-white/20 bg-white/95 backdrop-blur-sm text-slate-900 placeholder:text-slate-500 text-lg shadow-2xl focus:outline-none focus:border-transparent focus:ring-4 focus:ring-white/40 focus:bg-white transition-all"
                placeholder={t('faq_search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA - 2 Columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
          
          {/* LEFT COLUMN: Categories & Questions */}
          <div className="lg:col-span-2">
            
            {/* Horizontal Tabs - Sola Yaslı */}
            {!isSearching && (
              <div className="flex flex-row overflow-x-auto gap-3 justify-start mb-8 pb-4 snap-x no-scrollbar">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => { setActiveCategory(cat.key); setOpenFaq(null); }}
                    className={`snap-center shrink-0 flex items-center gap-2 px-6 py-4 rounded-full text-sm font-bold transition-all duration-200 border shadow-sm ${
                      activeCategory === cat.key 
                        ? cat.activeColor 
                        : cat.inactiveColor
                    }`}
                  >
                    <cat.icon size={18} />
                    <span>{t(cat.titleKey)}</span>
                  </button>
                ))}
              </div>
            )}

            {/* FAQ Accordions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isSearching ? 'search' : activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {isSearching && itemsToRender.length === 0 ? (
                  <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
                    <Search className="mx-auto h-12 w-12 text-slate-300 dark:text-zinc-600 mb-4" />
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{t('search_no_results', 'Aramanızla eşleşen bir sonuç bulunamadı.')}</p>
                  </div>
                ) : (
                  itemsToRender.map(({ icon: Icon, key, to }) => {
                    const isOpen = openFaq === key;
                    return (
                      <motion.div 
                        key={key}
                        layout
                        className={`bg-white dark:bg-zinc-900 ${isOpen ? 'shadow-xl shadow-[#009689]/10 ring-1 ring-[#009689]/10' : 'shadow-md shadow-slate-200/50 hover:shadow-lg hover:shadow-slate-200/60 dark:shadow-none'} rounded-3xl overflow-hidden transition-all duration-200`}
                      >
                        <button 
                          onClick={() => setOpenFaq(isOpen ? null : key)}
                          className="w-full p-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009689]/50"
                        >
                          <div className="flex items-center gap-5">
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${isOpen ? 'bg-[#009689]/10 text-[#009689]' : 'text-slate-400 bg-slate-50 dark:bg-zinc-800'}`}>
                              <Icon size={22} strokeWidth={2} />
                            </div>
                            <span className="font-bold text-base text-slate-900 dark:text-white pr-4 flex items-center flex-wrap gap-2">
                              <span><HighlightText text={t(`contact_faq_q_${key}`)} highlight={searchQuery} /></span>
                              {isSearching && !t(`contact_faq_q_${key}`).toLowerCase().includes(searchQuery.toLowerCase().trim()) && t(`contact_faq_a_${key}`).toLowerCase().includes(searchQuery.toLowerCase().trim()) && (
                                <span className="text-[10px] font-bold bg-[#009689]/10 text-[#009689] px-2 py-0.5 rounded-full uppercase tracking-wider">{t('faq_match_in_answer', 'Cevapta Eşleşti')}</span>
                              )}
                            </span>
                          </div>
                          <div className={`shrink-0 transition-transform duration-200 ${isOpen ? 'text-[#009689]' : 'text-slate-400'}`}>
                            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-6 pb-8 pt-0 pl-[5.5rem]">
                                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                  <Trans 
                                    i18nKey={`contact_faq_a_${key}`} 
                                    components={{ 1: to ? <Link to={to} className="text-[#009689] hover:underline font-bold" /> : <span /> }} 
                                  />
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Info Cards (Alt Alta) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-center transform transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">{t('faq_info_1_desc')}</div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl">
                  <BookOpen size={18} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t('faq_info_1_title')}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">{t('faq_info_1_subtitle')}</p>
              <button onClick={() => navigate('/blog')} className="text-sm font-bold text-[#009689] flex items-center gap-1 hover:gap-2 transition-all mt-3 w-fit group">
                YAZILARI OKU <ArrowRightLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-center transform transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">{t('faq_info_2_desc')}</div>
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-500 p-2 rounded-xl">
                  <Smartphone size={18} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t('faq_info_2_title')}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">{t('faq_info_2_subtitle')}</p>
              <button onClick={() => navigate('/download')} className="text-sm font-bold text-[#009689] flex items-center gap-1 hover:gap-2 transition-all mt-3 w-fit group">
                UYGULAMAYI İNDİR <ArrowRightLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 3 (Dark Accent) */}
            <div className="bg-slate-900 dark:bg-black rounded-2xl p-6 border border-slate-800 shadow-xl shadow-slate-900/20 flex flex-col justify-center transform transition-transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#009689]/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">{t('faq_info_3_desc')}</div>
                <div className="bg-white/10 text-white p-2 rounded-xl">
                  <Mail size={18} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 relative z-10">{t('faq_info_3_title')}</h3>
              <p className="text-sm text-slate-400 relative z-10 mb-2 leading-relaxed">{t('faq_info_3_subtitle')}</p>
              <button onClick={() => navigate('/contact')} className="text-sm font-bold text-[#009689] flex items-center gap-1 hover:gap-2 transition-all mt-3 w-fit group relative z-10">
                DESTEK TALEBİ AÇ <ArrowRightLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FAQ;
