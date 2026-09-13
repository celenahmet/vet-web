import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the first SECTION 4 block
first_s4_idx = content.find("SECTION 4: Topluluk")
if first_s4_idx != -1:
    end_s4_idx = content.find("</section>", first_s4_idx)
    first_s4_content = content[first_s4_idx:end_s4_idx+10]
    print("--- FIRST S4 CONTENT ---")
    print(first_s4_content[-1500:])
    print("------------------------")
