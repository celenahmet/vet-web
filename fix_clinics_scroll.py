with open("src/pages/Clinics.tsx", "r") as f:
    content = f.read()

# Update useEffect to lock body scroll
effect_code = """
  useEffect(() => {
    // Lock body scroll and let the local container handle it
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
"""

import re
content = re.sub(r'useEffect\(\(\) => \{.*?\}, \[\]\);', effect_code.strip(), content, flags=re.DOTALL)

# Change wrapper to be a fixed full-screen scroll container
content = content.replace(
    '<div className="min-h-screen relative bg-[var(--bg-main)]">',
    '<div className="fixed inset-0 top-0 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[var(--bg-main)] z-40">\n      {/* Navbar Background for visibility since we are on top */}\n      <div className="fixed top-0 left-0 right-0 h-24 bg-[var(--bg-main)]/80 backdrop-blur-md z-50 pointer-events-none"></div>'
)

# Since we are z-40 and fixed, we cover the real Navbar. Wait, that's bad.
# We don't want to cover the Navbar.
# Navbar has z-50.
# So if we make Clinics fixed inset-0 z-40, Navbar will still be on top.
# But we need to make sure the scroll container snaps properly.
# Let's adjust padding.
