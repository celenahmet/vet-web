const fs = require('fs');
const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

const sourceFile = '/Users/rumeysabuyuk/Desktop/vetweb/replace_showcase.cjs';
let sourceContent = fs.readFileSync(sourceFile, 'utf8');

let newSectionStart = sourceContent.indexOf('const newSection = `') + 'const newSection = `'.length;
let newSectionEnd = sourceContent.lastIndexOf('\\`;');
let newSection = sourceContent.substring(newSectionStart, newSectionEnd);

newSection = newSection.replace(/\\`/g, '`').replace(/\\\$/g, '$');

const startIndex = content.indexOf('{/* 2. INTERACTIVE APP SHOWCASE (Snap Section 2) */}');
const endIndex = content.indexOf('{/* =========================================\n            2. SAĞLIK GEÇMİŞİ (Bento Grid)');

if (startIndex === -1 || endIndex === -1) {
  console.log('Boundaries not found');
  process.exit(1);
}

content = content.substring(0, startIndex) + newSection + '\n\n      ' + content.substring(endIndex);

fs.writeFileSync(featuresFile, content, 'utf8');
console.log('Fixed Features.tsx!');
