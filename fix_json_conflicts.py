import json
import re
import sys

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        out_lines = []
        
        for line in lines:
            if line.startswith('<<<<<<<'):
                continue
            if line.startswith('======='):
                continue
            if line.startswith('>>>>>>>'):
                continue
                
            # Strip trailing commas or braces so we can rebuild it cleanly
            line_stripped = line.strip()
            if line_stripped == '}' or line_stripped == '},':
                continue # We will add the final brace at the very end
                
            if line_stripped == '':
                continue
                
            # Ensure every line ends with a comma (we'll fix the last one later)
            if not line_stripped.endswith(',') and not line_stripped.endswith('{'):
                line = line.rstrip() + ',\n'
                
            out_lines.append(line)
            
        # Now we have all key-value lines. 
        # Remove the comma from the very last line that has one.
        for i in range(len(out_lines)-1, -1, -1):
            if out_lines[i].strip().endswith(','):
                out_lines[i] = out_lines[i].rsplit(',', 1)[0] + '\n'
                break
                
        # Add closing brace
        out_lines.append('}\n')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(out_lines)
        
        # Verify it is valid JSON
        with open(filepath, 'r', encoding='utf-8') as f:
            json.load(f)
        print(f"Fixed {filepath} successfully")
    except Exception as e:
        print(f"Failed to parse {filepath}: {e}")
        sys.exit(1)

fix_file('src/locales/en.json')
fix_file('src/locales/tr.json')
