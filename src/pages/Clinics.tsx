
import { motion } from 'framer-motion';
import { 
  Building2, Calendar, Archive, Megaphone, Stethoscope, MapPin, 
  Award, ArrowRight, Grid, FileText, Activity, 
  CheckCircle, Bell, 
  Phone, ChevronRight, ChevronLeft,
  Users, Edit3, CheckCircle2,
  PieChart, Wallet, Globe, Star, StarHalf, Clock,
  List, Hourglass, ArrowRightLeft
} from 'lucide-react';
import SEO from '../components/SEO';

import Footer from '../components/Footer';

const AnimatedBorder = ({ color, rx = "32" }: { color: string, rx?: string }) => (
  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
    <motion.rect
      x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx={rx}
      fill="none" stroke={color} strokeWidth="2" 
      style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </motion.svg>
);

export default function Clinics() {
  return (
    <div className="fixed inset-0 z-[45] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[var(--bg-main)]">
      <SEO title="Klinikler İçin Veterito | Yeni Nesil Klinik Yönetimi" description="Klinik operasyonlarınızı baştan sona dijitalleştirin." />
      
      {/* Fake Navbar Background for visibility since we are full screen */}
      <div className="fixed top-0 left-0 right-0 h-[88px] bg-[var(--bg-main)]/80 backdrop-blur-md z-[60] pointer-events-none"></div>

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section 1: Hero */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="w-full lg:w-[45%] space-y-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-bold text-sm border border-indigo-100">
              <Building2 size={16} />
              Veteriner Klinikleri Özel
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Klinik Yönetiminde <br/> <span className="text-teal-600">Yeni Dönem</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Klinik operasyonlarınızı baştan sona dijitalleştirerek hem iş yükünüzü hafifletin hem de kusursuz bir müşteri deneyimi sunun:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <Calendar className="text-indigo-500 mt-0.5 shrink-0" size={20} />
                Akıllı randevu sistemiyle karmaşayı ve çakışmaları önleyin.
              </li>
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <Archive className="text-teal-500 mt-0.5 shrink-0" size={20} />
                Entegre dijital arşiv sayesinde tüm tıbbi geçmişe tek tıkla ulaşın.
              </li>
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <Megaphone className="text-amber-500 mt-0.5 shrink-0" size={20} />
                Dijital vitrininizle çevrenizdeki binlerce yeni hayvana doğrudan ulaşın.
              </li>
            </ul>
            <div className="pt-4">
              <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-colors flex items-center gap-2 shadow-xl shadow-teal-500/20">
                Ücretsiz Kayıt Ol <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="w-full lg:w-[55%] relative">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 lg:p-10 flex flex-col relative h-auto lg:h-auto lg:min-h-[450px]">
              <AnimatedBorder color="#8B5CF6" />
              
              {/* Header (Profile Card style) */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-800 rounded-xl shrink-0 shadow-inner flex items-center justify-center">
                    <Building2 size={24} className="text-teal-100" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-1.5">
                      Yıldızlar Veteriner Kliniği
                      <CheckCircle2 size={16} className="text-teal-600" />
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Kadıköy, İstanbul</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative cursor-pointer w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <Bell size={24} className="text-slate-600 dark:text-slate-300" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold border-2 border-white dark:border-slate-900">10</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1">
                {/* Sidebar */}
                <div className="w-full lg:w-48 flex flex-col gap-6 shrink-0">

                  {/* Sidebar Menu */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Hızlı İşlemler</div>
                    
                    <div className="flex items-center gap-3 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-3 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border border-teal-100/50 dark:border-teal-800/30">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-800/50 flex items-center justify-center shrink-0">
                        <Calendar size={16} className="text-teal-600 dark:text-teal-400" />
                      </div>
                      Randevular
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Users size={16} className="text-blue-500 dark:text-blue-400" />
                      </div>
                      Müşteriler
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/20 group-hover:bg-amber-100 dark:group-hover:bg-amber-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Megaphone size={16} className="text-amber-500 dark:text-amber-400" />
                      </div>
                      Duyuru Gönder
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Edit3 size={16} className="text-purple-500 dark:text-purple-400" />
                      </div>
                      Gönderi Paylaş
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-100 dark:group-hover:bg-rose-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <PieChart size={16} className="text-rose-500 dark:text-rose-400" />
                      </div>
                      Raporlar
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Wallet size={16} className="text-emerald-500 dark:text-emerald-400" />
                      </div>
                      Gelir / Gider
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-colors border border-transparent group">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/40 flex items-center justify-center shrink-0 transition-colors">
                        <Globe size={16} className="text-indigo-500 dark:text-indigo-400" />
                      </div>
                      Web Sayfam
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-8">
                  {/* Klinik Nabzı */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Klinik Nabzı</h3>
                    <div className="grid grid-cols-4 divide-x divide-slate-100 dark:divide-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl py-5 bg-gradient-to-br from-white via-teal-50/30 to-slate-50 dark:from-slate-800/50 dark:via-teal-900/10 dark:to-slate-800/50 shadow-sm">
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">BUGÜN</div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">0</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">BEKLEYEN</div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">50</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">MÜŞTERİ</div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-2xl font-black text-slate-900 dark:text-white">200</div>
                        <div className="text-[10px] text-slate-500 font-semibold mt-0.5">TAKİPÇİ</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 px-2 text-xs font-semibold text-slate-400">
                      <span>20 gönderi</span>
                      <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                      <span>10 duyuru</span>
                    </div>
                  </div>
                  
                  {/* Bugünün Akışı */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bugünün Akışı</h3>
                      <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold cursor-pointer hover:underline">Takvimi Gör</span>
                    </div>
                    <div className="border border-teal-100 dark:border-teal-900/50 border-l-4 border-l-teal-500 rounded-2xl p-5 flex items-center justify-between bg-gradient-to-r from-teal-50/30 to-white dark:from-teal-900/10 dark:to-slate-800/50 shadow-sm">
                      <div className="flex flex-col">
                        <div className="font-bold text-slate-900 dark:text-white text-base mb-1 flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                            <Calendar size={14} />
                          </div>
                          Bugün planlanmış randevu yok.
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm pl-[38px]">Takvimi açarak yaklaşan talepleri ve randevuları görebilirsin.</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <ChevronRight size={16} className="text-teal-600 dark:text-teal-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Dijital Klinik Profili */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-7 lg:p-8 relative w-full xl:min-w-[550px] mx-auto min-h-[480px]">
              <AnimatedBorder color="#F59E0B" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex items-center gap-3 bg-white dark:bg-slate-800">
                  <Phone size={20} className="text-slate-500 dark:text-slate-400" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">TELEFON</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white">0216 111 22 33</div>
                  </div>
                </div>
                
                <div className="border border-[#25D366]/20 bg-[#25D366]/5 dark:bg-[#25D366]/10 rounded-xl p-3 flex items-center gap-3">
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">WHATSAPP</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white">+90 532 111 2233</div>
                  </div>
                </div>

                <div className="border border-teal-200 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors">
                  <Calendar size={20} className="text-teal-600 dark:text-teal-400" />
                  <div>
                    <div className="text-[10px] font-bold text-teal-600/70 dark:text-teal-400/70 uppercase">ONLİNE</div>
                    <div className="text-xs font-bold text-teal-700 dark:text-teal-300">Randevu İste</div>
                  </div>
                </div>

                <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex items-center gap-3 bg-white dark:bg-slate-800 cursor-pointer">
                  <MapPin size={20} className="text-rose-500" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">YOL TARİFİ</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white">Haritada Aç</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 h-full">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Puan & Değerlendirme</h3>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-black text-slate-900 dark:text-white">4.8</div>
                      <div>
                        <div className="flex text-amber-400 gap-0.5">
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <Star size={16} fill="currentColor" />
                          <StarHalf size={16} fill="currentColor" />
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">120 değerlendirme, 45 yorum</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Mesai Saatleri</h3>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-700 dark:text-slate-300">
                        <Clock size={16} className="text-teal-500" /> Hafta içi: 09:00 - 19:00
                      </div>
                      <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400">
                        <Clock size={16} className="text-slate-400" /> Hafta sonu: Kapalı
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Adres ve ulaşım</h3>
                    <p className="text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-0.5">Test Mahallesi, Test Caddesi No:1</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">Kadıköy / İstanbul</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Metro çıkışına 5 dakika yürüme mesafesinde. Klinik önünde ücretsiz otopark mevcut.</p>
                    <button className="w-full bg-teal-500 hover:bg-teal-600 transition-colors text-white rounded-lg py-1.5 text-[13px] font-bold flex items-center justify-center gap-2">
                      <MapPin size={16} /> Görüntüle
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Hakkımızda</h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      Kadıköy'de 2015'ten beri hizmet veren tam donanımlı kliniğiyiz. Dahiliye, cerrahi ve laboratuvar ile yanınızdayız.
                    </p>
                  </div>
                </div>
                
                <div className="flex-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-6">Ekibimiz</h3>
                  <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                    {/* Person 1 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-1.jpg" alt="Aylin Demir" className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Aylin Demir</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Uzm. Vet. Hek.<br/>Klinik Kurucusu</div>
                    </div>
                    {/* Person 2 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-2.jpg" alt="Mert Yılmaz" className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Mert Yılmaz</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Vet. Hek.<br/>Dahiliye Uzmanı</div>
                    </div>
                    {/* Person 3 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-3.jpg" alt="Ece Kaya" className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Ece Kaya</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Vet. Hek.<br/>Görüntüleme Uzm.</div>
                    </div>
                    {/* Person 4 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-4.jpg" alt="Can Yücel" className="w-full h-full object-cover object-[70%_center]" />
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Can Yücel</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Vet. Hek.<br/>Cerrahi Uzmanı</div>
                    </div>
                    {/* Person 5 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-5.jpg" alt="Zeynep Şen" className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Zeynep Şen</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Vet. Hek.<br/>Laboratuvar Uzm.</div>
                    </div>
                    {/* Person 6 */}
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                      <div className="w-[72px] h-[72px] rounded-full mb-3 overflow-hidden border-2 border-transparent group-hover:border-teal-500 transition-colors shadow-sm">
                        <img src="/team-6.jpg" alt="Ali Kaan" className="w-full h-full object-cover" />
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white text-[13px] leading-tight mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Ali Kaan</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Vet. Hek.<br/>Nöroloji Uzmanı</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Dijital Klinik Profili
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Kliniğinizi Veterito ekosistemindeki on binlerce bilinçli evcil hayvan sahibine profesyonel bir marka olarak sunun:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-blue-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <Stethoscope className="text-blue-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Uzmanlık alanlarınızı ve kadronuzu sergileyin.</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-rose-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <MapPin className="text-rose-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Tek tıkla yol tarifi ve randevu oluşturma imkanı.</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-purple-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <Award className="text-purple-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Doktor profil kartları ile yüksek standartları gösterin.</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Akıllı Ajanda Yönetimi */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Akıllı Ajanda Yönetimi
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Geleneksel ajandaların yarattığı karmaşaya son verin ve tüm hekimlerinizin programını tek ekrandan yönetin:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-blue-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <Calendar className="text-blue-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Sürükle-bırak takvimle tüm programı kolayca koordine edin.</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-teal-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <Grid className="text-teal-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">İşlemleri renk kodlarıyla kategorize edip akışı görselleştirin.</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-amber-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <Bell className="text-amber-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Otomatik hatırlatmalar ile "gelmeyen hasta" oranını indirin.</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 relative xl:min-w-[550px] mx-auto min-h-[480px]">
              <AnimatedBorder color="#10B981" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                 <div>
                   <h3 className="text-xl font-extrabold text-slate-900">Randevular</h3>
                   <p className="text-xs text-slate-500 font-medium">Kliniğinin talep, öneri ve kesin randevu akışı</p>
                 </div>
                 <div className="text-teal-600 cursor-pointer p-2 hover:bg-teal-50 rounded-full transition-colors"><List size={20} /></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <Calendar size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-slate-900 text-lg">24</div>
                  <div className="text-[10px] text-slate-500 font-medium">Bugün</div>
                </div>
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <Hourglass size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-slate-900 text-lg">8</div>
                  <div className="text-[10px] text-slate-500 font-medium">Talep</div>
                </div>
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <ArrowRightLeft size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-slate-900 text-lg">3</div>
                  <div className="text-[10px] text-slate-500 font-medium leading-tight">Yanıt<br/>bekliyor</div>
                </div>
                <div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <CheckCircle2 size={18} className="text-teal-600 mb-1" />
                  <div className="font-bold text-slate-900 text-lg">45</div>
                  <div className="text-[10px] text-slate-500 font-medium">Kesin</div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6 bg-slate-50 p-1.5 rounded-xl">
                <button className="flex-1 bg-teal-600 text-white rounded-lg py-1.5 text-xs font-bold shadow-sm">Aktif</button>
                <button className="flex-1 text-slate-500 hover:text-slate-700 py-1.5 text-xs font-bold transition-colors">Talepler</button>
                <button className="flex-1 text-slate-500 hover:text-slate-700 py-1.5 text-xs font-bold transition-colors">Yaklaşan</button>
                <button className="flex-1 text-slate-500 hover:text-slate-700 py-1.5 text-xs font-bold transition-colors">Geçmiş</button>
              </div>

              {/* Main Content: Calendar + Appointment Card */}
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Calendar */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <ChevronLeft size={18} className="text-slate-600 cursor-pointer" />
                    <span className="font-bold text-slate-900 text-sm">Eylül 2026</span>
                    <ChevronRight size={18} className="text-slate-600 cursor-pointer" />
                  </div>
                  
                  {/* Days of week */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
                      <div key={day} className="text-[10px] font-bold text-slate-400">{day}</div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm font-medium">
                    <div className="text-slate-300"></div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">1</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">2</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">3</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">4</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">5</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">6</div>
                    
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">7</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">8</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">9</div>
                    <div className="bg-teal-700 text-white py-1 rounded-full shadow-md font-bold">10</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">11</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">12</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">13</div>
                    
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">14</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">15</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">16</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">17</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">18</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">19</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">20</div>

                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">21</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">22</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">23</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">24</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">25</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">26</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">27</div>
                    
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">28</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">29</div>
                    <div className="text-slate-700 py-1 cursor-pointer hover:bg-slate-100 rounded-full transition-colors">30</div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="text-[11px] font-bold text-teal-600 cursor-pointer hover:underline">Gün filtresini kaldır</span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden lg:block w-px bg-slate-100 mx-1"></div>

                {/* Appointment Card */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="border border-slate-100 rounded-2xl p-4 shadow-sm relative bg-white">
                    <div className="absolute top-4 right-4 bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Onaylandı</div>
                    
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Genel muayene</h4>
                    <p className="text-[11px] text-slate-500 mb-4 font-medium">Procyon • Zeynep Yılmaz</p>
                    
                    <div className="bg-teal-50 rounded-lg p-2.5 flex items-center gap-2 mb-4">
                      <Clock size={14} className="text-teal-600" />
                      <span className="text-xs font-bold text-slate-700">10 Eyl 2026 15:00 • 30 dk</span>
                    </div>
                    
                    <button className="bg-teal-50 hover:bg-teal-100 transition-colors text-teal-700 text-xs font-bold py-2 px-4 rounded-xl w-fit">
                      Tamamlandı işaretle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Elektronik Hasta Dosyaları */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-0 relative h-auto lg:h-auto lg:min-h-[450px] flex flex-col lg:flex-row overflow-hidden">
              <AnimatedBorder color="#3B82F6" />
              {/* Sidebar */}
              <div className="w-full lg:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col items-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-4 overflow-hidden">
                   <img src="/leo-dog.jpg" alt="Leo" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-slate-900">Leo</h3>
                <p className="text-xs font-medium text-slate-500 mb-8 text-center">Sahibi: Semih Yıldırım</p>
                
                <div className="w-full space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">Irk / Cins</span>
                    <span className="font-bold text-slate-900 text-right leading-tight">Golden Retriever</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">Cinsiyet</span>
                    <span className="font-bold text-slate-900 text-right">Dişi</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">Yaş</span>
                    <span className="font-bold text-slate-900 text-right">3 Yaş (2021)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">Kilo</span>
                    <span className="font-bold text-slate-900 text-right">28.5 kg</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2 gap-2">
                    <span className="text-slate-500 whitespace-nowrap">Çip No</span>
                    <span className="font-bold text-slate-900 text-right text-[11px] xl:text-xs">900213000142981</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-2/3 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-slate-900">Tıbbi Geçmiş</h3>
                  <button className="text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1">
                    + İşlem Ekle
                  </button>
                </div>
                
                <div className="relative border-l-2 border-slate-100 ml-4 space-y-6 flex-1 overflow-y-auto pr-2">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"></div>
                    <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">12 Ekim 2024</div>
                    <div className="border border-slate-200 rounded-xl p-3 lg:p-4 bg-white shadow-sm">
                      <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2"><Activity size={16} className="text-emerald-500" /> Genel Muayene & İç-Dış Parazit</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Rutin kontrol yapıldı, değerler normal. Sonraki dozu takvime eklendi.</p>
                    </div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white"></div>
                    <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">15 Haziran 2024</div>
                    <div className="border border-slate-200 rounded-xl p-3 lg:p-4 bg-white shadow-sm">
                      <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2"><Activity size={16} className="text-indigo-500" /> Karma Aşı (Canine)</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Uygulandı: Nobivac Tricat Trio. Barkod e-karneye okutuldu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Elektronik Hasta <br/> Dosyaları
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Fiziksel karnelere ve eksik bilgi aktarımlarına veda edin, tüm verileri güvenli bulutta saklayın:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-teal-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <FileText className="text-teal-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Hastanın ırk, yaş, kilo ve alerji gibi kritik bilgilerine tek tıkla erişin.</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-emerald-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <Activity className="text-emerald-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Tüm aşıları ve operasyonları timeline üzerinde kronolojik görün.</span>
              </div>
              <div className="flex items-center gap-3 lg:p-4 bg-white border border-indigo-200 p-3 lg:p-4 rounded-2xl shadow-sm">
                <CheckCircle className="text-indigo-500 shrink-0" size={24} />
                <span className="font-bold text-slate-800">Hekimler arası bilgi akışı ile daha doğru teşhisler koyun.</span>
              </div>
            </div>
          </motion.div>
        </section>

        

      </div>

      {/* Footer Section - Outside of container but still part of scroll snap wrapper */}
      <section className="snap-always snap-start flex flex-col justify-end min-h-[40vh] bg-[var(--bg-secondary)] w-full">
        <Footer />
      </section>

    </div>
  );
}
