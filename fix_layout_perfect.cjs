const fs = require('fs');
const filePath = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Move Title out of the Left Box and put it on the background.
// 2. Remove the "Sıfır Stres, Kesin Takip." title completely.
// 3. Put "Evcil Hayvan Sahipleri İçin" inside the Left Box.
// 4. Update the SVGs to remove stroke-slate-200.
// 5. Fix the Tabs position to match Image 2 (-top-6).
// 6. Remove the Notch.

// We will do this by rewriting the entire 'TAB 1: OWNERS' section and the Header of the Island Window!

// Let's match the entire Island Window inner content and replace it!
const startMarker = '<div className="w-full h-full bg-white dark:bg-[#060A08]';
const endMarker = '</AnimatePresence>';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.log('Markers not found!');
  process.exit(1);
}

// We will just rewrite from startIndex to endIndex + endMarker.length
const newContent = `
            {/* İç Kanvas / Ekran (Canvas) */}
            <div className="w-full h-full bg-white/40 dark:bg-[#08100C]/80 backdrop-blur-md rounded-[2.5rem] lg:rounded-[3.5rem] relative flex flex-col items-center justify-end z-10 shadow-[inset_0_20px_60px_rgba(0,0,0,0.05)] border border-white/50 dark:border-white/5 overflow-hidden">
              
              {/* Sekme Menüsü (Pill) - Yarı Dışarıda */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-xl flex gap-1 z-50">
                <button 
                  onClick={() => setActiveTab('owners')} 
                  className={\`px-6 py-2.5 rounded-full font-bold text-sm transition-all \${activeTab === 'owners' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}\`}
                >
                  {t('feat_tab_owners')}
                </button>
                <button 
                  onClick={() => setActiveTab('pets')} 
                  className={\`px-6 py-2.5 rounded-full font-bold text-sm transition-all \${activeTab === 'pets' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}\`}
                >
                  {t('feat_tab_pets')}
                </button>
                <button 
                  onClick={() => setActiveTab('community')} 
                  className={\`px-6 py-2.5 rounded-full font-bold text-sm transition-all \${activeTab === 'community' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}\`}
                >
                  {t('feat_tab_community')}
                </button>
              </div>

              {/* Dev Başlık - Arka planda sol üstte */}
              <div className="absolute top-16 left-16 z-20 max-w-[380px]">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-emerald-950 dark:text-emerald-50 leading-[1.1] tracking-tight">
                  Sıfır Stres,<br/>Kesintisiz Takip.
                </h2>
              </div>

              <div className="relative w-full flex-1 flex items-end justify-center">
                <AnimatePresence mode="wait">
                  
                  {/* TAB 1: OWNERS */}
                  {activeTab === 'owners' && (
                    <motion.div key="owners" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex items-end justify-between w-full h-full relative">
                      
                      {/* Sol Alt Kutu */}
                      <div className="w-[380px] bg-white dark:bg-[#080d0a] rounded-tr-[3rem] p-10 relative z-30 shadow-[10px_-10px_30px_rgba(0,0,0,0.03)] border-t border-r border-slate-100 dark:border-emerald-900/20">
                        {/* Sol Kavis SVG - NO STROKE */}
                        <svg className="absolute top-0 right-[-40px] w-[40px] h-[40px] pointer-events-none" viewBox="0 0 40 40">
                          <path d="M 0 0 L 40 0 A 40 40 0 0 0 0 40 Z" className="fill-white dark:fill-[#080d0a]" />
                        </svg>
                        
                        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Evcil Hayvan Sahipleri<br/>İçin</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                          Fiziksel aşı karnesini kaybetme veya rutin uygulamaları unutma derdine son verin. Veterito, patili dostunuzun yaşına ve türüne göre yapılması gerekenleri hesaplar ve tam zamanında size hatırlatır.
                        </p>
                      </div>

                      {/* Merkez Telefon Frame */}
                      <div className="relative w-[300px] h-[550px] bg-white dark:bg-slate-900 rounded-t-[3rem] border-t-[8px] border-l-[8px] border-r-[8px] border-white/50 dark:border-emerald-900/40 shadow-2xl z-40 flex flex-col overflow-hidden">
                        
                        {/* Sol İç Kavis */}
                        <svg className="absolute bottom-0 left-[-40px] w-[40px] h-[40px] pointer-events-none" viewBox="0 0 40 40">
                          <path d="M 40 40 L 40 0 A 40 40 0 0 0 0 40 Z" className="fill-white dark:fill-slate-900" />
                        </svg>
                        {/* Sağ İç Kavis */}
                        <svg className="absolute bottom-0 right-[-40px] w-[40px] h-[40px] pointer-events-none" viewBox="0 0 40 40">
                          <path d="M 0 40 L 0 0 A 40 40 0 0 1 40 40 Z" className="fill-white dark:fill-slate-900" />
                        </svg>

                        {/* Floating Notification */}
                        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-20 top-24 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-black/10 border border-slate-100 dark:border-slate-700 z-50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center"><Bell size={18} className="text-amber-600"/></div>
                            <div className="pr-2">
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">Hatırlatma</div>
                              <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Aşı Zamanı!</div>
                            </div>
                          </div>
                        </motion.div>

                        <div className="flex-1 w-full relative overflow-hidden bg-slate-50 dark:bg-[#0B1410] pt-12 px-5">
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50 leading-tight">Günaydın <span className="text-amber-500">✦</span><br/><span className="text-xs text-slate-500 dark:text-[#789085] font-medium">Bugün harika bir gün<br/>Senorita için.</span></h3>
                            <div className="flex gap-2">
                              <div className="w-8 h-8 rounded-full bg-white dark:bg-emerald-900/20 flex items-center justify-center shadow-sm"><Send size={14} className="text-emerald-600"/></div>
                              <div className="w-8 h-8 rounded-full bg-white dark:bg-emerald-900/20 flex items-center justify-center shadow-sm relative"><Bell size={14} className="text-emerald-600"/><span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span></div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-[#13231C] rounded-2xl p-3 mb-6 shadow-sm border border-slate-100 dark:border-emerald-900/20 flex items-center gap-3">
                            <div className="w-14 h-14 rounded-xl bg-slate-200 overflow-hidden"><img src="/pet1.jpg" alt="Pet" className="w-full h-full object-cover" /></div>
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1">Senorita 👑</div>
                              <div className="text-[10px] text-slate-500 dark:text-[#789085] mb-1">7 yaşında • Dişi<br/>Maine Coon</div>
                              <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 cursor-pointer">Profilini Gör <ArrowRight size={10}/></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Yaklaşanlar</h4>
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer">Tümünü Gör</span>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-[#13231C] rounded-2xl p-3 border border-slate-100 dark:border-emerald-900/20 flex items-center justify-between shadow-sm">
                              <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center"><CheckCircle2 size={18} className="text-emerald-500"/></div>
                                <div>
                                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Aşı Hatırlatması</div>
                                  <div className="text-[9px] text-slate-500 dark:text-[#789085]">Karma Aşı (FVRCP)<br/>24 Mayıs 2024</div>
                                </div>
                              </div>
                              <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold px-2 py-1 rounded-full">3 gün kaldı</div>
                            </div>
                            <div className="bg-white dark:bg-[#13231C] rounded-2xl p-3 border border-slate-100 dark:border-emerald-900/20 flex items-center justify-between shadow-sm">
                              <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center"><Activity size={18} className="text-emerald-500"/></div>
                                <div>
                                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Parazit<br/>Hatırlatması</div>
                                  <div className="text-[9px] text-slate-500 dark:text-[#789085]">İç Parazit Uygulaması<br/>12 Haziran 2024</div>
                                </div>
                              </div>
                              <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold px-2 py-1 rounded-full">22 gün kaldı</div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white dark:bg-[#13231C] border-t border-slate-100 dark:border-emerald-900/30 flex justify-around items-center px-4 z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                          <div className="flex flex-col items-center text-emerald-600"><Home size={20} className="mb-0.5"/><span className="text-[8px] font-bold">Ana Sayfa</span></div>
                          <div className="flex flex-col items-center text-slate-400 dark:text-[#789085]"><ShieldCheck size={20} className="mb-0.5"/><span className="text-[8px]">Sağlık</span></div>
                          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white -mt-6 border-[3px] border-white dark:border-[#13231C] shadow-lg"><Plus size={20}/></div>
                          <div className="flex flex-col items-center text-slate-400 dark:text-[#789085]"><Users size={20} className="mb-0.5"/><span className="text-[8px]">Topluluk</span></div>
                          <div className="flex flex-col items-center text-slate-400 dark:text-[#789085]"><User size={20} className="mb-0.5"/><span className="text-[8px]">Profil</span></div>
                        </div>
                      </div>

                      {/* Sağ Alt Kutu */}
                      <div className="w-[380px] bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-tl-[3rem] p-10 relative z-30 border-t border-l border-white/40 dark:border-emerald-900/20">
                        {/* Sağ Kavis SVG - NO STROKE */}
                        <svg className="absolute top-0 left-[-40px] w-[40px] h-[40px] pointer-events-none" viewBox="0 0 40 40">
                          <path d="M 40 0 L 0 0 A 40 40 0 0 1 40 40 Z" className="fill-white/60 dark:fill-black/40" />
                        </svg>

                        <div className="space-y-6">
                           <div className="flex items-start gap-3">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                             <div>
                               <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Akıllı Bildirimler</h4>
                               <p className="text-xs text-slate-600 dark:text-slate-400">Zamanı gelen aşı ve parazit uygulamaları için.</p>
                             </div>
                           </div>
                           <div className="flex items-start gap-3">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                             <div>
                               <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Çoklu Profil</h4>
                               <p className="text-xs text-slate-600 dark:text-slate-400">Birden fazla dostunuzu tek ekrandan yönetin.</p>
                             </div>
                           </div>
                           <div className="flex items-start gap-3">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                             <div>
                               <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Resmi PDF Dökümü</h4>
                               <p className="text-xs text-slate-600 dark:text-slate-400">Seyahatlerde zorunlu evraklar tek tıkla elinizde.</p>
                             </div>
                           </div>
                        </div>

                        {/* Circular Logo overlapping the corner */}
                        <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-[#0B0626] rounded-full flex items-center justify-center border-4 border-[var(--bg-main)]">
                           {/* Add Logo icon here, wait, the user's logo is a green V */}
                           <img src={logoNew} alt="Logo" className="w-8 h-8 object-contain" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
`;

content = content.substring(0, startIndex) + newContent + content.substring(endIndex + endMarker.length);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed the layout to PERFECTLY match Image 2!');
