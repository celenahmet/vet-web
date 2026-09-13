const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// 1. Change card background to gradient
code = code.replace(
  'className="max-w-6xl mx-auto bg-slate-50/50 dark:bg-zinc-900/80 rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl border border-slate-200/60 dark:border-zinc-800 relative overflow-hidden backdrop-blur-xl"',
  'className="max-w-6xl mx-auto bg-gradient-to-br from-[#009689]/10 via-white/80 to-transparent dark:from-[#009689]/20 dark:via-zinc-900/80 dark:to-transparent rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-xl border border-white/50 dark:border-zinc-800 relative overflow-hidden backdrop-blur-xl"'
);

// 2. Change Rocket icon container
code = code.replace(
  'className="w-12 h-12 bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-400 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-zinc-700"',
  'className="w-14 h-14 bg-gradient-to-tr from-[#008075] to-[#009689] text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#009689]/30 border-none transform -translate-y-2"'
);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Colors added.');
