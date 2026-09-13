const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

const targetStrLeft = '{/* 4. SOL ALT: Açıklama Kutusu */}';
const nextSectionMarker = '{/* MOBİL İÇİN ALT KUTULAR */}';

const startIndex = content.indexOf(targetStrLeft);
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

const newSection = `{/* 4. SOL ALT: Açıklama Kutusu */}
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
                  {activeTab === 'owners' ? (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-10">
                        Evcil Hayvan Sahipleri İçin
                      </h3>
                      <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        Fiziksel aşı karnesini kaybetme veya rutin uygulamaları unutma derdine son verin. Veterito, patili dostunuzun yaşına ve türüne göre yapılması gerekenleri hesaplar ve tam zamanında size hatırlatır.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-10">
                        {activeTab === 'pets' ? t('feat_pet_title1') : t('feat_com_title1')}
                      </h3>
                      <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 5. SAĞ ALT: Özellikler ve Logo */}
            <div className="absolute bottom-[-6px] right-[-6px] z-20 hidden md:flex flex-col w-[360px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`right-\${activeTab}\`}
                  initial={{opacity:0,x:20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:20}} 
                  transition={{duration:0.3}}
                  className="relative pointer-events-auto flex flex-col p-8 pb-10 pl-12 h-full"
                >
                  {/* Arka Plan ve İçe Göçük (Cutout) Maskesi */}
                  <div 
                    className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-3xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[4rem] rounded-tl-[100px] border-l border-t border-white/60 dark:border-white/10 shadow-2xl"
                    style={{ WebkitMaskImage: "radial-gradient(circle at 0px calc(100% - 64px), transparent 46px, black 47px)", maskImage: "radial-gradient(circle at 0px calc(100% - 64px), transparent 46px, black 47px)" }}
                  />
                  
                  <div className="relative z-10 space-y-5 pt-2 w-full">
                    {/* Madde 1 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-amber-500">
                        <Bell size={18} className="shrink-0" />
                        <span className="font-bold text-slate-900 dark:text-white text-[15px]">Akıllı Bildirimler</span>
                      </div>
                      <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium pl-6 leading-snug">Zamanı gelen aşı ve parazit uygulamaları için.</p>
                    </div>
                    
                    {/* Madde 2 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-rose-500">
                        <Users size={18} className="shrink-0" />
                        <span className="font-bold text-slate-900 dark:text-white text-[15px]">Çoklu Profil</span>
                      </div>
                      <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium pl-6 leading-snug">Birden fazla dostunuzu tek ekrandan yönetin.</p>
                    </div>

                    {/* Madde 3 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-sky-500">
                        <FileText size={18} className="shrink-0" />
                        <span className="font-bold text-slate-900 dark:text-white text-[15px]">Resmi PDF Dökümü</span>
                      </div>
                      <p className="text-[12px] text-slate-700 dark:text-slate-300 font-medium pl-6 leading-snug">Seyahatlerde zorunlu evraklar tek tıkla elinizde.</p>
                    </div>
                  </div>
                  
                  {/* Logonun koyu/şık hali */}
                  <div className="absolute -left-10 bottom-6 w-20 h-20 rounded-full bg-[#180f3d] dark:bg-[#180f3d] shadow-2xl flex items-center justify-center z-20">
                    <img src="/logo-acik.svg" alt="Veterito" className="w-10 h-10 object-contain brightness-0 invert" onError={(e) => { e.currentTarget.style.display='none'; }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            `;

fs.writeFileSync(featuresFile, beforeSection + newSection + afterSection, 'utf8');
console.log('Successfully replaced left and right boxes.');
