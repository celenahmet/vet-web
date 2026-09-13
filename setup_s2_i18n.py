import json

new_keys_tr = {
    "feat_new_s2_title": "Hiçbir Aşama Gözden Kaçmasın",
    "feat_new_s2_desc": "Yaklaşan randevularınızı, gecikmiş aşıları ve periyodik bakımları sizin yerinize biz takip ediyoruz. Özel diyetlerden kronik durumlara kadar tüm tıbbi geçmiş elinizin altında.",
    "feat_new_s2_li1": "Gecikmiş İşlem ve Akıllı Aşı Uyarı Sistemi",
    "feat_new_s2_li2": "Grafiksel Kilo Takibi ve Diyet Düzeni Kaydı",
    "feat_new_s2_li3": "Alerji, İlaç Reaksiyonu ve Müdahale Takibi",
    "feat_s2_badge": "Takip ve Kayıt",
    "feat_s2_reminders_title": "Kişisel Hatırlatmalarım",
    "feat_s2_reminder_1": "Kusma",
    "feat_s2_reminder_1_desc": "Senorita • 05.09.2026",
    "feat_s2_reminder_1_time": "1 gün kaldı",
    "feat_s2_reminder_2": "Test2",
    "feat_s2_reminder_2_desc": "Senorita • 07.09.2026",
    "feat_s2_reminder_2_time": "3 gün kaldı",
    "feat_s2_reminder_3": "Genel muayene",
    "feat_s2_reminder_3_desc": "Senorita • 10.09.2026",
    "feat_s2_reminder_3_time": "6 gün kaldı",
    "feat_s2_weight_title": "Kilo Ölçümleri",
    "feat_s2_weight_main": "2.3 kg",
    "feat_s2_weight_diff": "+1.3 kg",
    "feat_s2_allergy_add_title": "Alerji / Kronik Durum Ekle",
    "feat_s2_allergy_type": "Durum türü",
    "feat_s2_allergy_type_opt": "Alerji",
    "feat_s2_allergy_name": "Tavuk proteini alerjisi",
    "feat_s2_allergy_level": "Şiddet",
    "feat_s2_allergy_level_opt": "Orta"
}

new_keys_en = {
    "feat_new_s2_title": "Let No Stage Go Unnoticed",
    "feat_new_s2_desc": "We track your upcoming appointments, overdue vaccinations, and periodic care for you. From special diets to chronic conditions, all medical history is at your fingertips.",
    "feat_new_s2_li1": "Overdue Action and Smart Vaccination Alert System",
    "feat_new_s2_li2": "Graphical Weight Tracking and Diet Routine Record",
    "feat_new_s2_li3": "Allergy, Drug Reaction and Intervention Tracking",
    "feat_s2_badge": "Tracking & Records",
    "feat_s2_reminders_title": "My Personal Reminders",
    "feat_s2_reminder_1": "Vomiting",
    "feat_s2_reminder_1_desc": "Senorita • 05.09.2026",
    "feat_s2_reminder_1_time": "1 day left",
    "feat_s2_reminder_2": "Test2",
    "feat_s2_reminder_2_desc": "Senorita • 07.09.2026",
    "feat_s2_reminder_2_time": "3 days left",
    "feat_s2_reminder_3": "General Exam",
    "feat_s2_reminder_3_desc": "Senorita • 10.09.2026",
    "feat_s2_reminder_3_time": "6 days left",
    "feat_s2_weight_title": "Weight Measurements",
    "feat_s2_weight_main": "2.3 kg",
    "feat_s2_weight_diff": "+1.3 kg",
    "feat_s2_allergy_add_title": "Add Allergy / Chronic Condition",
    "feat_s2_allergy_type": "Condition Type",
    "feat_s2_allergy_type_opt": "Allergy",
    "feat_s2_allergy_name": "Chicken protein allergy",
    "feat_s2_allergy_level": "Severity",
    "feat_s2_allergy_level_opt": "Medium"
}

def update_json(file_path, new_keys):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(new_keys)
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_json('src/locales/tr.json', new_keys_tr)
update_json('src/locales/en.json', new_keys_en)

print("i18n updated successfully!")
