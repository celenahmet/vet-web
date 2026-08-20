import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <SEO title={t('seo_title_pricing')} description={t('seo_desc_pricing')} />
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-extrabold mb-6 text-[var(--text-main)]">{t('pricing_h1_line1')} <br/> {t('pricing_h1_line2')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-[var(--text-muted)]">{t('pricing_subtitle')}</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Free Plan */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-10 rounded-[3rem] border border-[var(--border-color)] flex flex-col hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">{t('pricing_free_title')}</h3>
            <p className="text-[var(--text-muted)] mb-6">{t('pricing_free_desc')}</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">{t('pricing_free_mo')}</span>
              <span className="text-[var(--text-muted)] font-medium">{t('pricing_per_month')}</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_free_f1')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_free_f2')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_free_f3')}</li>
            </ul>
            <button className="w-full py-4 rounded-2xl font-bold bg-white dark:bg-black/20 text-[var(--text-main)] border-2 border-[var(--color-vet-primary)] hover:bg-[var(--color-vet-primary)] hover:text-white transition-colors">{t('pricing_free_btn')}</button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-10 rounded-[3rem] bg-gradient-to-b from-[var(--color-vet-primary)]/10 to-transparent border-2 border-[var(--color-vet-primary)] flex flex-col relative transform hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-[var(--color-vet-primary)]/20">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--color-vet-primary)] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 animate-pulse-glow">
              {t('pricing_pro_badge')}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[var(--color-vet-primary)]">{t('pricing_pro_title')}</h3>
            <p className="text-[var(--text-muted)] mb-6">{t('pricing_pro_desc')}</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-[var(--color-vet-primary)]">{t('pricing_pro_mo')}</span>
              <span className="text-[var(--text-muted)] font-medium">{t('pricing_per_month')}</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_pro_f1')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_pro_f2')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_pro_f3')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-[var(--color-vet-primary)]" size={20}/> {t('pricing_pro_f4')}</li>
            </ul>
            <button className="w-full py-4 rounded-2xl font-bold btn-primary animate-pulse-glow hover:animate-none">{t('pricing_pro_btn')}</button>
          </motion.div>

          {/* Family Plan */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-10 rounded-[3rem] border border-[var(--border-color)] flex flex-col hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 text-indigo-500">{t('pricing_family_title')}</h3>
            <p className="text-[var(--text-muted)] mb-6">{t('pricing_family_desc')}</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-indigo-500">{t('pricing_family_mo')}</span>
              <span className="text-[var(--text-muted)] font-medium">{t('pricing_per_month')}</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-indigo-500" size={20}/> {t('pricing_family_f1')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-indigo-500" size={20}/> {t('pricing_family_f2')}</li>
              <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="text-indigo-500" size={20}/> {t('pricing_family_f3')}</li>
            </ul>
            <button className="w-full py-4 rounded-2xl font-bold bg-white dark:bg-black/20 text-[var(--text-main)] border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors">{t('pricing_family_btn')}</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
