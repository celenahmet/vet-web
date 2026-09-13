const fs = require('fs');

const lines = fs.readFileSync('/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/7043977c-ef2e-41e1-8d6b-63e4702579a3/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n').filter(Boolean);

for (let i = 0; i < lines.length; i++) {
  const step = JSON.parse(lines[i]);
  const time = step.created_at;
  
  if (time === '2026-09-03T17:19:12Z') {
    if (step.type === 'PLANNER_RESPONSE' && step.tool_calls) {
      for (const call of step.tool_calls) {
        if (call.name === 'multi_replace_file_content') {
           console.log("Found replace at:", time);
           console.log(JSON.stringify(call.args, null, 2));
        }
      }
    }
  }
}
