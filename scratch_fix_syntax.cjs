const fs = require('fs');

function fixSyntax(path) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace("import from 'react';\n", "");
  content = content.replace(/const\s*=\s*\(\{\s*color,\s*rx\s*=\s*"32"\s*\}\s*:\s*\{\s*color:\s*string,\s*rx\?:\s*string\s*\}\)\s*=>\s*\([\s\S]*?viewport=\{\{\s*once:\s*true\s*\}\}\s*\/>\s*<\/motion\.svg>\s*\);/m, "");
  fs.writeFileSync(path, content);
}

fixSyntax('/Users/rumeysabuyuk/Desktop/vetweb/src/components/ClinicsCTASection.tsx');
fixSyntax('/Users/rumeysabuyuk/Desktop/vetweb/src/components/LabInnovationMockup.tsx');
fixSyntax('/Users/rumeysabuyuk/Desktop/vetweb/src/components/PatientMgmtMockup.tsx');
fixSyntax('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Clinics.tsx');

console.log('Syntax fixed.');
