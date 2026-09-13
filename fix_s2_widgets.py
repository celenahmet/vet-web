with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# 1. We need to find the Kilo Ölçümleri chart and replace the SVG path.
# Old path: <path d="M 5,35 L 95,5" fill="none" stroke="#059669" strokeWidth="1.5" />
# We want it fluctuating. 5,35 -> 25,25 -> 50,30 -> 75,15 -> 95,5
new_svg_path = """
                      <path d="M 5,35 L 25,25 L 50,30 L 75,15 L 95,5" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="5" cy="35" r="2.5" fill="#059669" />
                      <circle cx="25" cy="25" r="2.5" fill="#059669" />
                      <circle cx="50" cy="30" r="2.5" fill="#059669" />
                      <circle cx="75" cy="15" r="2.5" fill="#059669" />
                      <circle cx="95" cy="5" r="2.5" fill="#059669" />
"""

# Replace the old SVG content with the new fluctuating path
svg_pattern = r'<path d="M 5,35 L 95,5" fill="none" stroke="#059669" strokeWidth="1\.5" />\s*<circle cx="5" cy="35" r="2\.5" fill="#059669" />\s*<circle cx="95" cy="5" r="2\.5" fill="#059669" />'
content = re.sub(svg_pattern, new_svg_path.strip(), content)

# Remove the sm:col-span-2 from the Kilo chart container so it takes 1 column in a 2x2 grid.
content = content.replace('className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 sm:col-span-2"', 'className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50"')

# 2. Add the Beslenme Kaydı Ekle widget.
# Let's insert it right after the Kilo Ölçümleri widget (which is the last card in the grid).
beslenme_html = """
                {/* 4. Beslenme Kaydı Ekle Özeti */}
                <div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-3 text-slate-800 dark:text-white font-bold text-[13px]">
                    <ArrowLeft size={16} className="text-slate-400" />
                    {t('feat_s2_nutrition_add_title')}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">{t('feat_s2_nutrition_type')}</div>
                      <div className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-1 rounded-full inline-block">
                        {t('feat_s2_nutrition_type_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">{t('feat_s2_nutrition_brand')}</div>
                      <div className="text-slate-700 dark:text-slate-200 text-[11px] font-bold">
                        {t('feat_s2_nutrition_brand_opt')}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 p-3 rounded-xl flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-medium">{t('feat_s2_nutrition_daily')}</div>
                      <div className="text-slate-700 dark:text-slate-200 text-[11px] font-bold">
                        {t('feat_s2_nutrition_daily_opt')}
                      </div>
                    </div>
                  </div>
                </div>
"""

# Insert beslenme_html before the closing div of the grid.
kilo_end_pattern = r'25\.08\.2026 • 2\.3 kg</div>\s*</div>\s*</div>'
kilo_match = re.search(kilo_end_pattern, content)

if kilo_match:
    insert_pos = kilo_match.end()
    content = content[:insert_pos] + "\n" + beslenme_html + content[insert_pos:]

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Widgets updated successfully!")
