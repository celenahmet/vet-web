import json

def update_locales():
    # TR
    with open('src/locales/tr.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['feat_s3_ui_clinic2_addr'] = "Menekşe Bulvarı No: 5, Kadıköy"
    with open('src/locales/tr.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # EN
    with open('src/locales/en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['feat_s3_ui_clinic2_addr'] = "Menekse Boulevard No: 5, Kadikoy"
    with open('src/locales/en.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Address updated.")
