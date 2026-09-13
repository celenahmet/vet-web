import json

def update_locales():
    for file in ['src/locales/tr.json', 'src/locales/en.json']:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        if file == 'src/locales/tr.json':
            data['feat_s3_ui_msg_name'] = 'Mutlu Patiler Kliniği'
        else:
            data['feat_s3_ui_msg_name'] = 'Happy Paws Clinic'
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Locales updated.")
