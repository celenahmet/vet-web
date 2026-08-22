with open("src/pages/Features.tsx", "r") as f:
    content = f.read()

content = content.replace("h-[460px]", "h-[520px]")
content = content.replace("scale-[0.75]", "scale-[0.85]")

with open("src/pages/Features.tsx", "w") as f:
    f.write(content)
print("Done")
