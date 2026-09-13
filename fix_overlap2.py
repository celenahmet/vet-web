import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make the outer container taller and wider to fit the expanded layout
content = content.replace(
    '<div className="w-full max-w-lg relative h-[520px] lg:h-[640px] flex items-center justify-center">',
    '<div className="w-full max-w-[560px] relative h-[550px] lg:h-[700px] flex items-center justify-center">'
)

# Push Chat Bubble further left and down
content = content.replace(
    'className="absolute -left-4 bottom-4 lg:-left-16 lg:-bottom-4 w-[260px]',
    'className="absolute -left-6 -bottom-6 lg:-left-24 lg:-bottom-10 w-[250px]'
)

# Push Rating Card further right and down
content = content.replace(
    'className="absolute right-0 -bottom-8 lg:-right-16 lg:-bottom-20 w-[260px]',
    'className="absolute -right-4 -bottom-16 lg:-right-24 lg:-bottom-24 w-[250px]'
)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Overlap fixed further.")
