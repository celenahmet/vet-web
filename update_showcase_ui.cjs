const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

const targetStr = '<section id="app-showcase"';
const nextSectionMarker = '{/* =========================================\n            2. SAĞLIK GEÇMİŞİ (Bento Grid)';

const startIndex = content.indexOf('<section id="app-showcase"');
if (startIndex === -1) {
  console.error("Could not find start index");
  process.exit(1);
}
const endIndex = content.indexOf(nextSectionMarker, startIndex);
if (endIndex === -1) {
  console.error("Could not find end index");
  process.exit(1);
}

const beforeSection = content.substring(0, startIndex);
const afterSection = content.substring(endIndex);

const newSection = `<section 
        id="app-showcase" 
        className="w-full snap-start snap-always relative z-10 flex flex-col items-center justify-center overflow-hidden pt-24 lg:pt-32 pb-10 lg:pb-16 bg-slate-50 dark:bg-[#060A08]" 
        style={{ minHeight: '100dvh' }}
      >
        {/* ── ANA YUVARLAK KAPSAYICI (Island Window) ── */}
        <div 
          className="relative z-10 w-[96%] lg:max-w-[1150px] mx-auto h-[85vh] min-h-[600px] max-h-[750px] rounded-[3rem] lg:rounded-[4rem] border-[6px] border-white/80 dark:border-white/5 shadow-2xl overflow-hidden flex flex-col"
          style={{ backgroundImage: "url('/showcase-bg-final.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Pencere İçi İnce Gölge / Işık */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none"></div>

          <div className="relative z-20 flex flex-col h-full">
            {/* Üst Kısım: Menü ve Başlık */}
            <div className="pt-8 lg:pt-10 px-8 lg:px-12">
              {/* 1. ÜSTTE 3'LÜ TAB MENÜSÜ (Ortalanmış) */}
              <div className="flex justify-center mb-6 lg:mb-10">
                <div className="flex gap-2 bg-white/60 dark:bg-black/20 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/60 dark:border-white/10 shadow-sm">
                  <button
                    onClick={() => setActiveTab('owners')}
                    className={\`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 \${activeTab === 'owners'
                      ? 'bg-white dark:bg-emerald-600 text-emerald-900 dark:text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-white'}\`}
                  >
                    {t('feat_tab_owners')}
                  </button>
                  <button
                    onClick={() => setActiveTab('pets')}
                    className={\`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 \${activeTab === 'pets'
                      ? 'bg-white dark:bg-sky-600 text-sky-900 dark:text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-white'}\`}
                  >
                    {t('feat_tab_pets')}
                  </button>
                  <button
                    onClick={() => setActiveTab('community')}
                    className={\`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 \${activeTab === 'community'
                      ? 'bg-white dark:bg-rose-600 text-rose-900 dark:text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-rose-700 dark:hover:text-white'}\`}
                  >
                    {t('feat_tab_community')}
                  </button>
                </div>
              </div>

              {/* 2. ANA BAŞLIK (Sola Hizalı ve Siyah Renkli) */}
              <div className="w-full lg:w-[60%]">
                <AnimatePresence mode="wait">
                  {activeTab === 'owners' && (
                    <motion.h2 key="title-owners" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.3}} className="text-4xl lg:text-[3.5rem] font-black leading-tight tracking-tighter text-black dark:text-white">
                      {t('feat_own_title1')} {t('feat_own_title2')}
                    </motion.h2>
                  )}
                  {activeTab === 'pets' && (
                    <motion.h2 key="title-pets" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.3}} className="text-4xl lg:text-[3.5rem] font-black leading-tight tracking-tighter text-black dark:text-white">
                      {t('feat_pet_title1')} {t('feat_pet_title2')}
                    </motion.h2>
                  )}
                  {activeTab === 'community' && (
                    <motion.h2 key="title-community" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.3}} className="text-4xl lg:text-[3.5rem] font-black leading-tight tracking-tighter text-black dark:text-white">
                      {t('feat_com_title1')} {t('feat_com_title2')}
                    </motion.h2>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ORTA & ALT KISIMLAR KAPSAYICISI (Mockup ve Kutular) */}
            <div className="relative flex-1 w-full h-full">
              
              {/* 3. TELEFON MOCKUP (Tam Merkezde Kaydırılabilir) */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 flex justify-center items-end h-full">
                <AnimatePresence mode="wait">
                  
                  {activeTab === 'owners' && (
                    <motion.div key="mockup-owners" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.4}} className="origin-bottom scale-[0.80] lg:scale-[0.90] translate-y-4 relative">
                      
                      {/* Floating Toast (Aşı Zamanı) */}
                      <div className="absolute -left-[140px] top-32 z-50 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 pointer-events-none w-44">
                        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0"><Bell size={18} /></div>
                        <div className="pr-2">
                          <div className="text-[9px] text-slate-500 font-medium">Hatırlatma</div>
                          <div className="text-sm font-black text-slate-900">Aşı Zamanı!</div>
                        </div>
                      </div>

                      <div className="w-[320px] h-[640px] bg-white dark:bg-[#08100C] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-emerald-900/40">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 dark:bg-emerald-900/40 rounded-b-3xl w-40 mx-auto z-30"></div>
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-5 pt-12 pb-4 bg-white z-20 relative">
                          <MoreHorizontal size={22} className="text-emerald-900" />
                          <div className="flex items-center gap-4">
                            <Send size={20} className="text-emerald-900" />
                            <div className="relative">
                              <Bell size={20} className="text-emerald-900" />
                              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center border border-white">25</span>
                            </div>
                          </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-24 bg-white relative">
                          <h2 className="text-3xl font-black text-emerald-900 flex items-center gap-2 mb-1">
                            {t('feat_g_morning')} <span className="text-amber-500">✦</span>
                          </h2>
                          <p className="text-xs text-emerald-800/60 mb-6 font-medium leading-relaxed">Bugün harika bir gün<br/>Senorita için.</p>
                          
                          <div className="border border-slate-100 rounded-[24px] p-2 flex gap-4 items-center mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="w-[84px] h-[84px] rounded-[18px] overflow-hidden shrink-0">
                              <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 py-1">
                              <h3 className="font-bold text-slate-900 text-base mb-1">Senorita 👑</h3>
                              <p className="text-[11px] text-slate-500 font-medium mb-3">7 yaşında • Dişi<br/>Maine Coon</p>
                              <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">Profilini Gör <ArrowRight size={12}/></div>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mb-4 px-1">
                            <h4 className="font-bold text-emerald-900 text-[15px]">{t('feat_own_ui_upcoming')}</h4>
                            <span className="text-[11px] text-emerald-700 font-bold">{t('feat_own_ui_seeall')}</span>
                          </div>
                          <div className="space-y-3 mb-6">
                            <div className="border border-slate-100 rounded-[20px] p-4 flex gap-3 shadow-[0_4px_20px_rgb(0,0,0,0.02)] items-center">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><ShieldCheck size={20} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 text-xs mb-0.5">{t('home_w1_title')}</h5>
                                <p className="text-[10px] text-slate-500">Karma Aşı (FVRCP)<br/>24 Mayıs 2024</p>
                              </div>
                              <div className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">3 gün kaldı</div>
                            </div>
                            <div className="border border-slate-100 rounded-[20px] p-4 flex gap-3 shadow-[0_4px_20px_rgb(0,0,0,0.02)] items-center">
                              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Activity size={20} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 text-xs mb-0.5">{t('feat_own_ui_para')}</h5>
                                <p className="text-[10px] text-slate-500">İç Parazit Uygulaması<br/>12 Haziran 2024</p>
                              </div>
                              <div className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">22 gün kaldı</div>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mb-4 px-1">
                            <h4 className="font-bold text-emerald-900 text-[15px]">Sağlık Özeti</h4>
                            <span className="text-[11px] text-emerald-700 font-bold">Bu aya ait</span>
                          </div>
                          <div className="border border-slate-100 rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] mb-10">
                            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100">
                              <div className="flex flex-col items-center">
                                <Activity size={18} className="text-emerald-500 mb-2" />
                                <div className="font-black text-slate-900 text-[15px] mb-0.5">7.2 kg</div>
                                <div className="text-[9px] text-slate-400 font-medium">Kilo</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <Plus size={18} className="text-emerald-500 mb-2" />
                                <div className="font-black text-slate-900 text-[15px] mb-0.5">İyi</div>
                                <div className="text-[9px] text-slate-400 font-medium">Genel Durum</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <PawPrint size={18} className="text-emerald-500 mb-2" />
                                <div className="font-black text-slate-900 text-[15px] mb-0.5">Aktif</div>
                                <div className="text-[9px] text-slate-400 font-medium">Yaşam Seviyesi</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white flex justify-around items-center px-4 pb-1 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-slate-100">
                          <div className="flex flex-col items-center text-emerald-700"><Home size={20} className="mb-1"/><span className="text-[9px] font-bold">Ana Sayfa</span></div>
                          <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={20} className="mb-1"/><span className="text-[9px] font-medium">Sağlık</span></div>
                          <div className="w-[56px] h-[56px] bg-emerald-800 rounded-full flex items-center justify-center text-white -mt-8 border-[4px] border-white shadow-lg relative z-30"><Plus size={24}/></div>
                          <div className="flex flex-col items-center text-slate-400"><Users size={20} className="mb-1"/><span className="text-[9px] font-medium">Topluluk</span></div>
                          <div className="flex flex-col items-center text-slate-400"><User size={20} className="mb-1"/><span className="text-[9px] font-medium">Profil</span></div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'pets' && (
                    <motion.div key="mockup-pets" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.4}} className="origin-bottom scale-[0.80] lg:scale-[0.90] translate-y-4 relative">
                      
                      {/* Floating Toast (Dijital Küpe) */}
                      <div className="absolute -left-[180px] top-[140px] z-50 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 pointer-events-none w-56">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0"><QrCode size={18} /></div>
                        <div className="pr-2">
                          <div className="text-[9px] text-slate-500 font-medium">Sistem Bildirimi</div>
                          <div className="text-[13px] font-black text-slate-900">Dijital Küpe Okundu</div>
                        </div>
                      </div>

                      <div className="w-[320px] h-[640px] bg-white dark:bg-[#1a2317] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-sky-900/40">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 dark:bg-sky-900/40 rounded-b-3xl w-40 mx-auto z-30"></div>
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-5 pt-12 pb-4 bg-white z-20 relative">
                          <ArrowLeft size={22} className="text-slate-800" />
                          <h3 className="font-black text-lg text-slate-900">Senorita</h3>
                          <MoreHorizontal size={22} className="text-slate-800" />
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-24 bg-white relative">
                          <div className="flex justify-center mt-2 mb-6">
                            <div className="relative">
                              <div className="w-[120px] h-[120px] rounded-full border-[3px] border-amber-400 bg-slate-200 overflow-hidden shadow-lg p-1">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                  <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                                <PawPrint size={14} />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between px-2 mb-8">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 shadow-[0_4px_15px_rgb(0,0,0,0.03)] flex items-center justify-center text-emerald-700"><Activity size={24} /></div>
                              <span className="text-[10px] font-bold text-emerald-800">Sağlık Özeti</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500"><div className="w-5 h-5 border-2 border-slate-400 rounded-full" /></div>
                              <span className="text-[10px] font-medium text-slate-600">Aşılar</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500"><FileText size={22} /></div>
                              <span className="text-[10px] font-medium text-slate-600">Kayıtlar</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-[52px] h-[52px] rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500"><Calendar size={22} /></div>
                              <span className="text-[10px] font-medium text-slate-600">Randevular</span>
                            </div>
                          </div>

                          <div className="border border-slate-100 rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] mb-6">
                            <div className="flex justify-between items-center mb-6">
                              <h4 className="text-[17px] font-black text-emerald-900">Dijital Sağlık Kartı</h4>
                              <ShieldCheck size={22} className="text-emerald-700" />
                            </div>
                            <div className="space-y-4">
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">Tür</div>
                                <div className="w-2/3 text-[12px] font-bold text-slate-900">Kedi</div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">Irk</div>
                                <div className="w-2/3 text-[12px] font-bold text-slate-900">Maine Coon</div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">Yaş</div>
                                <div className="w-2/3">
                                  <div className="text-[12px] font-bold text-slate-900">7 yaşında</div>
                                  <div className="text-[9px] text-slate-400">(12 Mayıs 2017)</div>
                                </div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">Kilo</div>
                                <div className="w-2/3">
                                  <div className="text-[12px] font-bold text-slate-900">7.2 kg</div>
                                  <div className="text-[9px] text-slate-400">Son güncelleme: 10 Mayıs 2024</div>
                                </div>
                              </div>
                              <div className="flex border-b border-slate-100 pb-3">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium">Kısırlaştırma</div>
                                <div className="w-2/3 text-[12px] font-bold text-slate-900">Kısırlaştırıldı</div>
                              </div>
                              <div className="flex pb-2">
                                <div className="w-1/3 text-[11px] text-slate-500 font-medium mt-1">Mikroçip No</div>
                                <div className="w-2/3 text-[14px] font-black text-slate-900 tracking-wide">900215000123456</div>
                              </div>
                            </div>
                            
                            <div className="mt-4 bg-emerald-50 rounded-xl p-4 flex justify-between items-center border border-emerald-100">
                              <div className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-emerald-700" />
                                <div>
                                  <div className="text-sm font-bold text-emerald-900">Aşıları güncel</div>
                                  <div className="text-[9px] text-emerald-700/60">Son güncelleme: 10 Mayıs 2024</div>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-emerald-700" />
                            </div>
                          </div>

                          <div className="border border-slate-100 rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] mb-10">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="text-[15px] font-bold text-emerald-900">Veteriner Bilgileri</h4>
                              <Users size={20} className="text-amber-500" />
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium mb-0.5">Vet. Hekim</div>
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-[15px] font-black text-slate-900 mb-1">Dr. Ece Yılmaz</div>
                                <div className="text-[11px] text-slate-500">Patili Dostlar Kliniği</div>
                              </div>
                              <div className="w-10 h-10 rounded-[12px] border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
                                <Phone size={18} />
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white flex justify-around items-center px-4 pb-1 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-slate-100">
                          <div className="flex flex-col items-center text-slate-400"><Home size={20} className="mb-1"/><span className="text-[9px] font-medium">Ana Sayfa</span></div>
                          <div className="flex flex-col items-center text-emerald-700"><ShieldCheck size={20} className="mb-1"/><span className="text-[9px] font-bold">Sağlık</span></div>
                          <div className="w-[56px] h-[56px] bg-emerald-800 rounded-full flex items-center justify-center text-white -mt-8 border-[4px] border-white shadow-lg relative z-30"><Plus size={24}/></div>
                          <div className="flex flex-col items-center text-slate-400"><Calendar size={20} className="mb-1"/><span className="text-[9px] font-medium">Randevular</span></div>
                          <div className="flex flex-col items-center text-slate-400"><User size={20} className="mb-1"/><span className="text-[9px] font-medium">Profil</span></div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'community' && (
                    <motion.div key="mockup-community" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.4}} className="origin-bottom scale-[0.80] lg:scale-[0.90] translate-y-4">
                      {/* Community UI placeholder, you can keep the previous or leave a basic empty shell */}
                      <div className="w-[320px] h-[640px] bg-slate-50 dark:bg-[#1a2317] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-rose-900/40">
                         <div className="absolute top-0 inset-x-0 h-6 bg-slate-300 dark:bg-rose-900/40 rounded-b-3xl w-40 mx-auto z-20"></div>
                         <div className="flex justify-center items-center h-full text-slate-500">Community Tab (Yapım Aşamasında)</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            {/* 4. SOL ALT: Açıklama Kutusu */}
            <div className="absolute bottom-[-6px] left-[-6px] z-20 hidden md:flex flex-col w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`left-\${activeTab}\`}
                  initial={{opacity:0,x:-20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:-20}} 
                  transition={{duration:0.3}}
                  className="bg-white dark:bg-[#080d0a] p-8 pb-10 shadow-2xl rounded-tl-[40px] rounded-br-[40px] rounded-bl-[4rem] rounded-tr-[100px] border-r border-t border-slate-200/50 dark:border-white/10 pointer-events-auto"
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-10">
                    {activeTab === 'owners' ? t('feat_own_title1') : activeTab === 'pets' ? t('feat_pet_title1') : t('feat_com_title1')}
                  </h3>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {activeTab === 'owners' ? t('feat_own_desc') : activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 5. SAĞ ALT: Özellikler ve Logo */}
            <div className="absolute bottom-[-6px] right-[-6px] z-20 hidden md:flex flex-col w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`right-\${activeTab}\`}
                  initial={{opacity:0,x:20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:20}} 
                  transition={{duration:0.3}}
                  className="bg-white/40 dark:bg-black/40 backdrop-blur-3xl p-8 pb-12 pl-12 shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[4rem] rounded-tl-[100px] border-l border-t border-white/60 dark:border-white/10 flex flex-col pointer-events-auto relative"
                >
                  <ul className="space-y-4 mb-8 pt-4 flex-1 pl-4">
                    {(activeTab === 'owners' 
                      ? [t('feat_s1_li1'), t('feat_s1_li2'), t('feat_s1_li3')] 
                      : activeTab === 'pets' 
                        ? [t('feat_s2_li1'), t('feat_s2_li2'), t('feat_s2_li3')]
                        : [t('feat_s3_li1'), t('feat_s3_li2'), t('feat_s3_li3')]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={\`mt-1.5 w-2 h-2 rounded-full flex items-center justify-center shrink-0 \${activeTab === 'owners' ? 'bg-emerald-500' : activeTab === 'pets' ? 'bg-sky-500' : 'bg-rose-500'}\`}></div>
                        <span className="text-[13px] font-bold text-slate-800 dark:text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Logonun koyu/şık hali */}
                  <div className="absolute -left-10 bottom-6 w-20 h-20 rounded-full bg-[#180f3d] dark:bg-[#180f3d] shadow-2xl flex items-center justify-center border-[6px] border-transparent">
                    <img src="/logo-acik.svg" alt="Veterito" className="w-10 h-10 object-contain brightness-0 invert" onError={(e) => { (e.currentTarget).style.display='none'; }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBİL İÇİN ALT KUTULAR */}
            <div className="md:hidden mt-[500px] flex flex-col gap-4 z-20 w-full relative pb-4 px-4">
              <AnimatePresence mode="wait">
                 <motion.div 
                  key={\`mobile-\${activeTab}\`}
                  initial={{opacity:0,y:20}} 
                  animate={{opacity:1,y:0}} 
                  exit={{opacity:0,y:20}} 
                  transition={{duration:0.3}}
                  className="flex flex-col gap-4 pointer-events-auto"
                >
                  <div className="bg-white dark:bg-[#111A15] p-6 rounded-3xl border border-slate-200/50 dark:border-white/5 shadow-xl w-full">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {activeTab === 'owners' ? t('feat_own_title1') : activeTab === 'pets' ? t('feat_pet_title1') : t('feat_com_title1')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {activeTab === 'owners' ? t('feat_own_desc') : activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                    </p>
                  </div>
                  <div className="bg-white/70 dark:bg-black/50 backdrop-blur-xl p-6 rounded-3xl border border-white/60 dark:border-white/10 shadow-xl w-full flex justify-between items-end">
                    <ul className="space-y-3">
                      {(activeTab === 'owners' 
                        ? [t('feat_s1_li1'), t('feat_s1_li2'), t('feat_s1_li3')] 
                        : activeTab === 'pets' 
                          ? [t('feat_s2_li1'), t('feat_s2_li2'), t('feat_s2_li3')]
                          : [t('feat_s3_li1'), t('feat_s3_li2'), t('feat_s3_li3')]
                      ).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className={\`mt-1.5 w-2 h-2 rounded-full flex items-center justify-center shrink-0 \${activeTab === 'owners' ? 'bg-emerald-500' : activeTab === 'pets' ? 'bg-sky-500' : 'bg-rose-500'}\`}></div>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            </div>
          </div>
        </div>
      </section>`;

fs.writeFileSync(featuresFile, beforeSection + newSection + afterSection, 'utf8');
console.log('Successfully replaced showcase section with the new scrollable UI & Left Header.');
