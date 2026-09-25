const fs = require('fs');

const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));
enData['clinics_mockup_fin_save'] = 'Save';
fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));
trData['clinics_mockup_fin_save'] = 'Kaydet';
fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('patched');
