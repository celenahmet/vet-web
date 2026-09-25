const fs = require('fs');

let content = fs.readFileSync('src/components/PatientMgmtMockup.tsx', 'utf8');

// Add import
if (!content.includes('useTranslation')) {
  content = content.replace(
    /import \{ Phone, Mail/,
    "import { useTranslation } from 'react-i18next';\nimport { Phone, Mail"
  );
}

// Add hook
if (!content.includes('const { t }')) {
  content = content.replace(
    /const \[activeTab, setActiveTab\] = useState\('tab1'\);/,
    "const [activeTab, setActiveTab] = useState('tab1');\n  const { t } = useTranslation();"
  );
}

// Replacements
content = content.replace(
  />\s*Müşteri Yönetimi\s*<\/button>/,
  ">{t('mockup_patient_mgmt', 'Müşteri Yönetimi')}</button>"
).replace(
  />\s*Dostlarımız\s*<\/button>/,
  ">{t('mockup_patient_pets', 'Dostlarımız')}</button>"
).replace(
  />\s*Randevu Analizleri\s*<\/button>/,
  ">{t('mockup_patient_appointments', 'Randevu Analizleri')}</button>"
);

content = content.replace(
  />Müşteri Ekle<\/h4>/,
  ">{t('mockup_patient_add', 'Müşteri Ekle')}</h4>"
).replace(
  />Müşteri Veterito kullanıyor mu\?<\/label>/,
  ">{t('mockup_patient_uses_veterito', 'Müşteri Veterito kullanıyor mu?')}</label>"
).replace(
  />Evet<\/button>/,
  ">{t('mockup_patient_yes', 'Evet')}</button>"
).replace(
  />Hayır<\/button>/,
  ">{t('mockup_patient_no', 'Hayır')}</button>"
);

content = content.replace(
  />Telefon\.\.\.<\/span>/,
  ">{t('mockup_patient_phone', 'Telefon...')}</span>"
).replace(
  />E-posta\.\.\.<\/span>/,
  ">{t('mockup_patient_email', 'E-posta...')}</span>"
).replace(
  / Davet Gönder/g,
  " {t('mockup_patient_invite', 'Davet Gönder')}"
);

content = content.replace(
  /Deftere yazılanlar <span/g,
  "{t('mockup_patient_ledger', 'Deftere yazılanlar')} <span"
).replace(
  />Tümü<\/span>/g,
  ">{t('mockup_patient_all', 'Tümü')}</span>"
).replace(
  /'Kayıtsız'/g,
  "t('mockup_patient_unregistered', 'Kayıtsız')"
);

content = content.replace(
  /placeholder="İsim veya çip no ile ara\.\.\."/g,
  "placeholder={t('mockup_patient_search', 'İsim veya çip no ile ara...')}"
);

content = content.replace(
  />Bugün<\/div>/g,
  ">{t('mockup_patient_today', 'Bugün')}</div>"
).replace(
  />Talep<\/div>/g,
  ">{t('mockup_patient_request', 'Talep')}</div>"
).replace(
  /Yanıt<br\/>bekliyor/g,
  "{t('mockup_patient_waiting_1', 'Yanıt')}<br/>{t('mockup_patient_waiting_2', 'bekliyor')}"
).replace(
  />Kesin<\/div>/g,
  ">{t('mockup_patient_confirmed', 'Kesin')}</div>"
);

content = content.replace(
  />Aktif<\/button>/g,
  ">{t('mockup_patient_active', 'Aktif')}</button>"
).replace(
  />Talepler<\/button>/g,
  ">{t('mockup_patient_requests', 'Talepler')}</button>"
).replace(
  />Yaklaşan<\/button>/g,
  ">{t('mockup_patient_upcoming', 'Yaklaşan')}</button>"
).replace(
  />Geçmiş<\/button>/g,
  ">{t('mockup_patient_past', 'Geçmiş')}</button>"
);

content = content.replace(
  /'Karma ve Kuduz Aşısı'/g,
  "t('mockup_patient_vaccine', 'Karma ve Kuduz Aşısı')"
).replace(
  /'Klinik notu: hastanın genel durumu kontrol edildikten sonra yıllık aşıları yenilenecek\.'/g,
  "t('mockup_patient_note_1', 'Klinik notu: hastanın genel durumu kontrol edildikten sonra yıllık aşıları yenilenecek.')"
).replace(
  /'Ortopedi Kontrolü'/g,
  "t('mockup_patient_ortho', 'Ortopedi Kontrolü')"
).replace(
  /'Klinik notu: sağ arka bacakta topallama şikayeti var, röntgen için randevu aldı\.'/g,
  "t('mockup_patient_note_2', 'Klinik notu: sağ arka bacakta topallama şikayeti var, röntgen için randevu aldı.')"
).replace(
  />Onaylandı<\/span>/g,
  ">{t('mockup_patient_approved', 'Onaylandı')}</span>"
).replace(
  />\s*Tamamlandı işaretle\s*<\/button>/g,
  ">\n                        {t('mockup_patient_mark_done', 'Tamamlandı işaretle')}\n                      </button>"
);

// We need to also translate "Bugün" in the array date field, wait, the array has date: 'Bugün', so we'll just replace 'Bugün' with t('mockup_patient_today', 'Bugün')
content = content.replace(
  /date: 'Bugün'/g,
  "date: t('mockup_patient_today', 'Bugün')"
);

fs.writeFileSync('src/components/PatientMgmtMockup.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "mockup_patient_mgmt": "Client Mgmt",
  "mockup_patient_pets": "Our Friends",
  "mockup_patient_appointments": "Appt Analysis",
  "mockup_patient_add": "Add Client",
  "mockup_patient_uses_veterito": "Does the client use Veterito?",
  "mockup_patient_yes": "Yes",
  "mockup_patient_no": "No",
  "mockup_patient_phone": "Phone...",
  "mockup_patient_email": "Email...",
  "mockup_patient_invite": "Send Invite",
  "mockup_patient_ledger": "Written in Ledger",
  "mockup_patient_all": "All",
  "mockup_patient_unregistered": "UNREGISTERED",
  "mockup_patient_search": "Search by name or microchip...",
  "mockup_patient_today": "Today",
  "mockup_patient_request": "Request",
  "mockup_patient_waiting_1": "Waiting",
  "mockup_patient_waiting_2": "reply",
  "mockup_patient_confirmed": "Firm",
  "mockup_patient_active": "Active",
  "mockup_patient_requests": "Requests",
  "mockup_patient_upcoming": "Upcoming",
  "mockup_patient_past": "Past",
  "mockup_patient_vaccine": "Combination and Rabies Vaccine",
  "mockup_patient_note_1": "Clinic note: annual vaccines will be renewed after checking general condition.",
  "mockup_patient_ortho": "Orthopedics Checkup",
  "mockup_patient_note_2": "Clinic note: complaint of limping on right hind leg, booked for x-ray.",
  "mockup_patient_approved": "Approved",
  "mockup_patient_mark_done": "Mark as completed"
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "mockup_patient_mgmt": "Müşteri Yönetimi",
  "mockup_patient_pets": "Dostlarımız",
  "mockup_patient_appointments": "Randevu Analizleri",
  "mockup_patient_add": "Müşteri Ekle",
  "mockup_patient_uses_veterito": "Müşteri Veterito kullanıyor mu?",
  "mockup_patient_yes": "Evet",
  "mockup_patient_no": "Hayır",
  "mockup_patient_phone": "Telefon...",
  "mockup_patient_email": "E-posta...",
  "mockup_patient_invite": "Davet Gönder",
  "mockup_patient_ledger": "Deftere yazılanlar",
  "mockup_patient_all": "Tümü",
  "mockup_patient_unregistered": "KAYITSIZ",
  "mockup_patient_search": "İsim veya çip no ile ara...",
  "mockup_patient_today": "Bugün",
  "mockup_patient_request": "Talep",
  "mockup_patient_waiting_1": "Yanıt",
  "mockup_patient_waiting_2": "bekliyor",
  "mockup_patient_confirmed": "Kesin",
  "mockup_patient_active": "Aktif",
  "mockup_patient_requests": "Talepler",
  "mockup_patient_upcoming": "Yaklaşan",
  "mockup_patient_past": "Geçmiş",
  "mockup_patient_vaccine": "Karma ve Kuduz Aşısı",
  "mockup_patient_note_1": "Klinik notu: hastanın genel durumu kontrol edildikten sonra yıllık aşıları yenilenecek.",
  "mockup_patient_ortho": "Ortopedi Kontrolü",
  "mockup_patient_note_2": "Klinik notu: sağ arka bacakta topallama şikayeti var, röntgen için randevu aldı.",
  "mockup_patient_approved": "Onaylandı",
  "mockup_patient_mark_done": "Tamamlandı işaretle"
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('Patient mockup patched successfully');
