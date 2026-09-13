import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's see how many times SECTION 4 is in the file
occurrences = [m.start() for m in re.finditer(r'SECTION 4: Topluluk', content)]
print(f"Found SECTION 4 {len(occurrences)} times at indices: {occurrences}")

