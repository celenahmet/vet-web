const fs = require('fs');

const trPath = '/Users/rumeysabuyuk/Desktop/vetweb/src/locales/tr.json';
const enPath = '/Users/rumeysabuyuk/Desktop/vetweb/src/locales/en.json';

let tr = JSON.parse(fs.readFileSync(trPath, 'utf8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

tr.clinics_s6_f3_desc = "Hasta iletişiminde hukuki süreçleri dert etmeyin. KVKK uyumlu dijital izin sistemi sayesinde, tüm onay ve aydınlatma metinlerini kanıtlanabilir şekilde güvenle arşivleyin.";
en.clinics_s6_f3_desc = "Don't worry about legal processes in patient communication. Thanks to the KVKK-compliant digital consent system, safely archive all consent and clarification texts in a verifiable way.";

fs.writeFileSync(trPath, JSON.stringify(tr, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('Locales updated for f3.');
