import sys

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace the strokeWidth and add the drop shadow class
    old_str = 'fill="none" stroke="var(--color-vet-primary)" strokeWidth="4"'
    new_str = 'fill="none" stroke="var(--color-vet-primary)" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]"'
    
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"Pattern not found in {filepath}")

process_file('src/pages/Home.tsx')
process_file('src/pages/Clinics.tsx')
