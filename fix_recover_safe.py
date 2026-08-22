import re

# Fix Navbar.tsx
with open("src/components/Navbar.tsx", "r") as f:
    nav = f.read()
nav = nav.replace("py-3 glass-nav shadow-sm", "glass-nav shadow-sm")
nav = nav.replace("py-5 bg-transparent", "bg-transparent border-transparent")
nav = nav.replace("transition-all duration-300 ${", "transition-all duration-300 py-4 border-b ${")
with open("src/components/Navbar.tsx", "w") as f:
    f.write(nav)

# Fix index.css
with open("src/index.css", "r") as f:
    css = f.read()
css = css.replace("rgba(255, 255, 255, 0.85);", "rgba(255, 255, 255, 0.45);\n    backdrop-filter: blur(24px);\n    -webkit-backdrop-filter: blur(24px);")
css = css.replace("rgba(4, 10, 7, 0.85);", "rgba(4, 10, 7, 0.45);\n    backdrop-filter: blur(24px);\n    -webkit-backdrop-filter: blur(24px);")
with open("src/index.css", "w") as f:
    f.write(css)

# Fix Home.tsx (ile word and snap)
with open("src/pages/Home.tsx", "r") as f:
    home = f.read()
home = home.replace(
    '<span className="text-4xl lg:text-5xl leading-tight"> ile <br/>',
    '<span className="text-4xl lg:text-5xl leading-tight"> <span className="text-[2.2rem] lg:text-[2.6rem] font-extrabold">ile</span> <br/>'
)
# SAFELY remove snap scroll: replace 'snap-y', 'snap-mandatory', 'scroll-smooth' with just 'scroll-smooth'
home = home.replace("'snap-y', 'snap-mandatory', 'scroll-smooth'", "'scroll-smooth'")
with open("src/pages/Home.tsx", "w") as f:
    f.write(home)

# Fix Clinics.tsx (snap)
import os
if os.path.exists("src/pages/Clinics.tsx"):
    with open("src/pages/Clinics.tsx", "r") as f:
        clin = f.read()
    clin = clin.replace("'snap-y', 'snap-mandatory', 'scroll-smooth'", "'scroll-smooth'")
    with open("src/pages/Clinics.tsx", "w") as f:
        f.write(clin)

# Fix Features.tsx (Logos + snap + padding)
with open("src/pages/Features.tsx", "r") as f:
    feat = f.read()
feat = feat.replace("'snap-y', 'snap-mandatory', 'scroll-smooth'", "'scroll-smooth'")
feat = feat.replace("pt-24 pb-8", "pt-10 pb-4")

# The logos in Features.tsx are SVGs that look like <svg ...> App Store'dan İndir </svg> or similar.
# In the current Features.tsx, let's use standard string replace or a very safe non-greedy regex.
apple_svg_pattern = r'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor".*?</svg>'
feat = re.sub(apple_svg_pattern, '<img src="/apple-logo.png" alt="App Store" className="w-9 h-9 object-contain -translate-y-1 scale-110" />', feat, count=1, flags=re.DOTALL)

google_svg_pattern = r'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor".*?</svg>'
feat = re.sub(google_svg_pattern, '<img src="/google-play-logo.png" alt="Google Play" className="w-9 h-9 object-contain scale-[2.2]" />', feat, count=1, flags=re.DOTALL)

with open("src/pages/Features.tsx", "w") as f:
    f.write(feat)

print("Safe Recovery done")
