const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) { 
            if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
                results = results.concat(walk(fullPath));
            }
        } else { 
            if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('c:/internsip');
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('#D62828') || content.includes('#d62828') || content.includes('b82020')) {
        // Also replace the hover color #b82020 with #B21313 which is slightly darker than #D41717
        content = content.replace(/#D62828/gi, '#D41717');
        content = content.replace(/#b82020/gi, '#B21313');
        fs.writeFileSync(file, content);
        console.log(`Replaced colors in ${file}`);
        count++;
    }
});
console.log(`Done. Updated ${count} files.`);
