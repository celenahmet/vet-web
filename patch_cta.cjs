const fs = require('fs');

let content = fs.readFileSync('src/components/ClinicsCTASection.tsx', 'utf8');

content = content.replace(
  /Kliniğinizin Dijital Dönüşümü/,
  "{t('clinics_cta_title_1', 'Kliniğinizin Dijital Dönüşümü')}"
).replace(
  /Sadece <br \/>/,
  "{t('clinics_cta_title_2', 'Sadece')} <br />"
).replace(
  /Bir Tık Uzağınızda/,
  "{t('clinics_cta_title_3', 'Bir Tık Uzağınızda')}"
).replace(
  /<span>Kredi kartı gerekmez<\/span>/,
  "<span>{t('clinics_cta_no_cc', 'Kredi kartı gerekmez')}</span>"
).replace(
  /title="Ücretsiz Premium Denemeyi Başlat"/,
  "title={t('clinics_cta_button', 'Ücretsiz Premium Denemeyi Başlat')}"
).replace(
  /<span className="relative z-10">Ücretsiz Premium Denemeyi Başlat<\/span>/,
  '<span className="relative z-10">{t(\'clinics_cta_button\', \'Ücretsiz Premium Denemeyi Başlat\')}</span>'
);

fs.writeFileSync('src/components/ClinicsCTASection.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "clinics_cta_title_1": "Your Clinic's Digital Transformation",
  "clinics_cta_title_2": "Is Just",
  "clinics_cta_title_3": "A Click Away",
  "clinics_cta_no_cc": "No credit card required",
  "clinics_cta_button": "Start Free Premium Trial"
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "clinics_cta_title_1": "Kliniğinizin Dijital Dönüşümü",
  "clinics_cta_title_2": "Sadece",
  "clinics_cta_title_3": "Bir Tık Uzağınızda",
  "clinics_cta_no_cc": "Kredi kartı gerekmez",
  "clinics_cta_button": "Ücretsiz Premium Denemeyi Başlat"
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('CTA section patched');
