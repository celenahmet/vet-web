import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Clinics() {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden bg-[var(--bg-main)]">
      <SEO title="Klinikler İçin - Veterito" description="Veteriner klinikleri için modern yönetim çözümleri." />
      
      {/* Background Orbs (Standard Light Theme) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1 space-y-8 text-[var(--text-main)]">
            <div className="inline-flex flex-col">
              <span className="text-[var(--color-vet-primary)] font-bold tracking-wider uppercase mb-2">B2B Çözümler</span>
              <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-[var(--text-main)]">Kliniğinizi geleceğe <br/> taşıyın</h2>
            </div>
            
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-xl">
              Veterito Clinic paneli ile randevuları yönetin, dijital reçeteler yazın ve hasta sahipleriyle kesintisiz iletişim kurun. 
              Hasta sadakatini %40'a kadar artırın.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[var(--text-main)] font-medium">
                <div className="p-1 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]"><Building2 size={16} /></div>
                Akıllı Randevu ve Takvim Yönetimi
              </li>
              <li className="flex items-center gap-3 text-[var(--text-main)] font-medium">
                <div className="p-1 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]"><Building2 size={16} /></div>
                Dijital Sağlık Geçmişi ve Otomatik Aşı Hatırlatıcıları
              </li>
              <li className="flex items-center gap-3 text-[var(--text-main)] font-medium">
                <div className="p-1 rounded-full bg-[var(--color-vet-primary)]/10 text-[var(--color-vet-primary)]"><Building2 size={16} /></div>
                Hasta Sahipleriyle Direkt Mesajlaşma (Tele-sağlık)
              </li>
            </ul>
            
            <div className="pt-6">
              <button className="bg-[var(--color-vet-primary)] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[var(--color-vet-primary)]/90 transition-colors flex items-center gap-2 group shadow-xl shadow-[var(--color-vet-primary)]/20">
                Ücretsiz Demo Talep Et
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }} 
            whileInView={{ opacity: 1, scale: 1, y: 0 }} 
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }} 
            className="flex-1 w-full relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-vet-primary)]/20 to-transparent rounded-[3rem] transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[var(--color-vet-primary)]/10 rounded-full blur-[80px] -z-10 group-hover:bg-[var(--color-vet-primary)]/30 transition-colors duration-500"></div>
            <div className="glass-card bg-white/80 dark:bg-white/5 p-8 rounded-[3rem] border border-[var(--border-color)] relative backdrop-blur-xl shadow-2xl group-hover:shadow-[var(--color-vet-primary)]/20 group-hover:border-[var(--color-vet-primary)]/30 transition-all duration-300">
              <img src="/dashboard-mockup.png" alt="Clinic Dashboard" className="w-full rounded-2xl shadow-lg border border-[var(--border-color)]" onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800";
              }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
