import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the location of feat_radar_f2
radar_idx = content.find("feat_radar_f2")
if radar_idx == -1:
    print("Could not find feat_radar_f2")
    exit(1)

# Find the start of the section containing radar_idx
start_idx = content.rfind("<section ", 0, radar_idx)

# Find the end of the section (the next section start)
end_idx = content.find("<section ", radar_idx)

if start_idx == -1 or end_idx == -1:
    print("Could not find section boundaries")
    exit(1)

new_s4 = """<section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="flex flex-col lg:flex-row gap-16 items-center">

      {/* Left: Dynamic Dashboard Visual (Bento Grid) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full flex justify-center lg:justify-start lg:order-1 order-2"
      >
        <div className="w-full max-w-2xl bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 relative overflow-hidden">
          
          {/* 1. Post Box (Spans 1 column, 2 rows) */}
          <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 md:row-span-2 flex flex-col">
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
              <div>Klinikler</div>
              <div>Rehber</div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img src="/moda-kedi.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-sm text-slate-800 dark:text-white">Can Kılıç & Mia</div>
                  <div className="text-[10px] text-slate-400">az önce</div>
                </div>
                <MoreHorizontal size={16} className="text-slate-400 ml-auto" />
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                Veteriner kontrolü sonrası Moda parkında keyif ✨🐾
              </p>
              
              <div className="w-full flex-1 rounded-2xl overflow-hidden mb-3 min-h-[160px]">
                <img src="/moda-kedi.jpg" alt="Post" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex items-center gap-4 text-slate-500 text-sm font-medium pt-1">
                <div className="flex items-center gap-1.5 text-rose-500"><Heart size={16} className="fill-current" /> 35</div>
                <div className="flex items-center gap-1.5"><MessageCircle size={16} /> 10</div>
              </div>
            </div>
          </div>

          {/* 2. Adoption Box */}
          <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-fit">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-bold text-slate-800 dark:text-white">Yavru kedi sahiplendirme</div>
              <MoreHorizontal size={16} className="text-slate-400" />
            </div>
            <div className="flex gap-1.5 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md">Kedi</span>
              <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md">Dişi</span>
              <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md">Ankara/Yenimahalle</span>
            </div>
            <div className="text-xs text-slate-500 mb-4">6 aylık, dişi, tekir yavru kedi</div>
            <div className="w-full bg-[#0E3E37] text-white text-xs font-bold py-2.5 rounded-xl text-center shadow-sm">
              Başvuruyu Gönder
            </div>
          </div>

          {/* 3. Guides Box */}
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
                  <div className="text-[10px] text-slate-400">Veteriner hekimlerin gözünden, kaynaklı yazılar</div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>

              {/* Guide 5 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/30 text-[#0E3E37] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Home size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Sahiplendirme</div>
                  <div className="text-[10px] text-slate-400">Yuva arayan dostlar</div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>

            </div>
          </div>
          
        </div>
      </motion.div>

      {/* Right: Text */}
      <div className="flex-1 space-y-6 lg:order-2 order-1 lg:pl-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-fuchsia-500 dark:text-fuchsia-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
          <Users size={16} /> Pati Topluluğu
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight whitespace-pre-line">Yalnız Değilsiniz, Büyük Bir Ailenin Parçasısınız</h2>
        <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
          Hayvanseverlerin buluşma noktasına katılın. Deneyimlerinizi sosyal akışta paylaşın, uzman hekimlerin hazırladığı güvenilir makaleleri okuyun veya yuva arayan patiler için ilan panosunu ziyaret ederek bir hayata dokunun.
        </p>
        
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
              <Search size={24} />
            </div>
            <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
              "Keşfet" Sosyal Akışı ve Eş Bulma Seçenekleri
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
            <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
              Veteriner Hekim Kaynaklı Blog ve Bakım İpuçları
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
              <Home size={24} />
            </div>
            <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
              Uygulama İçi Sahiplendirme İlan Sistemi
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
"""

new_content = content[:start_idx] + new_s4 + content[end_idx:]

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Replaced {end_idx - start_idx} chars with new S4.")
