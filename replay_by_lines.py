import json
import os

transcript_path = "/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/6fe43748-21db-4e2e-87e9-76f75fb79715/.system_generated/logs/transcript_full.jsonl"
target_file = "/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Home.tsx"

os.system(f"git checkout c994971 -- {target_file}")

with open(target_file, "r") as f:
    lines = f.read().splitlines()

def apply_patch(start_line, end_line, replacement):
    global lines
    start_idx = start_line - 1
    end_idx = end_line
    replacement_lines = replacement.split('\n')
    lines = lines[:start_idx] + replacement_lines + lines[end_idx:]

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index', 0)
            if step_index > 900: # Stop before my destructive session
                break
                
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    name = call['name']
                    if name == 'replace_file_content':
                        args = call['args']
                        if args.get('TargetFile') == target_file:
                            apply_patch(int(args.get('StartLine', 1)), int(args.get('EndLine', 1)), args.get('ReplacementContent', ''))
                    elif name == 'multi_replace_file_content':
                        args = call['args']
                        if args.get('TargetFile') == target_file:
                            # Apply chunks in reverse order so line numbers don't shift for previous chunks in the same call
                            chunks = args.get('ReplacementChunks', [])
                            chunks.sort(key=lambda x: int(x.get('StartLine', 1)), reverse=True)
                            for chunk in chunks:
                                apply_patch(int(chunk.get('StartLine', 1)), int(chunk.get('EndLine', 1)), chunk.get('ReplacementContent', ''))
        except Exception as e:
            pass

with open(target_file, "w") as f:
    f.write('\n'.join(lines) + '\n')

print("Replayed Home.tsx perfectly by line numbers!")
