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

const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><path d="M 0 0 L 0 18.7 A 40 40 0 0 0 35.39 58.43 A 64 64 0 0 1 91.57 114.62 A 40 40 0 0 0 131.3 150 L 150 150 L 150 0 Z" fill="black" /></svg>';
const dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr);

const newSection = `{/* 5. SAĞ ALT: Özellikler ve Logo */}
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
                  {/* Arka Plan ve İçe Göçük (Cutout) - Tiled Pure CSS Mask (Flawless 40px fillets) */}
                  <div 
                    className="absolute inset-0 bg-white/15 dark:bg-black/20 backdrop-blur-[35px] rounded-[45px] shadow-2xl"
                    style={{ 
                      WebkitMaskImage: 'url("' + dataUri + '"), linear-gradient(black, black), linear-gradient(black, black)',
                      maskImage: 'url("' + dataUri + '"), linear-gradient(black, black), linear-gradient(black, black)',
                      WebkitMaskPosition: 'bottom left, top left, bottom right',
                      maskPosition: 'bottom left, top left, bottom right',
                      WebkitMaskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px',
                      maskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat'
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
                  
                  {/* Logo - Geniş kavisin içine tam oturur */}
                  <div className="absolute left-[-20px] bottom-[-20px] w-24 h-24 rounded-full bg-[#180f3d] dark:bg-[#180f3d] shadow-[0_8px_30px_rgb(0,0,0,0.3)] flex items-center justify-center z-20">
                    <img src="/logo-acik.svg" alt="Veterito" className="w-10 h-10 object-contain brightness-0 invert" onError={(e) => { e.currentTarget.style.display='none'; }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            `;

fs.writeFileSync(featuresFile, beforeSection + newSection + afterSection, 'utf8');
console.log('Successfully applied the exact mathematical tiled SVG mask.');
