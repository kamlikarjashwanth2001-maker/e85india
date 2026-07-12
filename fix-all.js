const fs = require('fs');
const path = require('path');

// 1. Fix the `blogs.js` order
const blogsJsPath = path.join(__dirname, 'blogs.js');
let blogsJs = fs.readFileSync(blogsJsPath, 'utf8');

// We need to move the 4 new blogs to the top of the array
// We'll just read the JS file, use eval or string manipulation.
// Actually, it's easier to just match the array content and sort it.
// Let's do a quick regex to extract the new blogs block and move it up.
const newBlogsBlock = blogsJs.match(/\n    \{\s+"id": 1783[\s\S]*?(?=\n    \/\/\s+===== EXISTING BLOGS =====|\n\];)/);
if (newBlogsBlock) {
    blogsJs = blogsJs.replace(newBlogsBlock[0], ''); // remove from current position
    
    // Insert after "const blogData = ["
    const startOfArray = blogsJs.indexOf('const blogData = [') + 'const blogData = ['.length;
    blogsJs = blogsJs.slice(0, startOfArray) + newBlogsBlock[0] + blogsJs.slice(startOfArray);
    fs.writeFileSync(blogsJsPath, blogsJs);
    console.log("Moved new blogs to the top of blogs.js");
}

// 2. Fix the markdown images and formatting
const mdDir = path.join(__dirname, 'blog-md');
const files = fs.readdirSync(mdDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(mdDir, file), 'utf8');
    
    // Aggressive cleanup of ANY leftover Image Prompt blocks
    content = content.replace(/> \*\*[\s\S]*?\[Suggested Filename\][^\n]*/g, '');
    content = content.replace(/\[Image Prompt\][\s\S]*?\[Suggested Filename\][^\n]*/gi, '');
    content = content.replace(/\[ALT Text\][^\n]*/gi, '');
    content = content.replace(/\*\*\[Image Prompt\].*?\*\*/gi, '');
    content = content.replace(/> \*\*/g, ''); // dangling blockquotes
    content = content.replace(/<a name=".*?"><\/a>/g, ''); // dangling anchor tags
    
    // Inject the real image at the top if it's the Innova or Apache blog
    if (file === 'toyota_innova_hycross_flex_fuel.md' && !content.includes('innova_flex')) {
        content = content.replace('## 1. Introduction', '![Toyota Innova Flex Fuel](../images/innova_flex.png)\n\n## 1. Introduction');
    }
    if (file === 'tvs-apache-rtr-160-ffv-review.md' && !content.includes('apache_flex')) {
        content = content.replace('## 1. Introduction', '![TVS Apache RTR 160 FFV](../images/apache_flex.png)\n\n## 1. Introduction');
    }
    
    fs.writeFileSync(path.join(mdDir, file), content);
});
console.log("Cleaned markdown files and injected images");

// 3. Fix build-blog.js regex bug
const buildScriptPath = path.join(__dirname, 'scripts', 'build-blog.js');
let buildScript = fs.readFileSync(buildScriptPath, 'utf8');

// Replace the two-pass regex with a robust one-pass
buildScript = buildScript.replace(/.replace\(\/\^## \(\.\*\$\)\/gim, \'<h2 id="\$1">\$1<\/h2>'\) \/\/ H2\n        .replace\(\/\^### \(\.\*\$\)\/gim, \'<h3 id="\$1">\$1<\/h3>'\) \/\/ H3/, `.replace(/^## (.*)$/gim, (match, content) => { let cleanText = content.replace(/<[^>]*>?/gm, '').trim(); let id = cleanText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(); return \`<h2 id="\${id}">\${cleanText}</h2>\`; })\n        .replace(/^### (.*)$/gim, (match, content) => { let cleanText = content.replace(/<[^>]*>?/gm, '').trim(); let id = cleanText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(); return \`<h3 id="\${id}">\${cleanText}</h3>\`; })`);

// Remove the broken second pass
buildScript = buildScript.replace(/\/\/ Fix IDs in h2\/h3[\s\S]*?html = html\.replace\(\/<h\(\[23\]\) id="\(.*?\)">\(.*?\)<\/h\\1>\/g,[\s\S]*?\}\);/g, '');

fs.writeFileSync(buildScriptPath, buildScript);
console.log("Fixed build-blog.js regex bugs");
