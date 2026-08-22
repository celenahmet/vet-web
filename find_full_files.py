import json

transcript_path = "/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/6fe43748-21db-4e2e-87e9-76f75fb79715/.system_generated/logs/transcript_full.jsonl"

home_chunks = []

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'content' in data:
                c = data['content']
                if "file:///Users/rumeysabuyuk/Desktop/vetweb/src/pages/Home.tsx" in c and "The following code has been modified" in c:
                    home_chunks.append(c)
        except Exception:
            pass

print(f"Found {len(home_chunks)} view_file outputs for Home.tsx")
if home_chunks:
    with open('home_view_last.txt', 'w') as out:
        out.write(home_chunks[-1])
