import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Chat bubble - move even more to the left
content = content.replace(
    'className="absolute -left-8 -bottom-16 lg:-left-28 lg:-bottom-12 w-[260px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"',
    'className="absolute -left-8 -bottom-16 lg:-left-36 lg:-bottom-16 w-[260px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Chat card moved further left.")
