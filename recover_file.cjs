const fs = require('fs');

const baseContent = require('child_process').execSync('git show c4ce82d:src/pages/Features.tsx', {encoding: 'utf8'});
let content = baseContent;

const lines = fs.readFileSync('/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/7043977c-ef2e-41e1-8d6b-63e4702579a3/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n').filter(Boolean);

for (let i = 0; i < lines.length; i++) {
  const step = JSON.parse(lines[i]);
  const time = step.created_at;
  
  if (time < '2026-09-03T17:20:00Z') {
    if (step.type === 'PLANNER_RESPONSE' && step.tool_calls) {
      for (const call of step.tool_calls) {
        if (call.name === 'multi_replace_file_content' || call.name === 'replace_file_content') {
           if (call.args && call.args.TargetFile && call.args.TargetFile.includes('Features.tsx')) {
               let chunks = call.args.ReplacementChunks || [call.args];
               for (let chunk of chunks) {
                   if (chunk.TargetContent && chunk.ReplacementContent) {
                       content = content.replace(chunk.TargetContent, chunk.ReplacementContent);
                   }
               }
           }
        } else if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('Features.tsx')) {
           if (call.args.CodeContent) {
               content = call.args.CodeContent;
           }
        }
      }
    }
  }
}

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx', content);
console.log("File completely recovered to 20:20 state!");
