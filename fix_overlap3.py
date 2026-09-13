import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the container and main card positioning
content = content.replace(
    '<div className="w-full max-w-[560px] relative h-[550px] lg:h-[700px] flex items-center justify-center">',
    '<div className="w-full max-w-[380px] relative lg:ml-8 mt-12 lg:mt-0 flex flex-col items-center justify-center mb-24 lg:mb-0">'
)

content = content.replace(
    '<div className="absolute right-0 top-0 w-full lg:w-[90%] max-w-[380px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-zinc-800 z-10 flex flex-col gap-4">',
    '<div className="w-full bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-zinc-800 z-10 flex flex-col gap-4 relative">'
)

# Chat bubble
content = content.replace(
    'className="absolute -left-6 -bottom-6 lg:-left-24 lg:-bottom-10 w-[250px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"',
    'className="absolute -left-8 -bottom-16 lg:-left-20 lg:-bottom-12 w-[260px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"'
)

# Rating bubble
content = content.replace(
    'className="absolute -right-4 -bottom-16 lg:-right-24 lg:-bottom-24 w-[250px] bg-white dark:bg-zinc-900 rounded-[2rem] p-5 shadow-2xl border border-slate-100 dark:border-zinc-800 z-20 flex flex-col gap-4 hidden sm:flex"',
    'className="absolute -right-8 -bottom-24 lg:-right-16 lg:-bottom-24 w-[260px] bg-white dark:bg-zinc-900 rounded-[2rem] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-zinc-800 z-20 flex flex-col gap-4 hidden sm:flex"'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Overlap fixed perfectly.")
