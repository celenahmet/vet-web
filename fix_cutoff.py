import re

with open("src/pages/Features.tsx", "r") as f:
    content = f.read()

content = content.replace("h-[520px]", "h-[460px]")
content = content.replace("scale-[0.85]", "scale-[0.75]")
content = content.replace("pt-20 pb-4", "pt-10 pb-4")

with open("src/pages/Features.tsx", "w") as f:
    f.write(content)

print("Done")
