const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

const newSection = `
        {/* Common Features Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, staggerChildren: 0.1 }
            }
          }}
          className="max-w-6xl mx-auto bg-slate-50/50 dark:bg-zinc-900/80 rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl border border-slate-200/60 dark:border-zinc-800 relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

          <div className="flex flex-col items-center mb-8 text-center relative z-10">
            <motion.div 
              variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
              className="w-12 h-12 bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-400 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-zinc-700"
            >
              <Rocket size={24} />
            </motion.div>
            <motion.h2 
              variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-2xl md:text-3xl font-extrabold text-[var(--text-main)]"
            >
              {t('pricing_common_title')}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 relative z-10">
            {getFeaturesArray('pricing_common_features').map((feat, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-zinc-800/20 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-zinc-700 hover:shadow-md hover:-translate-y-1 cursor-default"
              >
                <div className="mt-1 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <CheckCircle2 className="text-slate-400 group-hover:text-[#009689] transition-colors duration-300" size={22} />
                </div>
                <span className="text-sm md:text-base text-[var(--text-main)] font-medium leading-relaxed">{feat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
`;

const regex = /\{\/\* Common Features Section \*\/\}(.|\n)*?<\/motion\.div>/m;
code = code.replace(regex, newSection.trim());

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Common features updated.');
