import re

with open("src/pages/Clinics.tsx", "r") as f:
    content = f.read()

# Fix Card 1: Dashboard Search Bar and Grid
# mx-8 to mx-2 lg:mx-8
content = content.replace('flex-1 mx-8', 'flex-1 mx-2 lg:mx-8')
# Search text hide on tiny screens
content = content.replace('<span className="text-slate-400 text-sm">Hasta veya no ara...</span>', '<span className="text-slate-400 text-sm hidden sm:inline">Hasta veya no ara...</span>')
# Grid columns stack on mobile
content = content.replace('grid grid-cols-3 gap-4', 'grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4')
content = content.replace('p-4', 'p-3 lg:p-4')

# Fix Card 2: Contact Info and Doctor Cards
content = content.replace('flex gap-4 mb-8', 'flex flex-col sm:flex-row gap-2 lg:gap-4 mb-8')
# Doctor cards
content = content.replace('flex gap-4', 'grid grid-cols-2 gap-2 lg:gap-4')
# Remove fixed w-32 from doctor cards to make them responsive
content = content.replace('w-32 rounded-xl', 'w-full rounded-xl')

# Fix Card 3: Calendar horizontal scroll
# The calendar grid is in a div: border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[320px]
# I need to wrap its inner content with overflow-x-auto or make it min-w
content = content.replace(
    '<div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[320px]">',
    '<div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[320px] overflow-x-auto"><div className="min-w-[500px] lg:min-w-0 flex flex-col h-full">'
)
# Close the new div wrapper after the calendar grid ends
content = content.replace(
    '                  </div>\n                </div>\n              </div>\n            </div>\n          </motion.div>',
    '                  </div>\n                </div>\n              </div></div>\n            </div>\n          </motion.div>'
)

with open("src/pages/Clinics.tsx", "w") as f:
    f.write(content)

print("UI cards fixed for mobile.")
