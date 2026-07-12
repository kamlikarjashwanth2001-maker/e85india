const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../blog-md');

function removeImagePrompts() {
    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'));
    
    files.forEach(file => {
        let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        
        // Remove the block containing [Image Prompt], [ALT Text], [Suggested Filename]
        content = content.replace(/\[Image Prompt\][\s\S]*?\[Suggested Filename\][^\n]*/g, '');
        
        fs.writeFileSync(path.join(srcDir, file), content);
    });
    console.log("Removed raw image prompts from markdown files.");
}

removeImagePrompts();
