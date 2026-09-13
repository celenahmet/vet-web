const fs = require('fs');

const lines = fs.readFileSync('/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/7043977c-ef2e-41e1-8d6b-63e4702579a3/.system_generated/logs/transcript.jsonl', 'utf8').split('\n').filter(Boolean);

for (let i = 0; i < lines.length; i++) {
  const step = JSON.parse(lines[i]);
  const time = step.created_at;
  
  if (time > '2026-09-03T16:50:00Z' && time < '2026-09-03T17:10:00Z') {
    if (step.type === 'USER_INPUT') {
      console.log("USER:", time, step.content);
    }
  }
}
