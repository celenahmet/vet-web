import json
import re

# New translations to add
new_keys_tr = {
    "feat_s1_summary_title": "Sağlık Özeti",
    "feat_s1_weight_label": "Kilo",
    "feat_s1_delayed_label": "Geciken",
    "feat_s1_next_label": "Sonraki",
    "feat_s1_vax_name": "Karma Aşı (1. Doz)",
    "feat_s1_card_title": "Dijital Sağlık Kartı",
    "feat_s1_type_label": "Tür",
    "feat_s1_type_cat": "Kedi",
    "feat_s1_breed_label": "Irk",
    "feat_s1_breed_british": "British Shorthair",
    "feat_s1_age_label": "Yaş",
    "feat_s1_age_val": "5 aylık",
    "feat_s1_last_measure": "Son ölçüm:",
    "feat_s1_neutered_label": "Kısırlaştırma",
    "feat_s1_neutered_false": "Kısırlaştırılmadı",
    "feat_s1_chip_label": "Mikroçip No",
    "feat_s1_em_title": "Acil Sağlık Kartı",
    "feat_s1_gender_female": "Dişi",
    "feat_s1_em_allergy_title": "Alerjiler ve İlaç Reaksiyonları",
    "feat_s1_em_allergy_val": "Tavuk protein alerjisi",
    "feat_s1_em_allergy_level": "Orta",
    "feat_s1_em_chronic_title": "Kronik Durumlar",
    "feat_s1_em_chronic_val": "Astım (Hafif Seviye)",
    "feat_s1_em_owner_title": "Sahibi",
    "feat_s1_em_chip_desc": "Numara varsayılan olarak gizli; göstermek için dokun."
}

new_keys_en = {
    "feat_s1_summary_title": "Health Summary",
    "feat_s1_weight_label": "Weight",
    "feat_s1_delayed_label": "Overdue",
    "feat_s1_next_label": "Next",
    "feat_s1_vax_name": "Combination Vaccine (1st Dose)",
    "feat_s1_card_title": "Digital Health Card",
    "feat_s1_type_label": "Species",
    "feat_s1_type_cat": "Cat",
    "feat_s1_breed_label": "Breed",
    "feat_s1_breed_british": "British Shorthair",
    "feat_s1_age_label": "Age",
    "feat_s1_age_val": "5 months",
    "feat_s1_last_measure": "Last measured:",
    "feat_s1_neutered_label": "Neutered",
    "feat_s1_neutered_false": "Not Neutered",
    "feat_s1_chip_label": "Microchip No",
    "feat_s1_em_title": "Emergency Health Card",
    "feat_s1_gender_female": "Female",
    "feat_s1_em_allergy_title": "Allergies and Drug Reactions",
    "feat_s1_em_allergy_val": "Chicken protein allergy",
    "feat_s1_em_allergy_level": "Medium",
    "feat_s1_em_chronic_title": "Chronic Conditions",
    "feat_s1_em_chronic_val": "Asthma (Mild)",
    "feat_s1_em_owner_title": "Owner",
    "feat_s1_em_chip_desc": "Number hidden by default; tap to reveal."
}

# Update json files
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

replacements = [
    ('>Sağlık Özeti<', '>{t(\'feat_s1_summary_title\')}<'),
    ('>Kilo<', '>{t(\'feat_s1_weight_label\')}<'),
    ('>Geciken<', '>{t(\'feat_s1_delayed_label\')}<'),
    ('>Sonraki<', '>{t(\'feat_s1_next_label\')}<'),
    ('>Karma Aşı (1. Doz)<', '>{t(\'feat_s1_vax_name\')}<'),
    ('>Dijital Sağlık Kartı<', '>{t(\'feat_s1_card_title\')}<'),
    ('>Tür<', '>{t(\'feat_s1_type_label\')}<'),
    ('>Kedi<', '>{t(\'feat_s1_type_cat\')}<'),
    ('>Irk<', '>{t(\'feat_s1_breed_label\')}<'),
    ('>British Shorthair<', '>{t(\'feat_s1_breed_british\')}<'),
    ('>Yaş<', '>{t(\'feat_s1_age_label\')}<'),
    ('>5 aylık<', '>{t(\'feat_s1_age_val\')}<'),
    ('Son ölçüm: 24.08.2026', '{t(\'feat_s1_last_measure\')} 24.08.2026'),
    ('>Kısırlaştırma<', '>{t(\'feat_s1_neutered_label\')}<'),
    ('>Kısırlaştırılmadı<', '>{t(\'feat_s1_neutered_false\')}<'),
    ('>Mikroçip No<', '>{t(\'feat_s1_chip_label\')}<'),
    ('>Acil Sağlık Kartı<', '>{t(\'feat_s1_em_title\')}<'),
    ('Kedi • 5 aylık • Dişi', '{t(\'feat_s1_type_cat\')} • {t(\'feat_s1_age_val\')} • {t(\'feat_s1_gender_female\')}'),
    ('>Alerjiler ve İlaç Reaksiyonları<', '>{t(\'feat_s1_em_allergy_title\')}<'),
    ('Tavuk protein alerjisi', '{t(\'feat_s1_em_allergy_val\')}'),
    ('>Orta<', '>{t(\'feat_s1_em_allergy_level\')}<'),
    ('>Kronik Durumlar<', '>{t(\'feat_s1_em_chronic_title\')}<'),
    ('>Astım (Hafif Seviye)<', '>{t(\'feat_s1_em_chronic_val\')}<'),
    ('>Sahibi<', '>{t(\'feat_s1_em_owner_title\')}<'),
    ('Numara varsayılan olarak gizli; göstermek için dokun.', '{t(\'feat_s1_em_chip_desc\')}')
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("i18n update completed successfully!")
