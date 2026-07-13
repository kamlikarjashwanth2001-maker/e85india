const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'blog-md');
const blogsJsPath = path.join(__dirname, 'blogs.js');
let blogsContent = fs.readFileSync(blogsJsPath, 'utf8');

// Helper to calculate read time
function calculateReadTime(text) {
    const words = text.split(/\s+/).length;
    return Math.ceil(words / 200); // 200 words per min
}

// 1. Extract the blogData array block out of blogs.js
const startIndex = blogsContent.indexOf('const blogData = [') + 'const blogData = '.length;
const endIndex = blogsContent.indexOf('];', startIndex) + 1;
const arrayString = blogsContent.slice(startIndex, endIndex);
const blogData = eval(arrayString);

console.log(`Current DB contains ${blogData.length} blogs.`);

// 2. Read all markdown files in blog-md/
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'));
let addedCount = 0;

files.forEach((file, index) => {
    const blogUrl = `blog/${file.replace('.md', '.html')}`;
    
    // Check if it already exists in the database
    const exists = blogData.some(b => b.url === blogUrl);
    if (!exists) {
        console.log(`Registering new blog: ${file}`);
        const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        
        // Extract frontmatter safely
        let frontmatter = {};
        const fmMatch = content.match(/---\n([\s\S]*?)\n---/);
        if (fmMatch) {
            const lines = fmMatch[1].split('\n');
            lines.forEach(line => {
                const parts = line.split(/:(.*)/);
                if (parts.length > 1) {
                    frontmatter[parts[0].trim()] = parts[1].trim().replace(/^"|"$/g, '');
                }
            });
        }
        
        const title = frontmatter.title || file.replace('.md', '').replace(/-/g, ' ');
        const description = frontmatter.description || '';
        const category = (frontmatter.category || 'GUIDES').toUpperCase();
        
        // Set default styling based on category
        let categoryColor = '#4527a0';
        let gradient = 'linear-gradient(135deg,#4527a0,#5e35b1)';
        let icon = '📚';
        
        if (category === 'BUSINESS & INDUSTRY') {
            categoryColor = '#2e7d32';
            gradient = 'linear-gradient(135deg,#2e7d32,#4caf50)';
            icon = '💼';
        } else if (category === 'TECH & MAINTENANCE') {
            categoryColor = '#f57c00';
            gradient = 'linear-gradient(135deg,#f57c00,#ff9800)';
            icon = '🔧';
        } else if (category === 'COMPARISON') {
            categoryColor = '#1976D2';
            gradient = 'linear-gradient(135deg,#1976D2,#42a5f5)';
            icon = '⚖️';
        } else if (category === 'STATIONS') {
            categoryColor = '#6A1B9A';
            gradient = 'linear-gradient(135deg,#6A1B9A,#AB47BC)';
            icon = '📍';
        } else if (category === 'SAFETY') {
            categoryColor = '#c62828';
            gradient = 'linear-gradient(135deg,#c62828,#e53935)';
            icon = '⚠️';
        }
        
        const bodyContent = content.replace(/---\n([\s\S]*?)\n---/, '').trim();
        const readTime = calculateReadTime(bodyContent);
        
        // Push the new blog metadata
        blogData.push({
            id: Date.now() + index,
            url: blogUrl,
            title: title,
            description: description,
            icon: icon,
            category: category,
            categoryColor: categoryColor,
            gradient: gradient,
            date: frontmatter.date || 'Jul 13, 2026',
            readTime: `${readTime} min read`,
            isNew: true
        });
        addedCount++;
    }
});

// 3. If any new blogs were registered, write them back to blogs.js
if (addedCount > 0) {
    const arrayStartIndex = blogsContent.indexOf('const blogData = [');
    const arrayEndIndex = blogsContent.indexOf('];', arrayStartIndex) + 2;
    
    // Sort array so new/updated blogs can show appropriately if needed, or keep push order
    const newArrayStr = `const blogData = ${JSON.stringify(blogData, null, 4)};`;
    let updatedContent = blogsContent.slice(0, arrayStartIndex) + newArrayStr + blogsContent.slice(arrayEndIndex);
    
    fs.writeFileSync(blogsJsPath, updatedContent, 'utf8');
    console.log(`✅ Successfully registered ${addedCount} new blogs into blogs.js!`);
} else {
    console.log('ℹ️ No new blogs found to register in DB.');
}
