import { motion } from 'framer-motion';
import { 
  CheckCircle2, PawPrint, Globe, User, Database, 
  Smartphone, Cloud, Eye, Search, Monitor, Users, Shield, Star, Headphones, CreditCard 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  const renderCheck = () => <CheckCircle2 className="text-[var(--color-vet-primary)] shrink-0" size={20} />;

  return (
    <div className="min-h-screen pt-24 pb-12 relative bg-[var(--bg-main)] flex flex-col justify-center">
      <SEO title={t('seo_title_pricing', 'Fiyatlandırma | Veterito')} description={t('seo_desc_pricing', 'Veteriner klinikleri için şeffaf paketler')} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-xl lg:max-w-2xl mx-auto mb-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-4xl font-extrabold mb-4 text-[var(--text-main)] leading-tight">
            {/* ⚠️ "Seffaf ve Esnek Paketler" birden fazla ucretli paket ima
                ediyordu; bugun tek bir surum var ve ucretsiz. */}
            {t('pricing_h1_1')} <br/> <span className="text-[var(--color-vet-primary)]">{t('pricing_h1_2')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-base text-[var(--text-muted)] font-medium">
            {t('pricing_desc')}
          </motion.p>

          {/*
            ⚠️ BU KUTU ZORUNLU (Ahmet, 24.08.2026: "fiyatlar full ucretsiz
            olacak", "yillik bedava deneme, kredi karti gerekmiyordu").
            Fiyat tablosu gormek kullanicida "bir yerde ucret cikacak" beklentisi
            yaratiyor; durumu acikca yazmak tablonun yanlis okunmasini engelliyor.
            ⚠️ Evcil hayvan sahibi tarafi da burada soyleniyor: uygulama onlar
            icin tamamen ucretsiz ve hicbir paketi yok.
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mt-6 flex flex-col gap-1 rounded-2xl border border-[var(--color-vet-primary)]/30 bg-[var(--color-vet-accent-light)] px-6 py-4 text-sm font-semibold text-[var(--color-vet-accent)]"
          >
            <span>{t('pricing_alert_desc')}</span>
            <span className="font-medium opacity-80">{t('pricing_note')}</span>
          </motion.div>
        </div>

        {/*
          ⚠️ IKI PAKETLI KARSILASTIRMA TABLOSU KALDIRILDI (24.08.2026).

          Tablo su farklari satiyordu: "Maksimum 100 musteri", "Platformda
          Oncelikli Gorunurluk", "Gelismis Arama Motoru Gorunumu", "Web Yonetim
          Paneli", "1 Klinik Yoneticisi Hesabi" siniri ve "Oncelikli Destek".

          OLCULDU (24.08.2026, uygulama deposunda kod taramasi):
            · musteri kaydinda HICBIR sayi siniri yok
            · plan / paket / tier kavrami veritabaninda hic yok
            · klinik siralamasinda oncelik ya da one cikarma yok
            · sitede ayri bir web yonetim paneli sayfasi yok
            · ekip ve rol yonetimi ZATEN var, bir uste paket sarti degil
          Ahmet dogruladi: "cogu ozellik uygulamada yok yani sayilar
          sinirlamalar".

          Yani iki paket bugunku urunde BIRBIRINDEN AYRISMIYOR. Ayrisiyormus
          gibi bir tablo gostermek, olmayan bir kisiti gosterip olmayan bir
          ustelemeye ikna etmek olurdu. App Store 2.3.1 ve Play yaniltici beyan
          maddeleri de tam bunu red sebebi sayiyor.

          Yerine: bugun GERCEKTEN calisan ozellikler tek kartta, planlananlar
          ayri ve "yakinda" etiketiyle. Paket ayrimi geri gelecsee, once uygulamada
          karsiligi kurulacak.
        */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-6 lg:p-10 rounded-[2.5rem] border border-[var(--color-vet-primary)]/40 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-extrabold text-[var(--text-main)]">{t('pricing_tier1_name')}</h3>
              <PawPrint className="text-[var(--color-vet-primary)]" size={28} />
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              {t('pricing_tier1_desc')}
            </p>
            <div className="mb-6 flex flex-col items-start gap-1">
              <span className="text-5xl font-extrabold text-[var(--color-vet-primary)]">{t('pricing_free')}</span>
              <span className="text-xs font-semibold text-[var(--text-muted)]">{t('pricing_no_cc')}</span>
            </div>

            <ul className="flex-1 text-[13px] md:text-sm font-medium">
              {[
                { ikon: User, ad: t('pricing_feat_profile') },
                { ikon: Globe, ad: t('pricing_feat_webpage') },
                { ikon: Search, ad: t('pricing_feat_directory') },
                { ikon: Database, ad: t('pricing_feat_appt') },
                { ikon: Users, ad: t('pricing_feat_customers') },
                { ikon: Cloud, ad: t('pricing_feat_records') },
                { ikon: Smartphone, ad: t('pricing_feat_mobile') },
                { ikon: Shield, ad: t('pricing_feat_team') },
                { ikon: Monitor, ad: t('pricing_feat_reports') },
              ].map(({ ikon: Ikon, ad }) => (
                <li key={ad} className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                  <div className="flex items-center gap-3">
                    <Ikon className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} />
                    <span className="text-[var(--text-main)]">{ad}</span>
                  </div>
                  <div>{renderCheck()}</div>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="mt-6 w-full py-4 rounded-xl font-bold btn-primary shadow-md hover:shadow-lg transition-shadow text-center">
              {t('pricing_btn_add')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-card p-6 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-extrabold text-[var(--text-main)]">{t('pricing_roadmap')}</h3>
              <Star className="text-[var(--text-muted)]" size={26} />
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              {t('pricing_roadmap_desc')}
            </p>

            <ul className="flex-1 text-[13px] md:text-sm font-medium">
              {[
                { ikon: Monitor, ad: t('pricing_roadmap_1') },
                { ikon: Eye, ad: t('pricing_roadmap_2') },
                { ikon: CreditCard, ad: t('pricing_roadmap_3') },
                { ikon: Headphones, ad: t('pricing_roadmap_4') },
              ].map(({ ikon: Ikon, ad }) => (
                <li key={ad} className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                  <div className="flex items-center gap-3">
                    <Ikon className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} />
                    <span className="text-[var(--text-muted)]">{ad}</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-1 rounded">{t('pricing_soon')}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base text-[var(--text-muted)] leading-relaxed">
              {t('pricing_footer_note')}
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
