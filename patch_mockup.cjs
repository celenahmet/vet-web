const fs = require('fs');

let content = fs.readFileSync('src/pages/Clinics.tsx', 'utf8');

// Replace tab navigation
content = content.replace(
  />Kısayollar<\/button>/g,
  ">{t('clinics_mockup_shortcuts', 'Kısayollar')}</button>"
).replace(
  />Klinik Operasyonları<\/button>/g,
  ">{t('clinics_mockup_operations', 'Klinik Operasyonları')}</button>"
).replace(
  />Gelir \/ Gider<\/button>/g,
  ">{t('clinics_mockup_finance', 'Gelir / Gider')}</button>"
);

// Replace shortcuts array
content = content.replace(
  /\{ icon: Megaphone, label: 'Duyuru gönder' \}/g,
  "{ icon: Megaphone, label: t('clinics_mockup_btn_announce', 'Duyuru gönder') }"
).replace(
  /\{ icon: Edit3, label: 'Gönderi paylaş' \}/g,
  "{ icon: Edit3, label: t('clinics_mockup_btn_post', 'Gönderi paylaş') }"
).replace(
  /\{ icon: Building2, label: 'Vitrini düzenle' \}/g,
  "{ icon: Building2, label: t('clinics_mockup_btn_storefront', 'Vitrini düzenle') }"
).replace(
  /\{ icon: Archive, label: 'Sunduğum hizmetler' \}/g,
  "{ icon: Archive, label: t('clinics_mockup_btn_services', 'Sunduğum hizmetler') }"
).replace(
  /\{ icon: Users, label: 'Ekip' \}/g,
  "{ icon: Users, label: t('clinics_mockup_btn_team', 'Ekip') }"
).replace(
  /\{ icon: Globe, label: 'Web sayfam' \}/g,
  "{ icon: Globe, label: t('clinics_mockup_btn_website', 'Web sayfam') }"
).replace(
  /\{ icon: PieChart, label: 'Raporlar' \}/g,
  "{ icon: PieChart, label: t('clinics_mockup_btn_reports', 'Raporlar') }"
).replace(
  /\{ icon: Wallet, label: 'Gelir \/ Gider' \}/g,
  "{ icon: Wallet, label: t('clinics_mockup_btn_finance', 'Gelir / Gider') }"
).replace(
  /\{ icon: Calendar, label: 'Randevular' \}/g,
  "{ icon: Calendar, label: t('clinics_mockup_btn_appointments', 'Randevular') }"
).replace(
  /\{ icon: Activity, label: 'Klinik Operasyonları' \}/g,
  "{ icon: Activity, label: t('clinics_mockup_btn_operations', 'Klinik Operasyonları') }"
);

// Replace Klinik bilgileri text
content = content.replace(
  />Klinik bilgileri<\/span>/g,
  ">{t('clinics_mockup_btn_clinic_info', 'Klinik bilgileri')}</span>"
);

// Replace Operations Tab texts
content = content.replace(
  />Stok, laboratuvar ve kurumsal entegrasyonlar<\/p>/g,
  ">{t('clinics_mockup_op_subtitle', 'Stok, laboratuvar ve kurumsal entegrasyonlar')}</p>"
);

content = content.replace(
  /\{ icon: Archive, title: 'Ürün ve stok', desc: 'Lot, SKT, kritik seviye ve açıklanabilir hareket defteri', status: '1\.452 ürün', color: 'text-teal-700 dark:text-teal-400' \}/g,
  "{ icon: Archive, title: t('clinics_mockup_op1_title', 'Ürün ve stok'), desc: t('clinics_mockup_op1_desc', 'Lot, SKT, kritik seviye ve açıklanabilir hareket defteri'), status: t('clinics_mockup_op1_status', '1.452 ürün'), color: 'text-teal-700 dark:text-teal-400' }"
).replace(
  /\{ icon: Activity, title: 'Laboratuvar', desc: 'Kaynaklı istem, sonuç ve hekim inceleme akışı', status: '12 açık istem', color: 'text-teal-700 dark:text-teal-400' \}/g,
  "{ icon: Activity, title: t('clinics_mockup_op2_title', 'Laboratuvar'), desc: t('clinics_mockup_op2_desc', 'Kaynaklı istem, sonuç ve hekim inceleme akışı'), status: t('clinics_mockup_op2_status', '12 açık istem'), color: 'text-teal-700 dark:text-teal-400' }"
).replace(
  /\{ icon: MessageCircle, title: 'SMS ve WhatsApp', desc: 'Amaç bazlı izin kanıtları ve güvenli gönderim kuyruğu', status: '2 aktif kanal', color: 'text-teal-700 dark:text-teal-400' \}/g,
  "{ icon: MessageCircle, title: t('clinics_mockup_op3_title', 'SMS ve WhatsApp'), desc: t('clinics_mockup_op3_desc', 'Amaç bazlı izin kanıtları ve güvenli gönderim kuyruğu'), status: t('clinics_mockup_op3_status', '2 aktif kanal'), color: 'text-teal-700 dark:text-teal-400' }"
).replace(
  /\{ icon: Grid, title: 'Entegrasyon ayarları', desc: 'Tüm kurumsal sağlayıcı bağlantılarını tek yerden yönet', status: '4 bağlantı yapılandırıldı', color: 'text-teal-700 dark:text-teal-400' \}/g,
  "{ icon: Grid, title: t('clinics_mockup_op4_title', 'Entegrasyon ayarları'), desc: t('clinics_mockup_op4_desc', 'Tüm kurumsal sağlayıcı bağlantılarını tek yerden yönet'), status: t('clinics_mockup_op4_status', '4 bağlantı yapılandırıldı'), color: 'text-teal-700 dark:text-teal-400' }"
);

// Replace Finance Tab texts
content = content.replace(
  />Bu defter kliniğin kendi kaydıdır\. Platform üzerinden tahsilat yapılmaz, ödeme alınmaz; rakamlar kliniğin beyanıdır\.<\/p>/g,
  ">{t('clinics_mockup_fin_desc', 'Bu defter kliniğin kendi kaydıdır. Platform üzerinden tahsilat yapılmaz, ödeme alınmaz; rakamlar kliniğin beyanıdır.')}</p>"
);

content = content.replace(
  />Bu ay<\/span>/g,
  ">{t('clinics_mockup_fin_this_month', 'Bu ay')}</span>"
).replace(
  />Geçen ay<\/span>/g,
  ">{t('clinics_mockup_fin_last_month', 'Geçen ay')}</span>"
).replace(
  />Bu yıl<\/span>/g,
  ">{t('clinics_mockup_fin_this_year', 'Bu yıl')}</span>"
).replace(
  />Tümü<\/span>/g,
  ">{t('clinics_mockup_fin_all', 'Tümü')}</span>"
);

content = content.replace(
  />Gelir<\/div>/g,
  ">{t('clinics_mockup_fin_income', 'Gelir')}</div>"
).replace(
  />Gider<\/div>/g,
  ">{t('clinics_mockup_fin_expense', 'Gider')}</div>"
).replace(
  />Fark<\/div>/g,
  ">{t('clinics_mockup_fin_diff', 'Fark')}</div>"
).replace(
  />Kayıt ekle<\/h4>/g,
  ">{t('clinics_mockup_fin_add_record', 'Kayıt ekle')}</h4>"
);

content = content.replace(
  />Tutar \(TL\)<\/label>/g,
  ">{t('clinics_mockup_fin_amount', 'Tutar (TL)')}</label>"
).replace(
  />Kategori<\/label>/g,
  ">{t('clinics_mockup_fin_category', 'Kategori')}</label>"
).replace(
  /Muayene ve Tedavi/g,
  "{t('clinics_mockup_fin_cat_exam', 'Muayene ve Tedavi')}"
).replace(
  />Ödeme yöntemi \(isteğe bağlı\)<\/label>/g,
  ">{t('clinics_mockup_fin_payment_method', 'Ödeme yöntemi (isteğe bağlı)')}</label>"
);

content = content.replace(
  /\['Nakit', 'Kredi Kartı', 'Banka Kartı', 'Havale \/ EFT', 'FAST'\]/g,
  "[t('clinics_mockup_fin_pay_cash', 'Nakit'), t('clinics_mockup_fin_pay_cc', 'Kredi Kartı'), t('clinics_mockup_fin_pay_dc', 'Banka Kartı'), t('clinics_mockup_fin_pay_transfer', 'Havale / EFT'), 'FAST']"
);

// We should also replace the top title: 'Kadikoy, Istanbul' ?
// It's in line 174
content = content.replace(
  /\{t\('clinics_hero_card_loc'\)\}/g,
  "{t('clinics_hero_card_loc', 'Kadıköy, İstanbul')}"
);

fs.writeFileSync('src/pages/Clinics.tsx', content);

// Now patch en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "clinics_mockup_shortcuts": "Shortcuts",
  "clinics_mockup_operations": "Clinic Operations",
  "clinics_mockup_finance": "Income / Expense",
  
  "clinics_mockup_btn_announce": "Send Announcement",
  "clinics_mockup_btn_post": "Share Post",
  "clinics_mockup_btn_storefront": "Edit Storefront",
  "clinics_mockup_btn_services": "My Services",
  "clinics_mockup_btn_team": "Team",
  "clinics_mockup_btn_website": "My Website",
  "clinics_mockup_btn_reports": "Reports",
  "clinics_mockup_btn_finance": "Income / Expense",
  "clinics_mockup_btn_appointments": "Appointments",
  "clinics_mockup_btn_operations": "Clinic Operations",
  "clinics_mockup_btn_clinic_info": "Clinic Info",

  "clinics_mockup_op_subtitle": "Stock, laboratory and corporate integrations",
  "clinics_mockup_op1_title": "Product and stock",
  "clinics_mockup_op1_desc": "Lot, EXP, critical level and explicable transaction log",
  "clinics_mockup_op1_status": "1,452 products",
  "clinics_mockup_op2_title": "Laboratory",
  "clinics_mockup_op2_desc": "Source request, result and doctor review flow",
  "clinics_mockup_op2_status": "12 open requests",
  "clinics_mockup_op3_title": "SMS and WhatsApp",
  "clinics_mockup_op3_desc": "Purpose-based permission proofs and secure delivery queue",
  "clinics_mockup_op3_status": "2 active channels",
  "clinics_mockup_op4_title": "Integration settings",
  "clinics_mockup_op4_desc": "Manage all corporate provider connections in one place",
  "clinics_mockup_op4_status": "4 connections configured",

  "clinics_mockup_fin_desc": "This ledger is the clinic's own record. No collection or payment is made over the platform; figures are the clinic's declaration.",
  "clinics_mockup_fin_this_month": "This month",
  "clinics_mockup_fin_last_month": "Last month",
  "clinics_mockup_fin_this_year": "This year",
  "clinics_mockup_fin_all": "All",
  "clinics_mockup_fin_income": "Income",
  "clinics_mockup_fin_expense": "Expense",
  "clinics_mockup_fin_diff": "Difference",
  "clinics_mockup_fin_add_record": "Add record",
  "clinics_mockup_fin_amount": "Amount (TL)",
  "clinics_mockup_fin_category": "Category",
  "clinics_mockup_fin_cat_exam": "Examination and Treatment",
  "clinics_mockup_fin_payment_method": "Payment method (optional)",
  "clinics_mockup_fin_pay_cash": "Cash",
  "clinics_mockup_fin_pay_cc": "Credit Card",
  "clinics_mockup_fin_pay_dc": "Debit Card",
  "clinics_mockup_fin_pay_transfer": "Wire Transfer",
  
  "clinics_hero_card_loc": "Kadikoy, Istanbul"
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');
console.log('patched en.json and Clinics.tsx');
