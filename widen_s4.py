import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

s4_start = content.find('{/* Left: Dynamic Dashboard Visual (Bento Grid) */}')
s4_end = content.find('{/* Right: Text */}', s4_start)

if s4_start == -1 or s4_end == -1:
    print("Could not find S4 bounds")
    exit(1)

old_bento = content[s4_start:s4_end]

new_bento = """{/* Left: Dynamic Dashboard Visual (Bento Grid) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full flex justify-center lg:justify-start lg:order-1 order-2 lg:-ml-4 xl:-ml-8"
      >
        <div className="w-full max-w-4xl bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 relative overflow-hidden">
          
          {/* 1. Adoption Box (Top Left) */}
          <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-fit flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-bold text-slate-800 dark:text-white">Yavru kedi sahiplendirme</div>
                <MoreHorizontal size={16} className="text-slate-400" />
              </div>
              <div className="flex gap-1.5 mb-3 flex-wrap">
                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md">Kedi</span>
                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md">Dişi</span>
                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md">Ankara/Yenimahalle</span>
              </div>
              <div className="text-xs text-slate-500 mb-5">6 aylık, dişi, tekir yavru kedi</div>
            </div>
            <div className="w-full bg-[#0E3E37] text-white text-xs font-bold py-2.5 rounded-xl text-center shadow-sm cursor-pointer hover:bg-[#0b2f29] transition-colors">
              Başvuruyu Gönder
            </div>
          </div>

          {/* 2. Guides Box (Top Right) */}
          <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-fit">
             <div className="space-y-4">
              {/* Guide 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] flex items-center justify-center shrink-0 border border-emerald-100">
                  <PawPrint size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Irk Rehberi</div>
                  <div className="text-[10px] text-slate-400">Kedi, köpek ve diğer türlerin ırkları</div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
              
              {/* Guide 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Aşı Takvimi</div>
                  <div className="text-[10px] text-slate-400">Tür bazlı standart aşı programı</div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
              
              {/* Guide 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Activity size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bakım İpuçları</div>
                  <div className="text-[10px] text-slate-400">Bakım, beslenme ve acil durum bilgileri</div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>

              {/* Guide 4 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] flex items-center justify-center shrink-0 border border-emerald-100">
                  <FileText size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Blog</div>
                  <div className="text-[10px] text-slate-400">Veteriner hekimlerin gözünden</div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
            </div>
          </div>

          {/* 3. Post Box (Bottom, Spans 2 columns on desktop) */}
          <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 md:col-span-2 flex flex-col md:flex-row gap-6">
            
            {/* Left side of horizontal post */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-extrabold text-xl text-slate-800 dark:text-white">Topluluk</h3>
                <div className="flex gap-2">
                   <Search size={18} className="text-slate-400" />
                   <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                     <Plus size={14} />
                   </div>
                </div>
              </div>
              
              <div className="flex gap-4 border-b border-slate-100 dark:border-zinc-700/50 pb-2 mb-4 text-[13px] font-bold text-slate-400">
                <div className="text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-2 -mb-[9px]">Keşfet</div>
                <div>Takip</div>
                <div className="hidden sm:block">Klinikler</div>
                <div>Rehber</div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/moda-kedi.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm text-slate-800 dark:text-white">Can Kılıç & Mia</div>
                    <div className="text-[10px] text-slate-400">az önce</div>
                  </div>
                  <MoreHorizontal size={16} className="text-slate-400 ml-auto" />
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed pr-4">
                  Veteriner kontrolü sonrası Moda parkında keyif ✨🐾
                </p>
                
                <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mt-auto">
                  <div className="flex items-center gap-1.5 text-rose-500"><Heart size={16} className="fill-current" /> 35</div>
                  <div className="flex items-center gap-1.5"><MessageCircle size={16} /> 10</div>
                </div>
              </div>
            </div>

            {/* Right side of horizontal post (Image) */}
            <div className="flex-1 rounded-2xl overflow-hidden min-h-[180px] md:min-h-full">
              <img src="/moda-kedi.jpg" alt="Post" className="w-full h-full object-cover" />
            </div>

          </div>
          
        </div>
      </motion.div>

      """

new_content = content[:s4_start] + new_bento + content[s4_end:]

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Dashboard redesigned to horizontal layout.")
