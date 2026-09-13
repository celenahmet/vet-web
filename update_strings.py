import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# Replace strings
content = content.replace("2.3 kg", "1.7 kg")
content = content.replace("12.12.2025", "16.11.2025")
content = content.replace("8 aylık", "5 aylık")
content = content.replace("25.08.2026", "16.04.2026")
content = content.replace("Kısırlaştırıldı", "Kısırlaştırılmadı")
content = content.replace("Procyon", "Senorita")
content = content.replace("Rümeysa Büyük", "Melis Karaca")
content = content.replace("Tekir", "British Shorthair")

# The specific 'Henüz aşı kaydı yok' 
content = content.replace("Henüz aşı kaydı yok", "Karma Aşı (1. Doz)")
content = content.replace("Aşı kaydı girilmemiş", "Karma Aşı (1. Doz)")
content = content.replace("Kayıt girilmemiş", "Astım (Hafif Seviye)")

# The specific microchip in the list
# The list has <span className="font-bold text-slate-800 dark:text-white">-</span>
# But only for Mikroçip No. Let's use regex to safely target the exact span.
content = re.sub(
    r'<span className="text-slate-500">Mikroçip No</span><span className="font-bold text-slate-800 dark:text-white">-</span>',
    '<span className="text-slate-500">Mikroçip No</span><span className="font-bold text-slate-800 dark:text-white">9810 **** **** 234</span>',
    content
)


with open('src/pages/Features.tsx', 'w') as f:
    f.write(content)

print("Strings updated successfully!")
