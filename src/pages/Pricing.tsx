import { motion } from 'framer-motion';
import { 
  CheckCircle2, PawPrint, Star, Building2, Rocket, ArrowRight,
  Users, MessageCircle, Calendar, Globe, Wallet, Sparkles, Scan, Package, FileText, TestTube, BarChart3, BookOpen, Smartphone,
  Layout, Link as LinkIcon, Bot, LifeBuoy, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  const getFeaturesArray = (key: string) => {
    const raw = t(key, { returnObjects: true });
    return Array.isArray(raw) ? raw : [];
  };

  const getIconForFeature = (featText: string) => {
    const lower = featText.toLowerCase();
    
    if (lower.includes('yapay zekâ') || lower.includes('ai ')) return <Sparkles className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('randevu') || lower.includes('appointment')) return <Calendar className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('müşteri') || lower.includes('crm') || lower.includes('hasta sahip')) return <Users className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('seo') || lower.includes('arama motoru')) return <Search className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('web')) return <Globe className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('gelir') || lower.includes('gider') || lower.includes('finans') || lower.includes('ödeme')) return <Wallet className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('bildirim') || lower.includes('davet') || lower.includes('iletişim') || lower.includes('sms') || lower.includes('whatsapp')) return <MessageCircle className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('laboratuvar') || lower.includes('lab')) return <TestTube className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('stok') || lower.includes('barkod')) return <Package className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('reçete') || lower.includes('prescription')) return <FileText className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('analiz') || lower.includes('istatistik')) return <BarChart3 className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('mobil') || lower.includes('mobile')) return <Smartphone className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('tasarım') || lower.includes('ui/ux')) return <Layout className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('api') || lower.includes('entegrasyon')) return <LinkIcon className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('otomasyon')) return <Bot className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('kamera') || lower.includes('tarama') || lower.includes('ocr')) return <Scan className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('kütüphane')) return <BookOpen className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('bakım') || lower.includes('destek')) return <LifeBuoy className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
    
    return <CheckCircle2 className="text-slate-500 dark:text-slate-400 shrink-0 mt-1" size={20} />;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-[var(--bg-main)] flex flex-col justify-center">
      <SEO title={t('seo_title_pricing', 'Fiyatlandırma | Veterito')} description={t('seo_desc_pricing', 'Veteriner klinikleri için şeffaf paketler')} />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-24 mt-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl lg:text-5xl font-extrabold mb-6 text-[var(--text-main)] leading-tight tracking-tight">
            {t('pricing_h1_1')} <span className="text-[#009689]">{t('pricing_h1_2')}</span>
          </motion.h1>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-20 items-start">

          {/* Tier 1: Standart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-zinc-800 flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#009689]/30 bg-white/60 dark:bg-zinc-900/60 relative group"
          >
            <div className="mb-4 text-slate-500 dark:text-slate-400">
              <PawPrint size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">{t('pricing_tier1_name')}</h3>
            <p className="text-[var(--text-muted)] text-[15px] font-medium mb-6 min-h-[44px]">
              {t('pricing_tier1_desc')}
            </p>
            
            <div className="mb-6">
              <span className="text-xl md:text-2xl font-semibold text-[var(--text-main)] block leading-tight">{t('pricing_tier1_badge')}</span>
              <span className="text-[13px] text-[var(--text-muted)] font-semibold uppercase tracking-wider block mt-1 opacity-70">
                Sınırsız Kullanım
              </span>
            </div>

            <Link to="/download" className="w-full py-4 mb-8 rounded-xl font-bold bg-white dark:bg-zinc-800 text-[var(--text-main)] border border-slate-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all text-center text-[15px] block">
              {t('pricing_btn_start')}
            </Link>

            <ul className="flex-1 text-[14px] font-medium">
              {getFeaturesArray('pricing_tier1_features').map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4 py-4 border-b border-slate-200/80 dark:border-zinc-800/80 last:border-0">
                  {getIconForFeature(feat)}
                  <span className="text-[var(--text-main)] leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tier 2: Pro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="glass-card p-8 lg:p-10 rounded-[2.5rem] border-2 border-[#009689] flex flex-col transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,150,137,0.3)] hover:-translate-y-2 relative bg-white dark:bg-zinc-900 group"
          >
            <div className="mb-4 text-slate-500 dark:text-slate-400">
              <Star size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">{t('pricing_tier2_name')}</h3>
            <p className="text-[var(--text-muted)] text-[15px] font-medium mb-6 min-h-[44px]">
              {t('pricing_tier2_desc')}
            </p>
            
            <div className="mb-6">
              <span className="text-xl md:text-2xl font-semibold text-[var(--text-main)] block leading-tight">{t('pricing_tier2_badge')}</span>
              <span className="text-[13px] text-[var(--text-muted)] font-semibold uppercase tracking-wider block mt-1 opacity-70">
                Sınırsız Kullanım
              </span>
            </div>

            <Link to="/download" className="w-full py-4 mb-8 rounded-xl font-bold btn-primary shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-center text-[15px] block">
              {t('pricing_btn_start')}
            </Link>

            <ul className="flex-1 text-[14px] font-medium">
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[var(--text-muted)] mb-2">Standart paket içerikleri, ayrıca:</div>
              {getFeaturesArray('pricing_tier2_features').map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4 py-4 border-b border-slate-200/80 dark:border-zinc-800/80 last:border-0">
                  {getIconForFeature(feat)}
                  <span className="text-[var(--text-main)] leading-relaxed">
                    {feat.includes(':') ? (
                      <><strong>{feat.split(':')[0]}:</strong>{feat.split(':')[1]}</>
                    ) : feat}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tier 3: Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-zinc-800 flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-slate-800 dark:hover:border-slate-300 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900/60 dark:to-slate-900/40 relative group"
          >
            <div className="mb-4 text-slate-500 dark:text-slate-400">
              <Building2 size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">{t('pricing_tier3_name')}</h3>
            <p className="text-[var(--text-muted)] text-[15px] font-medium mb-6 min-h-[44px]">
              {t('pricing_tier3_desc')}
            </p>
            
            <div className="mb-6">
              <span className="text-xl md:text-2xl font-semibold text-[var(--text-main)] block leading-tight">{t('pricing_tier3_badge')}</span>
              <span className="text-[13px] text-[var(--text-muted)] font-semibold uppercase tracking-wider block mt-1 opacity-70">
                Kurumsal Yapılar İçin
              </span>
            </div>

            <Link to="/contact" className="w-full py-4 mb-8 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md hover:shadow-lg transition-shadow text-center flex items-center justify-center gap-2 text-[15px]">
              {t('pricing_btn_contact')} <ArrowRight size={18} />
            </Link>

            <ul className="flex-1 text-[14px] font-medium">
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[var(--text-muted)] mb-2">Pro paket içerikleri, ayrıca:</div>
              {getFeaturesArray('pricing_tier3_features').map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4 py-4 border-b border-slate-200/80 dark:border-zinc-800/80 last:border-0">
                  {getIconForFeature(feat)}
                  <span className="text-[var(--text-main)] leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Common Features Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5 }
            }
          }}
          className="max-w-6xl mx-auto bg-teal-50 dark:bg-teal-950/20 rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl border border-teal-100 dark:border-teal-900/50 relative overflow-hidden"
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

          <div className="flex flex-col items-center mb-8 text-center relative z-10">
            <motion.div 
              variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
              className="w-14 h-14 bg-gradient-to-tr from-[#008075] to-[#009689] text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#009689]/30 border-none transform -translate-y-2"
            >
              <Rocket size={24} />
            </motion.div>
            <motion.h2 
              variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-2xl md:text-3xl font-extrabold text-[var(--text-main)]"
            >
              {t('pricing_common_title')}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 relative z-10">
            {getFeaturesArray('pricing_common_features').map((feat, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                variants={{
                  hidden: { opacity: 0 },
                  visible: (i) => ({ 
                    opacity: 1, 
                    transition: { 
                      duration: 1.2, 
                      delay: Math.floor(i / 3) * 0.5,
                      ease: 'easeInOut'
                    }
                  })
                }}
                className="flex items-start gap-4 p-2 cursor-default"
              >
                <div className="mt-1">
                  <CheckCircle2 className="text-[#009689]" size={22} />
                </div>
                <span className="text-sm md:text-base text-[var(--text-main)] font-medium leading-relaxed">{feat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
