import re

with open("src/pages/Features.tsx", "r") as f:
    content = f.read()

# Remove the useEffect block for snap scrolling
content = re.sub(r"  // Sayfaya özel Snap Scroll.*?}, \[\]\);\n", "", content, flags=re.DOTALL)

# Remove snap-start snap-always from sections
content = content.replace(" snap-start snap-always", "")

with open("src/pages/Features.tsx", "w") as f:
    f.write(content)
print("Done")
