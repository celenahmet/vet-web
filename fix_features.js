const fs = require('fs');
const path = './src/pages/Features.tsx';

let content = fs.readFileSync(path, 'utf8');

// 1. Fix the main feature boxes (left column)
// These use dark:bg-slate-800 and dark:border-slate-700
content = content.replace(/dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/g, 'dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 dark:backdrop-blur-md');
content = content.replace(/dark:bg-slate-800 p-3 rounded-2xl border border-slate-200 dark:border-slate-700/g, 'dark:bg-white/5 p-3 rounded-2xl border border-slate-200 dark:border-white/10 dark:backdrop-blur-md');

// 2. Fix the Phone Mockup Background
// Currently: dark:bg-slate-900 rounded-[2.5rem] ... dark:border-slate-800
content = content.replace(/dark:bg-slate-900 rounded-\[2\.5rem\](.*?)dark:border-slate-800/g, 'dark:bg-slate-950/40 dark:backdrop-blur-3xl rounded-[2.5rem]$1dark:border-white/10');

// 3. Fix the weird green cards inside the phone
// Currently: dark:bg-[#233120]
content = content.replace(/dark:bg-\[#233120\]/g, 'dark:bg-white/5 dark:backdrop-blur-md border border-transparent dark:border-white/5');

// 4. Fix the weird green bottom nav in the phone
// Currently: dark:bg-[#1a2317]
content = content.replace(/dark:bg-\[#1a2317\]/g, 'dark:bg-white/5 dark:backdrop-blur-xl');
content = content.replace(/dark:border-\[#1a2317\]/g, 'dark:border-slate-900/50'); // For the big + button border

// 5. Fix floating notification on the left of the phone
// Currently: dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-amber-500/10 border border-slate-100 dark:border-slate-700
content = content.replace(/dark:bg-slate-800 p-3 rounded-2xl(.*?)dark:border-slate-700/g, 'dark:bg-white/5 dark:backdrop-blur-xl p-3 rounded-2xl$1dark:border-white/10');


fs.writeFileSync(path, content);
console.log('Done');
