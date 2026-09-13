import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Shift left again
content = content.replace(
    'className="absolute -left-8 -bottom-16 lg:-left-56 lg:-bottom-20 w-[380px]',
    'className="absolute -left-8 -bottom-16 lg:-left-72 lg:-bottom-20 w-[380px]'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Chat card shifted even further left.")
