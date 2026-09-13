const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// Replace animate with whileInView and add viewport={{once:true}}
code = code.replace(
  /animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}/g,
  'whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}'
);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Animations fixed.');
