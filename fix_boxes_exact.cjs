const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

const leftBoxRegex = /\{\/\*\ 4\.\ SOL ALT:\ Açıklama Kutusu\ \*\/\}[\s\S]*?(?=\{\/\*\ 5\.\ SAĞ ALT:\ Özellikler ve Logo\ \*\/\}|\{\/\*\ MOBİL İÇİN ALT KUTULAR\ \*\/\}|\{\/\*\ 5\.\ SAĞ ALT:\ Özellikler Kutusu\ \*\/\}|            \{)/;

const leftBoxNew = `{/* 4. SOL ALT: Açıklama Kutusu */}
            <div className="absolute bottom-[-6px] left-[-6px] z-20 hidden md:flex flex-col w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`left-\${activeTab}\`}
                  initial={{opacity:0,x:-20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:-20}} 
                  transition={{duration:0.3}}
                  className="bg-white dark:bg-[#080d0a] p-8 pb-10 shadow-2xl rounded-tl-[40px] rounded-br-[40px] rounded-bl-[4rem] rounded-tr-[100px] border-r border-t border-slate-200/50 dark:border-white/10 pointer-events-auto"
                  style={{ WebkitMaskImage: 'url("' + dataUri + '"), linear-gradient(black, black), linear-gradient(black, black)', WebkitMaskPosition: 'top right, top left, bottom right', WebkitMaskSize: '150px 150px, calc(100% - 149px) 100%, 100% calc(100% - 149px)', WebkitMaskRepeat: 'no-repeat', WebkitMaskComposite: 'destination-out, destination-over, destination-over', maskComposite: 'exclude, add, add' }}
                >
                  <h4 className="text-lg font-extrabold tracking-wide text-slate-800 dark:text-slate-200 mb-4 pr-4">
                    {activeTab === 'owners' ? t('feat_own_badge') : activeTab === 'pets' ? t('feat_pet_badge') : t('feat_com_badge')}
                  </h4>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {activeTab === 'owners' ? t('feat_own_desc') : activeTab === 'pets' ? t('feat_pet_desc') : t('feat_com_desc')}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

`;
content = content.replace(leftBoxRegex, leftBoxNew);

const rightBoxRegex = /\{\/\*\ 5\.\ (SAĞ ALT:\ Özellikler ve Logo|SAĞ ALT:\ Özellikler Kutusu)\ \*\/\}[\s\S]*?(?=\{\/\*\ MOBİL İÇİN ALT KUTULAR\ \*\/\}|<\/div>\s*<\/div>\s*<\/section>)/;
const rightBoxNew = `{/* 5. SAĞ ALT: Özellikler ve Logo */}
            <div className="absolute bottom-[-6px] right-[-6px] z-20 hidden md:flex flex-col w-[340px] pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={\`right-\${activeTab}\`}
                  initial={{opacity:0,x:20}} 
                  animate={{opacity:1,x:0}} 
                  exit={{opacity:0,x:20}} 
                  transition={{duration:0.3}}
                  className="bg-white/40 dark:bg-black/40 backdrop-blur-3xl p-8 pb-12 pl-12 shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[4rem] rounded-tl-[100px] border-l border-t border-white/60 dark:border-white/10 flex flex-col pointer-events-auto relative"
                  style={{ WebkitMaskImage: 'url("' + dataUri + '"), linear-gradient(black, black), linear-gradient(black, black)', WebkitMaskPosition: 'top left, top right, bottom left', WebkitMaskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px', WebkitMaskRepeat: 'no-repeat', WebkitMaskComposite: 'destination-out, destination-over, destination-over', maskComposite: 'exclude, add, add' }}
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

`;
content = content.replace(rightBoxRegex, rightBoxNew);

fs.writeFileSync(featuresFile, content);
console.log("Features.tsx boxes updated!");
