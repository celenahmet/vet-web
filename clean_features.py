import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

chunks = content.split('<section ')
print(f"Total chunks: {len(chunks)}")

valid_chunks = [chunks[0]] # Header

def get_title(c):
    m = re.search(r'feat_new_s(\d)_title', c)
    if m: return int(m.group(1))
    return -1

# Expected order of sections: 1, 2, 3, 4, 5, 6
expected_s = 1

for i, c in enumerate(chunks[1:]):
    idx = i + 1
    s_num = get_title(c)
    
    # We also have B2B section (s6) and maybe Footer has no title
    if s_num == expected_s:
        # For S4, ensure we pick the Bento one
        if s_num == 4:
            if "Bento Grid" in c:
                valid_chunks.append(c)
                print(f"Kept chunk {idx} as S4 (Bento)")
                expected_s += 1
            else:
                print(f"Skipped chunk {idx} (S4 mutant)")
        else:
            valid_chunks.append(c)
            print(f"Kept chunk {idx} as S{s_num}")
            expected_s += 1
    elif s_num != -1:
        print(f"Skipped chunk {idx} (Duplicate or out of order S{s_num})")
    else:
        # Check if it's the footer or something else we want to keep
        if "feat_b2b" in c:
            pass # this is S6 usually, handled by s_num
        elif "Hazırsanız Başlayalım" in c or "Footer" in c or "play-store-badge" in c:
            valid_chunks.append(c)
            print(f"Kept chunk {idx} (Footer/Download)")
        else:
            print(f"Skipped chunk {idx} (Junk)")

final_content = '<section '.join(valid_chunks)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Cleanup complete.")
