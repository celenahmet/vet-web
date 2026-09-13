import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

s4_code = """
{/* =========================================
    SECTION 4: Topluluk (Community & Blog)
========================================= */}
<section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="flex flex-col lg:flex-row gap-16 items-center">

      {/* Left: Dashboard Collage */}
      <div className="flex-1 w-full max-w-lg relative lg:order-1 order-2">
        {/* Main Base Card (Post) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-zinc-800 flex flex-col z-10 w-[300px] sm:w-[360px] mx-auto lg:mr-auto lg:ml-8 aspect-[4/5] overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-extrabold text-xl text-slate-800 dark:text-white">{t('feat_s4_ui_title')}</h3>
            <div className="flex gap-3 text-slate-400">
              <Search size={20} />
              <Plus size={20} className="text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-full p-0.5" />
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-4 border-b border-slate-100 dark:border-zinc-800 pb-2 mb-4 text-[13px] font-bold">
            <div className="text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-2 -mb-[9px]">{t('feat_s4_ui_tab_explore')}</div>
            <div className="text-slate-400">{t('feat_s4_ui_tab_follow')}</div>
            <div className="text-slate-400">{t('feat_s4_ui_tab_clinics')}</div>
            <div className="text-slate-400">{t('feat_s4_ui_tab_guide')}</div>
          </div>

          {/* Post */}
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <img src="/moda-kedi.jpg" alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-slate-100" />
              <div>
                <div className="font-bold text-sm text-slate-800 dark:text-white">{t('feat_s4_ui_post_user')}</div>
                <div className="text-[10px] text-slate-400">{t('feat_s4_ui_post_time')}</div>
              </div>
              <MoreHorizontal size={16} className="text-slate-400 ml-auto" />
            </div>
            
            <p className="text-[13px] text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
              {t('feat_s4_ui_post_text')}
            </p>
            
            <div className="w-full flex-1 rounded-2xl overflow-hidden mb-3 bg-slate-100 relative">
              <img src="/moda-kedi.jpg" alt="Post" className="w-full h-full object-cover" />
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-1.5 text-rose-500"><Heart size={18} className="fill-current" /> 35</div>
              <div className="flex items-center gap-1.5"><MessageCircle size={18} /> 10</div>
              <div className="flex items-center gap-1.5 ml-auto"><Share2 size={18} /></div>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 1: Adoption Form (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -left-4 sm:-left-12 -bottom-8 w-[220px] bg-white dark:bg-zinc-900 rounded-[1.5rem] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-zinc-800 z-20 hidden sm:block"
        >
          <div className="text-xs font-bold text-slate-800 dark:text-white mb-2">{t('feat_s4_ui_adopt_title')}</div>
          <div className="flex gap-1.5 mb-2 flex-wrap">
            <span className="px-2 py-0.5 bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400 text-[9px] font-bold rounded-md">{t('feat_s4_ui_adopt_tag1')}</span>
            <span className="px-2 py-0.5 bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400 text-[9px] font-bold rounded-md">{t('feat_s4_ui_adopt_tag2')}</span>
            <span className="px-2 py-0.5 bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold rounded-md">{t('feat_s4_ui_adopt_tag3')}</span>
          </div>
          <div className="text-[10px] text-slate-500 mb-3">{t('feat_s4_ui_adopt_desc')}</div>
          <div className="w-full bg-[#0E3E37] text-white text-[10px] font-bold py-2 rounded-xl text-center">
            {t('feat_s4_ui_adopt_btn')}
          </div>
        </motion.div>

        {/* Floating Card 2: Guide Menu (Top Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -right-4 sm:-right-8 top-12 w-[180px] bg-white dark:bg-zinc-900 rounded-[1.5rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-20 hidden sm:block"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                <PawPrint size={14} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_1')}</div>
                <div className="text-[8px] text-slate-400 truncate w-[100px]">{t('feat_s4_ui_guide_1_desc')}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-1.5 hover:bg-slate-50 rounded-lg transition-colors border-t border-slate-100 dark:border-zinc-800">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-100/50 dark:bg-fuchsia-900/30 text-fuchsia-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={14} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s4_ui_guide_2')}</div>
                <div className="text-[8px] text-slate-400 truncate w-[100px]">{t('feat_s4_ui_guide_2_desc')}</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

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

target = '<section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 snap-always flex items-center justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)] overflow-hidden">'
if target in content:
    new_content = content.replace(target, s4_code + target)
    with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Section 4 inserted.")
else:
    print("Target section not found.")
