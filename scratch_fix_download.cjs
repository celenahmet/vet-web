const fs = require('fs');

let content = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', 'utf8');
content = content.replace(/import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?\n?/g, "");
// just in case there is a `import ''` or something that is completely unused
content = content.replace(/^import\s+['"][^'"]+['"];?\n?/m, "");
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', content);
