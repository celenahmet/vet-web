const fs = require('fs');

const trPath = '/Users/rumeysabuyuk/Desktop/vetweb/src/locales/tr.json';
const enPath = '/Users/rumeysabuyuk/Desktop/vetweb/src/locales/en.json';

let tr = JSON.parse(fs.readFileSync(trPath, 'utf8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

tr.clinics_s6_f2_desc = "Randevu, aşı ve laboratuvar bildirimlerini WhatsApp ve SMS üzerinden otomatikleştirerek hasta sahiplerine profesyonel ve kesintisiz bir iletişim deneyimi sunun.";
en.clinics_s6_f2_desc = "Provide a professional and seamless communication experience to pet owners by automating appointment, vaccination, and laboratory notifications via WhatsApp and SMS.";

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('Locales updated.');
