import json
import re

def fix_inverted_keys(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    keys_to_delete = []
    
    for key, value in data.items():
        # A valid translation key should NOT have spaces, and shouldn't end with punctuation like '.'
        # But let's check specifically: if value is snake_case and key has spaces.
        if (value.isascii() and '_' in value and ' ' not in value) and (' ' in key or '.' in key or key[0].isupper()):
            # the value looks like a key, and the key looks like text
            keys_to_delete.append(key)
            
    print(f"Found {len(keys_to_delete)} inverted keys in {filepath}")
    
    for k in keys_to_delete:
        del data[k]
        
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
fix_inverted_keys('src/locales/tr.json')
fix_inverted_keys('src/locales/en.json')
