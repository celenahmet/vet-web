with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Find the Section 2 dashboard container
# It currently has max-w-md and flex-col
old_str = """<div className="w-full max-w-md bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 flex flex-col gap-4 relative overflow-hidden">"""
new_str = """<div className="w-full max-w-xl bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 relative overflow-hidden">"""

content = content.replace(old_str, new_str)

# Now we need to rearrange the children inside.
# Hatırlatmalar is fine.
# Alerji Ekle is fine.
# Kilo Ölçümleri needs to be full width (col-span-2 on sm) and placed at the bottom.
# Let's extract the 3 divs and reorder them.

# 1. Reminders
reminders_pattern = r'\{/\* 1\. Kişisel Hatırlatmalar \*/\}.*?\{/\* 2\. Kilo Ölçümleri \(Grafik\) \*/\}'
reminders_match = re.search(reminders_pattern, content, re.DOTALL)
reminders_html = reminders_match.group(0).replace("{/* 2. Kilo Ölçümleri (Grafik) */}", "").strip()

# 2. Weight
weight_pattern = r'\{/\* 2\. Kilo Ölçümleri \(Grafik\) \*/\}.*?\{/\* 3\. Alerji / Kronik Durum Ekle Özeti \*/\}'
weight_match = re.search(weight_pattern, content, re.DOTALL)
weight_html = weight_match.group(0).replace("{/* 3. Alerji / Kronik Durum Ekle Özeti */}", "").strip()
weight_html = weight_html.replace('<div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">', '<div className="bg-white dark:bg-zinc-800/80 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 sm:col-span-2">')

# 3. Allergy
allergy_pattern = r'\{/\* 3\. Alerji / Kronik Durum Ekle Özeti \*/\}.*?</div>\s*</motion\.div>'
allergy_match = re.search(allergy_pattern, content, re.DOTALL)
allergy_html = allergy_match.group(0).replace("</div>\n            </motion.div>", "").strip()

new_inner = f"""
                {reminders_html}
                
                {allergy_html}

                {weight_html}
              </div>
            </motion.div>
"""

# Replace the inner contents
full_pattern = r'\{/\* 1\. Kişisel Hatırlatmalar \*/\}.*?</motion\.div>'
content = re.sub(full_pattern, new_inner.strip() + "\n            </motion.div>", content, flags=re.DOTALL)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Layout fixed successfully!")
