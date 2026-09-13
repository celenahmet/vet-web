import json

def update_locales():
    for file in ['src/locales/tr.json', 'src/locales/en.json']:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        if file == 'src/locales/tr.json':
            data['feat_s3_ui_msg_name'] = 'Vet. Dr. Ceyhun E.'
            data['feat_s3_ui_msg_content'] = 'Merhaba Melis Hanım, randevunuz onaylandı.'
            data['feat_s3_ui_msg_reply_content'] = 'Teşekkürler, perşembe görüşmek üzere!'
            data['feat_s3_ui_msg_reply_time'] = 'Şimdi'
        else:
            data['feat_s3_ui_msg_name'] = 'Dr. Ceyhun E.'
            data['feat_s3_ui_msg_content'] = 'Hello Melis, your appointment is confirmed.'
            data['feat_s3_ui_msg_reply_content'] = 'Thank you, see you on Thursday!'
            data['feat_s3_ui_msg_reply_time'] = 'Now'
            
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

update_locales()
print("Locales updated.")
