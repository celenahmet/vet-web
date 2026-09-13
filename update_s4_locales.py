import json

def update_locales():
    # TR
    with open('src/locales/tr.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    data.update({
        "feat_s4_ui_guide_4": "Blog",
        "feat_s4_ui_guide_4_desc": "Veteriner hekimlerin gözünden, kaynaklı yazılar",
        "feat_s4_ui_guide_5": "Sahiplendirme",
        "feat_s4_ui_guide_5_desc": "Yuva arayan dostlar",
    })
    
    with open('src/locales/tr.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # EN
    with open('src/locales/en.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    data.update({
        "feat_s4_ui_guide_4": "Blog",
        "feat_s4_ui_guide_4_desc": "Sourced articles from veterinarians",
        "feat_s4_ui_guide_5": "Adoption",
        "feat_s4_ui_guide_5_desc": "Friends looking for a home",
    })
    
    with open('src/locales/en.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Locales updated.")
