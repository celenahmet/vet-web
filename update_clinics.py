import json

def update_locales():
    # TR
    with open('src/locales/tr.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['feat_s3_ui_clinic1'] = "Sevgi Patileri Hayvan Hastanesi"
    data['feat_s3_ui_clinic1_addr'] = "Güneşli Sokak No: 14, Kadıköy"
    data['feat_s3_ui_clinic2'] = "Minik Dostlar Veteriner Kliniği"
    data['feat_s3_ui_clinic2_addr'] = "Menekşe Bulvarı No: 5, Karşıyaka"
    with open('src/locales/tr.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # EN
    with open('src/locales/en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['feat_s3_ui_clinic1'] = "Loving Paws Animal Hospital"
    data['feat_s3_ui_clinic1_addr'] = "Gunesli Street No: 14, Kadikoy"
    data['feat_s3_ui_clinic2'] = "Little Friends Veterinary Clinic"
    data['feat_s3_ui_clinic2_addr'] = "Menekse Boulevard No: 5, Karsiyaka"
    with open('src/locales/en.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Clinic names updated.")
