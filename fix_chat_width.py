import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Change Chat Bubble Width (horizontal expansion)
# Currently it is: className="absolute -left-8 -bottom-16 lg:-left-36 lg:-bottom-16 w-[260px] ... "
content = content.replace(
    'className="absolute -left-8 -bottom-16 lg:-left-36 lg:-bottom-16 w-[260px]',
    'className="absolute -left-8 -bottom-16 lg:-left-36 lg:-bottom-16 w-[320px]'
)

# Replace broken image with Building icon
old_avatar = '''<div className="w-8 h-8 rounded-full bg-teal-100 shrink-0 overflow-hidden border border-teal-200">
                          <img src="https://images.unsplash.com/photo-1612349317150-e410f624c427?auto=format&fit=crop&q=80&w=150&h=150" alt="Vet Profile" className="w-full h-full object-cover" />
                        </div>'''

new_avatar = '''<div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                          <Building2 size={16}/>
                        </div>'''

content = content.replace(old_avatar, new_avatar)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Chat width and avatar updated.")
