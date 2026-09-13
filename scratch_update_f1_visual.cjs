const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', 'utf8');

if (!code.includes("import { Globe, MessageCircle, ShieldCheck, LinkIcon, Smartphone, CheckCircle2, Search } from 'lucide-react';")) {
    code = code.replace(
        "import { Globe, MessageCircle, ShieldCheck, LinkIcon, Smartphone, CheckCircle2 } from 'lucide-react';",
        "import { Globe, MessageCircle, ShieldCheck, LinkIcon, Smartphone, CheckCircle2, Search } from 'lucide-react';"
    );
}

const oldMockup = `                {/* Mini UI Mockup */}
                <div className="w-full lg:w-1/2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/50 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-zinc-800 pb-3 mb-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                    </div>
                    <div className="flex-1 bg-white/90 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700 rounded-md py-1 px-2.5 flex items-center gap-2 text-[11px] text-slate-400">
                      <LinkIcon size={10} />
                      <span className="truncate">veterito.com/klinik/sizin-kliniginiz</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100/80 dark:bg-teal-900/40 shrink-0"></div>
                    <div className="flex-1 space-y-2 mt-1">
                      <div className="h-3 w-1/3 bg-slate-200/80 dark:bg-zinc-800 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-100 dark:bg-zinc-800/50 rounded"></div>
                      <div className="flex gap-1.5 pt-1">
                        <div className="h-6 w-16 bg-green-500/10 border border-green-500/30 rounded-full"></div>
                        <div className="h-6 w-16 bg-slate-200/70 dark:bg-zinc-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>`;

const newMockup = `                {/* Mini UI Mockup */}
                <div className="w-full lg:w-1/2 relative">
                  {/* Floating SEO Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -left-3 lg:-top-5 lg:-left-5 z-20 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-md rounded-lg p-2 flex items-center gap-1.5"
                  >
                    <Search size={12} className="text-teal-600" />
                    <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">Bölgedeki en iyi klinik</span>
                  </motion.div>

                  <div className="w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border border-white/50 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-zinc-800 pb-3 mb-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                      </div>
                      <div className="flex-1 bg-white/90 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700 rounded-md py-1 px-2.5 flex items-center gap-2 text-[11px] text-slate-400">
                        <LinkIcon size={10} />
                        <span className="truncate">veterito.com/klinik/sizin-kliniginiz</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-100/80 dark:bg-teal-900/40 shrink-0"></div>
                      <div className="flex-1 space-y-2 mt-1">
                        <div className="h-3 w-1/3 bg-slate-200/80 dark:bg-zinc-800 rounded"></div>
                        <div className="h-2 w-1/2 bg-slate-100 dark:bg-zinc-800/50 rounded"></div>
                        <div className="flex gap-1.5 pt-1">
                          <div className="h-6 px-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full flex items-center gap-1.5">
                            <img src="/whatsapp.png" alt="WhatsApp" className="w-3 h-3 object-contain" />
                            <div className="h-1.5 w-6 bg-[#25D366]/50 rounded"></div>
                          </div>
                          <div className="h-6 w-16 bg-slate-200/70 dark:bg-zinc-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;

code = code.replace(oldMockup, newMockup);
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', code);
console.log('F1 visual updated.');
