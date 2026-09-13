with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

chunks = content.split('<section ')
print("--- CHUNK 9 ---")
print(chunks[9][:500])
print("...")
