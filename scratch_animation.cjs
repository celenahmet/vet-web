const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');

// 1. Remove staggerChildren from parent transition
code = code.replace(
  'transition: { duration: 0.5, staggerChildren: 0.1 }',
  'transition: { duration: 0.5 }'
);

// 2. Update item variants and add custom={idx}
const oldItem = `<motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: -30 },
                  visible: { opacity: 1, y: 0 }
                }}`;

const newItem = `<motion.div 
                key={idx} 
                custom={idx}
                variants={{
                  hidden: { opacity: 0, y: -30, filter: 'blur(10px)' },
                  visible: (i) => ({ 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    transition: { 
                      duration: 1, 
                      delay: Math.floor(i / 3) * 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    } 
                  })
                }}`;

code = code.replace(oldItem, newItem);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', code);
console.log('Animation updated.');
