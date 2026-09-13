import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Scan, BookOpen, ChevronDown, ChevronUp, Plus, ArrowLeft } from 'lucide-react';

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

const LabInnovationMockup = () => {
  const [activeTab, setActiveTab] = useState('scan');

  return (
    <div className="w-full h-full xl:absolute xl:inset-0 text-sm">
      <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 p-6 xl:p-8 flex flex-col relative h-full overflow-hidden">

      {/* Top Header */}
      <div className="flex justify-between items-center mb-5 shrink-0">
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><ArrowLeft size={20} /></button>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-main)] leading-tight">Laboratuvar</h3>
            <p className="text-xs text-slate-500 font-medium">İstemden hekim incelemesine izlenebilir akış</p>
          </div>
        </div>
        <button className="bg-teal-700 text-white p-2 rounded-full shadow-sm hover:bg-teal-800 transition-colors"><Plus size={18}/></button>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 space-y-4 pb-4">
        {/* Disclaimer */}
        <div className="bg-orange-50/50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-xl p-3.5 relative flex gap-3">
          <ShieldCheck className="text-orange-500 shrink-0 mt-0.5" size={16} />
          <div>
            <h4 className="font-bold text-[13px] text-slate-800 dark:text-slate-200 mb-1">Kurumsal sorumluluk sınırı</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">Tıbbi içerik ve reçete kararları hekime; ileti izinlerinin kanıtı, gönderici kimliği ve sağlayıcı hesabı kliniğe aittir. Veterito yalnız yetkili akışı ve denetim izini sağlar; sağlayıcı doğrulaması olmadan hiçbir kayıt resmî veya gönderilmiş sayılmaz.</p>
          </div>
        </div>
        
        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-xl p-3.5">
          <p className="text-[11px] font-medium text-teal-800 dark:text-teal-300 leading-relaxed">Veterito'nun açıklanabilir kuralları yalnız veteriner ekibine karar desteği verir. Eksik veya hatalı olabilir; muayene, tanı ve klinik değerlendirmenin yerini tutmaz.</p>
        </div>

        {/* Devices Tab */}
        <div className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm transition-all">
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-900/50" onClick={() => setActiveTab(activeTab === 'devices' ? '' : 'devices')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0"><Cpu size={18} /></div>
              <div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">Laboratuvar cihazları</h4>
                <p className="text-[11px] text-slate-500">3 aktif cihaz · her sonuç cihaz kaynağıyla izlenir</p>
              </div>
            </div>
            {activeTab === 'devices' ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <AnimatePresence>
            {activeTab === 'devices' && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="p-4 border-t border-slate-100 dark:border-zinc-800 space-y-3">
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">Sisteme entegre 3 cihazınız var. Yeni bir cihaz bağlamak için profil ekleyin.</p>
                  <h5 className="font-bold text-[13px] text-[var(--text-main)]">Yeni cihaz profili</h5>
                  
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Ekranda görünen cihaz adı</label>
                    <input type="text" defaultValue="Klinik Ana Biyokimya" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Üretici</label>
                      <input type="text" defaultValue="Idexx" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Model</label>
                      <input type="text" defaultValue="Catalyst One" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Cihaz / gateway kimliği</label>
                    <input type="text" defaultValue="IVLS-TR-098234" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Seri numarası son 4</label>
                      <input type="text" defaultValue="8492" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Konum</label>
                      <input type="text" defaultValue="Arka Laboratuvar Odası" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Laboratuvar sistem türü</label>
                    <div className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 flex justify-between items-center text-[var(--text-main)]">
                      <span>Klinik içi analiz cihazı</span>
                      <ChevronDown size={14} className="text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-2 block">Desteklenen disiplinler</label>
                    <div className="flex flex-wrap gap-1.5">
                      {['Hematoloji', 'Biyokimya', 'İdrar', 'Kan gazı', 'Koagülasyon', 'Endokrinoloji', 'Mikrobiyoloji', 'Patoloji'].map((d, i) => (
                        <span key={i} className={`text-[11px] px-2.5 py-1 rounded-full ${i === 0 ? 'bg-teal-700 text-white font-bold' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300'}`}>{d}</span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-[13px] transition-colors shadow-sm mt-2">Cihazı kaydet</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scan Tab */}
        <div className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm transition-all">
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-900/50" onClick={() => setActiveTab(activeTab === 'scan' ? '' : 'scan')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0"><Scan size={18} /></div>
              <div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">Cihaz ekranından sonuç tara</h4>
                <p className="text-[11px] text-slate-500">Hastayı ve istemi seç; fotoğrafı cihaz üzerinde okuyup...</p>
              </div>
            </div>
            {activeTab === 'scan' ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <AnimatePresence>
            {activeTab === 'scan' && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="p-4 border-t border-slate-100 dark:border-zinc-800 space-y-4">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Hasta kaydı</label>
                    <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2.5 flex justify-between items-center text-[13px] bg-white dark:bg-zinc-950">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Leo <span className="font-medium text-slate-500 text-xs ml-1">(Golden Retriever, 3y)</span></span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">Laboratuvar istemi</label>
                    <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2.5 flex justify-between items-center text-[13px] bg-white dark:bg-zinc-950">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Rutin Biyokimya <span className="font-medium text-slate-500 text-xs ml-1">(Pre-op)</span></span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </div>
                  </div>
                  <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-[13px] transition-colors shadow-sm mt-2">Fotoğraf çek veya galeriden seç</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Library Tab */}
        <div className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm transition-all">
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-900/50" onClick={() => setActiveTab(activeTab === 'library' ? '' : 'library')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0"><BookOpen size={18} /></div>
              <div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">Kanıt kütüphanesi</h4>
                <p className="text-[11px] text-slate-500">Kilo, aşılama, yan etki ve laboratuvar yorumu kaynakları</p>
              </div>
            </div>
            {activeTab === 'library' ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <AnimatePresence>
            {activeTab === 'library' && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="p-4 border-t border-slate-100 dark:border-zinc-800 space-y-4">
                  
                  <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">Referans aralıkları yönteme özeldir</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">Sonucu veren laboratuvarın aralığını kullan; tür, popülasyon ve yöntem önemlidir.</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">Aralık içindeki bir değer hastalığı dışlamaz.</p>
                    <p className="text-[11px] text-teal-700 font-medium">Cornell University eClinPath · Kaynağı aç</p>
                  </div>

                  <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">Azotemiye yaklaşım</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">Hidrasyon, idrar bulguları ve klinik bağlamla prerenal, renal ve postrenal paternleri ayrıştır.</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">Üre/BUN ve kreatinin tek başına nedenin yerini göstermez.</p>
                    <p className="text-[11px] text-teal-700 font-medium">Cornell University eClinPath · Kaynağı aç</p>
                  </div>

                  <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">Eritron değerlendirmesi</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">RBC, hematokrit ve hemoglobini birlikte değerlendir; paterni retikülosit ve yayma bulgularıyla sınıflandır.</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">Artefaktlar ve hidrasyon ölçümleri değiştirebilir.</p>
                    <p className="text-[11px] text-teal-700 font-medium">Cornell University eClinPath · Kaynağı aç</p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">Aşılama ve istenmeyen etki bağlamı</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">Aşılama planı tür, yaş, maruziyet, ürün ve önceki reaksiyonlara göre bireyselleştirilir.</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">Şüpheli yan etkiler veteriner değerlendirmesi ve uygun bildirim gerektirir.</p>
                    <p className="text-[11px] text-teal-700 font-medium">World Small Animal Veterinary Association · Kaynağı aç</p>
                  </div>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="shrink-0 pt-3 border-t border-slate-100 dark:border-zinc-800 mt-auto">
        <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-full py-3 px-5 text-center text-xs font-semibold text-slate-500 border border-slate-100 dark:border-zinc-800">
          Henüz laboratuvar istemi yok.
        </div>
      </div>
    </div>
    </div>
  );
};

export default LabInnovationMockup;
