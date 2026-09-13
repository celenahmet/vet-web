const fs = require('fs');

function removeUnusedImports(filePath, unusedVars) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const v of unusedVars) {
    // regex to remove the variable from import list { a, v, b }
    const regex1 = new RegExp(`\\b${v}\\b\\s*,?\\s*`, 'g');
    content = content.replace(regex1, '');
    
    // remove full import if default: import AnimatedBorder from './AnimatedBorder';
    const regex2 = new RegExp(`import\\s+${v}\\s+from\\s+['"][^'"]+['"];?`, 'g');
    content = content.replace(regex2, '');
    
    // remove React if 'import React'
    if (v === 'React') {
       content = content.replace(/import\\s+React\\s*,\\s*\\{\\s*/g, 'import { ');
       content = content.replace(/import\\s+React\\s+from\\s+['"]react['"];?/g, '');
    }
    
    // state
    if (v === 'activeCard' || v === 'setActiveCard') {
       content = content.replace(/const\\s+\\[\\s*activeCard\\s*,\\s*setActiveCard\\s*\\][^;]+;?\\n?/g, '');
    }
  }
  
  // cleanup double commas and empty imports
  content = content.replace(/,\\s*,/g, ',');
  content = content.replace(/\\{\\s*,/g, '{ ');
  content = content.replace(/,\\s*\\}/g, ' }');
  content = content.replace(/import\\s*\\{\\s*\\}\\s*from\\s*['"][^'"]+['"];?\\n?/g, '');
  
  fs.writeFileSync(filePath, content);
}

removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/components/ClinicsCTASection.tsx', ['React', 'ArrowRight']);
removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/components/LabInnovationMockup.tsx', ['AnimatedBorder']);
removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/components/PatientMgmtMockup.tsx', ['AnimatedBorder']);
removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/About.tsx', ['React', 'Smartphone', 'Building2', 'activeCard', 'setActiveCard']);
removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Clinics.tsx', ['FileText', 'CheckCircle', 'AnimatedBorder']);
removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', ['AnimatedBorder']);
removeUnusedImports('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', ['Database', 'CreditCard', 'PieChart', 'HeartPulse', 'Puzzle', 'Code']);

console.log('Done script.');
