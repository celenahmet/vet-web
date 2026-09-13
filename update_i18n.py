import json

def update_json(file_path, lang):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if lang == 'tr':
        data['feat_new_s2_li2'] = "Grafiksel Kilo Takibi ve Beslenme Takibi"
        data['feat_s2_reminders_title'] = "Yakındakiler"
        data['feat_s2_nutrition_add_title'] = "Beslenme Kaydı Ekle"
        data['feat_s2_nutrition_type'] = "Mama türü"
        data['feat_s2_nutrition_type_opt'] = "Kuru mama"
        data['feat_s2_nutrition_brand'] = "Mama markası"
        data['feat_s2_nutrition_brand_opt'] = "Royal Canin Kitten"
        data['feat_s2_nutrition_daily'] = "Günlük miktar"
        data['feat_s2_nutrition_daily_opt'] = "60 gr"
    elif lang == 'en':
        data['feat_new_s2_li2'] = "Graphical Weight Tracking and Nutrition Tracking"
        data['feat_s2_reminders_title'] = "Upcoming"
        data['feat_s2_nutrition_add_title'] = "Add Nutrition Record"
        data['feat_s2_nutrition_type'] = "Food Type"
        data['feat_s2_nutrition_type_opt'] = "Dry Food"
        data['feat_s2_nutrition_brand'] = "Food Brand"
        data['feat_s2_nutrition_brand_opt'] = "Royal Canin Kitten"
        data['feat_s2_nutrition_daily'] = "Daily Amount"
        data['feat_s2_nutrition_daily_opt'] = "60 gr"

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_json('src/locales/tr.json', 'tr')
update_json('src/locales/en.json', 'en')

print("i18n updated successfully!")
