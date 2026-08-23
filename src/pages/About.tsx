
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Target, ShieldCheck, HeartPulse } from 'lucide-react';
import SEO from '../components/SEO';


export default function About() {
  
  
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden bg-[var(--bg-main)]">
      <SEO title="Hakkımızda | Veterito" description="Pati dostunuzun dijital sağlık asistanı." />
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full font-bold text-sm border border-teal-100 mb-6">
            <Heart size={16} className="fill-teal-500" />
            Biz Kimiz?
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
            Pati Dostunuzun <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Dijital Sağlık Asistanı</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 font-medium leading-relaxed">
            Veterito, minik dostlarımızın daha sağlıklı ve mutlu bir yaşam sürmesi için geliştirilmiş uçtan uca bir dijital sağlık ekosistemidir.
          </motion.p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:border-teal-200 transition-colors">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-50 rounded-full blur-2xl group-hover:bg-teal-100 transition-colors duration-500"></div>
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Vizyonumuz</h3>
            <p className="text-slate-600 font-medium leading-relaxed relative z-10">
              Hayvan sağlığını dijitalleştirerek, veteriner hekimler ve hayvan sahipleri arasında kesintisiz, güvenilir ve tamamen şeffaf bir köprü kurmak. Dünyadaki tüm evcil hayvanların sağlık geçmişini standart ve ulaşılabilir bir formata dönüştürmeyi hayal ediyoruz.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:border-emerald-200 transition-colors">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors duration-500"></div>
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Misyonumuz</h3>
            <p className="text-slate-600 font-medium leading-relaxed relative z-10">
              Kliniklerin iş yükünü modern teknolojilerle hafifletirken, evcil hayvan sahiplerine can dostlarının tüm sağlık verilerini tek bir tuşla, her an her yerde ulaşılabilir kılmak. İletişim kopukluklarından kaynaklanan hataları sıfıra indirmek.
            </p>
          </motion.div>
        </div>

        {/* Why Veterito? */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Değerlerimiz</h2>
          <div className="h-1.5 w-20 bg-teal-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <HeartPulse size={28} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Sevgi Odaklılık</h4>
            <p className="text-sm text-slate-600">Her satır kodumuzu, hayvanlara duyduğumuz sonsuz sevgi ve saygıyla yazıyoruz.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Güven ve Şeffaflık</h4>
            <p className="text-sm text-slate-600">Sağlık verilerinin güvenliği bizim için her şeyden önemli. Hiçbir veriyi riske atmayız.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg">
            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users size={28} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Ekosistem Bilinci</h4>
            <p className="text-sm text-slate-600">Veteriner hekimlerin ve hayvan sahiplerinin birbirini anladığı uyumlu bir ağ kuruyoruz.</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
