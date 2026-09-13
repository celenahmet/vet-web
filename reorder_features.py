import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# Split the content by <section> tags. We need to be careful with the React components.
# A better way is to split by `      {/* =========================================`
# which are used as comments between sections.

parts = re.split(r'(\s*\{/\*\s*=========================================\s*)', content)

# This might be brittle. Let's find the exact indices of each section's start and end.
# Sections are denoted by `<section ...>` and `</section>`.
sections_matches = list(re.finditer(r'<section.*?</section>', content, re.DOTALL))

# 0: Hero
# 1: App Showcase
# 2: Bento Grid (Bölüm 1)
# 3: Akıllı Aşı Takvimi (Bölüm 2)
# 4: Randevu Yönetimi (Bölüm 3)
# 5: Smart Health Assistant (To remove)
# 6: Acil Durum Kartı (Bölüm 5)
# 7: Irk Rehberi (To remove)
# 8: Sahiplendirme (To remove)
# 9: Sosyal (Bölüm 4)
# 10: B2B (Bölüm 6)
# 11: Download / Footer (Keep)

# We want: 0, 1, 2, 3, 4, 9, 6, 10, 11

if len(sections_matches) == 12:
    new_content = content[:sections_matches[2].start()]
    new_content += sections_matches[2].group(0) + "\n\n" # Bölüm 1
    new_content += sections_matches[3].group(0) + "\n\n" # Bölüm 2
    new_content += sections_matches[4].group(0) + "\n\n" # Bölüm 3
    new_content += sections_matches[9].group(0) + "\n\n" # Bölüm 4
    new_content += sections_matches[6].group(0) + "\n\n" # Bölüm 5
    new_content += sections_matches[10].group(0) + "\n\n" # Bölüm 6
    new_content += sections_matches[11].group(0) + "\n\n" # Footer
    
    # Add the rest of the file (closing div etc)
    new_content += content[sections_matches[11].end():]
    
    with open('src/pages/Features.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully reordered and cleaned sections.")
else:
    print(f"Found {len(sections_matches)} sections instead of 12. Manual review needed.")

