import re

with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Profile
profile = re.search(r'\{/\* Abstract UI: Digital Clinic Profile \*/\}(.*?)\</motion.div>', content, re.DOTALL).group(1)
calendar = re.search(r'\{/\* Abstract UI: Calendar \*/\}(.*?)\</motion.div>', content, re.DOTALL).group(1)
records = re.search(r'\{/\* Abstract UI: Patient Record \*/\}(.*?)\</motion.div>', content, re.DOTALL).group(1)

def count_diff(s):
    opens = len(re.findall(r'<\w+[^>]*>', s)) - len(re.findall(r'<(img|br|hr|input|path|circle|line|rect|polygon|polyline)[^>]*>', s))
    closes = len(re.findall(r'</\w+>', s))
    return opens - closes

print("Profile diff:", count_diff(profile))
print("Calendar diff:", count_diff(calendar))
print("Records diff:", count_diff(records))
