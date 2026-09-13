with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

old_svg_pattern = r'<svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">.*?<\/svg>'

new_svg = """<svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <motion.path 
                        d="M 5,35 L 25,25 L 50,30 L 75,15 L 95,5" 
                        fill="none" 
                        stroke="#059669" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      {[
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
                          r="2.5" 
                          fill="#059669" 
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.3, type: "spring", stiffness: 300 }}
                        />
                      ))}
                    </svg>"""

content = re.sub(old_svg_pattern, new_svg.strip(), content, flags=re.DOTALL)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("SVG made dynamic!")
