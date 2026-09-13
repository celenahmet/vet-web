import json

# 1. Update tr.json
try:
    with open('src/locales/tr.json', 'r', encoding='utf-8') as f:
        data_tr = json.load(f)
    if 'feat_new_s1_title' in data_tr:
        data_tr['feat_new_s1_title'] = "Can Dostunuzun Sağlığı\nArtık Cebinizde"
    with open('src/locales/tr.json', 'w', encoding='utf-8') as f:
        json.dump(data_tr, f, ensure_ascii=False, indent=2)
except Exception as e:
    print(f"Error updating tr.json: {e}")

# 2. Update en.json (just in case it needs \n too)
try:
    with open('src/locales/en.json', 'r', encoding='utf-8') as f:
        data_en = json.load(f)
    if 'feat_new_s1_title' in data_en:
        old_en = data_en['feat_new_s1_title']
        # If it doesn't have a newline, let's just insert one roughly in the middle, or leave it.
        # It's better to just put a \n if possible. "Your Best Friend's Health\nNow in Your Pocket"
        data_en['feat_new_s1_title'] = "Your Pet's Health\nNow in Your Pocket"
    with open('src/locales/en.json', 'w', encoding='utf-8') as f:
        json.dump(data_en, f, ensure_ascii=False, indent=2)
except Exception as e:
    print(f"Error updating en.json: {e}")

# 3. Update Features.tsx to add whitespace-pre-line
with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add whitespace-pre-line to the h2
content = content.replace(
    'className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight tracking-tight"',
    'className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight tracking-tight whitespace-pre-line"'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Title wrap fixed!")
