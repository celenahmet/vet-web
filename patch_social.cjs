const fs = require('fs');

let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

content = content.replace(
  /TAKİPTE KALIN/,
  "{t('contact_social_badge', 'TAKİPTE KALIN')}"
).replace(
  />Bizi Takip Edin<\/h3>/,
  ">{t('contact_social_title', 'Bizi Takip Edin')}</h3>"
).replace(
  />\s*Güncel gelişmelerden, yeni özelliklerden ve ipuçlarından haberdar olmak için sosyal medya hesaplarımızı takip edebilirsiniz\.\s*<\/p>/,
  ">\n                {t('contact_social_desc', 'Güncel gelişmelerden, yeni özelliklerden ve ipuçlarından haberdar olmak için sosyal medya hesaplarımızı takip edebilirsiniz.')}\n              </p>"
);

fs.writeFileSync('src/pages/Contact.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "contact_social_badge": "STAY TUNED",
  "contact_social_title": "Follow Us",
  "contact_social_desc": "You can follow our social media accounts to be informed about current developments, new features, and tips."
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "contact_social_badge": "TAKİPTE KALIN",
  "contact_social_title": "Bizi Takip Edin",
  "contact_social_desc": "Güncel gelişmelerden, yeni özelliklerden ve ipuçlarından haberdar olmak için sosyal medya hesaplarımızı takip edebilirsiniz."
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('Social section patched');
