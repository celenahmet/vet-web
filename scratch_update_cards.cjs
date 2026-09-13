const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// Tier 1
code = code.replace(
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-[var(--color-vet-primary)]/50 transition-colors shadow-lg hover:shadow-xl bg-white/60 dark:bg-zinc-900/60"',
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-zinc-800 flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#009689]/30 bg-white/60 dark:bg-zinc-900/60 relative group"'
);

// Tier 2
code = code.replace(
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border-2 border-[var(--color-vet-primary)] flex flex-col shadow-2xl relative bg-white dark:bg-zinc-900"',
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border-2 border-[#009689] flex flex-col transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,150,137,0.3)] hover:-translate-y-2 relative bg-white dark:bg-zinc-900 group"'
);

// Tier 3
code = code.replace(
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-slate-800 dark:hover:border-slate-200 transition-colors shadow-lg hover:shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900/60 dark:to-slate-900/40 relative"',
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-zinc-800 flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-slate-800 dark:hover:border-slate-300 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900/60 dark:to-slate-900/40 relative group"'
);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Cards updated.');
