const fs = require('fs');
const content = fs.readFileSync('src/pages/Features.tsx', 'utf8');
try {
  require('@babel/core').transformSync(content, {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    filename: 'Features.tsx'
  });
  print("Babel compiled successfully.");
} catch (e) {
  console.error("BABEL ERROR:", e.message);
}
