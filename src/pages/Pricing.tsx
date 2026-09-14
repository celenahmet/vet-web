import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, PawPrint, Star, Building2, Rocket, ArrowRight,
  Users, MessageCircle, Calendar, Globe, Wallet, Sparkles, Scan, Package, FileText, TestTube, BarChart3, BookOpen, Smartphone,
  Layout, Link as LinkIcon, Bot, LifeBuoy, Search, Info,
  LayoutDashboard, Database, Zap, Store, Activity, Clock, UserPlus, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();
  const [baseHeight, setBaseHeight] = useState<number | 'auto'>('auto');
  const proCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Capture the initial height of the Pro card to keep other cards identical initially
    const timer = setTimeout(() => {
      if (proCardRef.current) {
        setBaseHeight(proCardRef.current.offsetHeight);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
            style={{ minHeight: baseHeight !== 'auto' ? baseHeight : undefined }}
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
            ref={proCardRef}
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
                  <div className="text-[var(--text-main)] leading-relaxed flex-1">
                    {feat.includes('|') ? (
                      <details className="group/details cursor-pointer w-full">
                        <summary className="list-none outline-none [&::-webkit-details-marker]:hidden inline-block w-full">
                          <span className="border-b border-dashed border-slate-400 dark:border-zinc-500 font-medium group-open/details:text-[#009689] transition-colors">
                            {feat.split('|')[0]}
                          </span>
                          <Info size={15} className="text-slate-400 inline-block ml-1.5 align-middle -mt-0.5 group-open/details:text-[#009689] transition-colors" />
                        </summary>
                        <div className="text-[13px] text-[var(--text-muted)] mt-2 pl-3 border-l-2 border-[#009689]/40 leading-relaxed font-normal whitespace-pre-line">
                          {feat.split('|')[1]}
                        </div>
                      </details>
                    ) : feat.includes(':') ? (
                      <><strong>{feat.split(':')[0]}:</strong>{feat.split(':')[1]}</>
                    ) : feat}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tier 3: Enterprise */}
          <motion.div
            style={{ minHeight: baseHeight !== 'auto' ? baseHeight : undefined }}
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
        <div className="max-w-7xl mx-auto mt-40 mb-24 relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)]"
            >
              {t('pricing_common_title')}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
            {[
              { icon: LayoutDashboard, titleKey: 'pricing_cfeat_1_title', descKey: 'pricing_cfeat_1_desc' },
              { icon: Users, titleKey: 'pricing_cfeat_2_title', descKey: 'pricing_cfeat_2_desc' },
              { icon: Database, titleKey: 'pricing_cfeat_3_title', descKey: 'pricing_cfeat_3_desc' },
              { icon: Zap, titleKey: 'pricing_cfeat_4_title', descKey: 'pricing_cfeat_4_desc' },
              { icon: Store, titleKey: 'pricing_cfeat_5_title', descKey: 'pricing_cfeat_5_desc' },
              { icon: Activity, titleKey: 'pricing_cfeat_7_title', descKey: 'pricing_cfeat_7_desc' },
              { icon: UserPlus, titleKey: 'pricing_cfeat_9_title', descKey: 'pricing_cfeat_9_desc' },
              { icon: Lock, titleKey: 'pricing_cfeat_10_title', descKey: 'pricing_cfeat_10_desc' },
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                  className="bg-white dark:bg-zinc-900 rounded-[1.5rem] p-6 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-300 dark:hover:border-teal-800 transition-all duration-300 flex flex-col group cursor-default"
                >
                  <div className="w-12 h-12 bg-[#009689]/10 dark:bg-[#009689]/20 rounded-xl flex items-center justify-center mb-5 text-[#009689] group-hover:scale-110 group-hover:bg-[#009689] group-hover:text-white transition-all duration-300">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{t(feat.titleKey)}</h3>
                  <p className="text-[14px] text-[var(--text-muted)] font-medium leading-relaxed">{t(feat.descKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
