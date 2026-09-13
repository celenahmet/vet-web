import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_pattern = r'import \{([^}]+)\} from \'lucide-react\';'
match = re.search(import_pattern, content)
if match:
    old_import = match.group(0)
    inner_vars = match.group(1).replace(' ', '').replace('\n', '').split(',')
    
    missing = ['ChevronDown', 'MapPin', 'Building2', 'Camera', 'Star']
    for m in missing:
        if m not in inner_vars:
            inner_vars.append(m)
    
    inner_vars = [v for v in inner_vars if v]
    inner_vars.sort()
    
    new_import = f"import {{ {', '.join(inner_vars)} }} from 'lucide-react';"
    content = content.replace(old_import, new_import)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Imports fixed.")
