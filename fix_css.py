with open("src/index.css", "r") as f:
    content = f.read()

content = content.replace("overflow-x: hidden;", "")
content = content.replace(".app-container {", ".app-container {\n  overflow-x: hidden;")

with open("src/index.css", "w") as f:
    f.write(content)
