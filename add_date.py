import json

# Update translation
def update_locales():
    for file in ['src/locales/tr.json', 'src/locales/en.json']:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        data['feat_s3_ui_msg_date'] = '24.08.2026'
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()

# Update React component
with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = '''{/* Chat Body */}
                   <div className="p-3 flex flex-col gap-1.5">
                      <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-slate-100 dark:border-zinc-700 w-11/12">'''

new_code = '''{/* Chat Body */}
                   <div className="p-3 flex flex-col gap-1.5">
                      <div className="flex justify-center mb-1">
                        <span className="text-[9px] text-slate-400 font-medium px-2.5 py-0.5 bg-slate-100 dark:bg-zinc-800 rounded-full">{t('feat_s3_ui_msg_date')}</span>
                      </div>
                      <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-slate-100 dark:border-zinc-700 w-11/12">'''

content = content.replace(old_code, new_code)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Date added.")
