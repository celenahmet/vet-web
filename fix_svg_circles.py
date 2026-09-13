with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Find the map block and replace the motion.circle part
old_pattern = r'\{\[\s*\{\s*cx:\s*5,\s*cy:\s*35\s*\}.*?\]\.map\(\(point, i\) => \(\s*<motion\.circle.*?/>\s*\)\)\}'

new_circles = """{[
                        { cx: 5, cy: 35 },
                        { cx: 25, cy: 25 },
                        { cx: 50, cy: 30 },
                        { cx: 75, cy: 15 },
                        { cx: 95, cy: 5 },
                      ].map((point, i) => (
                        <motion.circle 
                          key={i}
                          cx={point.cx} 
                          cy={point.cy} 
                          fill="#059669" 
                          initial={{ r: 0, opacity: 0 }}
                          whileInView={{ r: 3.5, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (i * 0.2), duration: 0.4 }}
                        />
                      ))}"""

content = re.sub(old_pattern, new_circles, content, flags=re.DOTALL)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("SVG circles fixed!")
