import re

with open("src/pages/Clinics.tsx", "r") as f:
    content = f.read()

# Make it a normal div, not h-screen overflow-auto
content = content.replace(
    '<div className="h-screen relative overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[var(--bg-main)]">',
    '<div className="min-h-screen relative bg-[var(--bg-main)]">'
)

# Add the useEffect import if missing
if "useEffect" not in content:
    content = content.replace("import React from 'react';", "import React, { useEffect } from 'react';")

# Add the useEffect hook to enable/disable scroll snapping on the html element
effect_code = """
  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory';
    return () => {
      document.documentElement.style.scrollSnapType = 'none';
    };
  }, []);
"""

content = content.replace(
    'export default function Clinics() {\n  return (',
    f'export default function Clinics() {{{effect_code}\n  return ('
)

with open("src/pages/Clinics.tsx", "w") as f:
    f.write(content)
