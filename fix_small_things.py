import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# 1. Fix weight date
content = content.replace("Son ölçüm: 16.04.2026", "Son ölçüm: 24.08.2026")

# 2. Fix the split date
# In my previous code it was: <div className="font-bold text-slate-800 dark:text-white text-[13px] leading-tight mt-0.5">07.09<br/>2026</div>
content = content.replace("07.09<br/>2026", "07.09.2026")

with open('src/pages/Features.tsx', 'w') as f:
    f.write(content)

print("Small fixes applied!")
