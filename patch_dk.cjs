const fs = require('fs');

let content = fs.readFileSync('src/components/PatientMgmtMockup.tsx', 'utf8');

content = content.replace(
  /duration: '15 dk'/g,
  "duration: `15 ${t('mockup_patient_min', 'dk')}`"
).replace(
  /duration: '45 dk'/g,
  "duration: `45 ${t('mockup_patient_min', 'dk')}`"
);

fs.writeFileSync('src/components/PatientMgmtMockup.tsx', content);

const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));
enData['mockup_patient_min'] = 'min';
fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));
trData['mockup_patient_min'] = 'dk';
fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('dk patched');
