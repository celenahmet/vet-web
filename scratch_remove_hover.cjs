const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// 1. Make main container background more prominent
code = code.replace(
  'className="max-w-6xl mx-auto bg-teal-50/80 dark:bg-zinc-900/80 rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl border border-teal-100 dark:border-zinc-800 relative overflow-hidden backdrop-blur-xl"',
  'className="max-w-6xl mx-auto bg-teal-50 dark:bg-teal-950/20 rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl border border-teal-100 dark:border-teal-900/50 relative overflow-hidden"'
);

// 2. Remove hover box structure from items
const oldItemClass = 'className="group flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-zinc-800/20 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-zinc-700 hover:shadow-md hover:-translate-y-1 cursor-default"';
const newItemClass = 'className="flex items-start gap-4 p-2 cursor-default"';
code = code.replace(new RegExp(oldItemClass.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), newItemClass);

// 3. Update icon and remove group-hover
const oldIconWrapper = '<div className="mt-1 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">\n                  <CheckCircle2 className="text-slate-400 group-hover:text-[#009689] transition-colors duration-300" size={22} />\n                </div>';
const newIconWrapper = '<div className="mt-1">\n                  <CheckCircle2 className="text-[#009689]" size={22} />\n                </div>';
code = code.replace(new RegExp(oldIconWrapper.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), newIconWrapper);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Hover removed and colors updated.');
