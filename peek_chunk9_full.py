with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
chunks = content.split('<section ')
c9 = chunks[9]
print("titles in c9:")
import re
print(re.findall(r"feat_\w+", c9))
