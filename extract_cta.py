import json

with open("/Users/rumeysabuyuk/.gemini/antigravity-ide/brain/6fe43748-21db-4e2e-87e9-76f75fb79715/.system_generated/logs/transcript_full.jsonl", "r") as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call['name'] in ('replace_file_content', 'multi_replace_file_content'):
                        # dump out the replacement content to a file
                        args = call['args']
                        content = str(args)
                        if "apple-logo.png" in content:
                            print("FOUND APPLE LOGO FIX")
                            with open('cta_recovered.txt', 'w') as out:
                                out.write(content)
        except Exception as e:
            pass
