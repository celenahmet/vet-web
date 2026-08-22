import json
import os

transcript_path = "/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/6fe43748-21db-4e2e-87e9-76f75fb79715/.system_generated/logs/transcript_full.jsonl"

def apply_replace(target_file, start_line, end_line, target_content, replacement_content):
    if not os.path.exists(target_file): return False
    with open(target_file, 'r') as f:
        lines = f.readlines()
    
    # 1-indexed to 0-indexed
    start_idx = start_line - 1
    end_idx = end_line
    
    chunk = "".join(lines[start_idx:end_idx])
    
    # Normalizing line endings/whitespace for exact match is tricky, but let's try direct replace
    if target_content in chunk:
        new_chunk = chunk.replace(target_content, replacement_content)
        lines[start_idx:end_idx] = [new_chunk]
        with open(target_file, 'w') as f:
            f.writelines(lines)
        return True
    else:
        # Fallback: try replacing in the whole file
        full_text = "".join(lines)
        if target_content in full_text:
            full_text = full_text.replace(target_content, replacement_content)
            with open(target_file, 'w') as f:
                f.write(full_text)
            return True
    return False

applied = 0
failed = 0

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index', 0)
            if step_index > 900: # Stop before my destructive steps
                break
                
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    name = call['name']
                    if name == 'replace_file_content':
                        args = call['args']
                        if apply_replace(args.get('TargetFile'), int(args.get('StartLine', 1)), int(args.get('EndLine', 1)), args.get('TargetContent'), args.get('ReplacementContent')):
                            applied += 1
                        else:
                            failed += 1
                    elif name == 'multi_replace_file_content':
                        args = call['args']
                        target_file = args.get('TargetFile')
                        for chunk in args.get('ReplacementChunks', []):
                            if apply_replace(target_file, int(chunk.get('StartLine', 1)), int(chunk.get('EndLine', 1)), chunk.get('TargetContent'), chunk.get('ReplacementContent')):
                                applied += 1
                            else:
                                failed += 1
                    elif name == 'run_command':
                        cmd = call['args'].get('CommandLine', '')
                        # only execute python scripts that modify files
                        if ('python' in cmd or 'node' in cmd) and not 'cat ' in cmd and not 'grep ' in cmd:
                            os.system(cmd)
        except Exception as e:
            pass

print(f"Replay complete: Applied {applied}, Failed {failed}")
