import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Plus, ChevronRight, Search, CheckCircle2, Calendar, Hourglass, ArrowRightLeft, Clock } from 'lucide-react';



export default function PatientMgmtMockup() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-full h-full xl:absolute xl:inset-0">
      <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 p-6 xl:p-8 flex flex-col relative h-full">


        {/* Tab Navigation Menu */}
        <div className="flex justify-center items-center gap-2 pb-4 mb-2 overflow-x-auto scrollbar-hide border-b border-slate-100 dark:border-zinc-800 z-20 shrink-0">
          <button 
            onClick={() => setActiveTab('tab1')} 
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${activeTab === 'tab1' ? 'bg-[#0a6d57] text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-zinc-900 dark:text-slate-400 dark:hover:bg-zinc-800'}`}
          >
            Müşteri Yönetimi
          </button>
          <button 
            onClick={() => setActiveTab('tab2')} 
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${activeTab === 'tab2' ? 'bg-[#0a6d57] text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-zinc-900 dark:text-slate-400 dark:hover:bg-zinc-800'}`}
          >
            Dostlarımız
          </button>
          <button 
            onClick={() => setActiveTab('tab3')} 
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${activeTab === 'tab3' ? 'bg-[#0a6d57] text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-zinc-900 dark:text-slate-400 dark:hover:bg-zinc-800'}`}
          >
            Randevu Analizleri
          </button>
        </div>

        <div className="flex-1 pr-2 relative xl:min-h-0 min-h-[550px] z-10 pt-1">
          <AnimatePresence mode="wait">
            {activeTab === 'tab1' && (
              <motion.div key="tab1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                {/* Müşteri Ekle Form */}
                <div className="bg-slate-50 dark:bg-zinc-900 rounded-xl p-4 border border-slate-100 dark:border-zinc-800">
                  <h4 className="font-bold text-[13px] mb-3 text-[var(--text-main)]">Müşteri Ekle</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Müşteri Veterito kullanıyor mu?</label>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#e8f8f5] dark:bg-[#0a6d57]/20 text-[#0a6d57] dark:text-[#0a6d57] py-1.5 rounded-lg text-xs font-bold border border-[#0a6d57]/20 dark:border-[#0a6d57]/30">Evet</button>
                        <button className="flex-1 bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-zinc-700">Hayır</button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg flex items-center px-2.5 py-1.5">
                        <Phone size={13} className="text-slate-400 mr-2" />
                        <span className="text-[11px] text-slate-400">Telefon...</span>
                      </div>
                      <div className="flex-1 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg flex items-center px-2.5 py-1.5">
                        <Mail size={13} className="text-slate-400 mr-2" />
                        <span className="text-[11px] text-slate-400">E-posta...</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#0a6d57] hover:bg-[#085443] text-white font-bold text-[13px] py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                      <Plus size={15} /> Davet Gönder
                    </button>
                  </div>
                </div>

                {/* Deftere Yazılanlar */}
                <div>
                  <h4 className="font-bold text-[13px] mb-2.5 flex items-center justify-between text-[var(--text-main)]">Deftere yazılanlar <span className="text-[11px] font-medium text-slate-400 cursor-pointer hover:text-[#0a6d57]">Tümü</span></h4>
                  <div className="space-y-1.5">
                    {[
                      { name: 'Dr. Kemal Yılmaz', status: 'Kayıtsız', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
                      { name: 'Zeynep Arslan', status: 'Kayıtsız', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400' },
                      { name: 'Merve Çelik', status: 'Kayıtsız', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
                      { name: 'Burak Demir', status: 'Kayıtsız', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2.5 bg-white dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800 rounded-xl hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[13px] ${item.color}`}>
                            {item.name.charAt(0)}
                          </div>
                          <span className="text-[13px] font-bold text-[var(--text-main)]">{item.name}</span>
                        </div>
                        <span className="text-[9px] bg-[#f8fafc] dark:bg-zinc-800 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tab2' && (
              <motion.div key="tab2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="İsim veya çip no ile ara..." className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-[13px] focus:outline-none" disabled />
                </div>
                <div className="space-y-2">
                  {[
                    { pet: 'Tarçın', owner: 'Kemal Yılmaz', breed: 'Golden Retriever', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
                    { pet: 'Luna', owner: 'Zeynep Arslan', breed: 'British Shorthair', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
                    { pet: 'Paşa', owner: 'Merve Çelik', breed: 'Tekir', color: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300' },
                    { pet: 'Köpük', owner: 'Burak Demir', breed: 'Pomeranian', color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400' },
                    { pet: 'Limon', owner: 'Hale Akyurt', breed: 'Sultan Papağanı', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-zinc-950 border border-slate-100 dark:border-zinc-800 rounded-xl hover:shadow-md cursor-pointer transition-all hover:-translate-y-0.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base ${item.color}`}>
                          {item.pet.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-[14px] text-[var(--text-main)] mb-0.5">{item.pet} <span className="text-[10px] font-medium text-slate-400 ml-1.5">• {item.breed}</span></div>
                          <div className="text-[11px] font-medium text-slate-500">{item.owner}</div>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-zinc-900 flex items-center justify-center">
                        <ChevronRight size={14} className="text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'tab3' && (
              <motion.div key="tab3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-1.5 grid grid-cols-4 divide-x divide-slate-100 dark:divide-zinc-800 shadow-sm">
                  <div className="flex flex-col items-center justify-center p-1">
                    <Calendar size={15} className="text-[#0a6d57] mb-0.5" />
                    <div className="font-extrabold text-[15px] text-[var(--text-main)]">24</div>
                    <div className="text-[9px] font-medium text-slate-500">Bugün</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1">
                    <Hourglass size={15} className="text-[#0a6d57] mb-0.5" />
                    <div className="font-extrabold text-[15px] text-[var(--text-main)]">7</div>
                    <div className="text-[9px] font-medium text-slate-500">Talep</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1">
                    <ArrowRightLeft size={15} className="text-[#0a6d57] mb-0.5" />
                    <div className="font-extrabold text-[15px] text-[var(--text-main)]">4</div>
                    <div className="text-[9px] font-medium text-slate-500 text-center leading-tight">Yanıt<br/>bekliyor</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1">
                    <CheckCircle2 size={15} className="text-[#0a6d57] mb-0.5" />
                    <div className="font-extrabold text-[15px] text-[var(--text-main)]">19</div>
                    <div className="text-[9px] font-medium text-slate-500">Kesin</div>
                  </div>
                </div>

                <div className="flex justify-center gap-1.5 mb-1 overflow-x-auto scrollbar-hide pb-1">
                  <button className="bg-[#0a6d57] text-white px-3.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap shadow-sm">Aktif</button>
                  <button className="bg-[#e8f8f5] dark:bg-[#0a6d57]/10 text-slate-500 dark:text-slate-400 px-3.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap hover:bg-[#d5f0e9] transition-colors">Talepler</button>
                  <button className="bg-[#e8f8f5] dark:bg-[#0a6d57]/10 text-slate-500 dark:text-slate-400 px-3.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap hover:bg-[#d5f0e9] transition-colors">Yaklaşan</button>
                  <button className="bg-[#e8f8f5] dark:bg-[#0a6d57]/10 text-slate-500 dark:text-slate-400 px-3.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap hover:bg-[#d5f0e9] transition-colors">Geçmiş</button>
                </div>

                <div className="space-y-2">
                  {[
                    { title: 'Karma ve Kuduz Aşısı', subtitle: 'Tarçın · Kemal Yılmaz', date: 'Bugün', time: '14:30', duration: '15 dk', note: 'Klinik notu: hastanın genel durumu kontrol edildikten sonra yıllık aşıları yenilenecek.' },
                    { title: 'Ortopedi Kontrolü', subtitle: 'Luna · Zeynep Arslan', date: 'Bugün', time: '16:00', duration: '45 dk', note: 'Klinik notu: sağ arka bacakta topallama şikayeti var, röntgen için randevu aldı.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-3 shadow-sm group hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-bold text-[14px] text-[var(--text-main)] leading-tight">{item.title}</h4>
                          <div className="text-[10px] font-medium text-slate-500 mt-0.5">{item.subtitle}</div>
                        </div>
                        <span className="text-[9px] bg-[#e8f8f5] dark:bg-[#0a6d57]/20 text-[#0a6d57] dark:text-[#0a6d57] px-2 py-0.5 rounded font-bold tracking-wide">Onaylandı</span>
                      </div>
                      
                      <div className="bg-[#f0f9f6] dark:bg-zinc-900 rounded-lg px-2.5 py-1.5 mt-2 mb-2 flex items-center gap-1.5 text-[#0a6d57] dark:text-[#0a6d57]">
                        <Clock size={12} />
                        <span className="text-[11px] font-medium">{item.date} {item.time} · {item.duration}</span>
                      </div>
                      
                      <div className="text-[11px] text-[var(--text-main)] font-medium mb-2 leading-snug">
                        {item.note}
                      </div>
                      
                      <button className="text-[10px] font-bold text-[#0a6d57] dark:text-[#0a6d57] bg-[#e8f8f5] dark:bg-[#0a6d57]/10 px-3 py-1.5 rounded-lg transition-colors hover:bg-[#d5f0e9]">
                        Tamamlandı işaretle
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
