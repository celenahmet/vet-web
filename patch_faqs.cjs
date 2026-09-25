const fs = require('fs');
const enFile = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

Object.assign(enData, {
  "contact_faq_q_lab_result": "How do I upload a new laboratory result to the system?",
  "contact_faq_a_lab_result": "By opening the 'Laboratory > Scan Result from Device Screen' menu, you can read and save the result (OCR) in seconds with your phone's camera.",
  
  "contact_faq_q_barcode_stock": "Where can I do inventory counting with a barcode?",
  "contact_faq_a_barcode_stock": "On the 'Product and Stock > Smart Stock Count' screen, you can update the stock status by scanning the barcode/QR codes of drugs or consumables with your device's camera.",
  
  "contact_faq_q_clinic_seo_web": "How can I open a custom SEO-friendly web page for my clinic?",
  "contact_faq_a_clinic_seo_web": "You can publish your URL link with a single click by following the path 'My Profile > Veterinary Panel > My Web Page'.",
  
  "contact_faq_q_prescription_upload": "How can I add prescriptions and e-prescription images to the system?",
  "contact_faq_a_prescription_upload": "You can easily create your prescriptions manually in the system. Also, by using our smart optical scanning (OCR) feature, you can take a photo of your existing e-prescriptions and have the data automatically transferred to the system in seconds.",
  
  "contact_faq_q_monthly_balance": "Where can I download my income/expense balance sheet for past months?",
  "contact_faq_a_monthly_balance": "You can export your account transactions as a table by going to the 'Finance (Monthly Balance)' screen and clicking the 'Download CSV' button at the top right.",
  
  "contact_faq_q_manual_patient": "How do I add my patients who do not use the application (unregistered) to the system?",
  "contact_faq_a_manual_patient": "You can create a manual patient record using the 'Unregistered Client / Manual Ledger Record' tab from the 'Client Management' panel.",
  
  "contact_faq_q_whatsapp_sms": "How do I set up WhatsApp or SMS reminders for my patients?",
  "contact_faq_a_whatsapp_sms": "You can approve your templates by selecting the purpose of sending (Appointment, Laboratory result, etc.) and the channel from the 'Clinic Operations > SMS and WhatsApp' menu.",
  
  "contact_faq_q_kvkk_tracking": "Where do I track the GDPR and communication consent texts (Clarification Text) of the patients?",
  "contact_faq_a_kvkk_tracking": "You can manage your verifiable communication preferences and document references from the 'Corporate Communication > Secure and Official Tracking' tab.",
  
  "contact_faq_q_appointment_stats": "How can I see the most preferred services and my appointment statistics?",
  "contact_faq_a_appointment_stats": "You can graphically review your cancellation, approval, and service success rates from the 'Reporting > Appointment Analysis' page.",
  
  "contact_faq_q_team_roles": "How do I assign special authorizations to my employees (Veterinarians)?",
  "contact_faq_a_team_roles": "You can assign administrator, physician, or assistant roles to your staff from the 'Clinic Settings > Team Management' section.",
  
  "contact_faq_q_upcoming_vaccines": "Where can I see my pet's upcoming vaccines?",
  "contact_faq_a_upcoming_vaccines": "You can check the calendar from the 'Health Summary' card on your homepage or directly from the 'Vaccines' tab in your pet's profile.",
  
  "contact_faq_q_delete_health_record": "How do I delete an incorrectly entered weight or health record?",
  "contact_faq_a_delete_health_record": "Just go to the 'Health > Measurement History' section and tap the 'Trash' (Delete) icon next to the incorrect data.",
  
  "contact_faq_q_profile_visibility": "How do I change profile privacy (Who Can See Health History)?",
  "contact_faq_a_profile_visibility": "You can restrict your profile to 'Only Me, Veterinarians, Followers, or Everyone' by entering the 'Edit Pet > Visibility' settings.",
  
  "contact_faq_q_hidden_microchip": "Is my pet's microchip number hidden from everyone?",
  "contact_faq_a_hidden_microchip": "Yes. The microchip number is hidden by default. You can make it visible only on your own screen by tapping on the number on the 'Emergency Health Card' screen in the profile.",
  
  "contact_faq_q_find_clinic": "How do I find approved veterinary clinics near me?",
  "contact_faq_a_find_clinic": "You can list the badged clinics around you by selecting the province, district, and service type from the 'Profile > Clinic Directory' menu.",
  
  "contact_faq_q_message_vet": "How do I send a message to the veterinarian from within the app?",
  "contact_faq_a_message_vet": "You can communicate directly by going to the relevant clinic's profile page and clicking the 'Send Message' icon.",
  
  "contact_faq_q_allergies_chronic": "Where should I record my pet's chronic illnesses and allergies?",
  "contact_faq_a_allergies_chronic": "You can record all reactions by pressing the '+' button in the 'Health Panel > Allergy and Chronic Conditions' tab.",
  
  "contact_faq_q_active_mating": "How can I activate the matchmaking feature?",
  "contact_faq_a_active_mating": "Simply activate the 'Open to Matchmaking' option from the 'Edit Pet > Visibility' section.",
  
  "contact_faq_q_adoption_post": "How do I create a listing to put my pet up for adoption?",
  "contact_faq_a_adoption_post": "You can select the 'Adoption Listing' category from the new post creation screen by going to the 'Community / Explore' feed.",
  
  "contact_faq_q_neutered_status": "Can I change the 'Neutered' status in the profile later?",
  "contact_faq_a_neutered_status": "Yes. You can turn the neutering status on or off at any time from the 'Edit Pet > Visibility' tab.",
  
  "contact_faq_q_gen_forgot_pwd": "I forgot my password, how can I log into my account?",
  "contact_faq_a_gen_forgot_pwd": "Click the 'Forgot Password' link on the login screen. You can set your new password with the reset link sent to your registered email address or phone.",
  
  "contact_faq_q_no_notifications": "App notifications (appointment, vaccine alerts) are not coming to my phone, what should I do?",
  "contact_faq_a_no_notifications": "Make sure the app's notification permissions are turned on by going to your phone's 'Settings > Apps > Veterito > Notifications' menu.",
  
  "contact_faq_q_gen_delete_account": "How can I permanently delete my account and all data in it?",
  "contact_faq_a_gen_delete_account": "You can permanently delete your records from the database by following the 'Profile > Settings > Delete My Account' or 'Edit Pet > Delete Pet' steps.",
  
  "contact_faq_q_change_contact": "How do I change my registered phone number or email address?",
  "contact_faq_a_change_contact": "You can change it by entering your new contact information from the 'Profile > Account Settings > Personal Information' tab and completing the SMS/Email verification.",
  
  "contact_faq_q_offline_mode": "Does the Veterito app work without the internet (offline)?",
  "contact_faq_a_offline_mode": "The app is cloud-based. An active internet connection is required to securely save and synchronize data.",
  
  "contact_faq_q_multi_device": "Can I log into my account from multiple devices simultaneously?",
  "contact_faq_a_multi_device": "Yes. You can securely log in simultaneously from your phone (app) and computer (web panel) with the same user credentials.",
  
  "contact_faq_q_app_slow": "The app is working very slowly or pages are not loading, what should I do?",
  "contact_faq_a_app_slow": "Check your internet connection. If the problem persists, make sure you are using the latest version of the app via the App Store or Google Play Store.",
  
  "contact_faq_q_change_lang": "How can I change the app language?",
  "contact_faq_a_change_lang": "You can switch to Turkish, English, or other supported languages from the 'Profile > App Settings > Language Options' screen.",
  
  "contact_faq_q_update_data_loss": "Will my saved health data be deleted when the app is updated?",
  "contact_faq_a_update_data_loss": "No. All your data is instantly backed up on our secure cloud servers. App updates or device changes do not cause data loss.",
  
  "contact_faq_q_wrong_role": "I registered for the wrong account (e.g., Pet Owner instead of Physician), how can I fix it?",
  "contact_faq_a_wrong_role": "You can log into your current account and fill out the form to switch to a professional account from the 'Profile > Account Settings > Role Change / Clinic Application' screen."
});

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2) + '\n');
console.log('en.json FAQ updated');
