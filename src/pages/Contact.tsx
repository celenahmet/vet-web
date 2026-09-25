import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, ChevronDown, Send, Building2, Heart, HelpCircle, ArrowRight } from 'lucide-react';
import { Instagram, LinkedIn, YouTube, X, TikTok } from '../components/SosyalIkonlar';
import SEO from '../components/SEO';
import { brandConfig } from '../config/brand';
import { LEGAL_CONTACT_EMAIL } from '../data/legal';

const Contact = () => {
  const { t } = useTranslation();
  const [subject, setSubject] = useState('support');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // form is not connected to backend yet as requested
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-[var(--bg-main)]">
      <SEO
        title={t('contact_title')}
        description={t('contact_desc')}
        url="https://veterito.com/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[30px] lg:text-5xl font-extrabold text-[var(--text-main)] mb-8 leading-tight tracking-tight"
          >
            {t('contact_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[16px] lg:text-xl text-[var(--text-muted)] font-medium leading-relaxed"
          >
            {t('contact_desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl"
            >
            <h2 className="text-2xl font-extrabold text-[var(--text-main)] mb-6">{t('contact_form_title')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('contact_form_name')}</label>
                  <input id="name" type="text" placeholder={t('contact_form_name_placeholder')} className="w-full px-4 py-3.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base text-slate-900 dark:text-white placeholder:text-slate-400" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('contact_form_email')}</label>
                  <input id="email" type="email" placeholder={t('contact_form_email_placeholder')} className="w-full px-4 py-3.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base text-slate-900 dark:text-white placeholder:text-slate-400" required />
                </div>
              </div>

              <div>
                <label htmlFor="clinic" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('contact_form_clinic')}</label>
                <div className="relative">
                  <input id="clinic" type="text" placeholder={t('contact_form_clinic_placeholder')} className="w-full px-4 py-3.5 pl-11 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base text-slate-900 dark:text-white placeholder:text-slate-400" />
                  <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('contact_form_phone')}</label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr]">
                  <div className="relative">
                    <button type="button" className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-3 py-3.5 text-left text-slate-700 dark:text-slate-300 transition-all">
                      <span className="min-w-0 truncate text-base">
                        <span className="font-bold text-slate-900 dark:text-white">+90</span> <span className="text-sm ml-1">TR</span>
                      </span>
                      <ChevronDown size={18} className="shrink-0 text-slate-500" />
                    </button>
                  </div>
                  <input id="phone" type="tel" placeholder={t('contact_form_phone_placeholder')} className="w-full px-4 py-3.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{t('contact_form_phone_hint')}</p>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('contact_form_subject')}</label>
                <div className="relative">
                  <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-3.5 appearance-none bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base text-slate-900 dark:text-white font-medium">
                    <option value="support">{t('contact_topic_support')}</option>
                    <option value="privacy">{t('contact_topic_privacy')}</option>
                    <option value="deletion">{t('contact_topic_deletion')}</option>
                    <option value="child">{t('contact_topic_child')}</option>
                    <option value="clinic">{t('contact_topic_clinic')}</option>
                    <option value="other">{t('contact_topic_other')}</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
                {subject === 'other' && (
                  <div className="mt-3">
                    <input type="text" id="otherSubject" placeholder={t('contact_topic_other_placeholder')} className="w-full px-4 py-3.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base text-slate-900 dark:text-white placeholder:text-slate-400" required />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{t('contact_form_message')}</label>
                <textarea id="message" rows={4} placeholder={t('contact_form_message_placeholder')} className="w-full px-4 py-3.5 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all text-base resize-none text-slate-900 dark:text-white placeholder:text-slate-400" required></textarea>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="kvkk"
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-slate-300 text-[#009689] focus:ring-[#009689]"
                  />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <label htmlFor="kvkk" className="cursor-pointer">
                    <Trans i18nKey="contact_form_kvkk">
                      Kişisel verilerimin <Link to="/kvkk" className="text-[#009689] hover:underline font-medium">Aydınlatma Metni</Link> kapsamında işlenmesini okudum ve kabul ediyorum.
                    </Trans>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full py-4 bg-[#009689] text-white rounded-xl font-bold text-base hover:bg-[#007A6F] transition-all shadow-lg hover:shadow-[#009689]/30 flex justify-center items-center gap-2">
                  {t('contact_form_submit')} <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-5 lg:mt-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl"
            >
              <h3 className="text-lg font-extrabold text-[var(--text-main)] mb-5">{t('contact_info_title')}</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#009689]/10 text-[#009689]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{t('contact_info_email_title')}</p>
                    <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#009689] dark:hover:text-[#009689] transition-colors font-medium mt-0.5 block">
                      {LEGAL_CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-5 border-t border-slate-100 dark:border-zinc-800/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#009689]/10 text-[#009689]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{t('contact_info_hq_title')}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-relaxed">
                      {brandConfig.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{brandConfig.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-zinc-950 p-6 text-white shadow-xl"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#009689]/30 rounded-full blur-3xl"></div>
              <h3 className="relative z-10 text-lg font-extrabold mb-2">{brandConfig.name} {t('contact_support_title', 'Destek')}</h3>
              <p className="relative z-10 text-[13px] text-slate-300 leading-relaxed whitespace-pre-line">
                {t('contact_response')}
              </p>
            </motion.div>

            {/* FAQ Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-[#009689]/10 dark:bg-[#009689]/5 p-6 rounded-3xl border border-[#009689]/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#009689] text-white p-2 rounded-xl shadow-md">
                  <HelpCircle size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('contact_faq_title')}</h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                {t('contact_faq_desc')}
              </p>
              <Link to="/sss" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white rounded-xl font-semibold border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors shadow-sm text-sm">
                {t('contact_faq_button')} <ArrowRight size={16} />
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Social Media Box - Centered below grid */}
        <div className="mt-8 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl flex flex-col items-center justify-center gap-6 text-center"
          >
            <div className="flex flex-col items-center max-w-lg mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 text-[#009689] text-xs font-bold mb-3">
                <Heart size={14} className="fill-current" />
                {t('contact_social_badge', 'TAKİPTE KALIN')}
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{t('contact_social_title', 'Bizi Takip Edin')}</h3>
              <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
                {t('contact_social_desc', 'Güncel gelişmelerden, yeni özelliklerden ve ipuçlarından haberdar olmak için sosyal medya hesaplarımızı takip edebilirsiniz.')}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://www.instagram.com/veteritoapp/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400 hover:scale-110 hover:shadow-lg hover:border-[#009689]/30 hover:bg-[#009689]/5 transition-all">
                <Instagram boyut={20} />
              </a>
              <a href="https://www.linkedin.com/company/veterito/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 hover:scale-110 hover:shadow-lg hover:border-[#009689]/30 hover:bg-[#009689]/5 transition-all">
                <LinkedIn boyut={20} />
              </a>
              <a href="https://www.youtube.com/@veterito" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 hover:scale-110 hover:shadow-lg hover:border-[#009689]/30 hover:bg-[#009689]/5 transition-all">
                <YouTube boyut={20} />
              </a>
              <a href="https://www.tiktok.com/@veterito" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white hover:scale-110 hover:shadow-lg hover:border-[#009689]/30 hover:bg-[#009689]/5 transition-all">
                <span style={{ filter: 'drop-shadow(1.5px 1.5px 0 #ff0050) drop-shadow(-1.5px -1.5px 0 #00f2fe)' }}>
                  <TikTok boyut={20} />
                </span>
              </a>
              <a href="https://x.com/veterito" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-zinc-800 dark:text-slate-200 hover:scale-110 hover:shadow-lg hover:border-[#009689]/30 hover:bg-[#009689]/5 transition-all">
                <X boyut={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
