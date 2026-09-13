import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Header Avatar
old_avatar = '''<div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                          <User size={16}/>
                        </div>'''
new_avatar = '''<div className="w-8 h-8 rounded-full bg-teal-100 shrink-0 overflow-hidden border border-teal-200">
                          <img src="https://images.unsplash.com/photo-1612349317150-e410f624c427?auto=format&fit=crop&q=80&w=150&h=150" alt="Vet Profile" className="w-full h-full object-cover" />
                        </div>'''
content = content.replace(old_avatar, new_avatar)


# Replace Chat Body to add Client Message
old_chat = '''<div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-slate-100 dark:border-zinc-700">
                        <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                          {t('feat_s3_ui_msg_content')}
                        </p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium ml-1">{t('feat_s3_ui_msg_time')}</div>'''

new_chat = '''<div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-slate-100 dark:border-zinc-700 w-11/12">
                        <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                          {t('feat_s3_ui_msg_content')}
                        </p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium ml-1 mb-1">{t('feat_s3_ui_msg_time')}</div>

                      <div className="bg-teal-600 dark:bg-teal-500 rounded-2xl rounded-tr-sm p-3 shadow-sm self-end max-w-[85%]">
                        <p className="text-[13px] text-white leading-relaxed font-medium">
                          {t('feat_s3_ui_msg_reply_content')}
                        </p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium mr-1 text-right">{t('feat_s3_ui_msg_reply_time')}</div>'''

content = content.replace(old_chat, new_chat)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Chat updated.")
