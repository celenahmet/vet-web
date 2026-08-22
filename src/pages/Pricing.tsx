import { motion } from 'framer-motion';
import { 
  CheckCircle2, XCircle, PawPrint, Globe, User, Database, 
  Smartphone, Cloud, Eye, Search, Monitor, Users, Shield, Star, Headphones, CreditCard 
} from 'lucide-react';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  const renderCheck = () => <CheckCircle2 className="text-[var(--color-vet-primary)] shrink-0" size={20} />;
  const renderCross = () => <XCircle className="text-red-400 shrink-0" size={20} />;

  return (
    <div className="min-h-screen pt-24 pb-12 relative bg-[var(--bg-main)] flex flex-col justify-center">
      <SEO title={t('seo_title_pricing', 'Fiyatlandırma | Veterito')} description={t('seo_desc_pricing', 'Veteriner klinikleri için şeffaf paketler')} />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-4xl font-extrabold mb-4 text-[var(--text-main)] leading-tight">
            Klinikleriniz İçin <br/> <span className="text-[var(--color-vet-primary)]">Şeffaf ve Esnek Paketler</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-base text-[var(--text-muted)] font-medium">
            Klinik yönetiminizi dijitalleştirin. İş yükünüzü azaltıp hasta iletişiminizi güçlendirecek platformumuzu ilk yıl hiçbir ücret ödemeden deneyimleyin.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          
          {/* Veterito Klinik (Ücretsiz) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-extrabold text-[var(--text-main)]">Veterito Klinik</h3>
              <PawPrint className="text-[var(--color-vet-primary)]" size={28} />
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6 min-h-[2.5rem]">
              Kliniğinizin dijital varlığını oluşturun ve temel araçlarla Veterito'ya başlayın.
            </p>
            
            <div className="mb-6 flex flex-col items-start gap-1">
              <span className="text-5xl font-extrabold text-[var(--color-vet-primary)]">Ücretsiz</span>
              <span className="text-xs font-semibold text-[var(--text-muted)] opacity-0">Boşluk koruyucu</span>
            </div>

            <ul className="flex-1 text-[13px] md:text-sm font-medium">
              {/* Profil ve Görünürlük */}
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                <div className="flex items-center gap-3"><User className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Veteriner Klinik Profili</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                <div className="flex items-center gap-3"><Globe className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Kliniğe Özel Düzenlenebilir Web Sayfası</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                <div className="flex items-center gap-3"><Eye className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Platformda Görünürlük</span></div>
                <div className="text-[var(--text-main)] font-semibold text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded">Standart</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 opacity-60">
                <div className="flex items-center gap-3"><Star className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Platformda Öncelikli Görünürlük</span></div>
                <div>{renderCross()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 opacity-60">
                <div className="flex items-center gap-3"><Search className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Gelişmiş Arama Motoru Görünümü (Google vb.)</span></div>
                <div>{renderCross()}</div>
              </li>

              {/* Kayıt ve Yönetim */}
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 mt-2">
                <div className="flex items-center gap-3"><Database className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Müşteri Kaydı</span></div>
                <div className="text-orange-500 font-bold text-xs bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded">Maksimum 100</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                <div className="flex items-center gap-3"><Cloud className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Bulut Tabanlı Klinik Kaydı</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3">
                <div className="flex items-center gap-3"><Smartphone className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Mobil Müşteri Yönetim Araçları</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 opacity-60">
                <div className="flex items-center gap-3"><Monitor className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Web Yönetim Paneli</span></div>
                <div>{renderCross()}</div>
              </li>

              {/* Ekip ve Destek */}
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 mt-2">
                <div className="flex items-center gap-3"><User className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">1 Klinik Yöneticisi Hesabı</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 opacity-60">
                <div className="flex items-center gap-3"><Users className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Çoklu Yönetici ve Ekip Hesapları</span></div>
                <div>{renderCross()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 opacity-60">
                <div className="flex items-center gap-3"><Shield className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Ekip Rol ve Yetki Yönetimi</span></div>
                <div>{renderCross()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--border-color)] py-3 opacity-60 mb-6">
                <div className="flex items-center gap-3"><Headphones className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Öncelikli Destek</span></div>
                <div>{renderCross()}</div>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold bg-transparent text-[var(--text-main)] border-2 border-[var(--color-vet-primary)] hover:bg-[var(--color-vet-primary)] hover:text-white transition-colors">
              Kliniğini Oluştur
            </button>
          </motion.div>

          {/* Veterito Klinik Pro */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 lg:p-10 rounded-[2.5rem] bg-[var(--bg-main)] border-2 border-[var(--color-vet-primary)] flex flex-col relative transform hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-[var(--color-vet-primary)]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-vet-primary)] text-white px-5 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5">
              <Star size={14} className="fill-white"/> İlk Yıl Ücretsiz
            </div>
            
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-extrabold text-[var(--color-vet-primary)]">Veterito Klinik Pro</h3>
              <PawPrint className="text-[var(--color-vet-primary)]" size={28} />
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6 min-h-[2.5rem]">
              Kliniğinizi ekibinizle birlikte yönetin, web paneli ve gelişmiş yetkilerle operasyonunuzu büyütün.
            </p>
            
            <div className="mb-6 flex flex-col items-start gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-[var(--color-vet-primary)]">₺0</span>
                <span className="text-[var(--text-muted)] font-medium text-base"> İlk Yıl</span>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded-md">
                <CreditCard size={12}/> Kredi kartı gerekmez
              </span>
            </div>

            <ul className="flex-1 text-[13px] md:text-sm font-medium">
              {/* Profil ve Görünürlük */}
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><User className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Veteriner Klinik Profili</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Globe className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Kliniğe Özel Düzenlenebilir Web Sayfası</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Eye className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Platformda Görünürlük</span></div>
                <div className="text-[var(--color-vet-primary)] font-bold text-xs bg-[var(--color-vet-primary)]/10 px-2 py-1 rounded">Öncelikli</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Star className="text-[var(--color-vet-primary)] shrink-0" size={18} /><span className="text-[var(--text-main)]">Platformda Öncelikli Görünürlük</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Search className="text-[var(--color-vet-primary)] shrink-0" size={18} /><span className="text-[var(--text-main)]">Gelişmiş Arama Motoru Görünümü (Google vb.)</span></div>
                <div>{renderCheck()}</div>
              </li>

              {/* Kayıt ve Yönetim */}
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3 mt-2">
                <div className="flex items-center gap-3"><Database className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Müşteri Kaydı</span></div>
                <div className="text-orange-500 font-bold text-xs bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded">Geniş Müşteri Kaydı</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Cloud className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Bulut Tabanlı Klinik Kaydı</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Smartphone className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">Mobil Müşteri Yönetim Araçları</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Monitor className="text-[var(--color-vet-primary)] shrink-0" size={18} /><span className="text-[var(--text-main)]">Web Yönetim Paneli</span></div>
                <div>{renderCheck()}</div>
              </li>

              {/* Ekip ve Destek */}
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3 mt-2">
                <div className="flex items-center gap-3"><User className="text-[var(--text-muted)] opacity-70 shrink-0" size={18} /><span className="text-[var(--text-main)]">1 Klinik Yöneticisi Hesabı</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Users className="text-[var(--color-vet-primary)] shrink-0" size={18} /><span className="text-[var(--text-main)]">Çoklu Yönetici ve Ekip Hesapları</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3">
                <div className="flex items-center gap-3"><Shield className="text-[var(--color-vet-primary)] shrink-0" size={18} /><span className="text-[var(--text-main)]">Ekip Rol ve Yetki Yönetimi</span></div>
                <div>{renderCheck()}</div>
              </li>
              <li className="flex items-center justify-between border-b border-[var(--color-vet-primary)]/20 py-3 mb-6">
                <div className="flex items-center gap-3"><Headphones className="text-[var(--color-vet-primary)] shrink-0" size={18} /><span className="text-[var(--text-main)]">Öncelikli Destek</span></div>
                <div>{renderCheck()}</div>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold btn-primary shadow-md hover:shadow-lg transition-shadow">
              Pro'ya Geç
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
