
import { motion } from 'framer-motion';
import { 
  Building2, Calendar, Archive, Megaphone, Stethoscope, MapPin, 
  Award, ArrowRight, Grid, Heart, FileText, Activity, 
  CheckCircle, Bell, LayoutGrid, 
  Phone, Search, MessageCircle, ChevronRight
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
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 space-y-8">
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

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} className="flex-1 w-full relative">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex flex-col relative h-auto lg:h-auto lg:min-h-[450px]">
              <AnimatedBorder color="#8B5CF6" />
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="font-bold text-slate-900">Veterito.</span>
                </div>
                <div className="flex items-center gap-3 lg:p-4 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 flex-1 mx-2 lg:mx-8">
                  <Search size={16} className="text-slate-400" />
                  <span className="text-slate-400 text-sm hidden sm:inline">Hasta veya no ara...</span>
                </div>
                <div className="flex items-center gap-3 lg:p-4">
                  <Bell size={20} className="text-slate-600" />
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">DP</div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Sidebar */}
                <div className="w-full lg:w-48 space-y-2 lg:space-y-4">
                  <div className="flex items-center gap-3 bg-teal-50 text-teal-700 px-4 py-3 rounded-xl font-medium text-sm">
                    <LayoutGrid size={18} /> Panonuz
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 px-4 py-3 rounded-xl font-medium text-sm">
                    <Calendar size={18} /> Randevular
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 px-4 py-3 rounded-xl font-medium text-sm">
                    <Heart size={18} /> Hastalar
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Bugünkü Özet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3 lg:p-4 mb-6">
                    <div className="border border-slate-200 rounded-xl p-3 lg:p-4">
                      <div className="text-sm text-slate-500 font-medium mb-2">Toplam Randevu</div>
                      <div className="text-3xl font-bold text-slate-900">12</div>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-3 lg:p-4">
                      <div className="text-sm text-slate-500 font-medium mb-2">Yeni Hasta</div>
                      <div className="text-3xl font-bold text-teal-500">3</div>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-3 lg:p-4">
                      <div className="text-sm text-slate-500 font-medium mb-2">Aşı Bekleyen</div>
                      <div className="text-3xl font-bold text-amber-500">8</div>
                    </div>
                  </div>
                  
                  <div className="border border-slate-200 rounded-xl p-3 lg:p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-slate-900">Yaklaşan Randevular</h4>
                      <span className="text-teal-600 text-sm font-medium">Tümünü Gör</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <div className="flex items-center gap-3 lg:p-4">
                        <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-bold">14:00</div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">Tarçın (Golden Retr.)</div>
                          <div className="text-slate-500 text-xs">Karma Aşı</div>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-400" />
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
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 relative h-auto lg:h-auto lg:min-h-[450px]">
              <AnimatedBorder color="#F59E0B" />
              <div className="flex gap-3 lg:p-4 mb-8">
                <div className="flex-1 border border-slate-200 rounded-xl p-3 lg:p-4 flex items-center gap-3">
                  <Phone size={20} className="text-teal-500" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">TELEFON</div>
                    <div className="text-sm font-bold text-slate-800">0216 111 22 33</div>
                  </div>
                </div>
                <div className="flex-1 border border-slate-200 rounded-xl p-3 lg:p-4 flex items-center gap-3">
                  <MessageCircle size={20} className="text-green-500" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">WHATSAPP</div>
                    <div className="text-sm font-bold text-slate-800">+90 532 111</div>
                  </div>
                </div>
                <div className="flex-1 border border-slate-200 rounded-xl p-3 lg:p-4 flex items-center gap-3">
                  <MapPin size={20} className="text-emerald-500" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">YOL TARİFİ</div>
                    <div className="text-sm font-bold text-slate-800">Haritada aç</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 h-full">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Adres ve ulaşım</h3>
                    <p className="text-sm font-bold text-slate-800">Test Mahallesi, Test Caddesi No:1</p>
                    <p className="text-xs text-slate-500 mb-2">Kadıköy / İstanbul</p>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">Metro çıkışına 5 dakika yürüme mesafesinde. Klinik önünde ücretsiz otopark mevcut.</p>
                    <button className="w-full bg-teal-500 text-white rounded-lg py-2 text-sm font-bold flex items-center justify-center gap-2">
                      <MapPin size={16} /> Görüntüle
                    </button>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Hakkımızda</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kadıköy'de 2015'ten beri hizmet veren tam donanımlı kliniğiyiz. Dahiliye, cerrahi ve laboratuvar ile yanınızdayız.
                    </p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex gap-3 lg:p-4 border-b border-slate-200 mb-4 pb-2">
                    <div className="font-bold text-teal-600 text-sm border-b-2 border-teal-600 pb-2 -mb-[10px]">Çalışanlar <span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-xs ml-1">3</span></div>
                    <div className="font-bold text-slate-400 text-sm">Fotoğraflar <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs ml-1">6</span></div>
                  </div>
                  <div className="flex gap-3 lg:p-4">
                    <div className="w-full rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                      <div className="h-20 bg-teal-800 flex items-center justify-center">
                        <div className="w-12 h-12 bg-teal-200 rounded-full mt-8 border-4 border-white"></div>
                      </div>
                      <div className="p-3 pt-6 text-center flex-1">
                        <div className="text-[10px] font-bold text-amber-500 mb-1 uppercase">KURUCU HEKİM</div>
                        <div className="font-bold text-slate-900 text-sm">Aylin Demir</div>
                      </div>
                    </div>
                    <div className="w-full rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                      <div className="h-20 bg-teal-800 flex items-center justify-center">
                        <div className="w-12 h-12 bg-orange-200 rounded-full mt-8 border-4 border-white"></div>
                      </div>
                      <div className="p-3 pt-6 text-center flex-1">
                        <div className="text-[10px] font-bold text-amber-500 mb-1 uppercase">DAHİLİYE UZMANI</div>
                        <div className="font-bold text-slate-900 text-sm">Mert Yılmaz</div>
                      </div>
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
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 relative h-auto lg:h-auto lg:min-h-[450px]">
              <AnimatedBorder color="#10B981" />
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Ekim 2024</h3>
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <div className="bg-teal-500 text-white px-4 py-1.5 rounded text-sm font-bold shadow-sm">Hafta</div>
                  <div className="text-slate-500 px-4 py-1.5 rounded text-sm font-bold">Gün</div>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[320px] overflow-x-auto"><div className="min-w-[500px] lg:min-w-0 flex flex-col h-full">
                <div className="flex border-b border-slate-200 bg-slate-50">
                  <div className="w-16 border-r border-slate-200"></div>
                  <div className="flex-1 border-r border-slate-200 p-2 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">PZT</div>
                    <div className="font-bold text-slate-900">14</div>
                  </div>
                  <div className="flex-1 border-r border-slate-200 p-2 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">SAL</div>
                    <div className="font-bold text-slate-900">15</div>
                  </div>
                  <div className="flex-1 p-2 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">ÇAR</div>
                    <div className="font-bold text-slate-900">16</div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                  <div className="w-16 border-r border-slate-200 flex flex-col">
                    <div className="flex-1 border-b border-slate-100 p-2 text-xs text-slate-400 font-medium text-right">09:00</div>
                    <div className="flex-1 border-b border-slate-100 p-2 text-xs text-slate-400 font-medium text-right">10:00</div>
                    <div className="flex-1 border-b border-slate-100 p-2 text-xs text-slate-400 font-medium text-right">11:00</div>
                    <div className="flex-1 p-2 text-xs text-slate-400 font-medium text-right">12:00</div>
                  </div>
                  <div className="flex-1 flex">
                    <div className="flex-1 border-r border-slate-100 relative">
                       {/* Event 1 */}
                       <div className="absolute top-[25%] left-2 right-2 bg-indigo-50 border-l-4 border-indigo-500 rounded p-2 h-[20%]">
                         <div className="text-[10px] font-bold text-indigo-800">09:30 - Muayene</div>
                         <div className="text-xs font-bold text-indigo-900">Max (Terrier)</div>
                       </div>
                    </div>
                    <div className="flex-1 border-r border-slate-100 relative">
                       {/* Event 2 */}
                       <div className="absolute top-[50%] left-2 right-2 bg-rose-50 border-l-4 border-rose-500 rounded p-2 h-[25%]">
                         <div className="text-[10px] font-bold text-rose-800">10:15 - Operasyon</div>
                         <div className="text-xs font-bold text-rose-900">Luna (Kedi)</div>
                         <div className="text-[10px] text-rose-600 mt-1">Dt. Aylin D.</div>
                       </div>
                    </div>
                    <div className="flex-1 relative">
                       {/* Event 3 */}
                       <div className="absolute top-[25%] left-2 right-2 bg-emerald-50 border-l-4 border-emerald-500 rounded p-2 h-[20%]">
                         <div className="text-[10px] font-bold text-emerald-800">09:30 - Aşı (Karma)</div>
                         <div className="text-xs font-bold text-emerald-900">Paşa (Köpek)</div>
                       </div>
                    </div>
                  </div>
                </div>
              </div></div>
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
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-4">
                   <div className="text-amber-500"><Activity size={32} /></div>
                </div>
                <h3 className="font-bold text-xl text-slate-900">Leo</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">BRITISH SHORTHAIR</p>
                
                <div className="w-full space-y-4 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Yaş</span>
                    <span className="font-bold text-slate-900">3 Yaş (2021)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Kilo</span>
                    <span className="font-bold text-slate-900">4.5 kg</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Çip No</span>
                    <span className="font-bold text-slate-900 truncate ml-2">900213000...</span>
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
                      <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2"><Activity size={16} className="text-indigo-500" /> Karma Aşı (Feline)</h4>
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

        {/* Section 5: Neden Veterito'ya Katılmalısınız? */}
        <section className="min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0 flex flex-col justify-center py-24">
          <div className="text-center max-w-2xl lg:max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Neden Veterito'ya Katılmalısınız?</h2>
            <p className="text-lg text-slate-600">Sadece bir yönetim paneli değil, aynı zamanda hasta sadakatini artıran ve iş akışınızı hızlandıran uçtan uca bir çözüm sunuyoruz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} className="bg-white border-2 border-indigo-100 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-indigo-300 transition-colors">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <LayoutGrid size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Tek Ekran Kolaylığı</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-indigo-500 shrink-0" size={18} /> Karmaşık yazılımlara son
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-indigo-500 shrink-0" size={18} /> Modern, hızlı tepki veren arayüz
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-indigo-500 shrink-0" size={18} /> Yoğunluğu saniyeler içinde yönetin
                </li>
              </ul>
              <LayoutGrid size={120} className="absolute -bottom-10 -right-10 text-indigo-50 opacity-50 group-hover:scale-110 transition-transform" />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: 0.1}} className="bg-white border-2 border-rose-100 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-rose-300 transition-colors">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Müşteri Sadakati</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-rose-500 shrink-0" size={18} /> Otomatik aşı bildirimleri
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-rose-500 shrink-0" size={18} /> Kritik operasyon hatırlatmaları
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-rose-500 shrink-0" size={18} /> Güçlü güven bağı inşası
                </li>
              </ul>
              <Heart size={120} className="absolute -bottom-10 -right-10 text-rose-50 opacity-50 group-hover:scale-110 transition-transform" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once:true}} transition={{delay: 0.2}} className="bg-white border-2 border-sky-100 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-sky-300 transition-colors">
              <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Güvenilir Altyapı</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-sky-500 shrink-0" size={18} /> Tamamen bulut tabanlı sunucular
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-sky-500 shrink-0" size={18} /> Veri kaybı ve çökme riski yok
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle className="text-sky-500 shrink-0" size={18} /> Tüm cihazlardan 7/24 erişim
                </li>
              </ul>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-[20px] border-sky-50 opacity-50 group-hover:scale-110 transition-transform"></div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* Footer Section - Outside of container but still part of scroll snap wrapper */}
      <section className="snap-always snap-start flex flex-col justify-end min-h-[40vh] bg-[var(--bg-secondary)] w-full">
        <Footer />
      </section>

    </div>
  );
}
