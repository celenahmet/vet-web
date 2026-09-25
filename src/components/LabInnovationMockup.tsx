import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Cpu, Scan, BookOpen, ChevronDown, ChevronUp, Plus, ArrowLeft } from 'lucide-react';



const LabInnovationMockup = () => {
  const [activeTab, setActiveTab] = useState('scan');
  const { t } = useTranslation();

  return (
    <div className="w-full h-full xl:absolute xl:inset-0 text-sm">
      <div className="bg-white dark:bg-zinc-950 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-zinc-800 p-6 xl:p-8 flex flex-col relative h-full overflow-hidden">

      {/* Top Header */}
      <div className="flex justify-between items-center mb-5 shrink-0">
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><ArrowLeft size={20} /></button>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-main)] leading-tight">{t('mockup_lab_title', 'Laboratuvar')}</h3>
            <p className="text-xs text-slate-500 font-medium">{t('mockup_lab_subtitle', 'İstemden hekim incelemesine izlenebilir akış')}</p>
          </div>
        </div>
        <button className="bg-teal-700 text-white p-2 rounded-full shadow-sm hover:bg-teal-800 transition-colors"><Plus size={18}/></button>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 space-y-4 pb-4">
        {/* Disclaimer */}
        <div className="bg-orange-50/50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-xl p-3.5 relative flex gap-3">
          <ShieldCheck className="text-orange-500 shrink-0 mt-0.5" size={16} />
          <div>
            <h4 className="font-bold text-[13px] text-slate-800 dark:text-slate-200 mb-1">{t('mockup_lab_disclaimer_title', 'Kurumsal sorumluluk sınırı')}</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">{t('mockup_lab_disclaimer_desc', 'Tıbbi içerik ve reçete kararları hekime; ileti izinlerinin kanıtı, gönderici kimliği ve sağlayıcı hesabı kliniğe aittir. Veterito yalnız yetkili akışı ve denetim izini sağlar; sağlayıcı doğrulaması olmadan hiçbir kayıt resmî veya gönderilmiş sayılmaz.')}</p>
          </div>
        </div>
        
        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-xl p-3.5">
          <p className="text-[11px] font-medium text-teal-800 dark:text-teal-300 leading-relaxed">{t('mockup_lab_warning', 'Veterito\'nun açıklanabilir kuralları yalnız veteriner ekibine karar desteği verir. Eksik veya hatalı olabilir; muayene, tanı ve klinik değerlendirmenin yerini tutmaz.')}</p>
        </div>

        {/* Devices Tab */}
        <div className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm transition-all">
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-900/50" onClick={() => setActiveTab(activeTab === 'devices' ? '' : 'devices')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0"><Cpu size={18} /></div>
              <div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">{t('mockup_lab_devices', 'Laboratuvar cihazları')}</h4>
                <p className="text-[11px] text-slate-500">{t('mockup_lab_devices_desc', '3 aktif cihaz · her sonuç cihaz kaynağıyla izlenir')}</p>
              </div>
            </div>
            {activeTab === 'devices' ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <AnimatePresence>
            {activeTab === 'devices' && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="p-4 border-t border-slate-100 dark:border-zinc-800 space-y-3">
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">{t('mockup_lab_devices_info', 'Sisteme entegre 3 cihazınız var. Yeni bir cihaz bağlamak için profil ekleyin.')}</p>
                  <h5 className="font-bold text-[13px] text-[var(--text-main)]">{t('mockup_lab_new_device', 'Yeni cihaz profili')}</h5>
                  
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_device_name', 'Ekranda görünen cihaz adı')}</label>
                    <input type="text" defaultValue={t('mockup_lab_device_name_val', 'Klinik Ana Biyokimya')} className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_manufacturer', 'Üretici')}</label>
                      <input type="text" defaultValue="Idexx" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_model', 'Model')}</label>
                      <input type="text" defaultValue="Catalyst One" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_device_id', 'Cihaz / gateway kimliği')}</label>
                    <input type="text" defaultValue="IVLS-TR-098234" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_serial_last_4', 'Seri numarası son 4')}</label>
                      <input type="text" defaultValue="8492" className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_location', 'Konum')}</label>
                      <input type="text" defaultValue={t('mockup_lab_back_lab', 'Arka Laboratuvar Odası')} className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 outline-none font-medium text-slate-800 dark:text-slate-200" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_system_type', 'Laboratuvar sistem türü')}</label>
                    <div className="w-full border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-xs bg-slate-50 dark:bg-zinc-900 flex justify-between items-center text-[var(--text-main)]">
                      <span>{t('mockup_lab_inclinic_analyzer', 'Klinik içi analiz cihazı')}</span>
                      <ChevronDown size={14} className="text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-2 block">{t('mockup_lab_supported_disciplines', 'Desteklenen disiplinler')}</label>
                    <div className="flex flex-wrap gap-1.5">
                      {[t('mockup_lab_disc_1', 'Hematoloji'), t('mockup_lab_disc_2', 'Biyokimya'), t('mockup_lab_disc_3', 'İdrar'), t('mockup_lab_disc_4', 'Kan gazı'), t('mockup_lab_disc_5', 'Koagülasyon'), t('mockup_lab_disc_6', 'Endokrinoloji'), t('mockup_lab_disc_7', 'Mikrobiyoloji'), t('mockup_lab_disc_8', 'Patoloji')].map((d, i) => (
                        <span key={i} className={`text-[11px] px-2.5 py-1 rounded-full ${i === 0 ? 'bg-teal-700 text-white font-bold' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300'}`}>{d}</span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-[13px] transition-colors shadow-sm mt-2">{t('mockup_lab_save_device', 'Cihazı kaydet')}</button>
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
                <h4 className="font-bold text-sm text-[var(--text-main)]">{t('mockup_lab_scan', 'Cihaz ekranından sonuç tara')}</h4>
                <p className="text-[11px] text-slate-500">{t('mockup_lab_scan_desc', 'Hastayı ve istemi seç; fotoğrafı cihaz üzerinde okuyup...')}</p>
              </div>
            </div>
            {activeTab === 'scan' ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <AnimatePresence>
            {activeTab === 'scan' && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="p-4 border-t border-slate-100 dark:border-zinc-800 space-y-4">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_patient_record', 'Hasta kaydı')}</label>
                    <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2.5 flex justify-between items-center text-[13px] bg-white dark:bg-zinc-950">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Leo <span className="font-medium text-slate-500 text-xs ml-1">(Golden Retriever, 3y)</span></span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block">{t('mockup_lab_lab_request', 'Laboratuvar istemi')}</label>
                    <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2.5 flex justify-between items-center text-[13px] bg-white dark:bg-zinc-950">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{t('mockup_lab_routine_biochem', 'Rutin Biyokimya')} <span className="font-medium text-slate-500 text-xs ml-1">(Pre-op)</span></span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </div>
                  </div>
                  <button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 rounded-xl text-[13px] transition-colors shadow-sm mt-2">{t('mockup_lab_take_photo', 'Fotoğraf çek veya galeriden seç')}</button>
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
                <h4 className="font-bold text-sm text-[var(--text-main)]">{t('mockup_lab_library', 'Kanıt kütüphanesi')}</h4>
                <p className="text-[11px] text-slate-500">{t('mockup_lab_library_desc', 'Kilo, aşılama, yan etki ve laboratuvar yorumu kaynakları')}</p>
              </div>
            </div>
            {activeTab === 'library' ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
          </div>
          <AnimatePresence>
            {activeTab === 'library' && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="p-4 border-t border-slate-100 dark:border-zinc-800 space-y-4">
                  
                  <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">{t('mockup_lab_lib1_title', 'Referans aralıkları yönteme özeldir')}</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">{t('mockup_lab_lib1_desc1', 'Sonucu veren laboratuvarın aralığını kullan; tür, popülasyon ve yöntem önemlidir.')}</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">{t('mockup_lab_lib1_desc2', 'Aralık içindeki bir değer hastalığı dışlamaz.')}</p>
                    <p className="text-[11px] text-teal-700 font-medium">Cornell University eClinPath · {t('mockup_lab_open_source', 'Kaynağı aç')}</p>
                  </div>

                  <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">{t('mockup_lab_lib2_title', 'Azotemiye yaklaşım')}</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">{t('mockup_lab_lib2_desc1', 'Hidrasyon, idrar bulguları ve klinik bağlamla prerenal, renal ve postrenal paternleri ayrıştır.')}</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">{t('mockup_lab_lib2_desc2', 'Üre/BUN ve kreatinin tek başına nedenin yerini göstermez.')}</p>
                    <p className="text-[11px] text-teal-700 font-medium">Cornell University eClinPath · {t('mockup_lab_open_source', 'Kaynağı aç')}</p>
                  </div>

                  <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">{t('mockup_lab_lib3_title', 'Eritron değerlendirmesi')}</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">{t('mockup_lab_lib3_desc1', 'RBC, hematokrit ve hemoglobini birlikte değerlendir; paterni retikülosit ve yayma bulgularıyla sınıflandır.')}</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">{t('mockup_lab_lib3_desc2', 'Artefaktlar ve hidrasyon ölçümleri değiştirebilir.')}</p>
                    <p className="text-[11px] text-teal-700 font-medium">Cornell University eClinPath · {t('mockup_lab_open_source', 'Kaynağı aç')}</p>
                  </div>

                  <div>
                    <h5 className="font-bold text-[13px] text-[var(--text-main)] mb-1.5">{t('mockup_lab_lib4_title', 'Aşılama ve istenmeyen etki bağlamı')}</h5>
                    <p className="text-[11px] text-slate-500 mb-1.5 leading-relaxed">{t('mockup_lab_lib4_desc1', 'Aşılama planı tür, yaş, maruziyet, ürün ve önceki reaksiyonlara göre bireyselleştirilir.')}</p>
                    <p className="text-[11px] font-semibold text-amber-600 mb-1.5">{t('mockup_lab_lib4_desc2', 'Şüpheli yan etkiler veteriner değerlendirmesi ve uygun bildirim gerektirir.')}</p>
                    <p className="text-[11px] text-teal-700 font-medium">World Small Animal Veterinary Association · {t('mockup_lab_open_source', 'Kaynağı aç')}</p>
                  </div>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="shrink-0 pt-3 border-t border-slate-100 dark:border-zinc-800 mt-auto">
        <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-full py-3 px-5 text-center text-xs font-semibold text-slate-500 border border-slate-100 dark:border-zinc-800">
          {t('mockup_lab_no_requests', 'Henüz laboratuvar istemi yok.')}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LabInnovationMockup;
