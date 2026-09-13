const fs = require('fs');

const featuresFile = '/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx';
let content = fs.readFileSync(featuresFile, 'utf8');

// Find the Left Box block
const leftBoxStartStr = `            {/* 4. SOL ALT: Açıklama Kutusu */}`;
const rightBoxStartStr = `            {/* 5. SAĞ ALT: Özellikler ve Logo */}`;

const startIndex = content.indexOf(leftBoxStartStr);
const endIndex = content.indexOf(rightBoxStartStr);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find blocks");
  process.exit(1);
}

const leftBoxContent = content.substring(startIndex, endIndex);

// Remove the left box from its current location
content = content.substring(0, startIndex) + content.substring(endIndex);

// Find the end of the island container.
// It looks like:
//             </div>
//           </div>
//         </div>
//       </section>{/* =========================================

const islandEndStr = `            </div>\n          </div>\n        </div>\n      </section>`;
const islandEndIndex = content.indexOf(islandEndStr);

if (islandEndIndex === -1) {
  console.error("Could not find island end");
  process.exit(1);
}

// Insert leftBoxContent right before the last closing div of the island
// The island is the outer div, so it closes at `        </div>\n      </section>`
// So we insert before `        </div>\n      </section>`

const targetInsertStr = `        </div>\n      </section>`;
const targetInsertIndex = content.indexOf(targetInsertStr);

if (targetInsertIndex === -1) {
    console.error("Could not find target insert index");
    process.exit(1);
}

content = content.substring(0, targetInsertIndex) + leftBoxContent + content.substring(targetInsertIndex);

fs.writeFileSync(featuresFile, content, 'utf8');
console.log('Successfully moved Left Box to island root.');
