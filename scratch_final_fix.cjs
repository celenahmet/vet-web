const fs = require('fs');
let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', 'utf8');
code = code.replace("import type { Variants } from 'framer-motion';\n", "");
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', code);
