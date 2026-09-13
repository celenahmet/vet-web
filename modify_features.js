const fs = require('fs');
const file = 'src/pages/Features.tsx';
let content = fs.readFileSync(file, 'utf8');

// The goal is to replace the text keys in the matching sections.
// We will replace:
// Section A -> Bölüm 1
content = content.replace(/t\('feat_timeline_title_label'\)/g, "'Öne Çıkanlar'");
content = content.replace(/t\('feat_timeline_title2'\)/g, "t('feat_new_s1_title')");
content = content.replace(/t\('feat_timeline_desc2'\)/g, "t('feat_new_s1_desc')");
content = content.replace(/t\('feat_ai_chart_title'\)/g, "t('feat_new_s1_li1')");
content = content.replace(/t\('feat_timeline_visits'\)/g, "t('feat_new_s1_li2')");
content = content.replace(/t\('feat_sec_card_allergy'\)/g, "t('feat_new_s1_li3')");

// Section B -> Bölüm 2
content = content.replace(/t\('feat_vax_label'\)/g, "'Sağlık Asistanı'");
content = content.replace(/t\('feat_timeline_f1'\)/g, "t('feat_new_s2_title')");
content = content.replace(/t\('feat_vax_desc'\)/g, "t('feat_new_s2_desc')");
content = content.replace(/t\('feat_vax_f1'\)/g, "t('feat_new_s2_li1')");
content = content.replace(/t\('feat_vax_f2'\)/g, "t('feat_new_s2_li2')");
content = content.replace(/t\('feat_own_ui_upcoming'\)/g, "t('feat_new_s2_li3')"); 
// wait, feat_own_ui_upcoming is also used in Showcase, I shouldn't replace it globally.
