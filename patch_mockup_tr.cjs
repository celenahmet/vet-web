const fs = require('fs');
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "clinics_mockup_shortcuts": "Kısayollar",
  "clinics_mockup_operations": "Klinik Operasyonları",
  "clinics_mockup_finance": "Gelir / Gider",
  
  "clinics_mockup_btn_announce": "Duyuru gönder",
  "clinics_mockup_btn_post": "Gönderi paylaş",
  "clinics_mockup_btn_storefront": "Vitrini düzenle",
  "clinics_mockup_btn_services": "Sunduğum hizmetler",
  "clinics_mockup_btn_team": "Ekip",
  "clinics_mockup_btn_website": "Web sayfam",
  "clinics_mockup_btn_reports": "Raporlar",
  "clinics_mockup_btn_finance": "Gelir / Gider",
  "clinics_mockup_btn_appointments": "Randevular",
  "clinics_mockup_btn_operations": "Klinik Operasyonları",
  "clinics_mockup_btn_clinic_info": "Klinik bilgileri",

  "clinics_mockup_op_subtitle": "Stok, laboratuvar ve kurumsal entegrasyonlar",
  "clinics_mockup_op1_title": "Ürün ve stok",
  "clinics_mockup_op1_desc": "Lot, SKT, kritik seviye ve açıklanabilir hareket defteri",
  "clinics_mockup_op1_status": "1.452 ürün",
  "clinics_mockup_op2_title": "Laboratuvar",
  "clinics_mockup_op2_desc": "Kaynaklı istem, sonuç ve hekim inceleme akışı",
  "clinics_mockup_op2_status": "12 açık istem",
  "clinics_mockup_op3_title": "SMS ve WhatsApp",
  "clinics_mockup_op3_desc": "Amaç bazlı izin kanıtları ve güvenli gönderim kuyruğu",
  "clinics_mockup_op3_status": "2 aktif kanal",
  "clinics_mockup_op4_title": "Entegrasyon ayarları",
  "clinics_mockup_op4_desc": "Tüm kurumsal sağlayıcı bağlantılarını tek yerden yönet",
  "clinics_mockup_op4_status": "4 bağlantı yapılandırıldı",

  "clinics_mockup_fin_desc": "Bu defter kliniğin kendi kaydıdır. Platform üzerinden tahsilat yapılmaz, ödeme alınmaz; rakamlar kliniğin beyanıdır.",
  "clinics_mockup_fin_this_month": "Bu ay",
  "clinics_mockup_fin_last_month": "Geçen ay",
  "clinics_mockup_fin_this_year": "Bu yıl",
  "clinics_mockup_fin_all": "Tümü",
  "clinics_mockup_fin_income": "Gelir",
  "clinics_mockup_fin_expense": "Gider",
  "clinics_mockup_fin_diff": "Fark",
  "clinics_mockup_fin_add_record": "Kayıt ekle",
  "clinics_mockup_fin_amount": "Tutar (TL)",
  "clinics_mockup_fin_category": "Kategori",
  "clinics_mockup_fin_cat_exam": "Muayene ve Tedavi",
  "clinics_mockup_fin_payment_method": "Ödeme yöntemi (isteğe bağlı)",
  "clinics_mockup_fin_pay_cash": "Nakit",
  "clinics_mockup_fin_pay_cc": "Kredi Kartı",
  "clinics_mockup_fin_pay_dc": "Banka Kartı",
  "clinics_mockup_fin_pay_transfer": "Havale / EFT",
  
  "clinics_hero_card_loc": "Kadıköy, İstanbul"
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');
console.log('patched tr.json');
