const fs = require('fs');

const code = `import { motion } from 'framer-motion';
import { 
  CheckCircle2, PawPrint, Star, Building2, Rocket, ArrowRight,
  Users, MessageCircle, Calendar, Globe, Wallet, Database,
  Sparkles, Scan, Package, FileText, TestTube, CreditCard,
  PieChart, BarChart3, HeartPulse, BookOpen, Smartphone,
  Layout, Puzzle, Code, Link as LinkIcon, Bot, LifeBuoy, Search
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
    
    if (lower.includes('yapay zekâ') || lower.includes('ai ')) return <Sparkles className="text-teal-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('randevu') || lower.includes('appointment')) return <Calendar className="text-blue-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('müşteri') || lower.includes('crm') || lower.includes('hasta sahip')) return <Users className="text-indigo-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('seo') || lower.includes('arama motoru')) return <Search className="text-orange-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('web')) return <Globe className="text-sky-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('gelir') || lower.includes('gider') || lower.includes('finans') || lower.includes('ödeme')) return <Wallet className="text-emerald-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('bildirim') || lower.includes('davet') || lower.includes('iletişim') || lower.includes('sms') || lower.includes('whatsapp')) return <MessageCircle className="text-green-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('laboratuvar') || lower.includes('lab')) return <TestTube className="text-purple-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('stok') || lower.includes('barkod')) return <Package className="text-amber-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('reçete') || lower.includes('prescription')) return <FileText className="text-rose-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('analiz') || lower.includes('istatistik')) return <BarChart3 className="text-blue-600 shrink-0 mt-1" size={20} />;
    if (lower.includes('mobil') || lower.includes('mobile')) return <Smartphone className="text-zinc-600 dark:text-zinc-400 shrink-0 mt-1" size={20} />;
    if (lower.includes('tasarım') || lower.includes('ui/ux')) return <Layout className="text-pink-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('api') || lower.includes('entegrasyon')) return <LinkIcon className="text-cyan-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('otomasyon')) return <Bot className="text-violet-500 shrink-0 mt-1" size={20} />;
    if (lower.includes('kamera') || lower.includes('tarama') || lower.includes('ocr')) return <Scan className="text-teal-600 shrink-0 mt-1" size={20} />;
    if (lower.includes('kütüphane')) return <BookOpen className="text-amber-600 shrink-0 mt-1" size={20} />;
    if (lower.includes('bakım') || lower.includes('destek')) return <LifeBuoy className="text-red-500 shrink-0 mt-1" size={20} />;
    
    return <CheckCircle2 className="text-[var(--color-vet-primary)] shrink-0 mt-1" size={20} />;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-[var(--bg-main)] flex flex-col justify-center">
      <SEO title={t('seo_title_pricing', 'Fiyatlandırma | Veterito')} description={t('seo_desc_pricing', 'Veteriner klinikleri için şeffaf paketler')} />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-20 mt-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-extrabold mb-6 text-[var(--text-main)] leading-tight tracking-tight">
            {t('pricing_h1_1')} <br/> <span className="text-[var(--color-vet-primary)]">{t('pricing_h1_2')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-[var(--text-muted)] font-medium">
            {t('pricing_desc')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-20 items-start">

          {/* Tier 1: Standart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-[var(--color-vet-primary)]/50 transition-colors shadow-lg hover:shadow-xl bg-white/60 dark:bg-zinc-900/60"
          >
            <div className="mb-4 text-[var(--text-muted)]">
              <PawPrint size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">{t('pricing_tier1_name')}</h3>
            <p className="text-[var(--text-muted)] text-[15px] font-medium mb-6 min-h-[44px]">
              {t('pricing_tier1_desc')}
            </p>
            
            <div className="mb-6">
              <span className="text-[32px] md:text-4xl font-extrabold text-[var(--text-main)] block leading-tight">{t('pricing_tier1_badge')}</span>
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
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-card p-8 lg:p-10 rounded-[2.5rem] border-2 border-[var(--color-vet-primary)] flex flex-col shadow-2xl relative bg-white dark:bg-zinc-900"
          >
            <div className="absolute -top-3 -right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg transform rotate-12 z-20">
              POPÜLER
            </div>
            
            <div className="mb-4 text-[var(--color-vet-primary)]">
              <Star className="fill-[var(--color-vet-primary)]" size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">{t('pricing_tier2_name')}</h3>
            <p className="text-[var(--text-muted)] text-[15px] font-medium mb-6 min-h-[44px]">
              {t('pricing_tier2_desc')}
            </p>
            
            <div className="mb-6">
              <span className="text-[32px] md:text-4xl font-extrabold text-[var(--text-main)] block leading-tight">{t('pricing_tier2_badge')}</span>
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
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-slate-800 dark:hover:border-slate-200 transition-colors shadow-lg hover:shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900/60 dark:to-slate-900/40 relative"
          >
            <div className="mb-4 text-slate-700 dark:text-slate-300">
              <Building2 size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-main)] mb-2">{t('pricing_tier3_name')}</h3>
            <p className="text-[var(--text-muted)] text-[15px] font-medium mb-6 min-h-[44px]">
              {t('pricing_tier3_desc')}
            </p>
            
            <div className="mb-6">
              <span className="text-[32px] md:text-4xl font-extrabold text-[var(--text-main)] block leading-tight">{t('pricing_tier3_badge')}</span>
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
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-white dark:bg-zinc-900/80 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-100 dark:border-zinc-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 dark:bg-teal-900/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex flex-col items-center mb-12 text-center relative z-10">
            <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Rocket size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-[var(--text-main)]">{t('pricing_common_title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {getFeaturesArray('pricing_common_features').map((feat, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-zinc-700/50">
                <div className="mt-1">
                  <CheckCircle2 className="text-teal-500" size={22} />
                </div>
                <span className="text-sm md:text-base text-[var(--text-main)] font-medium leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
`

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Pricing.tsx rewritten for Claude layout.');
