const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'blog-md');
const files = [
    'how-to-start-biofuel-pump-business.md',
    'reliance-jio-bp-e85-pumps.md',
    'indianoil-iocl-e85-availability.md',
    'shell-india-biofuels-e85.md',
    'hpcl-bpcl-ethanol-stations.md',
    'nitin-gadkari-e100-vision.md',
    'india-vs-brazil-ethanol.md',
    'economic-impact-e85-india-oil-imports.md',
    'bajaj-re-e85-auto-rickshaw.md',
    'tata-ace-flex-fuel-e85.md',
    'resale-value-flex-fuel-cars.md',
    'are-flex-fuel-cars-safe.md',
    'top-10-flex-fuel-myths.md',
    'how-to-test-ethanol-content-e85.md',
    'can-e85-freeze-in-winters.md',
    'does-e85-evaporate-faster.md',
    'toyota-innova-hycross-e85-hybrid.md',
    'maruti-brezza-flex-fuel.md',
    'honda-elevate-e85-flex-fuel.md',
    'kia-seltos-flex-fuel-india.md'
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
                icon: '💼',
                category: 'BUSINESS & INDUSTRY',
                categoryColor: '#2e7d32',
                gradient: 'linear-gradient(135deg,#2e7d32,#4caf50)',
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
