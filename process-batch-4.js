const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'blog-md');
const files = [
    'best-engine-oil-e85.md',
    'e85-vs-xp100-power.md',
    'e85-fuel-india-complete-guide.md',
    'e20-vs-e85-differences.md',
    'does-ethanol-damage-old-engines.md',
    'e100-fuel-india.md',
    'e85-octane-rating-105.md',
    'history-ethanol-fuel-india.md',
    'e85-environmental-benefits-emissions.md',
    'sugarcane-vs-corn-ethanol.md',
    'how-to-store-e85-fuel.md',
    'e85-fuel-glossary.md',
    'maruti-wagonr-flex-fuel.md',
    'tata-nexon-e85-flex-fuel.md',
    'hyundai-creta-flex-fuel.md',
    'how-flex-fuel-engines-work.md',
    'benefits-of-flex-fuel-cars.md',
    'bs6-phase-2-e85-compatibility.md',
    'can-i-use-petrol-in-flex-fuel-car.md',
    'bajaj-pulsar-ns160-flex-fuel.md'
];

const fallbackImage = 'e85_pump.png';
let injectedData = [];

files.forEach(file => {
    let p = path.join(mdDir, file);
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        
        let titleMatch = content.match(/title:\s*"(.*?)"/);
        let title = titleMatch ? titleMatch[1] : file.replace('.md', '').replace(/-/g, ' ');
        
        let descMatch = content.match(/description:\s*"(.*?)"/);
        let description = descMatch ? descMatch[1] : 'Discover all about ' + title;
        
        const firstH2 = content.match(/^##\s+.+$/m);
        if (firstH2 && !content.includes(fallbackImage)) {
            content = content.replace(firstH2[0], `![${title}](../images/${fallbackImage})\n\n${firstH2[0]}`);
            fs.writeFileSync(p, content);
            
            injectedData.push({
                id: Date.now() + Math.floor(Math.random() * 100000),
                url: 'blog/' + file.replace('.md', '.html'),
                title: title,
                description: description,
                icon: '📚',
                category: 'GUIDES',
                categoryColor: '#4527a0',
                gradient: 'linear-gradient(135deg,#4527a0,#5e35b1)',
                date: 'Jul 12, 2026',
                readTime: '15 min read',
                isNew: true
            });
        }
    }
});

if (injectedData.length > 0) {
    const blogsJsPath = path.join(__dirname, 'blogs.js');
    let blogsJs = fs.readFileSync(blogsJsPath, 'utf8');
    
    const startOfArray = blogsJs.indexOf('const blogData = [') + 'const blogData = ['.length;
    
    let injectionStr = '\n';
    injectedData.forEach(blog => {
        injectionStr += `    ${JSON.stringify(blog, null, 4)},\n`;
    });
    
    blogsJs = blogsJs.slice(0, startOfArray) + injectionStr + blogsJs.slice(startOfArray);
    fs.writeFileSync(blogsJsPath, blogsJs);
    console.log(`Successfully injected ${injectedData.length} new blogs into blogs.js`);
}
