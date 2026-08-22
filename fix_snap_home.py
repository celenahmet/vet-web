import re
import os

for file in ["src/pages/Home.tsx", "src/pages/Clinics.tsx"]:
    if not os.path.exists(file): continue
    with open(file, "r") as f:
        content = f.read()

    # Remove the useEffect block for snap scrolling
    content = re.sub(r"  // Sayfaya özel Snap Scroll.*?}, \[\]\);\n", "", content, flags=re.DOTALL)
    
    # Remove snap-start snap-always
    content = content.replace(" snap-start snap-always", "")

    # Also, h-[100dvh] is typically used with snap. 
    # To prevent content cutoff without snap, change to min-h-[100dvh]
    content = content.replace("h-[100dvh]", "min-h-[100dvh]")

    with open(file, "w") as f:
        f.write(content)

print("Done")
