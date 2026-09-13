const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', 'utf8');

// Remove from Card 1
code = code.replace(
  '<div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60"></div>',
  ''
);

// Remove from Card 2
code = code.replace(
  '<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 opacity-60"></div>',
  ''
);

// Remove from Card 3
code = code.replace(
  '<div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-60"></div>',
  ''
);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', code);
console.log('Glows removed.');
