import re

def replace_svg_colors(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We need to find all motion.rect elements and replace their stroke and drop-shadow
    # This might be easier to do by manually replacing chunks. Let's just print the contexts where motion.rect is found.
    import sys
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'motion.rect' in line:
            print(f"{filepath}:{i}")
            for j in range(max(0, i-5), min(len(lines), i+6)):
                print(lines[j])
            print("---")

replace_svg_colors('src/pages/Home.tsx')
replace_svg_colors('src/pages/Clinics.tsx')
