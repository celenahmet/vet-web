const fs = require('fs');

let content = fs.readFileSync('src/components/LabInnovationMockup.tsx', 'utf8');

if (!content.includes('useTranslation')) {
  content = content.replace(
    /import \{ ShieldCheck/,
    "import { useTranslation } from 'react-i18next';\nimport { ShieldCheck"
  );
}

if (!content.includes('const { t }')) {
  content = content.replace(
    /const \[activeTab, setActiveTab\] = useState\('scan'\);/,
    "const [activeTab, setActiveTab] = useState('scan');\n  const { t } = useTranslation();"
  );
}

// Replace header
content = content.replace(
  />Laboratuvar<\/h3>/,
  ">{t('mockup_lab_title', 'Laboratuvar')}</h3>"
).replace(
  />İstemden hekim incelemesine izlenebilir akış<\/p>/,
  ">{t('mockup_lab_subtitle', 'İstemden hekim incelemesine izlenebilir akış')}</p>"
);

// Disclaimers
content = content.replace(
  />Kurumsal sorumluluk sınırı<\/h4>/,
  ">{t('mockup_lab_disclaimer_title', 'Kurumsal sorumluluk sınırı')}</h4>"
).replace(
  />Tıbbi içerik ve reçete kararları hekime; ileti izinlerinin kanıtı, gönderici kimliği ve sağlayıcı hesabı kliniğe aittir\. Veterito yalnız yetkili akışı ve denetim izini sağlar; sağlayıcı doğrulaması olmadan hiçbir kayıt resmî veya gönderilmiş sayılmaz\.<\/p>/,
  ">{t('mockup_lab_disclaimer_desc', 'Tıbbi içerik ve reçete kararları hekime; ileti izinlerinin kanıtı, gönderici kimliği ve sağlayıcı hesabı kliniğe aittir. Veterito yalnız yetkili akışı ve denetim izini sağlar; sağlayıcı doğrulaması olmadan hiçbir kayıt resmî veya gönderilmiş sayılmaz.')}</p>"
).replace(
  />Veterito'nun açıklanabilir kuralları yalnız veteriner ekibine karar desteği verir\. Eksik veya hatalı olabilir; muayene, tanı ve klinik değerlendirmenin yerini tutmaz\.<\/p>/,
  ">{t('mockup_lab_warning', 'Veterito\\'nun açıklanabilir kuralları yalnız veteriner ekibine karar desteği verir. Eksik veya hatalı olabilir; muayene, tanı ve klinik değerlendirmenin yerini tutmaz.')}</p>"
);

// Devices tab
content = content.replace(
  />Laboratuvar cihazları<\/h4>/,
  ">{t('mockup_lab_devices', 'Laboratuvar cihazları')}</h4>"
).replace(
  />3 aktif cihaz · her sonuç cihaz kaynağıyla izlenir<\/p>/,
  ">{t('mockup_lab_devices_desc', '3 aktif cihaz · her sonuç cihaz kaynağıyla izlenir')}</p>"
).replace(
  />Sisteme entegre 3 cihazınız var\. Yeni bir cihaz bağlamak için profil ekleyin\.<\/p>/,
  ">{t('mockup_lab_devices_info', 'Sisteme entegre 3 cihazınız var. Yeni bir cihaz bağlamak için profil ekleyin.')}</p>"
).replace(
  />Yeni cihaz profili<\/h5>/,
  ">{t('mockup_lab_new_device', 'Yeni cihaz profili')}</h5>"
);

// Form fields
content = content.replace(
  />Ekranda görünen cihaz adı<\/label>/,
  ">{t('mockup_lab_device_name', 'Ekranda görünen cihaz adı')}</label>"
).replace(
  /defaultValue="Klinik Ana Biyokimya"/,
  "defaultValue={t('mockup_lab_device_name_val', 'Klinik Ana Biyokimya')}"
).replace(
  />Üretici<\/label>/,
  ">{t('mockup_lab_manufacturer', 'Üretici')}</label>"
).replace(
  />Model<\/label>/,
  ">{t('mockup_lab_model', 'Model')}</label>"
).replace(
  />Cihaz \/ gateway kimliği<\/label>/,
  ">{t('mockup_lab_device_id', 'Cihaz / gateway kimliği')}</label>"
).replace(
  />Seri numarası son 4<\/label>/,
  ">{t('mockup_lab_serial_last_4', 'Seri numarası son 4')}</label>"
).replace(
  />Konum<\/label>/,
  ">{t('mockup_lab_location', 'Konum')}</label>"
).replace(
  /defaultValue="Arka Laboratuvar Odası"/,
  "defaultValue={t('mockup_lab_back_lab', 'Arka Laboratuvar Odası')}"
).replace(
  />Laboratuvar sistem türü<\/label>/,
  ">{t('mockup_lab_system_type', 'Laboratuvar sistem türü')}</label>"
).replace(
  />Klinik içi analiz cihazı<\/span>/,
  ">{t('mockup_lab_inclinic_analyzer', 'Klinik içi analiz cihazı')}</span>"
).replace(
  />Desteklenen disiplinler<\/label>/,
  ">{t('mockup_lab_supported_disciplines', 'Desteklenen disiplinler')}</label>"
).replace(
  />Cihazı kaydet<\/button>/,
  ">{t('mockup_lab_save_device', 'Cihazı kaydet')}</button>"
);

// Disciplines array
content = content.replace(
  /\['Hematoloji', 'Biyokimya', 'İdrar', 'Kan gazı', 'Koagülasyon', 'Endokrinoloji', 'Mikrobiyoloji', 'Patoloji'\]/,
  "[t('mockup_lab_disc_1', 'Hematoloji'), t('mockup_lab_disc_2', 'Biyokimya'), t('mockup_lab_disc_3', 'İdrar'), t('mockup_lab_disc_4', 'Kan gazı'), t('mockup_lab_disc_5', 'Koagülasyon'), t('mockup_lab_disc_6', 'Endokrinoloji'), t('mockup_lab_disc_7', 'Mikrobiyoloji'), t('mockup_lab_disc_8', 'Patoloji')]"
);

// Scan Tab
content = content.replace(
  />Cihaz ekranından sonuç tara<\/h4>/,
  ">{t('mockup_lab_scan', 'Cihaz ekranından sonuç tara')}</h4>"
).replace(
  />Hastayı ve istemi seç; fotoğrafı cihaz üzerinde okuyup\.\.\.<\/p>/,
  ">{t('mockup_lab_scan_desc', 'Hastayı ve istemi seç; fotoğrafı cihaz üzerinde okuyup...')}</p>"
).replace(
  />Hasta kaydı<\/label>/,
  ">{t('mockup_lab_patient_record', 'Hasta kaydı')}</label>"
).replace(
  />Laboratuvar istemi<\/label>/,
  ">{t('mockup_lab_lab_request', 'Laboratuvar istemi')}</label>"
).replace(
  /Rutin Biyokimya <span/,
  "{t('mockup_lab_routine_biochem', 'Rutin Biyokimya')} <span"
).replace(
  />Fotoğraf çek veya galeriden seç<\/button>/,
  ">{t('mockup_lab_take_photo', 'Fotoğraf çek veya galeriden seç')}</button>"
);

// Library Tab
content = content.replace(
  />Kanıt kütüphanesi<\/h4>/,
  ">{t('mockup_lab_library', 'Kanıt kütüphanesi')}</h4>"
).replace(
  />Kilo, aşılama, yan etki ve laboratuvar yorumu kaynakları<\/p>/,
  ">{t('mockup_lab_library_desc', 'Kilo, aşılama, yan etki ve laboratuvar yorumu kaynakları')}</p>"
);

// Library entries
content = content.replace(
  />Referans aralıkları yönteme özeldir<\/h5>/,
  ">{t('mockup_lab_lib1_title', 'Referans aralıkları yönteme özeldir')}</h5>"
).replace(
  />Sonucu veren laboratuvarın aralığını kullan; tür, popülasyon ve yöntem önemlidir\.<\/p>/,
  ">{t('mockup_lab_lib1_desc1', 'Sonucu veren laboratuvarın aralığını kullan; tür, popülasyon ve yöntem önemlidir.')}</p>"
).replace(
  />Aralık içindeki bir değer hastalığı dışlamaz\.<\/p>/,
  ">{t('mockup_lab_lib1_desc2', 'Aralık içindeki bir değer hastalığı dışlamaz.')}</p>"
).replace(
  /· Kaynağı aç/g,
  "· {t('mockup_lab_open_source', 'Kaynağı aç')}"
);

content = content.replace(
  />Azotemiye yaklaşım<\/h5>/,
  ">{t('mockup_lab_lib2_title', 'Azotemiye yaklaşım')}</h5>"
).replace(
  />Hidrasyon, idrar bulguları ve klinik bağlamla prerenal, renal ve postrenal paternleri ayrıştır\.<\/p>/,
  ">{t('mockup_lab_lib2_desc1', 'Hidrasyon, idrar bulguları ve klinik bağlamla prerenal, renal ve postrenal paternleri ayrıştır.')}</p>"
).replace(
  />Üre\/BUN ve kreatinin tek başına nedenin yerini göstermez\.<\/p>/,
  ">{t('mockup_lab_lib2_desc2', 'Üre/BUN ve kreatinin tek başına nedenin yerini göstermez.')}</p>"
);

content = content.replace(
  />Eritron değerlendirmesi<\/h5>/,
  ">{t('mockup_lab_lib3_title', 'Eritron değerlendirmesi')}</h5>"
).replace(
  />RBC, hematokrit ve hemoglobini birlikte değerlendir; paterni retikülosit ve yayma bulgularıyla sınıflandır\.<\/p>/,
  ">{t('mockup_lab_lib3_desc1', 'RBC, hematokrit ve hemoglobini birlikte değerlendir; paterni retikülosit ve yayma bulgularıyla sınıflandır.')}</p>"
).replace(
  />Artefaktlar ve hidrasyon ölçümleri değiştirebilir\.<\/p>/,
  ">{t('mockup_lab_lib3_desc2', 'Artefaktlar ve hidrasyon ölçümleri değiştirebilir.')}</p>"
);

content = content.replace(
  />Aşılama ve istenmeyen etki bağlamı<\/h5>/,
  ">{t('mockup_lab_lib4_title', 'Aşılama ve istenmeyen etki bağlamı')}</h5>"
).replace(
  />Aşılama planı tür, yaş, maruziyet, ürün ve önceki reaksiyonlara göre bireyselleştirilir\.<\/p>/,
  ">{t('mockup_lab_lib4_desc1', 'Aşılama planı tür, yaş, maruziyet, ürün ve önceki reaksiyonlara göre bireyselleştirilir.')}</p>"
).replace(
  />Şüpheli yan etkiler veteriner değerlendirmesi ve uygun bildirim gerektirir\.<\/p>/,
  ">{t('mockup_lab_lib4_desc2', 'Şüpheli yan etkiler veteriner değerlendirmesi ve uygun bildirim gerektirir.')}</p>"
);

// Footer
content = content.replace(
  /Henüz laboratuvar istemi yok\./,
  "{t('mockup_lab_no_requests', 'Henüz laboratuvar istemi yok.')}"
);

fs.writeFileSync('src/components/LabInnovationMockup.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "mockup_lab_title": "Laboratory",
  "mockup_lab_subtitle": "Traceable flow from request to doctor review",
  "mockup_lab_disclaimer_title": "Corporate responsibility boundary",
  "mockup_lab_disclaimer_desc": "Medical content and prescription decisions belong to the physician; proof of communication permissions, sender identity and provider account belong to the clinic. Veterito provides only authorized flow and audit trail; without provider verification, no record is considered official or sent.",
  "mockup_lab_warning": "Veterito's explicable rules provide decision support to the veterinary team only. It may be incomplete or incorrect; it is not a substitute for examination, diagnosis and clinical evaluation.",
  "mockup_lab_devices": "Laboratory devices",
  "mockup_lab_devices_desc": "3 active devices · each result tracked by device source",
  "mockup_lab_devices_info": "You have 3 devices integrated into the system. Add a profile to connect a new device.",
  "mockup_lab_new_device": "New device profile",
  "mockup_lab_device_name": "Device name shown on screen",
  "mockup_lab_device_name_val": "Clinic Main Biochemistry",
  "mockup_lab_manufacturer": "Manufacturer",
  "mockup_lab_model": "Model",
  "mockup_lab_device_id": "Device / gateway ID",
  "mockup_lab_serial_last_4": "Serial number last 4",
  "mockup_lab_location": "Location",
  "mockup_lab_back_lab": "Back Laboratory Room",
  "mockup_lab_system_type": "Laboratory system type",
  "mockup_lab_inclinic_analyzer": "In-clinic analyzer",
  "mockup_lab_supported_disciplines": "Supported disciplines",
  "mockup_lab_save_device": "Save device",
  "mockup_lab_disc_1": "Hematology",
  "mockup_lab_disc_2": "Biochemistry",
  "mockup_lab_disc_3": "Urine",
  "mockup_lab_disc_4": "Blood gas",
  "mockup_lab_disc_5": "Coagulation",
  "mockup_lab_disc_6": "Endocrinology",
  "mockup_lab_disc_7": "Microbiology",
  "mockup_lab_disc_8": "Pathology",
  "mockup_lab_scan": "Scan result from device screen",
  "mockup_lab_scan_desc": "Select patient and request; read photo on device...",
  "mockup_lab_patient_record": "Patient record",
  "mockup_lab_lab_request": "Laboratory request",
  "mockup_lab_routine_biochem": "Routine Biochemistry",
  "mockup_lab_take_photo": "Take photo or choose from gallery",
  "mockup_lab_library": "Evidence library",
  "mockup_lab_library_desc": "Weight, vaccination, side effect and laboratory interpretation resources",
  "mockup_lab_lib1_title": "Reference intervals are method specific",
  "mockup_lab_lib1_desc1": "Use the interval of the reporting laboratory; species, population and method are important.",
  "mockup_lab_lib1_desc2": "A value within the range does not exclude disease.",
  "mockup_lab_open_source": "Open source",
  "mockup_lab_lib2_title": "Approach to azotemia",
  "mockup_lab_lib2_desc1": "Differentiate prerenal, renal, and postrenal patterns by hydration, urinalysis, and clinical context.",
  "mockup_lab_lib2_desc2": "Urea/BUN and creatinine alone do not indicate the location of the cause.",
  "mockup_lab_lib3_title": "Erythron evaluation",
  "mockup_lab_lib3_desc1": "Evaluate RBC, hematocrit and hemoglobin together; classify the pattern by reticulocyte and smear findings.",
  "mockup_lab_lib3_desc2": "Artifacts and hydration measurements can alter.",
  "mockup_lab_lib4_title": "Vaccination and adverse event context",
  "mockup_lab_lib4_desc1": "Vaccination plan is individualized based on species, age, exposure, product and previous reactions.",
  "mockup_lab_lib4_desc2": "Suspected side effects require veterinary evaluation and appropriate reporting.",
  "mockup_lab_no_requests": "No laboratory requests yet."
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "mockup_lab_title": "Laboratuvar",
  "mockup_lab_subtitle": "İstemden hekim incelemesine izlenebilir akış",
  "mockup_lab_disclaimer_title": "Kurumsal sorumluluk sınırı",
  "mockup_lab_disclaimer_desc": "Tıbbi içerik ve reçete kararları hekime; ileti izinlerinin kanıtı, gönderici kimliği ve sağlayıcı hesabı kliniğe aittir. Veterito yalnız yetkili akışı ve denetim izini sağlar; sağlayıcı doğrulaması olmadan hiçbir kayıt resmî veya gönderilmiş sayılmaz.",
  "mockup_lab_warning": "Veterito'nun açıklanabilir kuralları yalnız veteriner ekibine karar desteği verir. Eksik veya hatalı olabilir; muayene, tanı ve klinik değerlendirmenin yerini tutmaz.",
  "mockup_lab_devices": "Laboratuvar cihazları",
  "mockup_lab_devices_desc": "3 aktif cihaz · her sonuç cihaz kaynağıyla izlenir",
  "mockup_lab_devices_info": "Sisteme entegre 3 cihazınız var. Yeni bir cihaz bağlamak için profil ekleyin.",
  "mockup_lab_new_device": "Yeni cihaz profili",
  "mockup_lab_device_name": "Ekranda görünen cihaz adı",
  "mockup_lab_device_name_val": "Klinik Ana Biyokimya",
  "mockup_lab_manufacturer": "Üretici",
  "mockup_lab_model": "Model",
  "mockup_lab_device_id": "Cihaz / gateway kimliği",
  "mockup_lab_serial_last_4": "Seri numarası son 4",
  "mockup_lab_location": "Konum",
  "mockup_lab_back_lab": "Arka Laboratuvar Odası",
  "mockup_lab_system_type": "Laboratuvar sistem türü",
  "mockup_lab_inclinic_analyzer": "Klinik içi analiz cihazı",
  "mockup_lab_supported_disciplines": "Desteklenen disiplinler",
  "mockup_lab_save_device": "Cihazı kaydet",
  "mockup_lab_disc_1": "Hematoloji",
  "mockup_lab_disc_2": "Biyokimya",
  "mockup_lab_disc_3": "İdrar",
  "mockup_lab_disc_4": "Kan gazı",
  "mockup_lab_disc_5": "Koagülasyon",
  "mockup_lab_disc_6": "Endokrinoloji",
  "mockup_lab_disc_7": "Mikrobiyoloji",
  "mockup_lab_disc_8": "Patoloji",
  "mockup_lab_scan": "Cihaz ekranından sonuç tara",
  "mockup_lab_scan_desc": "Hastayı ve istemi seç; fotoğrafı cihaz üzerinde okuyup...",
  "mockup_lab_patient_record": "Hasta kaydı",
  "mockup_lab_lab_request": "Laboratuvar istemi",
  "mockup_lab_routine_biochem": "Rutin Biyokimya",
  "mockup_lab_take_photo": "Fotoğraf çek veya galeriden seç",
  "mockup_lab_library": "Kanıt kütüphanesi",
  "mockup_lab_library_desc": "Kilo, aşılama, yan etki ve laboratuvar yorumu kaynakları",
  "mockup_lab_lib1_title": "Referans aralıkları yönteme özeldir",
  "mockup_lab_lib1_desc1": "Sonucu veren laboratuvarın aralığını kullan; tür, popülasyon ve yöntem önemlidir.",
  "mockup_lab_lib1_desc2": "Aralık içindeki bir değer hastalığı dışlamaz.",
  "mockup_lab_open_source": "Kaynağı aç",
  "mockup_lab_lib2_title": "Azotemiye yaklaşım",
  "mockup_lab_lib2_desc1": "Hidrasyon, idrar bulguları ve klinik bağlamla prerenal, renal ve postrenal paternleri ayrıştır.",
  "mockup_lab_lib2_desc2": "Üre/BUN ve kreatinin tek başına nedenin yerini göstermez.",
  "mockup_lab_lib3_title": "Eritron değerlendirmesi",
  "mockup_lab_lib3_desc1": "RBC, hematokrit ve hemoglobini birlikte değerlendir; paterni retikülosit ve yayma bulgularıyla sınıflandır.",
  "mockup_lab_lib3_desc2": "Artefaktlar ve hidrasyon ölçümleri değiştirebilir.",
  "mockup_lab_lib4_title": "Aşılama ve istenmeyen etki bağlamı",
  "mockup_lab_lib4_desc1": "Aşılama planı tür, yaş, maruziyet, ürün ve önceki reaksiyonlara göre bireyselleştirilir.",
  "mockup_lab_lib4_desc2": "Şüpheli yan etkiler veteriner değerlendirmesi ve uygun bildirim gerektirir.",
  "mockup_lab_no_requests": "Henüz laboratuvar istemi yok."
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('Lab mockup patched successfully');
