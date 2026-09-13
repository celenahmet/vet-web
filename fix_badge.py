import json

# Update json files
new_keys_tr = {"feat_s1_badge": "Sağlık Yönetimi"}
new_keys_en = {"feat_s1_badge": "Health Management"}

def update_json(file_path, new_keys):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(new_keys)
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_json('src/locales/tr.json', new_keys_tr)
update_json('src/locales/en.json', new_keys_en)

# Update Features.tsx
with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("> {'Sağlık Yönetimi'}", "> {t('feat_s1_badge')}")

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Badge updated successfully!")
