import re

# Read original
with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Read bad
with open('src/pages/Clinics_bad.tsx', 'r') as f:
    bad_content = f.read()

# 1. Replace "Neden Veterito" in content with Bento from bad_content
# Find Bento in bad_content
bento_match = re.search(r'\{/\* =========================================\n\s*3\. FEATURE HIGHLIGHTS \(Bento Box\).*?</section>', bad_content, re.DOTALL)
if bento_match:
    bento_code = bento_match.group(0)
    # The bento code in bad_content is currently numbered 3, but in original it was numbered 5
    bento_code = bento_code.replace("3. FEATURE HIGHLIGHTS (Bento Box)", "5. FEATURE HIGHLIGHTS (Neden Veterito)")
    
    # Find Neden Veterito in original content
    old_bento_match = re.search(r'\{/\* =========================================\n\s*5\. FEATURE HIGHLIGHTS \(Neden Veterito\).*?</section>', content, re.DOTALL)
    if old_bento_match:
        content = content.replace(old_bento_match.group(0), bento_code)

# 2. Add borders to list items in content
# Profile UI (Sky, Rose, Purple)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <Stethoscope',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-sky-200 dark:border-sky-900/50 shadow-sm">\n                    <Stethoscope'
)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <MapPin',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-rose-200 dark:border-rose-900/50 shadow-sm">\n                    <MapPin'
)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <Award',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-900/50 shadow-sm">\n                    <Award'
)

# Calendar UI (Indigo, Teal, Amber)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <CalendarDays',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm">\n                    <CalendarDays'
)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <LayoutDashboard',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-teal-200 dark:border-teal-900/50 shadow-sm">\n                    <LayoutDashboard'
)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <Bell',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-900/50 shadow-sm">\n                    <Bell'
)

# Records UI (Teal, Emerald, Indigo)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <FileText',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-teal-200 dark:border-teal-900/50 shadow-sm">\n                    <FileText'
)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <Activity',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-900/50 shadow-sm">\n                    <Activity'
)
content = content.replace(
    '<li className="flex-1 flex gap-3 items-start bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">\n                    <CheckCircle2',
    '<li className="flex-1 flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm">\n                    <CheckCircle2'
)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)

