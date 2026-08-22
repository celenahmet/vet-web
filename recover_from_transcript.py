import json

transcript_path = "/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/6fe43748-21db-4e2e-87e9-76f75fb79715/.system_generated/logs/transcript_full.jsonl"

home_content = None
clinics_content = None
features_content = None

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            
            # Check for tool_calls (writing file)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] == 'write_to_file':
                        target = call['args'].get('TargetFile', '')
                        content = call['args'].get('CodeContent', '')
                        if 'Home.tsx' in target: home_content = content
                        elif 'Clinics.tsx' in target: clinics_content = content
                        elif 'Features.tsx' in target: features_content = content
            
            # Check for tool responses (view_file outputs might have full file contents)
            # The replace_file_content tool only outputs diffs, but wait!
            # If the file was heavily modified by replace_file_content, we can't extract it directly.
        except:
            pass

print("Found Home:", home_content is not None)
print("Found Clinics:", clinics_content is not None)
print("Found Features:", features_content is not None)
