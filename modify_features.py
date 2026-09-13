import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# Split the content by sections
sections = re.split(r'(<section.*?>.*?</section>)', content, flags=re.DOTALL)

# Keep the hero/showcase sections unchanged (the first two sections)
# Then pick 6 sections to modify according to the user's plan.
# I'll just find the sections by their unique keys or classes and update their texts.

def update_section(content, old_title_key, new_title_key, old_desc_key, new_desc_key, li_updates):
    # This function is a bit risky. Let's just do exact string replacements for the translation keys
    pass

# Direct replacements using regex for the specific lines.

# Bölüm 1: Bento Grid
content = content.replace("t('feat_timeline_title2')", "t('feat_new_s1_title')")
content = content.replace("t('feat_timeline_desc2')", "t('feat_new_s1_desc')")
content = content.replace("t('feat_ai_chart_title')", "t('feat_new_s1_li1')")
content = content.replace("t('feat_timeline_visits')", "t('feat_new_s1_li2')")
content = content.replace("t('feat_sec_card_allergy')", "t('feat_new_s1_li3')")
content = content.replace("t('feat_timeline_title_label')", "'Öne Çıkanlar'")

# Bölüm 2: Akıllı Aşı Takvimi
content = content.replace("t('feat_timeline_f1')", "t('feat_new_s2_title')")
content = content.replace("t('feat_vax_desc')", "t('feat_new_s2_desc')")
content = content.replace("t('feat_vax_f1')", "t('feat_new_s2_li1')")
content = content.replace("t('feat_vax_f2')", "t('feat_new_s2_li2')")
# There are only 2 bullet points explicitly with check marks in this section. I'll replace the first upcoming item title with the 3rd bullet
# wait, it's better to add the 3rd one or replace an existing one. Let's replace 'feat_appt_svc2' and 'feat_timeline_vax' for the upcoming items
content = content.replace("t('feat_appt_svc2')", "t('feat_new_s2_li3')")

# Bölüm 3: Randevu Yönetimi
content = content.replace("t('feat_appt_title')", "t('feat_new_s3_title')")
content = content.replace("t('feat_appt_desc1')", "t('feat_new_s3_desc')")
content = content.replace("t('feat_appt_desc2')", "''") # clear second desc
# Randevu yönetimi visual has some bullet points, I'll replace 'feat_appt_s1', 'feat_appt_what', 'feat_appt_note'
content = content.replace("t('feat_appt_what')", "t('feat_new_s3_li1')")
content = content.replace("t('feat_appt_s1')", "t('feat_new_s3_li2')")
content = content.replace("t('feat_appt_note')", "t('feat_new_s3_li3')")

# Bölüm 4: Sosyal
# Section starts at 1535. Uses feat_social_title, feat_social_desc
content = content.replace("t('feat_social_title')", "t('feat_new_s4_title')")
content = content.replace("t('feat_social_desc')", "t('feat_new_s4_desc')")
content = content.replace("t('feat_social_f1')", "t('feat_new_s4_li1')")
content = content.replace("t('feat_social_f2')", "t('feat_new_s4_li2')")
content = content.replace("t('feat_social_f3')", "t('feat_new_s4_li3')")

# Bölüm 5: Acil Durum Kartı
# Section starts at 1133. Uses feat_sec_card, feat_emerg_desc, feat_sec_card_share_btn, feat_sec_title2, feat_emerg_f3
content = content.replace("t('feat_sec_card')", "t('feat_new_s5_title')")
content = content.replace("t('feat_emerg_desc')", "t('feat_new_s5_desc')")
content = content.replace("t('feat_sec_card_share_btn')", "t('feat_new_s5_li1')")
content = content.replace("t('feat_sec_title2')", "t('feat_new_s5_li2')")
content = content.replace("t('feat_emerg_f3')", "t('feat_new_s5_li3')")

# Bölüm 6: B2B
# Section starts at 1685. Uses feat_b2b_title, feat_clinic_desc, feat_b2b_free_reg (for button)
content = content.replace("t('feat_b2b_title')", "t('feat_new_s6_title')")
content = content.replace("t('feat_clinic_desc')", "t('feat_new_s6_desc')")
content = content.replace("t('feat_b2b_free_reg')", "t('feat_new_s6_cta')")

with open('src/pages/Features.tsx', 'w') as f:
    f.write(content)

print("Features.tsx updated successfully.")
