const fs = require('fs');
const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

// 1. Restore Outer Background to White
content = content.replace(/bg-slate-50 dark:bg-\[\#060A08\]/g, 'bg-white dark:bg-[#060A08]');

// 2. Left Box: Restore Title Inside Box & Remove Mask, Use Inline SVG
const leftBoxRegex = /\{\/\*\ 4\.\ SOL ALT:\ Açıklama Kutusu\ \*\/\}[\s\S]*?(?=\{\/\*\ 5\.\ SAĞ ALT:|\{\/\*\ MOBİL İÇİN ALT KUTULAR\ \*\/\}|<\/div>\s*<\/div>\s*<\/section>)/;
const leftBoxNew = `{/* 4. SOL ALT: Açıklama Kutusu */}
            <div className="absolute bottom-[-6px] left-[-6px] z-20 hidden md:flex flex-col w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`left-\${activeTab}\`}
                  initial={{opacity:0,x:-20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:-20}} 
                  transition={{duration:0.3}}
                  className="bg-white dark:bg-[#080d0a] p-8 pb-10 shadow-2xl rounded-tl-[40px] rounded-br-[40px] rounded-bl-[4rem] rounded-tr-[40px] pointer-events-auto relative"
                >
                  {/* Sol Ters Köşe (Inverted Corner) */}
                  <svg className="absolute top-0 right-[-40px] w-[40px] h-[40px] pointer-events-none drop-shadow-[5px_10px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 40 40">
                    <path d="M 0 0 L 40 0 A 40 40 0 0 0 0 40 Z" className="fill-white dark:fill-[#080d0a]" />
                  </svg>
                  <svg className="absolute top-[-40px] left-0 w-[40px] h-[40px] pointer-events-none drop-shadow-[-5px_10px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 40 40">
                    <path d="M 0 0 L 0 40 A 40 40 0 0 0 40 40 Z" className="fill-white dark:fill-[#080d0a]" />
                  </svg>

                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 pr-10">
                    {activeTab === 'owners' ? t('feat_own_title1') : activeTab === 'pets' ? t('feat_pet_title1') : t('feat_com_title1')}
                  </h3>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {activeTab === 'owners' ? t('feat_own_desc') : activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            `;
content = content.replace(leftBoxRegex, leftBoxNew);

// 3. Right Box: Remove Mask, Use Inline SVG
const rightBoxRegex = /\{\/\*\ 5\.\ SAĞ ALT:\ Özellikler ve Logo\ \*\/\}[\s\S]*?(?=\{\/\*\ MOBİL İÇİN ALT KUTULAR\ \*\/\}|<\/div>\s*<\/div>\s*<\/section>)/;
const rightBoxNew = `{/* 5. SAĞ ALT: Özellikler ve Logo */}
            <div className="absolute bottom-[-6px] right-[-6px] z-20 hidden md:flex flex-col w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`right-\${activeTab}\`}
                  initial={{opacity:0,x:20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:20}} 
                  transition={{duration:0.3}}
                  className="bg-white/40 dark:bg-black/40 backdrop-blur-3xl p-8 pb-12 pl-12 shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[4rem] rounded-tl-[40px] flex flex-col pointer-events-auto relative"
                >
                  {/* Sol Ters Köşe (Inverted Corner) */}
                  <svg className="absolute top-0 left-[-40px] w-[40px] h-[40px] pointer-events-none drop-shadow-[-5px_10px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 40 40">
                    <path d="M 40 0 L 0 0 A 40 40 0 0 1 40 40 Z" className="fill-white dark:fill-black/40" />
                  </svg>
                  <svg className="absolute top-[-40px] right-0 w-[40px] h-[40px] pointer-events-none drop-shadow-[5px_10px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 40 40">
                    <path d="M 40 0 L 40 40 A 40 40 0 0 1 0 40 Z" className="fill-white dark:fill-black/40" />
                  </svg>

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

            `;
content = content.replace(rightBoxRegex, rightBoxNew);

// 4. Remove Giant Title if it exists
const giantTitleRegex = /\{\/\*\ SOL ÜST:\ DEV BAŞLIK\ \*\/\}[\s\S]*?\{\/\*\ 4\.\ SOL ALT:\ Açıklama Kutusu\ \*\/\}/;
content = content.replace(giantTitleRegex, '{/* 4. SOL ALT: Açıklama Kutusu */}');

// 5. Put Tab Menu Back Inside
const tabMenuRegex = /\{\/\*\ 1\.\ ÜSTTE 3'LÜ TAB MENÜSÜ\ \(Ortalanmış\)\ \*\/\}[\s\S]*?\{\/\*\ 3\.\ ORTADA: CİHAZ MOCKUP\ \*\/\}/;
if (content.match(tabMenuRegex)) {
  const tabMenuNew = `{/* 1. ÜSTTE 3'LÜ TAB MENÜSÜ (Ortalanmış) */}
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
                    {t('feat_tab_com')}
                  </button>
                </div>
              </div>

            {/* 3. ORTADA: CİHAZ MOCKUP */}`;
  content = content.replace(tabMenuRegex, tabMenuNew);
}

// 6. Restore Notch & Slate Border to Phones
content = content.replace(/border-white\/80 dark:border-white\/5/g, 'border-slate-200 dark:border-emerald-900/40');
// (For owners)
content = content.replace(
  /<div className="w-\[320px\] h-\[640px\] bg-white dark:bg-\[\#08100C\] rounded-t-\[3rem\] shadow-2xl shadow-black\/30 overflow-hidden relative flex flex-col border-\[6px\] border-b-0 border-slate-200 dark:border-emerald-900\/40">\s*\{\/\*\ Top Bar \*\/\}\s*<div className="flex justify-between items-center px-5 pt-8 pb-4 bg-white dark:bg-\[\#08100C\] z-20 relative">/g,
  `<div className="w-[320px] h-[640px] bg-white dark:bg-[#08100C] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-emerald-900/40">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 dark:bg-emerald-900/40 rounded-b-3xl w-40 mx-auto z-30"></div>
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-5 pt-12 pb-4 bg-white dark:bg-[#08100C] z-20 relative">`
);
// (For pets)
content = content.replace(
  /<div className="w-\[320px\] h-\[640px\] bg-white dark:bg-\[\#1a2317\] rounded-t-\[3rem\] shadow-2xl shadow-black\/30 overflow-hidden relative flex flex-col border-\[6px\] border-b-0 border-slate-200 dark:border-emerald-900\/40">\s*\{\/\*\ Top Bar \*\/\}\s*<div className="flex justify-between items-center px-5 pt-8 pb-4 bg-white dark:bg-\[\#1a2317\] z-20 relative">/g,
  `<div className="w-[320px] h-[640px] bg-white dark:bg-[#1a2317] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-sky-900/40">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 dark:bg-sky-900/40 rounded-b-3xl w-40 mx-auto z-30"></div>
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-center px-5 pt-12 pb-4 bg-white dark:bg-[#1a2317] z-20 relative">`
);
// (For community)
content = content.replace(
  /<div className="w-\[320px\] h-\[640px\] bg-white dark:bg-\[\#08100C\] rounded-t-\[3rem\] shadow-2xl shadow-black\/30 overflow-hidden relative flex flex-col border-\[6px\] border-b-0 border-slate-200 dark:border-emerald-900\/40">\s*<div className="flex justify-between items-center px-6 pt-8 pb-2 bg-white dark:bg-\[\#08100C\] z-20 relative">/g,
  `<div className="w-[320px] h-[640px] bg-white dark:bg-[#08100C] rounded-t-[3rem] shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col border-[6px] border-b-0 border-slate-200 dark:border-emerald-900/40">
                         {/* Notch */}
                         <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 dark:bg-emerald-900/40 rounded-b-3xl w-40 mx-auto z-30"></div>
                         
                         <div className="flex justify-between items-center px-6 pt-10 pb-2 bg-white dark:bg-[#08100C] z-20 relative">`
);

fs.writeFileSync(featuresFile, content);
console.log("File recovered to exact 20:00 state!");
