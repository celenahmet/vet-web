import re

with open("src/pages/Clinics.tsx", "r") as f:
    content = f.read()

# Replace the main container to support snap
content = content.replace(
    '<div className="min-h-screen pt-24 relative overflow-hidden bg-[var(--bg-main)]">',
    '<div className="h-screen relative overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[var(--bg-main)]">'
)

content = content.replace(
    '<div className="container mx-auto px-6 max-w-7xl py-12 relative z-10 space-y-32">',
    '<div className="container mx-auto px-6 max-w-7xl relative z-10">'
)

# Section 1
content = content.replace(
    '{/* Section 1: Hero */}\n        <div className="flex flex-col lg:flex-row items-center gap-16">',
    '{/* Section 1: Hero */}\n        <section className="h-screen snap-always snap-start flex flex-col lg:flex-row items-center justify-center gap-16 pt-16">'
)

# Section 2
content = content.replace(
    '{/* Section 2: Dijital Klinik Profili */}\n        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 pt-12">',
    '</section>\n\n        {/* Section 2: Dijital Klinik Profili */}\n        <section className="h-screen snap-always snap-start flex flex-col-reverse lg:flex-row items-center justify-center gap-16">'
)

# Section 3
content = content.replace(
    '{/* Section 3: Akıllı Ajanda Yönetimi */}\n        <div className="flex flex-col lg:flex-row items-center gap-16 pt-12">',
    '</section>\n\n        {/* Section 3: Akıllı Ajanda Yönetimi */}\n        <section className="h-screen snap-always snap-start flex flex-col lg:flex-row items-center justify-center gap-16">'
)

# Section 4
content = content.replace(
    '{/* Section 4: Elektronik Hasta Dosyaları */}\n        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 pt-12">',
    '</section>\n\n        {/* Section 4: Elektronik Hasta Dosyaları */}\n        <section className="h-screen snap-always snap-start flex flex-col-reverse lg:flex-row items-center justify-center gap-16">'
)

# Section 5
content = content.replace(
    '{/* Section 5: Neden Veterito\'ya Katılmalısınız? */}\n        <div className="pt-24 pb-12">',
    '</section>\n\n        {/* Section 5: Neden Veterito\'ya Katılmalısınız? */}\n        <section className="min-h-screen snap-always snap-start flex flex-col justify-center py-24">'
)

# Close the last section
content = content.replace(
    '        </div>\n\n      </div>\n    </div>\n  );\n}',
    '        </section>\n\n      </div>\n    </div>\n  );\n}'
)

with open("src/pages/Clinics.tsx", "w") as f:
    f.write(content)
