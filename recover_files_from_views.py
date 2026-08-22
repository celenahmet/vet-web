import json
import re

transcript_path = "/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/6fe43748-21db-4e2e-87e9-76f75fb79715/.system_generated/logs/transcript_full.jsonl"

def extract_latest_full_view(target_file):
    chunks = []
    with open(transcript_path, 'r') as f:
        for line in f:
            try:
                data = json.loads(line)
                if 'content' in data:
                    c = data['content']
                    if f"file://{target_file}" in c and "The following code has been modified" in c:
                        chunks.append(c)
            except Exception:
                pass
    
    if not chunks:
        return False
    
    latest_view = chunks[-1]
    
    # Check if it contains the entire file contents
    if "The above content shows the entire, complete file contents" not in latest_view and "The above content does NOT show the entire file contents" in latest_view:
        # It's a partial view. We need to reconstruct if possible, or just look for the last FULL view.
        # Let's find the last FULL view.
        full_views = [c for c in chunks if "The above content shows the entire, complete file contents" in c]
        if full_views:
            latest_view = full_views[-1]
        else:
            return False
            
    # Extract lines
    lines = []
    capture = False
    for line in latest_view.split('\n'):
        if "The following code has been modified" in line:
            capture = True
            continue
        if "The above content" in line:
            capture = False
            continue
        if capture:
            # strip line number: "123: content"
            match = re.match(r'^\d+: (.*)', line)
            if match:
                lines.append(match.group(1))
            else:
                lines.append(line) # in case it's an empty line or something
                
    with open(target_file, 'w') as f:
        f.write('\n'.join(lines))
    return True

print("Home.tsx recovered:", extract_latest_full_view("/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Home.tsx"))
print("Features.tsx recovered:", extract_latest_full_view("/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx"))
print("Clinics.tsx recovered:", extract_latest_full_view("/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Clinics.tsx"))
