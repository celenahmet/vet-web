const fs = require('fs');

let content = fs.readFileSync('src/components/DigitalGrowthSection.tsx', 'utf8');

// Title Section
content = content.replace(
  />\s*Büyüme ve Kurumsallaşma\s*<\/div>/,
  ">{t('clinics_s6_badge', 'Büyüme ve Kurumsallaşma')}</div>"
).replace(
  /Kliniğinizin Dijital Yüzünü ve/,
  "{t('clinics_s6_title_1', 'Kliniğinizin Dijital Yüzünü ve')}"
).replace(
  />İletişimini Güçlendirin<\/span>/,
  ">{t('clinics_s6_title_2', 'İletişimini Güçlendirin')}</span>"
).replace(
  />\s*İnternetteki görünürlüğünüzü otomatik olarak artırın ve hastalarınızla en profesyonel kanallardan iletişim kurun\. Resmi izinlerle güvence altında kalın\.\s*<\/p>/,
  ">\n            {t('clinics_s6_desc', 'İnternetteki görünürlüğünüzü otomatik olarak artırın ve hastalarınızla en profesyonel kanallardan iletişim kurun. Resmi izinlerle güvence altında kalın.')}\n          </p>"
);

// Search mockup
content = content.replace(
  />Bölgedeki en iyi klinik<\/span>/,
  ">{t('clinics_s6_mockup_search', 'Bölgedeki en iyi klinik')}</span>"
);

// WhatsApp mockup
content = content.replace(
  /Klinik <CheckCircle2/,
  "{t('clinics_s6_mockup_whatsapp_clinic', 'Klinik')} <CheckCircle2"
).replace(
  />\s*Sayın hasta sahibimiz, Leo'nun laboratuvar sonuçları temiz çıkmıştır\. Yarınki karma aşı randevusunda görüşmek üzere! 🐾\s*<\/p>/,
  ">\n                        {t('clinics_s6_mockup_whatsapp_1', 'Sayın hasta sahibimiz, Leo\\'nun laboratuvar sonuçları temiz çıkmıştır. Yarınki karma aşı randevusunda görüşmek üzere! 🐾')}\n                      </p>"
).replace(
  /Hasta Sahibi \(Leo\)/,
  "{t('clinics_s6_mockup_whatsapp_owner', 'Hasta Sahibi (Leo)')}"
).replace(
  />\s*Harika haber! Çok sevindik, yarın 14:00'te oradayız\. Teşekkürler 😊\s*<\/p>/,
  ">\n                        {t('clinics_s6_mockup_whatsapp_2', 'Harika haber! Çok sevindik, yarın 14:00\\'te oradayız. Teşekkürler 😊')}\n                      </p>"
);

// Docs Mockup
content = content.replace(
  /KVKK Aydınlatma Metni/,
  "{t('clinics_s6_mockup_doc_1', 'KVKK Aydınlatma Metni')}"
).replace(
  /IP Log: 192\.168\.1\.42/,
  "{t('clinics_s6_mockup_doc_1_desc', 'IP Log: 192.168.1.42')}"
).replace(
  /ARŞİVLENDİ/,
  "{t('clinics_s6_mockup_doc_1_status', 'ARŞİVLENDİ')}"
).replace(
  /Dijital İletişim İzni/,
  "{t('clinics_s6_mockup_doc_2', 'Dijital İletişim İzni')}"
).replace(
  /SMS & WhatsApp \(Onaylı\)/,
  "{t('clinics_s6_mockup_doc_2_desc', 'SMS & WhatsApp (Onaylı)')}"
).replace(
  /ONAYLI/,
  "{t('clinics_s6_mockup_doc_2_status', 'ONAYLI')}"
).replace(
  /Operasyon Muvafakatnamesi/,
  "{t('clinics_s6_mockup_doc_3', 'Operasyon Muvafakatnamesi')}"
).replace(
  /Bekliyor\.\.\. SMS Gönderildi/,
  "{t('clinics_s6_mockup_doc_3_desc', 'Bekliyor... SMS Gönderildi')}"
).replace(
  /BEKLİYOR/,
  "{t('clinics_s6_mockup_doc_3_status', 'BEKLİYOR')}"
);

fs.writeFileSync('src/components/DigitalGrowthSection.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "clinics_s6_badge": "Growth and Institutionalization",
  "clinics_s6_title_1": "Strengthen the Digital Face and",
  "clinics_s6_title_2": "Communication of Your Clinic",
  "clinics_s6_desc": "Automatically increase your visibility on the internet and communicate with your patients through the most professional channels. Stay secure with official permissions.",
  "clinics_s6_mockup_search": "Best clinic in the area",
  "clinics_s6_mockup_whatsapp_clinic": "Clinic",
  "clinics_s6_mockup_whatsapp_owner": "Pet Owner (Leo)",
  "clinics_s6_mockup_whatsapp_1": "Dear pet owner, Leo's laboratory results are clear. See you at tomorrow's combination vaccine appointment! 🐾",
  "clinics_s6_mockup_whatsapp_2": "Great news! We are very happy, we'll be there tomorrow at 14:00. Thanks 😊",
  "clinics_s6_mockup_doc_1": "GDPR Clarification Text",
  "clinics_s6_mockup_doc_1_desc": "IP Log: 192.168.1.42",
  "clinics_s6_mockup_doc_1_status": "ARCHIVED",
  "clinics_s6_mockup_doc_2": "Digital Communication Consent",
  "clinics_s6_mockup_doc_2_desc": "SMS & WhatsApp (Approved)",
  "clinics_s6_mockup_doc_2_status": "APPROVED",
  "clinics_s6_mockup_doc_3": "Operation Consent Form",
  "clinics_s6_mockup_doc_3_desc": "Waiting... SMS Sent",
  "clinics_s6_mockup_doc_3_status": "WAITING"
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "clinics_s6_badge": "Büyüme ve Kurumsallaşma",
  "clinics_s6_title_1": "Kliniğinizin Dijital Yüzünü ve",
  "clinics_s6_title_2": "İletişimini Güçlendirin",
  "clinics_s6_desc": "İnternetteki görünürlüğünüzü otomatik olarak artırın ve hastalarınızla en profesyonel kanallardan iletişim kurun. Resmi izinlerle güvence altında kalın.",
  "clinics_s6_mockup_search": "Bölgedeki en iyi klinik",
  "clinics_s6_mockup_whatsapp_clinic": "Klinik",
  "clinics_s6_mockup_whatsapp_owner": "Hasta Sahibi (Leo)",
  "clinics_s6_mockup_whatsapp_1": "Sayın hasta sahibimiz, Leo'nun laboratuvar sonuçları temiz çıkmıştır. Yarınki karma aşı randevusunda görüşmek üzere! 🐾",
  "clinics_s6_mockup_whatsapp_2": "Harika haber! Çok sevindik, yarın 14:00'te oradayız. Teşekkürler 😊",
  "clinics_s6_mockup_doc_1": "KVKK Aydınlatma Metni",
  "clinics_s6_mockup_doc_1_desc": "IP Log: 192.168.1.42",
  "clinics_s6_mockup_doc_1_status": "ARŞİVLENDİ",
  "clinics_s6_mockup_doc_2": "Dijital İletişim İzni",
  "clinics_s6_mockup_doc_2_desc": "SMS & WhatsApp (Onaylı)",
  "clinics_s6_mockup_doc_2_status": "ONAYLI",
  "clinics_s6_mockup_doc_3": "Operasyon Muvafakatnamesi",
  "clinics_s6_mockup_doc_3_desc": "Bekliyor... SMS Gönderildi",
  "clinics_s6_mockup_doc_3_status": "BEKLİYOR"
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('Digital mockup patched');
