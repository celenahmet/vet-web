import re

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

# Card 1 (Purple)
content = content.replace(
    'className="lg:col-span-2 glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"',
    'className="lg:col-span-2 glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] border border-transparent hover:border-purple-500/50 transition-all duration-300"'
)

# Card 2 (Emerald)
content = content.replace(
    'className="glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"',
    'className="glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] border border-transparent hover:border-emerald-500/50 transition-all duration-300"'
)

# Card 3 (Rose)
content = content.replace(
    'className="lg:col-span-2 glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-center"',
    'className="lg:col-span-2 glass-card p-10 relative overflow-hidden group rounded-[3rem] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(225,29,72,0.4)] border border-transparent hover:border-rose-500/50 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center"'
)

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)

print("Neon borders fixed in Home.tsx")
