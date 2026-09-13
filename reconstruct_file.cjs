const fs = require('fs');

const lines = fs.readFileSync('/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/7043977c-ef2e-41e1-8d6b-63e4702579a3/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n').filter(Boolean);

let history = [];

for (let i = 0; i < lines.length; i++) {
  const step = JSON.parse(lines[i]);
  const time = step.created_at;
  
  if (time < '2026-09-03T17:20:00Z') {
    if (step.type === 'PLANNER_RESPONSE' && step.tool_calls) {
      for (const call of step.tool_calls) {
        if (call.name === 'multi_replace_file_content' || call.name === 'replace_file_content' || call.name === 'write_to_file') {
           if (call.args && call.args.TargetFile && call.args.TargetFile.includes('Features.tsx')) {
               history.push({ time, args: call.args, name: call.name });
           }
        }
      }
    }
  }
}

console.log("Found", history.length, "edits to Features.tsx before 20:20.");
if (history.length > 0) {
  for (let i=0; i<history.length; i++) {
     console.log(i, history[i].time, history[i].name);
  }
}
