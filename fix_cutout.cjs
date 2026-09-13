const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

const targetStr = '{/* 5. SAĞ ALT: Özellikler ve Logo */}';
const nextSectionMarker = '{/* MOBİL İÇİN ALT KUTULAR */}';

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

const newSection = `{/* 5. SAĞ ALT: Özellikler ve Logo */}
            <div className="absolute bottom-[-16px] right-[-16px] z-20 hidden md:flex flex-col w-[380px] pointer-events-none">
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
                    className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-3xl rounded-[40px] border border-white/60 dark:border-white/10 shadow-2xl"
                    style={{ 
                      WebkitMaskImage: "radial-gradient(circle at 44px calc(100% - 44px), transparent 66px, black 67px)", 
                      maskImage: "radial-gradient(circle at 44px calc(100% - 44px), transparent 66px, black 67px)" 
                    }}
                  />
                  
                  <div className="relative z-10 space-y-6 pt-2 w-full pl-6 pb-6">
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
                  
                  {/* Logonun koyu/şık hali - Tam sol alt köşeye oturacak şekilde */}
                  <div className="absolute left-[-16px] bottom-[-16px] w-[120px] h-[120px] rounded-full bg-[#180f3d] dark:bg-[#180f3d] shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex items-center justify-center z-20 border-[6px] border-transparent">
                    <img src="/logo-acik.svg" alt="Veterito" className="w-16 h-16 object-contain brightness-0 invert" onError={(e) => { e.currentTarget.style.display='none'; }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            `;

fs.writeFileSync(featuresFile, beforeSection + newSection + afterSection, 'utf8');
console.log('Successfully replaced right box with perfect corner cutout.');
