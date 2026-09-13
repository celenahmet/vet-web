import json

def update_locales():
    # TR
    with open('src/locales/tr.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['feat_s3_ui_city'] = "İstanbul"
    data['feat_s3_ui_district'] = "Kadıköy"
    with open('src/locales/tr.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # EN
    with open('src/locales/en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['feat_s3_ui_city'] = "Istanbul"
    data['feat_s3_ui_district'] = "Kadikoy"
    with open('src/locales/en.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("City/district updated.")
