import json

def update_locales():
    # TR
    with open('src/locales/tr.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    data.update({
        "feat_s4_badge": "Pati Topluluğu",
        "feat_s4_ui_title": "Topluluk",
        "feat_s4_ui_tab_explore": "Keşfet",
        "feat_s4_ui_tab_follow": "Takip",
        "feat_s4_ui_tab_clinics": "Klinikler",
        "feat_s4_ui_tab_guide": "Rehber",
        "feat_s4_ui_post_user": "Can Kılıç & Mia",
        "feat_s4_ui_post_time": "az önce",
        "feat_s4_ui_post_text": "Veteriner kontrolü sonrası Moda parkında keyif ✨🐾",
        "feat_s4_ui_msg1": "Moda parkında mısınız şu an? 🐕",
        "feat_s4_ui_msg2": "Evet buradayız! Mia diğer kediyle oynuyor, siz de gelin. 😊",
        "feat_s4_ui_adopt_title": "Yavru kedi sahiplendirme",
        "feat_s4_ui_adopt_tag1": "Kedi",
        "feat_s4_ui_adopt_tag2": "Dişi",
        "feat_s4_ui_adopt_tag3": "Kadıköy/Moda",
        "feat_s4_ui_adopt_desc": "6 aylık, dişi, tekir yavru kedi",
        "feat_s4_ui_adopt_btn": "Başvuruyu Gönder",
        "feat_s4_ui_guide_1": "Irk Rehberi",
        "feat_s4_ui_guide_1_desc": "Kedi, köpek ve diğer türlerin ırkları",
        "feat_s4_ui_guide_2": "Aşı Takvimi",
        "feat_s4_ui_guide_2_desc": "Tür bazlı standart aşı programı",
        "feat_s4_ui_guide_3": "Bakım İpuçları",
        "feat_s4_ui_guide_3_desc": "Bakım, beslenme ve acil durum",
    })
    
    with open('src/locales/tr.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # EN
    with open('src/locales/en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    data.update({
        "feat_s4_badge": "Pet Community",
        "feat_s4_ui_title": "Community",
        "feat_s4_ui_tab_explore": "Explore",
        "feat_s4_ui_tab_follow": "Following",
        "feat_s4_ui_tab_clinics": "Clinics",
        "feat_s4_ui_tab_guide": "Guides",
        "feat_s4_ui_post_user": "Can Kılıç & Mia",
        "feat_s4_ui_post_time": "just now",
        "feat_s4_ui_post_text": "Enjoying Moda park after the vet check-up ✨🐾",
        "feat_s4_ui_msg1": "Are you at Moda park right now? 🐕",
        "feat_s4_ui_msg2": "Yes we're here! Mia is playing with the other cat, come join us. 😊",
        "feat_s4_ui_adopt_title": "Kitten Adoption",
        "feat_s4_ui_adopt_tag1": "Cat",
        "feat_s4_ui_adopt_tag2": "Female",
        "feat_s4_ui_adopt_tag3": "Kadikoy/Moda",
        "feat_s4_ui_adopt_desc": "6 months old, female, tabby kitten",
        "feat_s4_ui_adopt_btn": "Send Application",
        "feat_s4_ui_guide_1": "Breed Guide",
        "feat_s4_ui_guide_1_desc": "Breeds of cats, dogs and others",
        "feat_s4_ui_guide_2": "Vaccine Schedule",
        "feat_s4_ui_guide_2_desc": "Species-based vaccination plan",
        "feat_s4_ui_guide_3": "Care Tips",
        "feat_s4_ui_guide_3_desc": "Care, nutrition and emergency",
    })
    
    with open('src/locales/en.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Locales updated.")
