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
            <div className="absolute bottom-6 left-6 z-20 hidden md:flex flex-col w-[320px] lg:w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`left-\${activeTab}\`}
                  initial={{opacity:0,x:-20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:-20}} 
                  transition={{duration:0.3}}
                  className="bg-white dark:bg-[#080d0a] p-8 pb-10 shadow-2xl rounded-[40px] border border-slate-200/50 dark:border-white/10 pointer-events-auto"
                >
                  {activeTab === 'owners' ? (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Evcil Hayvan Sahipleri İçin
                      </h3>
                      <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        Fiziksel aşı karnesini kaybetme veya rutin uygulamaları unutma derdine son verin. Veterito, patili dostunuzun yaşına ve türüne göre yapılması gerekenleri hesaplar ve tam zamanında size hatırlatır.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
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
            <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col w-[320px] lg:w-[350px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`right-\${activeTab}\`}
                  initial={{opacity:0,x:20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:20}} 
                  transition={{duration:0.3}}
                  className="relative pointer-events-auto flex flex-col p-8 pb-10 h-full"
                >
                  {/* Arka Plan ve İçe Göçük (Cutout) Maskesi */}
                  <div 
                    className="absolute inset-0 bg-white/15 dark:bg-black/20 backdrop-blur-[50px] rounded-[50px] border border-white/60 dark:border-white/10 shadow-2xl"
                    style={{ 
                      WebkitMaskImage: "radial-gradient(circle at 0px 100%, transparent 110px, black 111px)", 
                      maskImage: "radial-gradient(circle at 0px 100%, transparent 110px, black 111px)" 
                    }}
                  />
                  
                  <div className="relative z-10 space-y-6 pt-2 w-full pl-6 pb-12">
                    {/* Madde 1 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-amber-500">
                        <Bell size={18} className="shrink-0" />
                        <span className="font-bold text-slate-900 dark:text-white text-[15px]">Akıllı Bildirimler</span>
                      </div>
                      <p className="text-[12px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">Zamanı gelen aşı ve parazit uygulamaları için.</p>
                    </div>
                    
                    {/* Madde 2 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-rose-500">
                        <Users size={18} className="shrink-0" />
                        <span className="font-bold text-slate-900 dark:text-white text-[15px]">Çoklu Profil</span>
                      </div>
                      <p className="text-[12px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">Birden fazla dostunuzu tek ekrandan yönetin.</p>
                    </div>

                    {/* Madde 3 */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-sky-500">
                        <FileText size={18} className="shrink-0" />
                        <span className="font-bold text-slate-900 dark:text-white text-[15px]">Resmi PDF Dökümü</span>
                      </div>
                      <p className="text-[12px] text-slate-800 dark:text-slate-200 font-medium pl-6 leading-snug">Seyahatlerde zorunlu evraklar tek tıkla elinizde.</p>
                    </div>
                  </div>
                  
                  {/* Logonun koyu/şık hali - Kutudan bağımsız gibi duracak, köşeye oturacak */}
                  <div className="absolute left-[-10px] bottom-[-10px] w-24 h-24 rounded-full bg-[#180f3d] dark:bg-[#180f3d] shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex items-center justify-center z-20">
                    <img src="/logo-acik.svg" alt="Veterito" className="w-10 h-10 object-contain brightness-0 invert" onError={(e) => { e.currentTarget.style.display='none'; }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            `;

fs.writeFileSync(featuresFile, beforeSection + newSection + afterSection, 'utf8');
console.log('Successfully updated boxes.');
