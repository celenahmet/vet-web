import { motion } from 'framer-motion';
import { Calendar, Stethoscope, Users, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function Features() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    whileHover: { y: -10 },
    transition: { type: "spring", stiffness: 300, damping: 20, duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      <SEO title="Özellikler - Veterito" description="Veterito'nun sunduğu tüm özellikleri keşfedin." />
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '18s', animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-extrabold mb-6 text-[var(--text-main)] tracking-tight">
            Tüm İhtiyaçlarınız <br/> <span className="text-[var(--color-vet-primary)]">Tek Bir Yerde</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-[var(--text-muted)] font-medium leading-relaxed">
            Evcil hayvanınızın sağlığı ve mutluluğu için ihtiyacınız olan tüm araçlar, sezgisel ve modern uygulamamızda bir araya geldi.
          </motion.p>
        </div>

        <div className="space-y-32">
          {/* Feature 1: Ana Sayfa Ekranı (Image Left, Text Right) */}
          <motion.div {...fadeInUp} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            <div className="flex-1 w-full relative group flex justify-center">
              <div className="absolute inset-0 bg-emerald-200/30 rounded-full blur-[80px] -z-10 group-hover:bg-emerald-300/40 transition-colors duration-500"></div>
              <img src="/app-home.png" alt="Veterito Ana Sayfa Ekranı" className="max-h-[360px] lg:max-h-[460px] w-auto object-contain mx-auto transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 drop-shadow-2xl" />
            </div>
            <div className="flex-1 space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-emerald-100/50 text-emerald-600 mb-2">
                <Calendar size={32} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-[var(--text-main)]">Kontrol Her An <br/> Elinizin Altında</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                Kişiselleştirilmiş ana sayfa ekranınız ile evcil hayvanınızın yaklaşan aşılarını, randevularını ve günlük görevlerini tek bir bakışta görün.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]"><CheckCircle2 size={20} /></div>
                  Akıllı Görev Yönetimi
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]"><CheckCircle2 size={20} /></div>
                  Otomatik Hatırlatıcılar
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]"><CheckCircle2 size={20} /></div>
                  Çoklu Evcil Hayvan Desteği
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Feature 2: Dijital Kart Ekranı (Text Left, Image Right) */}
          <motion.div {...fadeInUp} className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10">
            <div className="flex-1 space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-amber-100/50 text-amber-600 mb-2">
                <Stethoscope size={32} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-[var(--text-main)]">Evrensel Dijital <br/> Sağlık Kartı</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                Tüm tıbbi geçmiş, aşı karnesi ve mikroçip bilgileri tek bir ekranda. İhtiyaç duyduğunuzda saniyeler içinde veterinerinizle paylaşın.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><CheckCircle2 size={20} /></div>
                  Anında PDF Çıktısı
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><CheckCircle2 size={20} /></div>
                  Veteriner Senkronizasyonu
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-amber-500/10 text-amber-500"><CheckCircle2 size={20} /></div>
                  Mikroçip Entegrasyonu
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full relative group flex justify-center">
              <div className="absolute inset-0 bg-amber-200/30 rounded-full blur-[80px] -z-10 group-hover:bg-amber-300/40 transition-colors duration-500"></div>
              <img src="/app-health.png" alt="Veterito Dijital Kart Ekranı" className="max-h-[320px] lg:max-h-[400px] w-auto object-contain mx-auto transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 drop-shadow-2xl" />
            </div>
          </motion.div>

          {/* Feature 3: Sosyal Topluluk Ekranı (Image Left, Text Right) */}
          <motion.div {...fadeInUp} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            <div className="flex-1 w-full relative group flex justify-center">
              <div className="absolute inset-0 bg-rose-200/30 rounded-full blur-[80px] -z-10 group-hover:bg-rose-300/40 transition-colors duration-500"></div>
              <img src="/app-community.png" alt="Veterito Sosyal Topluluk Ekranı" className="max-h-[360px] lg:max-h-[460px] w-auto object-contain mx-auto transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500 drop-shadow-2xl" />
            </div>
            <div className="flex-1 space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-rose-100/50 text-rose-500 mb-2">
                <Users size={32} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-[var(--text-main)]">Biz Büyük Bir <br/> Aileyiz</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                Yalnız değilsiniz. Çevrenizdeki hayvanseverleri keşfedin, yürüyüş arkadaşları bulun ve deneyimlerinizi güvenilir bir toplulukta paylaşın.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-rose-500/10 text-rose-500"><CheckCircle2 size={20} /></div>
                  Lokasyon Bazlı Eşleşme
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-rose-500/10 text-rose-500"><CheckCircle2 size={20} /></div>
                  Soru - Cevap Forumları
                </li>
                <li className="flex items-center gap-4 text-lg font-bold text-[var(--text-main)]">
                  <div className="p-1 rounded-full bg-rose-500/10 text-rose-500"><CheckCircle2 size={20} /></div>
                  Ortak Yürüyüş Etkinlikleri
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
