import json

def update_json(file_path, lang):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if lang == 'tr':
        data['feat_s2_weight_main'] = "1.7 kg"
        data['feat_s2_weight_diff'] = "+1.2 kg"
        data['feat_s2_reminder_2'] = "İç parazit aşısı"
    elif lang == 'en':
        data['feat_s2_weight_main'] = "1.7 kg"
        data['feat_s2_weight_diff'] = "+1.2 kg"
        data['feat_s2_reminder_2'] = "Internal parasite vaccine"

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_json('src/locales/tr.json', 'tr')
update_json('src/locales/en.json', 'en')

print("i18n updated successfully!")
