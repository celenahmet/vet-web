const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

// We need to replace the single div with the mask and blur, with a parent div (mask) and child div (blur)
const targetStr = `                  <div \n                    className="absolute inset-0 bg-white/35 dark:bg-white/10 backdrop-blur-[40px] rounded-[45px] shadow-2xl"`;
const replacementStr = `                  <div 
                    className="absolute inset-0 rounded-[45px] shadow-2xl overflow-hidden"
                    style={{ 
                      WebkitMaskImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20viewBox%3D%220%200%20150%20150%22%3E%3Cpath%20d%3D%22M%200%200%20L%200%2018.7%20A%2040%2040%200%200%200%2035.39%2058.43%20A%2064%2064%200%200%201%2091.57%20114.62%20A%2040%2040%200%200%200%20131.3%20150%20L%20150%20150%20L%20150%200%20Z%22%20fill%3D%22black%22%20%2F%3E%3C%2Fsvg%3E"), linear-gradient(black, black), linear-gradient(black, black)',
                      maskImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20viewBox%3D%220%200%20150%20150%22%3E%3Cpath%20d%3D%22M%200%200%20L%200%2018.7%20A%2040%2040%200%200%200%2035.39%2058.43%20A%2064%2064%200%200%201%2091.57%20114.62%20A%2040%2040%200%200%200%20131.3%20150%20L%20150%20150%20L%20150%200%20Z%22%20fill%3D%22black%22%20%2F%3E%3C%2Fsvg%3E"), linear-gradient(black, black), linear-gradient(black, black)',
                      WebkitMaskPosition: 'bottom left, top left, bottom right',
                      maskPosition: 'bottom left, top left, bottom right',
                      WebkitMaskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px',
                      maskSize: '150px 150px, 100% calc(100% - 149px), calc(100% - 149px) 150px',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat'
                    }}
                  >
                    {/* The actual frosted glass layer, separated to avoid browser mask+blur bugs */}
                    <div className="absolute inset-0 bg-white/40 dark:bg-white/10 backdrop-blur-[45px]" />
                  </div>
                  {/*`; // Just to close off the match properly

// Let's use a regex replace to replace the entire mask div
const regex = /<div\s+className="absolute inset-0 bg-white\/35 dark:bg-white\/10 backdrop-blur-\[40px\] rounded-\[45px\] shadow-2xl"[\s\S]*?maskRepeat:\s*'no-repeat'\s*\}\}\s*\/>/m;

if (regex.test(content)) {
  content = content.replace(regex, replacementStr.replace('                  {/*\`;', ''));
  fs.writeFileSync(featuresFile, content, 'utf8');
  console.log('Successfully separated mask and blur layers.');
} else {
  console.log('Regex did not match.');
}
