const fs = require('fs');

function replaceAtLine(filepath, lineRegex, newStroke, newShadowClass) {
    let lines = fs.readFileSync(filepath, 'utf8').split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lineRegex.test(lines[i])) {
            // Find the closest motion.rect in the next few lines
            for (let j = i; j < i + 40; j++) {
                if (lines[j] && lines[j].includes('motion.rect')) {
                    // It spans multiple lines, we need to find the fill="none" stroke="..." strokeWidth="2" line
                    for (let k = j; k < j + 5; k++) {
                        if (lines[k] && lines[k].includes('fill="none"')) {
                            lines[k] = lines[k].replace(/stroke="[^"]+"/, `stroke="${newStroke}"`);
                            lines[k] = lines[k].replace(/drop-shadow-\[[^\]]+\]/, newShadowClass);
                            console.log(`Updated ${filepath} near line ${k+1}`);
                            fs.writeFileSync(filepath, lines.join('\n'));
                            return;
                        }
                    }
                }
            }
        }
    }
}

// 1. Akıllı Takvim (Home.tsx) -> Purple
replaceAtLine('src/pages/Home.tsx', /Akıllı Takvim ve Hatırlatıcılar/, '#8b5cf6', 'drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]');

// 2. Pati Topluluğu (Home.tsx) -> Orange
replaceAtLine('src/pages/Home.tsx', /Pati Topluluğu/, '#f97316', 'drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]');

// 3. Dijital Klinik Profili (Clinics.tsx) -> Orange
replaceAtLine('src/pages/Clinics.tsx', /Dijital Klinik Profili/, '#f97316', 'drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]');

// 4. Akıllı Ajanda Yönetimi (Clinics.tsx) -> Purple
replaceAtLine('src/pages/Clinics.tsx', /Akıllı Ajanda Yönetimi/, '#8b5cf6', 'drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]');

// 5. Elektronik Hasta Dosyaları (Clinics.tsx) -> Yellow
replaceAtLine('src/pages/Clinics.tsx', /Elektronik Hasta Dosyaları/, '#eab308', 'drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]');

