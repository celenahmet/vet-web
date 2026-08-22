const fs = require('fs');

let lines = fs.readFileSync('src/pages/Home.tsx', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    // Revert line 339 (approx)
    if (i > 330 && i < 350 && lines[i].includes('drop-shadow-[')) {
        lines[i] = lines[i].replace(/stroke="[^"]+"/, 'stroke="var(--color-vet-primary)"');
        lines[i] = lines[i].replace(/drop-shadow-\[[^\]]+\]/, 'drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]');
    }
    // Update line 567 (approx)
    if (i > 560 && i < 580 && lines[i].includes('drop-shadow-[')) {
        lines[i] = lines[i].replace(/stroke="[^"]+"/, 'stroke="#f97316"');
        lines[i] = lines[i].replace(/drop-shadow-\[[^\]]+\]/, 'drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]');
    }
}
fs.writeFileSync('src/pages/Home.tsx', lines.join('\n'));
console.log("Fixed Home.tsx");
