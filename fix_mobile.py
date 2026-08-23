import os
import re

PAGES_DIR = "src/pages"

def fix_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    original_content = content
    
    # 1. Replace h-[100dvh] in sections to be responsive.
    def replace_h100(match):
        cls = match.group(0)
        # Protect desktop layout, fix mobile
        cls = cls.replace("h-[100dvh]", "min-h-[100dvh] h-auto lg:h-[100dvh]")
        if "py-" not in cls and "pt-" not in cls and "pb-" not in cls:
             cls = cls.replace("snap-start", "snap-start py-20 lg:py-0")
        return cls

    content = re.sub(r'className="[^"]*h-\[100dvh\][^"]*snap-start[^"]*"', replace_h100, content)

    # 2. Fix the flex flex-col lg:flex-row gap issues if they don't have gaps
    def replace_flex(match):
        cls = match.group(0)
        # Often they have gap-16 which applies to mobile as well, which is 4rem. Might be too big for mobile.
        cls = re.sub(r'\bgap-16\b', 'gap-10 lg:gap-16', cls)
        cls = re.sub(r'\bgap-24\b', 'gap-12 lg:gap-24', cls)
        cls = re.sub(r'\bgap-12\b', 'gap-8 lg:gap-12', cls)
        # Fix the w-[50%] which is probably too small for mobile, it should be w-full lg:w-[50%]
        return cls
        
    content = re.sub(r'className="[^"]*flex flex-col lg:flex-row[^"]*"', replace_flex, content)
    
    # 3. Absolute positioned floating widgets need mobile fixes
    def replace_absolute(match):
         cls = match.group(0)
         if "hidden md:flex" in cls:
             # It's already hidden on small screens
             pass
         return cls
         
    content = re.sub(r'className="[^"]*absolute[^"]*"', replace_absolute, content)

    # 4. Text max widths
    # Some texts have max-w-2xl which is 42rem, too wide for mobile
    content = content.replace("max-w-2xl", "max-w-xl lg:max-w-2xl")
    content = content.replace("max-w-3xl", "max-w-2xl lg:max-w-3xl")

    if content != original_content:
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Fixed: {filepath}")

for filename in os.listdir(PAGES_DIR):
    if filename.endswith(".tsx"):
        fix_file(os.path.join(PAGES_DIR, filename))
