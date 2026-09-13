const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// 1. Replace colors in getIconForFeature
const iconColors = [
  'text-teal-500', 'text-blue-500', 'text-indigo-500', 'text-orange-500', 
  'text-sky-500', 'text-emerald-500', 'text-green-500', 'text-purple-500', 
  'text-amber-500', 'text-rose-500', 'text-blue-600', 'text-zinc-600 dark:text-zinc-400', 
  'text-pink-500', 'text-cyan-500', 'text-violet-500', 'text-teal-600', 
  'text-amber-600', 'text-red-500', 'text-[var(--color-vet-primary)]'
];

iconColors.forEach(color => {
  const regex = new RegExp(`className="${color.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')} shrink-0 mt-1"`, 'g');
  code = code.replace(regex, 'className="text-slate-500 dark:text-slate-400 shrink-0 mt-1"');
});

// 2. Replace top card icons
code = code.replace(
  '<div className="mb-4 text-[var(--text-muted)]">',
  '<div className="mb-4 text-slate-500 dark:text-slate-400">'
);
code = code.replace(
  '<div className="mb-4 text-[var(--color-vet-primary)]">\n              <Star className="fill-[var(--color-vet-primary)]" size={32} />\n            </div>',
  '<div className="mb-4 text-slate-500 dark:text-slate-400">\n              <Star size={32} />\n            </div>'
);
code = code.replace(
  '<div className="mb-4 text-slate-700 dark:text-slate-300">',
  '<div className="mb-4 text-slate-500 dark:text-slate-400">'
);

// 3. Replace common features icons
code = code.replace(
  '<div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">',
  '<div className="w-16 h-16 bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">'
);
code = code.replace(
  '<CheckCircle2 className="text-teal-500" size={22} />',
  '<CheckCircle2 className="text-slate-500 dark:text-slate-400" size={22} />'
);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Icons made colorless.');
