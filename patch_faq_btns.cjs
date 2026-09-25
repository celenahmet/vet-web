const fs = require('fs');

let content = fs.readFileSync('src/pages/FAQ.tsx', 'utf8');

content = content.replace(
  /YAZILARI OKU/,
  "{t('faq_info_1_btn', 'YAZILARI OKU')}"
).replace(
  /UYGULAMAYI İNDİR/,
  "{t('faq_info_2_btn', 'UYGULAMAYI İNDİR')}"
).replace(
  /DESTEK TALEBİ AÇ/,
  "{t('faq_info_3_btn', 'DESTEK TALEBİ AÇ')}"
);

fs.writeFileSync('src/pages/FAQ.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "faq_info_1_btn": "READ ARTICLES",
  "faq_info_2_btn": "DOWNLOAD APP",
  "faq_info_3_btn": "OPEN SUPPORT TICKET"
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "faq_info_1_btn": "YAZILARI OKU",
  "faq_info_2_btn": "UYGULAMAYI İNDİR",
  "faq_info_3_btn": "DESTEK TALEBİ AÇ"
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('FAQ buttons patched');
