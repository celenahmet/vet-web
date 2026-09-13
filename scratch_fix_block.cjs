const fs = require('fs');

const files = [
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/LabInnovationMockup.tsx',
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/PatientMgmtMockup.tsx',
  '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Clinics.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/const\s*=\s*\(\{\s*color,\s*rx\s*=\s*"32"\s*\}\s*:\s*\{\s*color:\s*string,\s*rx\?:\s*string\s*\}\)\s*=>\s*\([\s\S]*?<\/motion\.svg>\s*\);/g, "");
  fs.writeFileSync(file, content);
}
console.log('Blocks removed.');
