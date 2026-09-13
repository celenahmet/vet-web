const fs = require('fs');

const baseContent = require('child_process').execSync('git show HEAD:src/pages/Features.tsx', {encoding: 'utf8'});
let content = baseContent;

const lines = fs.readFileSync('/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/7043977c-ef2e-41e1-8d6b-63e4702579a3/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n').filter(Boolean);

let applyCount = 0;
let failCount = 0;

for (let i = 0; i < lines.length; i++) {
  const step = JSON.parse(lines[i]);
  const time = step.created_at;
  
  // Stop EXACTLY at 17:19:12Z, inclusive, because that was the last successful replace we wanted.
  if (time <= '2026-09-03T17:19:13Z') {
    if (step.type === 'PLANNER_RESPONSE' && step.tool_calls) {
      for (const call of step.tool_calls) {
        if (call.name === 'multi_replace_file_content' || call.name === 'replace_file_content') {
           if (call.args && call.args.TargetFile && call.args.TargetFile.includes('Features.tsx')) {
               let chunks = call.args.ReplacementChunks || [call.args];
               for (let chunk of chunks) {
                   if (chunk.TargetContent && chunk.ReplacementContent) {
                       if (content.includes(chunk.TargetContent)) {
                           content = content.replace(chunk.TargetContent, chunk.ReplacementContent);
                           applyCount++;
                       } else {
                           failCount++;
                           console.log(`Failed to apply chunk from ${time}`);
                       }
                   }
               }
           }
        }
      }
    }
  }
}

console.log(`Applied ${applyCount} patches successfully. Failed: ${failCount}`);
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Features.tsx', content);
