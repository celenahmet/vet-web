import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Shift left and up
content = content.replace(
    'className="absolute -left-8 -bottom-16 lg:-left-72 lg:-bottom-20 w-[380px]',
    'className="absolute -left-8 -bottom-16 lg:-left-80 lg:-bottom-12 w-[380px]'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Chat card shifted further left and up.")
