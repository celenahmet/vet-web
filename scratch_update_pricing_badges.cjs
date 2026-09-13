const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// Update Tier 1
code = code.replace(
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-[var(--color-vet-primary)]/50 transition-colors shadow-lg hover:shadow-xl bg-white/60 dark:bg-zinc-900/60"',
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-[var(--color-vet-primary)]/50 transition-colors shadow-lg hover:shadow-xl bg-white/60 dark:bg-zinc-900/60 relative"'
);
code = code.replace(
  '<div className="flex items-center gap-3 mb-4">',
  `<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-vet-primary)] text-white px-5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md whitespace-nowrap z-10">
              {t('pricing_tier1_badge')}
            </div>
            <div className="flex items-center gap-3 mb-4 mt-2">`
);
code = code.replace(
  /<div className="mb-8 flex flex-col items-start gap-2 bg-\[var\(--color-vet-accent-light\)\] p-5 rounded-2xl border border-\[var\(--color-vet-primary\)\]\/20 shadow-sm">\s*<span className="text-\[13px\] font-bold text-\[var\(--color-vet-accent\)\] uppercase tracking-wide leading-snug">\{t\('pricing_tier1_badge'\)\}<\/span>\s*<\/div>/g,
  ''
);

// Update Tier 2
code = code.replace(
  /<div className="absolute top-0 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 bg-\[var\(--color-vet-primary\)\] text-white px-6 py-1\.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">\s*POPÜLER\s*<\/div>/g,
  `<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-vet-primary)] text-white px-5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md whitespace-nowrap z-10">
              {t('pricing_tier2_badge')}
            </div>
            <div className="absolute -top-3 -right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg transform rotate-12 z-20">
              POPÜLER
            </div>`
);
code = code.replace(
  /<div className="mb-8 flex flex-col items-start gap-2 bg-\[var\(--color-vet-accent-light\)\] p-5 rounded-2xl border border-\[var\(--color-vet-primary\)\]\/20 shadow-sm">\s*<span className="text-\[13px\] font-bold text-\[var\(--color-vet-accent\)\] uppercase tracking-wide leading-snug">\{t\('pricing_tier2_badge'\)\}<\/span>\s*<\/div>/g,
  ''
);

// Update Tier 3
code = code.replace(
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-slate-800 dark:hover:border-slate-200 transition-colors shadow-lg hover:shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900/60 dark:to-slate-900/40"',
  'className="glass-card p-8 lg:p-10 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col hover:border-slate-800 dark:hover:border-slate-200 transition-colors shadow-lg hover:shadow-xl bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900/60 dark:to-slate-900/40 relative"'
);
code = code.replace(
  '<div className="flex items-center gap-3 mb-4">',
  `<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 px-5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-md whitespace-nowrap z-10">
              {t('pricing_tier3_badge')}
            </div>
            <div className="flex items-center gap-3 mb-4 mt-2">`
);
code = code.replace(
  /<div className="mb-8 flex flex-col items-start gap-2 bg-slate-100 dark:bg-slate-800\/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">\s*<span className="text-\[14px\] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest leading-snug">\{t\('pricing_tier3_badge'\)\}<\/span>\s*<\/div>/g,
  ''
);


fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Badges updated.');
