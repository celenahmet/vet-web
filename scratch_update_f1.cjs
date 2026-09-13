const fs = require('fs');

const trPath = '/Users/rumeysabuyuk/Desktop/vetweb/src/locales/tr.json';
const enPath = '/Users/rumeysabuyuk/Desktop/vetweb/src/locales/en.json';

let tr = JSON.parse(fs.readFileSync(trPath, 'utf8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

tr.clinics_s6_f1_desc = "Kliniğinizi dijital dünyada öne çıkarın. Kod yazmaya gerek kalmadan, saniyeler içinde SEO uyumlu ve WhatsApp entegreli özel profil sayfanızı oluşturun.";
en.clinics_s6_f1_desc = "Stand out in the digital world. Create your SEO-friendly, WhatsApp-integrated custom profile page in seconds, without writing any code.";

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('F1 text updated.');
