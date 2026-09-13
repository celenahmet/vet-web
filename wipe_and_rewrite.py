import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all SECTION 4 instances
def remove_s4(text):
    start = text.find("{/* =========================================\n    SECTION 4: Topluluk (Community & Blog)\n========================================= */}")
    if start == -1: return text
    
    # find the next section to know where this one ends
    next_section = text.find("<section", start + 100)
    
    return text[:start] + text[next_section:]

c1 = remove_s4(content)
c2 = remove_s4(c1)
c3 = remove_s4(c2)

# Now we have a clean slate. Find the end of Section 3.
# Section 3 text uses feat_new_s3_title
s3_idx = c3.find("feat_new_s3_title")
s3_end = c3.find("</section>", s3_idx)
s3_end = s3_end + len("</section>")

pristine_s4 = """

{/* =========================================
    SECTION 4: Topluluk (Community & Blog)
========================================= */}
<section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
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
              <h3 className="font-extrabold text-xl text-slate-800 dark:text-white">{t('feat_s4_ui_title')}</h3>
              <div className="flex gap-2">
                 <Search size={18} className="text-slate-400" />
                 <Plus size={18} className="text-fuchsia-500" />
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-slate-100 dark:border-zinc-700/50 pb-2 mb-4 text-xs font-bold text-slate-400">
              <div className="text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-2 -mb-[9px]">{t('feat_s4_ui_tab_explore')}</div>
              <div>{t('feat_s4_ui_tab_follow')}</div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img src="/moda-kedi.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-sm text-slate-800 dark:text-white">{t('feat_s4_ui_post_user')}</div>
                  <div className="text-[10px] text-slate-400">{t('feat_s4_ui_post_time')}</div>
                </div>
                <MoreHorizontal size={16} className="text-slate-400 ml-auto" />
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                {t('feat_s4_ui_post_text')}
              </p>
              
              <div className="w-full flex-1 rounded-2xl overflow-hidden mb-3 min-h-[150px]">
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
            <div className="text-sm font-bold text-slate-800 dark:text-white mb-2">{t('feat_s4_ui_adopt_title')}</div>
            <div className="flex gap-1.5 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-bold rounded-md">{t('feat_s4_ui_adopt_tag1')}</span>
              <span className="px-2 py-0.5 bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-bold rounded-md">{t('feat_s4_ui_adopt_tag2')}</span>
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-zinc-700/50 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-md">{t('feat_s4_ui_adopt_tag3')}</span>
            </div>
            <div className="text-xs text-slate-500 mb-4">{t('feat_s4_ui_adopt_desc')}</div>
            <div className="w-full bg-[#0E3E37] text-white text-xs font-bold py-2.5 rounded-xl text-center">
              {t('feat_s4_ui_adopt_btn')}
            </div>
          </div>

          {/* 3. Guides Box */}
          <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-fit">
             <div className="space-y-3">
              {/* Guide 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <PawPrint size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_1')}</div>
                  <div className="text-[10px] text-slate-400">{t('feat_s4_ui_guide_1_desc')}</div>
                </div>
              </div>
              
              {/* Guide 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_2')}</div>
                  <div className="text-[10px] text-slate-400">{t('feat_s4_ui_guide_2_desc')}</div>
                </div>
              </div>
              
              {/* Guide 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <Activity size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_3')}</div>
                  <div className="text-[10px] text-slate-400">{t('feat_s4_ui_guide_3_desc')}</div>
                </div>
              </div>

              {/* Guide 4 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_4')}</div>
                  <div className="text-[10px] text-slate-400">{t('feat_s4_ui_guide_4_desc')}</div>
                </div>
              </div>

              {/* Guide 5 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <Home size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_5')}</div>
                  <div className="text-[10px] text-slate-400">{t('feat_s4_ui_guide_5_desc')}</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </motion.div>

      {/* Right: Text */}
      <div className="flex-1 space-y-6 lg:order-2 order-1 lg:pl-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-fuchsia-500 dark:text-fuchsia-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
          <Users size={16} /> {t('feat_s4_badge')}
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight whitespace-pre-line">{t('feat_new_s4_title')}</h2>
        <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
          {t('feat_new_s4_desc')}
        </p>
        
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
              <Search size={24} />
            </div>
            <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
              {t('feat_new_s4_li1')}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
            <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
              {t('feat_new_s4_li2')}
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-500 flex items-center justify-center shrink-0">
              <Home size={24} />
            </div>
            <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
              {t('feat_new_s4_li3')}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
"""

final_content = c3[:s3_end] + pristine_s4 + c3[s3_end:]
with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Rewrote Features.tsx to remove duplicates and fix right side text.")
