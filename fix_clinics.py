import re

with open("src/pages/Clinics.tsx", "r") as f:
    content = f.read()

# Fix h-screen to min-h-screen h-auto lg:h-screen py-24 lg:py-0 on sections
content = re.sub(r'h-screen snap-always snap-start', 'min-h-screen h-auto lg:h-screen snap-always snap-start py-24 lg:py-0', content)

# Fix fixed heights on cards
content = content.replace('h-[450px]', 'h-auto lg:h-[450px]')

# Fix flex layout inside cards
content = content.replace('flex gap-8 flex-1', 'flex flex-col lg:flex-row gap-8 flex-1')
content = content.replace('flex gap-8 h-full', 'flex flex-col lg:flex-row gap-8 h-full')

# Fix sidebar width
content = content.replace('w-48 space-y-2', 'w-full lg:w-48 space-y-2 lg:space-y-4')

# Fix 1/3 2/3 widths
content = content.replace('w-1/3', 'w-full lg:w-1/3')
content = content.replace('w-2/3', 'w-full lg:w-2/3')
content = content.replace('flex overflow-hidden', 'flex flex-col lg:flex-row overflow-hidden')

with open("src/pages/Clinics.tsx", "w") as f:
    f.write(content)
print("Clinics fixed.")
