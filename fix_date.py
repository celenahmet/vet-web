with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# Replace the specific age date. I previously set it to 16.11.2025
content = content.replace("16.11.2025", "16.04.2026")

# Also, if there's any other place they wanted it... let's just make sure 16.11.2025 is replaced.
with open('src/pages/Features.tsx', 'w') as f:
    f.write(content)

print("Date fixed!")
