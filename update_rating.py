import json

def update_locales():
    for file, new_val in [('src/locales/tr.json', '137 değerlendirme'), ('src/locales/en.json', '137 reviews')]:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        data['feat_s3_ui_rating_count'] = new_val
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Locales updated.")
