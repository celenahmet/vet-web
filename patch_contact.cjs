const fs = require('fs');

let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

content = content.replace(
  /\{brandConfig\.name\} Destek<\/h3>/,
  "{brandConfig.name} {t('contact_support_title', 'Destek')}</h3>"
);

fs.writeFileSync('src/pages/Contact.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

enData['contact_support_title'] = "Support";

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

trData['contact_support_title'] = "Destek";

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('Contact page patched');
