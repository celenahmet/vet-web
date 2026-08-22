const fs = require('fs');

function process_file(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    const old_str = 'fill="none" stroke="var(--color-vet-primary)" strokeWidth="4"';
    const new_str = 'fill="none" stroke="var(--color-vet-primary)" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]"';
    
    if (content.includes(old_str)) {
        content = content.split(old_str).join(new_str);
        fs.writeFileSync(filepath, content);
        console.log("Updated " + filepath);
    } else {
        console.log("Pattern not found in " + filepath);
    }
}

process_file('src/pages/Home.tsx');
process_file('src/pages/Clinics.tsx');
