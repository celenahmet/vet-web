import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update overall card position and width to shift it left, down, and make it wider
# Old: className="absolute -left-8 -bottom-16 lg:-left-36 lg:-bottom-16 w-[320px] bg-[#FAF8F5]
# New: className="absolute -left-8 -bottom-16 lg:-left-48 lg:-bottom-20 w-[360px] bg-[#FAF8F5]
content = content.replace(
    'className="absolute -left-8 -bottom-16 lg:-left-36 lg:-bottom-16 w-[320px] bg-[#FAF8F5]',
    'className="absolute -left-8 -bottom-16 lg:-left-48 lg:-bottom-20 w-[380px] bg-[#FAF8F5]'
)

# 2. Reduce padding and gaps in header
content = content.replace(
    '<div className="flex items-center justify-between p-4 pb-2 border-b border-slate-200 dark:border-zinc-800">',
    '<div className="flex items-center justify-between p-3 pb-2 border-b border-slate-200 dark:border-zinc-800">'
)

# 3. Reduce padding and gaps in chat body
content = content.replace(
    '<div className="p-4 flex flex-col gap-3">',
    '<div className="p-3 flex flex-col gap-1.5">'
)

# 4. Remove the date badge entirely to save vertical space
content = content.replace(
    '''<div className="flex justify-center">
                        <span className="text-[10px] text-slate-400 font-medium px-2 bg-white dark:bg-zinc-800 rounded-full">{t('feat_s3_ui_msg_date')}</span>
                      </div>''',
    ''
)

# 5. Remove timestamps to save vertical space
content = content.replace(
    '''<div className="text-[10px] text-slate-400 font-medium ml-1 mb-1">{t('feat_s3_ui_msg_time')}</div>''',
    ''
)
content = content.replace(
    '''<div className="text-[10px] text-slate-400 font-medium mr-1 text-right">{t('feat_s3_ui_msg_reply_time')}</div>''',
    ''
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Chat shape and position updated.")
