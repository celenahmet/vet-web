import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Split by '<section '
chunks = content.split('<section ')

print("Found", len(chunks), "chunks")

for i, chunk in enumerate(chunks):
    if i == 0:
        continue # this is everything before the first section
    
    # Try to find feat_new_sX_title
    titles = re.findall(r"feat_new_s\d_title", chunk)
    titles += re.findall(r"feat_b2b_", chunk)
    titles += re.findall(r"feat_ai_", chunk)
    titles = list(set(titles))
    
    # check for Bento Grid
    has_bento = "Bento Grid" in chunk
    has_collage = "Dashboard Collage" in chunk
    
    print(f"Chunk {i}: len={len(chunk)}")
    print(f"  Titles: {titles}")
    print(f"  Bento: {has_bento}, Collage: {has_collage}")
