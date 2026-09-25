const fs = require('fs');

let content = fs.readFileSync('src/pages/About.tsx', 'utf8');

// Replace Sorun / Çözüm texts
content = content.replace(
  />Sorun<\/h4>/g,
  ">{t('about_story_problem', 'Sorun')}</h4>"
).replace(
  />Kopuk iletişim, kaybolan veriler ve stresli evrak yükü\.<\/p>/g,
  ">{t('about_story_problem_desc', 'Kopuk iletişim, kaybolan veriler ve stresli evrak yükü.')}</p>"
).replace(
  />Çözüm<\/h4>/g,
  ">{t('about_story_solution', 'Çözüm')}</h4>"
).replace(
  />Veteriner hekimler ve hayvanseverler için kusursuz dijital asistan\.<\/p>/g,
  ">{t('about_story_solution_desc', 'Veteriner hekimler ve hayvanseverler için kusursuz dijital asistan.')}</p>"
);

fs.writeFileSync('src/pages/About.tsx', content);

// Update en.json
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "about_story_title": "Why Veterito?",
  "about_story_p1": "Our story began when we realized a common problem experienced by both pet owners and veterinarians: Disconnected communication and lost data. Frayed physical vaccination cards, forgotten appointments, complex laboratory results, and the heavy paperwork burden on clinics' shoulders were slowing down the fast and high-quality health service our dear friends deserve.",
  "about_story_p2": "We founded Veterito to put an end to this chaos. Our goal was to take the tracking stress off pet owners' shoulders and provide a flawless digital workspace for veterinarians where they can focus only on their patients. Today, Veterito is the most comprehensive platform that brings pet owners and veterinarians together in the same circle of trust.",
  "about_story_problem": "Problem",
  "about_story_problem_desc": "Disconnected communication, lost data, and stressful paperwork burden.",
  "about_story_solution": "Solution",
  "about_story_solution_desc": "The flawless digital assistant for veterinarians and pet owners."
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');

// Update tr.json
const trFile = 'src/locales/tr.json';
const trData = JSON.parse(fs.readFileSync(trFile, 'utf8'));

Object.assign(trData, {
  "about_story_title": "Neden Veterito?",
  "about_story_p1": "Hikayemiz, hem hayvanseverlerin hem de veteriner hekimlerin yaşadığı ortak bir problemi fark etmemizle başladı: Kopuk iletişim ve kaybolan veriler. Yıpranan fiziksel aşı karneleri, unutulan randevular, karmaşık laboratuvar sonuçları ve kliniklerin omuzlarındaki ağır evrak yükü, can dostlarımızın hak ettiği hızlı ve kaliteli sağlık hizmetini yavaşlatıyordu.",
  "about_story_p2": "Veterito'yu, bu karmaşaya son vermek için kurduk. Amacımız; evcil hayvan sahiplerinin omuzlarındaki takip stresini almak ve veteriner hekimlere sadece hastalarına odaklanabilecekleri kusursuz bir dijital çalışma alanı sunmaktı. Bugün Veterito, hayvanseverler ile veteriner hekimleri aynı güven çemberinde buluşturan en kapsamlı platform konumunda.",
  "about_story_problem": "Sorun",
  "about_story_problem_desc": "Kopuk iletişim, kaybolan veriler ve stresli evrak yükü.",
  "about_story_solution": "Çözüm",
  "about_story_solution_desc": "Veteriner hekimler ve hayvanseverler için kusursuz dijital asistan."
});

fs.writeFileSync(trFile, JSON.stringify(trData, null, 2) + '\n');

console.log('About page patched');
