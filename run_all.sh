#!/bin/bash
git restore src/pages/Features.tsx

# Fix replace_showcase.cjs
sed -i '' 's/\\`;/`;/' replace_showcase.cjs

# Run all scripts sequentially
node replace_showcase.cjs
node inject_showcase.cjs
node update_showcase_ui.cjs
node update_boxes.cjs
node fix_cutout.cjs
node fix_cutout_v2.cjs
node fix_mask.cjs
node fix_mask_css.cjs
node fix_mask_v3.cjs
node fix_mask_css_final.cjs
node fix_mask_v4.cjs
node fix_mask_v5.cjs
node fix_mask_v6.cjs
node fix_blur.cjs
node fix_box_position.cjs
