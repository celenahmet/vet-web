const fs = require('fs');
const path = require('path');

const filePath = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '<section className="h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-surface)]';
const endMarker = '{/* =========================================';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.log('Markers not found!');
  process.exit(1);
}

const newSection = `<section id="app-showcase" className="w-full snap-start relative z-10 bg-[var(--bg-main)] flex flex-col justify-center py-16 lg:py-24 overflow-hidden">
        
        {/* Zarif ve Minimal Vitrin Kapsayıcısı */}
        <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col z-10">
          
          {/* Koyu Renkli, Sınırları Belirgin Ada (Island) Tasarımı */}
          <div className="w-full bg-[#0B1511] dark:bg-[#070D0A] rounded-[2.5rem] lg:rounded-[3.5rem] border border-emerald-900/30 dark:border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] px-4 py-12 lg:p-16 relative overflow-hidden">
            
            {/* Arka Plan Dekoratif Işıklar (Kutu İçi) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            {/* Minimal Işık Yansıması */}
            <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
            
            {/* İçerik Başlığı ve Sekmeler */}
            <div className="text-center mb-10 lg:mb-14 relative z-20">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {t('feat_sec2_title1')} <span className="text-emerald-400 font-light">{t('feat_sec2_title2')}</span>
              </h2>
              
              {/* Tab Navigation */}
              <div className="inline-flex flex-wrap justify-center gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-sm">
                <button 
                  onClick={() => setActiveTab('owners')} 
                  className={\`px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 \${activeTab === 'owners' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/10'}\`}
                >
                  <Calendar size={18} />{t('feat_tab_owners')}
                </button>
                <button 
                  onClick={() => setActiveTab('pets')} 
                  className={\`px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 \${activeTab === 'pets' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/10'}\`}
                >
                  <QrCode size={18} />{t('feat_tab_pets')}
                </button>
                <button 
                  onClick={() => setActiveTab('community')} 
                  className={\`px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 \${activeTab === 'community' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/10'}\`}
                >
                  <Heart size={18} />{t('feat_tab_community')}
                </button>
              </div>
            </div>

            <div className="relative w-full">
              <AnimatePresence mode="wait">
                
                {/* TAB 1: OWNERS */}
                {activeTab === 'owners' && (
                  <motion.div key="owners" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
                    
                    {/* Column 1: Title, Description & Modern Features */}
                    <div className="w-full lg:w-[50%] flex flex-col space-y-5 text-center lg:text-left lg:pt-6 relative z-10">
                      <div>
                        <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3">{t('feat_own_badge')}</h2>
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight drop-shadow-md">{t('feat_own_title1')}<br/>{t('feat_own_title2')}</h3>
                        <p className="text-sm lg:text-base text-slate-300 font-medium leading-relaxed">{t('feat_own_desc')}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm transition-transform hover:bg-white/10">
                          <Bell size={22} className="text-emerald-400 mb-2" />
                          <h4 className="font-bold text-white text-base mb-1">{t('feat_own_f1_title')}</h4>
                          <p className="text-xs text-slate-400">{t('feat_own_f1_desc')}</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm transition-transform hover:bg-white/10">
                          <Users size={22} className="text-emerald-400 mb-2" />
                          <h4 className="font-bold text-white text-base mb-1">{t('feat_own_f2_title')}</h4>
                          <p className="text-xs text-slate-400">{t('feat_own_f2_desc')}</p>
                        </div>
                        <div className="sm:col-span-2 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm flex items-center gap-4 transition-transform hover:bg-white/10">
                          <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 shrink-0"><FileText size={18} /></div>
                          <div>
                            <h4 className="font-bold text-white text-base mb-1">{t('feat_own_f3_title')}</h4>
                            <p className="text-xs text-slate-400">{t('feat_own_f3_desc')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    {/* Column 2: Center UI */}
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
                      <div className="w-[320px] h-[640px] transform scale-[0.9] lg:scale-[1] origin-top bg-white dark:bg-[#08100C] rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col border-[4px] border-emerald-900/30">

                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <div>
                          <div className="text-slate-400 dark:text-slate-500 mb-1"><Menu size={20} className="text-emerald-900 dark:text-white" /></div>
                          <h2 className="text-2xl font-bold text-emerald-900 dark:text-white flex items-center gap-2 mt-4">
                            {t('feat_g_morning')} <span className="text-amber-500">✦</span>
                          </h2>
                          <p className="text-xs text-emerald-800/70 dark:text-[#678D7E]">{t('feat_own_ui_greet')}<br/>{t('feat_own_ui_greet2')}</p>
                        </div>
                        <div className="absolute top-14 right-6 flex items-center gap-4">
                          <Send size={20} className="text-emerald-900 dark:text-white" />
                          <div className="relative">
                            <Bell size={20} className="text-emerald-900 dark:text-white" />
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#E77873] text-white rounded-full text-[9px] font-bold flex items-center justify-center">25</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 flex-1 flex flex-col gap-4 overflow-y-auto pb-24 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="bg-slate-50 dark:bg-[#192823] rounded-[24px] p-4 flex gap-4 items-center shadow-sm relative border border-slate-100 dark:border-transparent">
                          <div className="w-24 h-24 rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 overflow-hidden relative">
                            <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Senorita 👑</h3>
                            <p className="text-xs text-slate-500 dark:text-[#789085] mb-2">{t('feat_g_cat_desc1')}<br/>Maine Coon</p>
                            <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1 border-t border-slate-200 dark:border-[#24352D] pt-2 mt-2">{t('feat_own_ui_profile')}<ArrowRight size={12}/>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center px-2 mb-3">
                            <h4 className="font-bold text-emerald-900 dark:text-white text-sm">{t('feat_own_ui_upcoming')}</h4>
                            <span className="text-[10px] text-emerald-600 dark:text-[#34B38A] font-bold">{t('feat_own_ui_seeall')}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-slate-50 dark:bg-[#192823] rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-slate-100 dark:border-transparent">
                              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-[#0E1B15] flex items-center justify-center text-emerald-600 dark:text-[#34B38A]"><ShieldCheck size={18} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-xs">{t('home_w1_title')}</h5>
                                <p className="text-[10px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_vax')}<br/>{t('feat_g_date1')}</p>
                              </div>
                              <div className="bg-emerald-100 dark:bg-[#133126] text-emerald-700 dark:text-[#34B38A] font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">3 {t('feat_g_days_left')}</div>
                            </div>
                            <div className="bg-slate-50 dark:bg-[#192823] rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-slate-100 dark:border-transparent">
                              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-[#0E1B15] flex items-center justify-center text-emerald-600 dark:text-[#34B38A]"><Activity size={18} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-xs">{t('feat_own_ui_para')}</h5>
                                <p className="text-[10px] text-slate-500 dark:text-[#789085]">{t('home_bento2_alert_desc')}<br/>{t('feat_g_date2')}</p>
                              </div>
                              <div className="bg-emerald-100 dark:bg-[#133126] text-emerald-700 dark:text-[#34B38A] font-bold text-[10px] px-3 py-1.5 rounded-full whitespace-nowrap">22 {t('feat_g_days_left')}</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center px-2 mb-2 mt-2">
                            <h4 className="font-bold text-emerald-900 dark:text-white text-sm">{t('feat_own_ui_health')}</h4>
                            <span className="text-[10px] text-emerald-600 dark:text-[#34B38A] font-bold">{t('feat_own_ui_thismonth')}</span>
                          </div>
                          <div className="bg-slate-50 dark:bg-[#192823] rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-transparent">
                            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-200 dark:divide-[#24352D]">
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-100 dark:bg-[#0E1B15] rounded-full flex items-center justify-center mb-1"><Activity size={12} className="text-emerald-600"/></div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">7.2 kg</div>
                                <div className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_weight')}</div>
                              </div>
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-100 dark:bg-[#0E1B15] rounded-full flex items-center justify-center mb-1"><Plus size={12} className="text-emerald-600"/></div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{t('feat_own_ui_good')}</div>
                                <div className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_status')}</div>
                              </div>
                              <div>
                                <div className="w-6 h-6 mx-auto bg-emerald-100 dark:bg-[#0E1B15] rounded-full flex items-center justify-center mb-1"><PawPrint size={12} className="text-emerald-600"/></div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{t('feat_own_ui_active')}</div>
                                <div className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_own_ui_activity')}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#08100C] border-t border-slate-100 dark:border-slate-800/50 flex justify-around items-center px-4 pb-2 z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex flex-col items-center text-emerald-700 dark:text-[#34B38A]"><Home size={22} className="mb-1"/><span className="text-[9px] font-bold">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px]">{t('blog_p1_cat')}</span></div>
                        <div className="w-14 h-14 bg-emerald-600 dark:bg-[#34B38A] rounded-full flex items-center justify-center text-white dark:text-[#08100C] -mt-8 border-4 border-slate-50 dark:border-[#08100C] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><Users size={22} className="mb-1"/><span className="text-[9px]">{t('blog_p3_category')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><User size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 lg:left-0 top-32 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-black/10 border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center"><Bell size={18} className="text-amber-600 dark:text-amber-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">{t('feat_g_reminder')}</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_ui_vax_time')}</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: PETS */}
              {activeTab === 'pets' && (
                <motion.div key="pets" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-5 text-center lg:text-left lg:pt-6 relative z-10">
                    <div>
                      <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-3">{t('feat_pet_badge')}</h2>
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">{t('feat_pet_title1')}<br/>{t('feat_pet_title2')}</h3>
                      <p className="text-sm lg:text-base text-slate-300 font-medium leading-relaxed">{t('feat_pet_desc')}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm transition-transform hover:bg-white/10">
                        <Activity size={22} className="text-sky-400 mb-2" />
                        <h4 className="font-bold text-white text-base mb-1">{t('feat_pet_f1_title')}</h4>
                        <p className="text-xs text-slate-400">{t('feat_pet_f1_desc')}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm transition-transform hover:bg-white/10">
                        <QrCode size={22} className="text-sky-400 mb-2" />
                        <h4 className="font-bold text-white text-base mb-1">{t('feat_pet_f2_title')}</h4>
                        <p className="text-xs text-slate-400">{t('feat_pet_f2_desc')}</p>
                      </div>
                      <div className="sm:col-span-2 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm flex items-center gap-4 transition-transform hover:bg-white/10">
                        <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 shrink-0"><ShieldCheck size={18} /></div>
                        <div>
                          <h4 className="font-bold text-white text-base mb-1">{t('feat_pet_f3_title')}</h4>
                          <p className="text-xs text-slate-400">{t('feat_pet_f3_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative">
                      <div className="w-[320px] h-[640px] transform scale-[0.9] lg:scale-[1] origin-top bg-slate-50 dark:bg-[#1a2317] rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col border-[4px] border-emerald-900/30 z-10">

                      <div className="flex justify-between items-center px-4 pt-10 pb-2">
                        <ArrowLeft size={24} className="text-slate-800 dark:text-slate-200" />
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Senorita</h3>
                        <MoreHorizontal size={24} className="text-slate-800 dark:text-slate-200" />
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pb-20 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="flex justify-center mt-4 mb-6 relative">
                          <div className="w-32 h-32 rounded-full border-4 border-amber-300 dark:border-amber-600 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden relative shadow-md">
                            <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 right-1/2 translate-x-12 w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                            <PawPrint size={14} />
                          </div>
                        </div>
                        <div className="flex justify-between px-2 mb-6">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><Activity size={24} className="text-emerald-600 dark:text-emerald-400" /></div>
                            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300">{t('feat_own_ui_health')}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><Syringe size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{t('feat_pet_ui_vax')}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><FileText size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{t('feat_pet_ui_records')}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white dark:bg-[#192823] rounded-full shadow-sm flex items-center justify-center border border-slate-100 dark:border-transparent"><Calendar size={24} className="text-slate-500" /></div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{t('feat_pet_ui_appts')}</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-transparent mb-4">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-slate-800 dark:text-emerald-100">{t('home_w3_title')}</h4>
                            <ShieldCheck size={24} className="text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="space-y-4">
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_species')}</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_g_species_cat')}</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_breed')}</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">Maine Coon</div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_age')}</div>
                              <div className="w-2/3">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7 {t('feat_g_years_old')}</div>
                                <div className="text-[10px] text-slate-400">({t('feat_g_date3')})</div>
                              </div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_own_ui_weight')}</div>
                              <div className="w-2/3">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">7.2 kg</div>
                                <div className="text-[10px] text-slate-400">{t('feat_g_last_update')}: 10 {t('feat_g_may')} 2024</div>
                              </div>
                            </div>
                            <div className="flex border-b border-slate-100 dark:border-transparent pb-3">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085]">{t('feat_pet_ui_neuter')}</div>
                              <div className="w-2/3 text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_pet_ui_neutered')}</div>
                            </div>
                            <div className="flex pb-4">
                              <div className="w-1/3 text-xs text-slate-500 dark:text-[#789085] mt-0.5">{t('feat_pet_ui_microchip')}</div>
                              <div className="w-2/3 text-sm font-bold text-slate-900 dark:text-slate-100">900215000123456</div>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 rounded-xl p-3 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
                                <div>
                                  <div className="text-sm font-bold text-emerald-800 dark:text-emerald-100">{t('feat_pet_ui_vax_uptodate')}</div>
                                  <div className="text-[9px] text-emerald-600/70 dark:text-emerald-300/70">{t('feat_g_last_update')}: 10 {t('feat_g_may')} 2024</div>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-emerald-600 dark:text-emerald-400" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-transparent">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-slate-800 dark:text-emerald-100">{t('feat_pet_ui_vetinfo')}</h4>
                            <div className="text-amber-500"><Users size={18}/></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-[10px] text-slate-500 dark:text-[#789085] mb-0.5">{t('feat_pet_ui_vet')}</div>
                              <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Dr. Ece Yılmaz</div>
                              <div className="text-[10px] text-slate-500 dark:text-[#789085] mt-0.5">{t('feat_sync_clinic')}</div>
                            </div>
                            <div className="w-10 h-10 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-300"><PhoneCall size={18} /></div>
                          </div>
                        </div>
                      </div>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800/50 flex justify-around items-center px-4 pb-2 z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-teal-600 dark:text-teal-400"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px] font-bold">{t('blog_p1_cat')}</span></div>
                        <div className="w-14 h-14 bg-teal-600 dark:bg-teal-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-slate-50 dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">{t('feat_pet_ui_appts')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><Users size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 lg:left-0 top-40 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-black/10 border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center"><QrCode size={18} className="text-teal-600 dark:text-teal-500"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">{t('feat_pet_ui_sysnotif')}</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_pet_ui_tagread')}</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {/* TAB 3: COMMUNITY */}
              {activeTab === 'community' && (
                <motion.div key="community" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.2}} className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
                  
                  {/* Column 1: Title, Description & Modern Features */}
                  <div className="w-full lg:w-[50%] flex flex-col space-y-5 text-center lg:text-left lg:pt-6 relative z-10">
                    <div>
                      <h2 className="text-xs font-bold tracking-widest text-rose-400 uppercase mb-3">{t('feat_com_badge')}</h2>
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">{t('feat_com_title1')}<br/>{t('feat_com_title2')}</h3>
                      <p className="text-sm lg:text-base text-slate-300 font-medium leading-relaxed">{t('feat_com_desc')}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm transition-transform hover:bg-white/10">
                        <ImageIcon size={22} className="text-rose-400 mb-2" />
                        <h4 className="font-bold text-white text-base mb-1">{t('feat_com_f1_title')}</h4>
                        <p className="text-xs text-slate-400">{t('feat_com_f1_desc')}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm transition-transform hover:bg-white/10">
                        <MessageCircle size={22} className="text-rose-400 mb-2" />
                        <h4 className="font-bold text-white text-base mb-1">{t('feat_com_f2_title')}</h4>
                        <p className="text-xs text-slate-400">{t('feat_com_f2_desc')}</p>
                      </div>
                      <div className="sm:col-span-2 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm flex items-center gap-4 transition-transform hover:bg-white/10">
                        <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400 shrink-0"><Heart size={18} /></div>
                        <div>
                          <h4 className="font-bold text-white text-base mb-1">{t('feat_com_f3_title')}</h4>
                          <p className="text-xs text-slate-400">{t('feat_com_f3_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Center UI */}
                  <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-4 lg:mt-0">
                      <div className="w-[320px] h-[640px] transform scale-[0.9] lg:scale-[1] origin-top bg-slate-50 dark:bg-[#1a2317] rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col border-[4px] border-emerald-900/30 z-10">

                      <div className="flex justify-between items-center px-6 pt-10 pb-2">
                        <div className="w-6"></div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{t('blog_p3_category')}</h3>
                        <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                          <Plus size={16} className="text-slate-600 dark:text-slate-300" />
                        </div>
                      </div>
                      <div className="flex justify-around items-center px-6 pt-2 pb-0">
                        <div className="pb-3 border-b-2 border-emerald-600 dark:border-emerald-400 px-2">
                          <span className="text-sm font-bold text-emerald-800 dark:text-emerald-100">{t('footer_explore')}</span>
                        </div>
                        <div className="pb-3 border-b-2 border-transparent px-2">
                          <span className="text-sm font-medium text-slate-500 dark:text-[#789085]">{t('feat_com_ui_following')}</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-4 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 shadow-sm border border-slate-100 dark:border-transparent">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><img src="/pet2.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{t('home_bento4_author')}</div>
                                <div className="text-[10px] text-slate-500">{t('home_bento4_time')}</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-400 dark:text-slate-500" />
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300 mb-3">{t('feat_com_ui_post1')}</p>
                          <div className="w-full h-40 bg-slate-200 dark:bg-slate-700 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                            <img src="/pet2.jpg" alt="Post" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1"><Heart size={18} className="text-orange-500 fill-orange-500" /><span className="text-xs font-bold text-orange-500">128</span></div>
                              <div className="flex items-center gap-1"><MessageCircle size={18} className="text-slate-500 dark:text-slate-400" /><span className="text-xs text-slate-500 dark:text-slate-400 font-medium">12</span></div>
                            </div>
                            <div className="flex gap-3"><Share2 size={18} className="text-slate-500 dark:text-slate-400" /><Bookmark size={18} className="text-slate-500 dark:text-slate-400" /></div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">{t('feat_com_ui_comments12')}</div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 shadow-sm border border-slate-100 dark:border-transparent">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><img src="/pet1.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Can & Pati</div>
                                <div className="text-[10px] text-slate-500">{t('feat_com_5_hours_ago')}</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-400 dark:text-slate-500" />
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300 mb-3">{t('feat_com_ui_post2')}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-1"><Heart size={18} className="text-orange-500 fill-orange-500" /><span className="text-xs font-bold text-orange-500">67</span></div>
                              <div className="flex items-center gap-1"><MessageCircle size={18} className="text-slate-500 dark:text-slate-400" /><span className="text-xs text-slate-500 dark:text-slate-400 font-medium">8</span></div>
                            </div>
                            <div className="flex gap-3"><Share2 size={18} className="text-slate-500 dark:text-slate-400" /></div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-[24px] p-4 shadow-sm border border-slate-100 dark:border-transparent">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center"><img src="/duman.jpg" alt="Profile" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Selin & Leo</div>
                                <div className="text-[10px] text-slate-500">{t('feat_com_1_day_ago')}</div>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-slate-400 dark:text-slate-500" />
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">{t('feat_com_ui_post3')}</p>
                          <div className="w-full h-40 bg-white dark:bg-transparent rounded-xl overflow-hidden mb-3"><img src="/pet3.jpg" alt="Post" className="w-full h-full object-cover" /></div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800/50 flex justify-around items-center px-4 pb-2 z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-slate-400 dark:text-[#516A5F]"><ShieldCheck size={22} className="mb-1"/><span className="text-[9px]">{t('blog_p1_cat')}</span></div>
                        <div className="w-14 h-14 bg-emerald-600 dark:bg-emerald-600 rounded-full flex items-center justify-center text-white -mt-8 border-4 border-slate-50 dark:border-[#1a2317] shadow-lg"><Plus size={24}/></div>
                        <div className="flex flex-col items-center text-emerald-700 dark:text-emerald-400"><Users size={22} className="mb-1"/><span className="text-[9px] font-bold">{t('blog_p3_category')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={22} className="mb-1"/><span className="text-[9px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 lg:left-0 top-32 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-black/10 border border-slate-100 dark:border-slate-700 z-20 hidden md:block">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center"><Heart size={18} className="text-rose-600 fill-rose-600"/></div>
                         <div className="pr-2">
                           <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">{t('feat_com_ui_newpost')}</div>
                           <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{t('feat_meet_leo')}</div>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
`;

content = content.substring(0, startIndex) + newSection + '\\n\\n' + content.substring(endIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced showcase section successfully.');

