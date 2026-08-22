const fs = require('fs');

function updateViewport(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    // We specifically replace the viewport for the SVG borders we added
    let newContent = content.replaceAll('viewport={{ once: true, margin: "-100px" }}', 'viewport={{ once: false, margin: "-100px" }}');
    
    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent);
        console.log(`Updated viewport in ${filepath}`);
    } else {
        console.log(`No changes made to ${filepath}`);
    }
}

updateViewport('src/pages/Home.tsx');
updateViewport('src/pages/Clinics.tsx');
