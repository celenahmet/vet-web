with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# Replace the specific weight date in the profile card
content = content.replace("1.7 kg • 16.04.2026", "1.7 kg • 24.08.2026")

with open('src/pages/Features.tsx', 'w') as f:
    f.write(content)

print("Date fixed again!")
