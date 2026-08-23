import os
import re

PAGE_DIR = "src/pages"
APP_FILE = "src/App.tsx"

# Find any container class pattern like: container mx-auto px-6 max-w-5xl, max-w-7xl, max-w-[85rem] etc
container_pattern = re.compile(r'container mx-auto px-[a-zA-Z0-9-\[\]]+( max-w-[a-zA-Z0-9-\[\]]+)?')

NEW_CONTAINER = "w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # Replace containers
    content = container_pattern.sub(NEW_CONTAINER, content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(PAGE_DIR):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

print("Done")
