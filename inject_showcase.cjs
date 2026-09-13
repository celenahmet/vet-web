const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

const targetStr = '<section id="app-showcase"';
const nextSectionMarker = '{/* =========================================\n            2. SAĞLIK GEÇMİŞİ (Bento Grid)';

const startIndex = content.indexOf(targetStr);
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

const newSection = `      <section id="app-showcase" className="w-full relative z-10 flex flex-col items-center justify-center overflow-hidden py-10 lg:py-16 bg-slate-50 dark:bg-[#060A08]" style={{minHeight: '100dvh'}}>

        {/* ── ARKA PLAN: BLOB DEGRADELERİ (Ada'yı öne çıkarmak için) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-emerald-100/50 dark:bg-emerald-900/10 blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-sky-100/40 dark:bg-teal-900/10 blur-[100px] translate-y-1/3" />
        </div>

        {/* ── ANA YUVARLAK KAPSAYICI (Island Window) ── */}
        <div className="relative z-10 w-[96%] lg:max-w-[1300px] mx-auto h-[90vh] min-h-[750px] max-h-[850px] rounded-[3rem] lg:rounded-[4rem] bg-white/70 dark:bg-[#0d1611]/60 backdrop-blur-3xl border-4 border-white/80 dark:border-white/5 shadow-2xl overflow-hidden flex flex-col pt-8 lg:pt-10">
          
          {/* Pencere İçi İnce Gölge / Işık */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none"></div>

          {/* 1. ÜSTTE 3'LÜ TAB MENÜSÜ */}
          <div className="relative z-20 flex justify-center mb-6 lg:mb-8">
            <div className="flex gap-2 bg-white/60 dark:bg-black/20 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/60 dark:border-white/10 shadow-sm">
              <button
                onClick={() => setActiveTab('owners')}
                className={\`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 \${activeTab === 'owners'
                  ? 'bg-white dark:bg-emerald-600 text-emerald-900 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-white'}\`}
              >
                {t('feat_tab_owners')}
              </button>
              <button
                onClick={() => setActiveTab('pets')}
                className={\`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 \${activeTab === 'pets'
                  ? 'bg-white dark:bg-sky-600 text-sky-900 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-white'}\`}
              >
                {t('feat_tab_pets')}
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={\`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 \${activeTab === 'community'
                  ? 'bg-white dark:bg-rose-600 text-rose-900 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-rose-700 dark:hover:text-white'}\`}
              >
                {t('feat_tab_community')}
              </button>
            </div>
          </div>

          {/* 2. DEVASA ANA BAŞLIK (Tepe Merkez) */}
          <div className="relative z-20 text-center px-4 mb-4 lg:mb-0">
            <AnimatePresence mode="wait">
              {activeTab === 'owners' && (
                <motion.h2 key="title-owners" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.3}} className="text-4xl lg:text-[4.5rem] font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
                  {t('feat_own_title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">{t('feat_own_title2')}</span>
                </motion.h2>
              )}
              {activeTab === 'pets' && (
                <motion.h2 key="title-pets" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.3}} className="text-4xl lg:text-[4.5rem] font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
                  {t('feat_pet_title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-300">{t('feat_pet_title2')}</span>
                </motion.h2>
              )}
              {activeTab === 'community' && (
                <motion.h2 key="title-community" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.3}} className="text-4xl lg:text-[4.5rem] font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
                  {t('feat_com_title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500 dark:from-rose-400 dark:to-pink-300">{t('feat_com_title2')}</span>
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          {/* ORTA & ALT KISIMLAR KAPSAYICISI (Mockup ve Kutular) */}
          <div className="relative flex-1 flex flex-col justify-end w-full h-full">
            
            {/* 3. TELEFON MOCKUP (Tam Merkezde, parlamasız, yazının altına girecek şekilde ölçekli) */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none flex justify-center items-end h-full pt-8">
              <AnimatePresence mode="wait">
                {activeTab === 'owners' && (
                  <motion.div key="mockup-owners" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.4}} className="pointer-events-auto origin-bottom scale-[0.85] lg:scale-[0.95]">
                    <div className="w-[320px] h-[640px] bg-white dark:bg-[#08100C] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-emerald-900/40">
                      <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 dark:bg-emerald-900/40 rounded-b-3xl w-40 mx-auto z-20"></div>
                      <div className="flex justify-between items-center px-6 pt-12 pb-2">
                        <div>
                          <h2 className="text-xl font-bold text-emerald-900 dark:text-white flex items-center gap-2 mt-4">
                            {t('feat_g_morning')} <span className="text-amber-500">✦</span>
                          </h2>
                          <p className="text-xs text-emerald-800/70 dark:text-[#678D7E]">{t('feat_own_ui_greet')}</p>
                        </div>
                        <div className="absolute top-16 right-6 flex items-center gap-3">
                          <Send size={18} className="text-emerald-900 dark:text-white" />
                          <div className="relative">
                            <Bell size={18} className="text-emerald-900 dark:text-white" />
                            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[8px] font-bold flex items-center justify-center">3</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 flex-1 flex flex-col gap-3 overflow-hidden pb-20 mt-2">
                        <div className="bg-slate-50 dark:bg-[#192823] rounded-[20px] p-3 flex gap-3 items-center shadow-sm border border-slate-100 dark:border-transparent">
                          <div className="w-16 h-16 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                            <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">Senorita 👑</h3>
                            <p className="text-[10px] text-slate-500 dark:text-[#789085] mb-1">{t('feat_g_cat_desc1')} • Maine Coon</p>
                            <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">{t('feat_own_ui_profile')} <ArrowRight size={10}/></div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between items-center px-1 mb-2">
                            <h4 className="font-bold text-slate-800 dark:text-white text-xs">{t('feat_own_ui_upcoming')}</h4>
                            <span className="text-[10px] text-emerald-600 dark:text-[#34B38A] font-bold">{t('feat_own_ui_seeall')}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-slate-50 dark:bg-[#192823] rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm border border-slate-100 dark:border-transparent">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-[#0E1B15] flex items-center justify-center text-emerald-600 dark:text-[#34B38A] shrink-0"><ShieldCheck size={14} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-[10px]">{t('home_w1_title')}</h5>
                                <p className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_g_date1')}</p>
                              </div>
                              <div className="bg-emerald-100 dark:bg-[#133126] text-emerald-700 dark:text-[#34B38A] font-bold text-[9px] px-2 py-1 rounded-full whitespace-nowrap">3 {t('feat_g_days_left')}</div>
                            </div>
                            <div className="bg-slate-50 dark:bg-[#192823] rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm border border-slate-100 dark:border-transparent">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-[#0E1B15] flex items-center justify-center text-emerald-600 dark:text-[#34B38A] shrink-0"><Activity size={14} /></div>
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 dark:text-white text-[10px]">{t('feat_own_ui_para')}</h5>
                                <p className="text-[9px] text-slate-500 dark:text-[#789085]">{t('feat_g_date2')}</p>
                              </div>
                              <div className="bg-emerald-100 dark:bg-[#133126] text-emerald-700 dark:text-[#34B38A] font-bold text-[9px] px-2 py-1 rounded-full whitespace-nowrap">22 {t('feat_g_days_left')}</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-[#192823] rounded-xl p-3 shadow-sm border border-slate-100 dark:border-transparent mt-2">
                          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-200 dark:divide-[#24352D]">
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white text-sm">7.2 kg</div>
                              <div className="text-[9px] text-slate-500">{t('feat_own_ui_weight')}</div>
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white text-sm">{t('feat_own_ui_good')}</div>
                              <div className="text-[9px] text-slate-500">{t('feat_own_ui_status')}</div>
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 dark:text-white text-sm">{t('feat_own_ui_active')}</div>
                              <div className="text-[9px] text-slate-500">{t('feat_own_ui_activity')}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-16 bg-white dark:bg-[#08100C] border-t border-slate-100 dark:border-slate-800/50 flex justify-around items-center px-4 pb-1 z-10">
                        <div className="flex flex-col items-center text-emerald-700 dark:text-[#34B38A]"><Home size={18} className="mb-0.5"/><span className="text-[8px] font-bold">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={18} className="mb-0.5"/><span className="text-[8px]">{t('blog_p1_cat')}</span></div>
                        <div className="w-11 h-11 bg-emerald-600 dark:bg-[#34B38A] rounded-full flex items-center justify-center text-white dark:text-[#08100C] -mt-6 border-[3px] border-slate-50 dark:border-[#08100C] shadow-lg"><Plus size={20}/></div>
                        <div className="flex flex-col items-center text-slate-400"><Users size={18} className="mb-0.5"/><span className="text-[8px]">{t('blog_p3_category')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><User size={18} className="mb-0.5"/><span className="text-[8px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {activeTab === 'pets' && (
                  <motion.div key="mockup-pets" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.4}} className="pointer-events-auto origin-bottom scale-[0.85] lg:scale-[0.95]">
                    <div className="w-[320px] h-[640px] bg-slate-50 dark:bg-[#1a2317] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-sky-900/40">
                      <div className="absolute top-0 inset-x-0 h-6 bg-slate-300 dark:bg-sky-900/40 rounded-b-3xl w-40 mx-auto z-20"></div>
                      <div className="flex justify-between items-center px-5 pt-12 pb-2">
                        <ArrowLeft size={20} className="text-slate-700 dark:text-slate-200" />
                        <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">Senorita</h3>
                        <MoreHorizontal size={20} className="text-slate-700 dark:text-slate-200" />
                      </div>
                      <div className="flex-1 overflow-hidden px-4 pb-20 flex flex-col gap-3">
                        <div className="flex justify-center mt-2 mb-3 relative">
                          <div className="w-24 h-24 rounded-full border-4 border-amber-300 bg-slate-200 overflow-hidden shadow-md">
                            <img src="/pet1.jpg" alt="Senorita" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="bg-white dark:bg-[#192823] rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-transparent">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-slate-800 dark:text-sky-100">{t('home_w3_title')}</h4>
                            <ShieldCheck size={18} className="text-sky-600 dark:text-sky-400" />
                          </div>
                          <div className="space-y-2.5">
                            {[
                              {l: t('feat_pet_ui_species'), v: t('feat_g_species_cat')},
                              {l: t('feat_pet_ui_breed'), v: 'Maine Coon'},
                              {l: t('feat_pet_ui_age'), v: \`7 \${t('feat_g_years_old')}\`},
                              {l: t('feat_own_ui_weight'), v: '7.2 kg'},
                              {l: t('feat_pet_ui_microchip'), v: '900215000123456'},
                            ].map((item, i) => (
                              <div key={i} className="flex border-b border-slate-100 dark:border-slate-700/30 pb-2 last:border-0 last:pb-0">
                                <div className="w-1/3 text-[10px] text-slate-500 dark:text-[#789085]">{item.l}</div>
                                <div className="w-2/3 text-[10px] font-bold text-slate-900 dark:text-slate-100">{item.v}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800/30 rounded-xl p-3 flex justify-between items-center mt-2">
                          <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-sky-600 dark:text-sky-400" />
                            <div className="text-xs font-bold text-sky-800 dark:text-sky-100">{t('feat_pet_ui_vax_uptodate')}</div>
                          </div>
                          <ArrowRight size={14} className="text-sky-600 dark:text-sky-400" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-16 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800/50 flex justify-around items-center px-4 pb-1 z-10">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={18} className="mb-0.5"/><span className="text-[8px]">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-sky-600 dark:text-sky-400"><ShieldCheck size={18} className="mb-0.5"/><span className="text-[8px] font-bold">{t('blog_p1_cat')}</span></div>
                        <div className="w-11 h-11 bg-sky-600 rounded-full flex items-center justify-center text-white -mt-6 border-[3px] border-slate-50 dark:border-[#1a2317] shadow-lg"><Plus size={20}/></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={18} className="mb-0.5"/><span className="text-[8px]">{t('feat_pet_ui_appts')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Users size={18} className="mb-0.5"/><span className="text-[8px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {activeTab === 'community' && (
                  <motion.div key="mockup-community" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.4}} className="pointer-events-auto origin-bottom scale-[0.85] lg:scale-[0.95]">
                    <div className="w-[320px] h-[640px] bg-slate-50 dark:bg-[#1a2317] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-rose-900/40">
                      <div className="absolute top-0 inset-x-0 h-6 bg-slate-300 dark:bg-rose-900/40 rounded-b-3xl w-40 mx-auto z-20"></div>
                      <div className="flex justify-between items-center px-5 pt-12 pb-2">
                        <div className="w-6" />
                        <h3 className="font-bold text-base text-slate-800 dark:text-slate-100">{t('blog_p3_category')}</h3>
                        <div className="w-7 h-7 rounded-full border border-slate-200 dark:border-slate-600 flex items-center justify-center"><Plus size={14} className="text-slate-600 dark:text-slate-300" /></div>
                      </div>
                      <div className="flex-1 overflow-hidden px-4 pt-2 pb-20 flex flex-col gap-3">
                        {[
                          {img: '/pet2.jpg', name: t('home_bento4_author'), time: t('home_bento4_time'), text: t('feat_com_ui_post1'), likes: 128, postImg: '/pet2.jpg'},
                          {img: '/pet1.jpg', name: 'Can & Pati', time: t('feat_com_5_hours_ago'), text: t('feat_com_ui_post2'), likes: 67, postImg: null},
                        ].map((post, i) => (
                          <div key={i} className="bg-white dark:bg-[#192823] rounded-2xl p-3 shadow-sm border border-slate-100 dark:border-transparent shrink-0">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"><img src={post.img} alt="" className="w-full h-full object-cover" /></div>
                              <div>
                                <div className="font-bold text-xs text-slate-900 dark:text-slate-100">{post.name}</div>
                                <div className="text-[9px] text-slate-500">{post.time}</div>
                              </div>
                              <MoreHorizontal size={16} className="text-slate-400 ml-auto" />
                            </div>
                            <p className="text-[10px] text-slate-700 dark:text-slate-300 mb-2">{post.text}</p>
                            {post.postImg && <div className="w-full h-28 rounded-lg overflow-hidden mb-2"><img src={post.postImg} alt="" className="w-full h-full object-cover" /></div>}
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1"><Heart size={14} className="text-orange-500 fill-orange-500" /><span className="text-[10px] font-bold text-orange-500">{post.likes}</span></div>
                              <MessageCircle size={14} className="text-slate-400" />
                              <Share2 size={14} className="text-slate-400 ml-auto" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-16 bg-white dark:bg-[#1a2317] border-t border-slate-100 dark:border-slate-800/50 flex justify-around items-center px-4 pb-1 z-10">
                        <div className="flex flex-col items-center text-slate-400"><PawPrint size={18} className="mb-0.5"/><span className="text-[8px]">{t('feat_ui_home')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><ShieldCheck size={18} className="mb-0.5"/><span className="text-[8px]">{t('blog_p1_cat')}</span></div>
                        <div className="w-11 h-11 bg-rose-500 rounded-full flex items-center justify-center text-white -mt-6 border-[3px] border-slate-50 dark:border-[#1a2317] shadow-lg"><Plus size={20}/></div>
                        <div className="flex flex-col items-center text-rose-700 dark:text-rose-400"><Users size={18} className="mb-0.5"/><span className="text-[8px] font-bold">{t('blog_p3_category')}</span></div>
                        <div className="flex flex-col items-center text-slate-400"><Calendar size={18} className="mb-0.5"/><span className="text-[8px]">{t('feat_ui_profile')}</span></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. SOL ALT: Açıklama Kutusu (Asimetrik Yuvarlak, Köşeye Yapışık) */}
            <div className="absolute bottom-[-2px] left-[-2px] z-20 hidden md:flex flex-col w-[380px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`left-\${activeTab}\`}
                  initial={{opacity:0,x:-20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:-20}} 
                  transition={{duration:0.3}}
                  className="bg-white dark:bg-[#080d0a] p-8 pb-10 shadow-xl rounded-tr-[100px] rounded-br-[10px] rounded-tl-[4rem] border-r border-t border-slate-200/50 dark:border-white/10 pointer-events-auto"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-10">
                    {activeTab === 'owners' ? t('feat_own_title1') : activeTab === 'pets' ? t('feat_pet_title1') : t('feat_com_title1')}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {activeTab === 'owners' ? t('feat_own_desc') : activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 5. SAĞ ALT: Özellikler ve Logo (Blurlu Asimetrik Panel, Köşeye Yapışık) */}
            <div className="absolute bottom-[-2px] right-[-2px] z-20 hidden md:flex flex-col w-[380px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`right-\${activeTab}\`}
                  initial={{opacity:0,x:20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:20}} 
                  transition={{duration:0.3}}
                  className="bg-white/50 dark:bg-black/30 backdrop-blur-2xl p-8 pb-10 shadow-xl rounded-tl-[100px] rounded-bl-[10px] rounded-tr-[4rem] border-l border-t border-white/60 dark:border-white/10 flex flex-col pointer-events-auto"
                >
                  <ul className="space-y-4 mb-8 pt-4 flex-1 pl-4">
                    {(activeTab === 'owners' 
                      ? [t('feat_s1_li1'), t('feat_s1_li2'), t('feat_s1_li3')] 
                      : activeTab === 'pets' 
                        ? [t('feat_s2_li1'), t('feat_s2_li2'), t('feat_s2_li3')]
                        : [t('feat_s3_li1'), t('feat_s3_li2'), t('feat_s3_li3')]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={\`mt-1 w-2 h-2 rounded-full flex items-center justify-center shrink-0 \${activeTab === 'owners' ? 'bg-emerald-500' : activeTab === 'pets' ? 'bg-sky-500' : 'bg-rose-500'}\`}></div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Logonun koyu/şık hali, reference'daki lacivert U dairesi gibi */}
                  <div className="absolute bottom-6 right-8 w-16 h-16 rounded-full bg-[#0d1611] dark:bg-white shadow-xl flex items-center justify-center border-4 border-white/40 dark:border-white/10">
                    <img src="/logo-koyu.svg" alt="Veterito" className="w-10 h-10 object-contain brightness-0 invert dark:invert-0" onError={(e) => { (e.currentTarget).style.display='none'; }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBİL İÇİN ALT KUTULAR (Masaüstünde gizli) */}
            <div className="md:hidden mt-[500px] flex flex-col gap-4 z-20 w-full relative pb-4 px-4">
              <AnimatePresence mode="wait">
                 <motion.div 
                  key={\`mobile-\${activeTab}\`}
                  initial={{opacity:0,y:20}} 
                  animate={{opacity:1,y:0}} 
                  exit={{opacity:0,y:20}} 
                  transition={{duration:0.3}}
                  className="flex flex-col gap-4"
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
                          <div className={\`mt-1 w-2 h-2 rounded-full flex items-center justify-center shrink-0 \${activeTab === 'owners' ? 'bg-emerald-500' : activeTab === 'pets' ? 'bg-sky-500' : 'bg-rose-500'}\`}></div>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="w-12 h-12 rounded-full bg-[#0d1611] dark:bg-white flex items-center justify-center border-[3px] border-white/40">
                      <img src="/logo-koyu.svg" alt="Veterito" className="w-7 h-7 object-contain brightness-0 invert dark:invert-0" onError={(e) => { (e.currentTarget).style.display='none'; }} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>\n\n`;

fs.writeFileSync(featuresFile, beforeSection + newSection + afterSection, 'utf8');
console.log('Successfully replaced showcase section.');
