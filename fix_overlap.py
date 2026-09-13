import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Chat Bubble Position
# Old: className="absolute -left-2 bottom-12 lg:-left-6 lg:bottom-16 w-[280px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"
# New: className="absolute -left-4 bottom-4 lg:-left-16 lg:-bottom-4 w-[280px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"
content = content.replace(
    'className="absolute -left-2 bottom-12 lg:-left-6 lg:bottom-16 w-[280px] bg-[#FAF8F5]',
    'className="absolute -left-4 bottom-4 lg:-left-16 lg:-bottom-4 w-[260px] bg-[#FAF8F5]'
)

# Fix Rating Card Position
# Old: className="absolute right-0 -bottom-4 lg:-right-12 lg:-bottom-12 w-[280px] bg-white dark:bg-zinc-900 rounded-[2rem] p-5 shadow-2xl border border-slate-100 dark:border-zinc-800 z-20 flex flex-col gap-4 hidden sm:flex"
# New: className="absolute right-0 -bottom-8 lg:-right-16 lg:-bottom-20 w-[280px] bg-white dark:bg-zinc-900 rounded-[2rem] p-5 shadow-2xl border border-slate-100 dark:border-zinc-800 z-20 flex flex-col gap-4 hidden sm:flex"
content = content.replace(
    'className="absolute right-0 -bottom-4 lg:-right-12 lg:-bottom-12 w-[280px] bg-white',
    'className="absolute right-0 -bottom-8 lg:-right-16 lg:-bottom-20 w-[260px] bg-white'
)

# Let's also adjust the main container slightly if needed so it doesn't get clipped.
# Old: <div className="w-full max-w-lg relative h-[500px] lg:h-[600px] flex items-center justify-center">
# New: <div className="w-full max-w-lg relative h-[520px] lg:h-[620px] flex items-center justify-center">
content = content.replace(
    '<div className="w-full max-w-lg relative h-[500px] lg:h-[600px] flex items-center justify-center">',
    '<div className="w-full max-w-lg relative h-[520px] lg:h-[640px] flex items-center justify-center">'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Overlap fixed.")
