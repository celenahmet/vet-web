import json

files = ['src/locales/tr.json', 'src/locales/en.json']

# Turkish updates
with open(files[0], 'r', encoding='utf-8') as f:
    tr = json.load(f)

tr["feat_new_s3_title"] = "En İyi Uzmanlar Bir Tık Uzağınızda"
tr["feat_new_s3_desc"] = "İhtiyaç anında konumunuza en uygun klinikleri anında filtreleyin. Gerçek kullanıcı değerlendirmelerini inceleyin, doğrulanmış kliniklerle eşleşin ve hekiminizle uygulama üzerinden doğrudan, kesintisiz iletişim kurun."
tr["feat_new_s3_li1"] = "İl ve İlçe Bazlı Akıllı Veteriner Kliniği Arama"
tr["feat_new_s3_li2"] = "Doğrulanmış (Onay Rozetli) Veteriner Kliniği Ağı"
tr["feat_new_s3_li3"] = "Veterinerlerle Direkt Mesajlaşma"

# New UI strings for Section 3 dashboard
tr["feat_s3_ui_city"] = "İl seç"
tr["feat_s3_ui_district"] = "İlçe seç"
tr["feat_s3_ui_search"] = "İl yaz (ör. Ankara)"
tr["feat_s3_ui_clinic1"] = "Deneme Anadolu Hayvan Hastanesi"
tr["feat_s3_ui_clinic1_addr"] = "Atatürk Bulvarı No: 210, Çankaya"
tr["feat_s3_ui_clinic2"] = "Test Veteriner Kliniği"
tr["feat_s3_ui_clinic2_addr"] = "Test Mahallesi, Test Caddesi No:1"
tr["feat_s3_ui_follow"] = "Takip Et"
tr["feat_s3_ui_following"] = "Takiptesin"
tr["feat_s3_ui_rating_title"] = "Puan ve yorumlar"
tr["feat_s3_ui_rating_count"] = "1 değerlendirme"
tr["feat_s3_ui_rating_your"] = "Senin puanın"
tr["feat_s3_ui_rating_placeholder"] = "Yorumun (isteğe bağlı)"
tr["feat_s3_ui_msg_name"] = "Klinik Veteriner"
tr["feat_s3_ui_msg_date"] = "25.08.2026"
tr["feat_s3_ui_msg_content"] = "Merhaba Rümeysa Hanım, randevunuz onaylandı."
tr["feat_s3_ui_msg_time"] = "1 hafta önce"

with open(files[0], 'w', encoding='utf-8') as f:
    json.dump(tr, f, ensure_ascii=False, indent=2)

# English updates
with open(files[1], 'r', encoding='utf-8') as f:
    en = json.load(f)

en["feat_new_s3_title"] = "The Best Experts are a Click Away"
en["feat_new_s3_desc"] = "Instantly filter the most suitable clinics for your location in times of need. Review real user ratings, match with verified clinics, and communicate seamlessly with your doctor directly through the app."
en["feat_new_s3_li1"] = "City and District Based Smart Veterinary Clinic Search"
en["feat_new_s3_li2"] = "Verified (Badge Approved) Veterinary Clinic Network"
en["feat_new_s3_li3"] = "Direct Messaging with Veterinarians"

en["feat_s3_ui_city"] = "Select city"
en["feat_s3_ui_district"] = "Select district"
en["feat_s3_ui_search"] = "Type city (e.g., Ankara)"
en["feat_s3_ui_clinic1"] = "Test Anatolia Animal Hospital"
en["feat_s3_ui_clinic1_addr"] = "Ataturk Blvd No: 210, Cankaya"
en["feat_s3_ui_clinic2"] = "Test Veterinary Clinic"
en["feat_s3_ui_clinic2_addr"] = "Test Neighborhood, Test St No:1"
en["feat_s3_ui_follow"] = "Follow"
en["feat_s3_ui_following"] = "Following"
en["feat_s3_ui_rating_title"] = "Ratings and reviews"
en["feat_s3_ui_rating_count"] = "1 review"
en["feat_s3_ui_rating_your"] = "Your rating"
en["feat_s3_ui_rating_placeholder"] = "Your review (optional)"
en["feat_s3_ui_msg_name"] = "Clinic Veterinarian"
en["feat_s3_ui_msg_date"] = "25.08.2026"
en["feat_s3_ui_msg_content"] = "Hello Rumeysa, your appointment has been confirmed."
en["feat_s3_ui_msg_time"] = "1 week ago"

with open(files[1], 'w', encoding='utf-8') as f:
    json.dump(en, f, ensure_ascii=False, indent=2)

print("JSONs updated.")
