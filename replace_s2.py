with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# We will match the entire <section> containing 'feat_new_s2_title'
pattern = r'<section className="min-h-\[100dvh\] h-auto lg:h-\[100dvh\] snap-start snap-always py-20 lg:py-0 flex items-center bg-\[var\(--bg-main\)\] border-b border-\[var\(--border-color\)\]">.*?feat_new_s2_title.*?</section>'
match = re.search(pattern, content, re.DOTALL)
if not match:
    print("Could not find section 2")
    exit(1)

new_s2 = """<section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start snap-always py-20 lg:py-0 flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Dynamic Dashboard Visual (3-Card Stack) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full flex justify-center lg:justify-start lg:order-1 order-2"
            >
              <div className="w-full max-w-md bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 flex flex-col gap-4 relative overflow-hidden">
                
                {/* 1. Kişisel Hatırlatmalar */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px]">{t('feat_s2_reminders_title')}</h3>
                    <Plus size={18} className="text-emerald-600 dark:text-emerald-400 cursor-pointer" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                        <AlertTriangle size={16} className="text-rose-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-white text-[13px]">{t('feat_s2_reminder_1')}</div>
                        <div className="text-[10px] text-slate-400">{t('feat_s2_reminder_1_desc')}</div>
                      </div>
                      <div className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap">
                        {t('feat_s2_reminder_1_time')}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                        <Bell size={16} className="text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-white text-[13px]">{t('feat_s2_reminder_2')}</div>
                        <div className="text-[10px] text-slate-400">{t('feat_s2_reminder_2_desc')}</div>
                      </div>
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap">
                        {t('feat_s2_reminder_2_time')}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                        <Bell size={16} className="text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-white text-[13px]">{t('feat_s2_reminder_3')}</div>
                        <div className="text-[10px] text-slate-400">{t('feat_s2_reminder_3_desc')}</div>
                      </div>
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap">
                        {t('feat_s2_reminder_3_time')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Kilo Ölçümleri (Grafik) */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <h3 className="font-bold text-slate-800 dark:text-white text-[15px] mb-1">{t('feat_s2_weight_title')}</h3>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="font-black text-2xl text-slate-800 dark:text-white leading-none">{t('feat_s2_weight_main')}</span>
                    <span className="text-amber-500 text-xs font-bold leading-none mb-1">{t('feat_s2_weight_diff')}</span>
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="relative h-20 w-full mt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M 5,35 L 95,5" fill="none" stroke="#059669" strokeWidth="1.5" />
                      <circle cx="5" cy="35" r="2.5" fill="#059669" />
                      <circle cx="95" cy="5" r="2.5" fill="#059669" />
                    </svg>
                    <div className="absolute -bottom-4 left-0 text-[9px] text-slate-400">23.08.2026 • 1 kg</div>
                    <div className="absolute -bottom-4 right-0 text-[9px] text-slate-400">25.08.2026 • 2.3 kg</div>
                  </div>
                </div>

                {/* 3. Alerji / Kronik Durum Ekle Özeti */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-3 text-slate-800 dark:text-white font-bold text-[13px]">
                    <ArrowLeft size={16} className="text-slate-400" />
                    {t('feat_s2_allergy_add_title')}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-medium mb-1">{t('feat_s2_allergy_type')}</div>
                      <div className="bg-emerald-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full inline-block">
                        {t('feat_s2_allergy_type_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-medium mb-1">{t('feat_s2_allergy_level')}</div>
                      <div className="bg-emerald-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full inline-block">
                        {t('feat_s2_allergy_level_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl">
                       <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t('feat_s2_allergy_name')}</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right: Text */}
            <div className="flex-1 space-y-6 lg:order-2 order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-indigo-600 dark:text-indigo-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <Bell size={16} /> {t('feat_s2_badge')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight whitespace-pre-line">{t('feat_new_s2_title')}</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                {t('feat_new_s2_desc')}
              </p>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                    <Bell size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s2_li1')}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                    <Activity size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s2_li2')}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s2_li3')}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>"""

content = content[:match.start()] + new_s2 + content[match.end():]

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Section 2 replaced successfully!")
