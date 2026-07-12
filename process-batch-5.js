const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'blog-md');
const files = [
    'royal-enfield-e85-compatibility.md',
    'flex-fuel-bikes-mileage.md',
    'carburetor-vs-fi-e85-bikes.md',
    'maintenance-tips-flex-fuel-motorcycles.md',
    'how-to-install-e85-conversion-kit.md',
    'top-5-e85-conversion-kits-india.md',
    'e85-fuel-injectors-sizing.md',
    'tuning-e85-piggyback-ecu.md',
    'e85-fuel-lines-rubber-vs-ptfe.md',
    'cold-start-issues-e85.md',
    'e20-vs-e85-engine-knock.md',
    'how-e85-cleans-engine.md',
    'ideal-afr-for-e85.md',
    'spark-plugs-e85-flex-fuel.md',
    'mix-e85-and-petrol-conversion.md',
    'convert-diesel-car-to-ethanol.md',
    'does-e85-void-car-warranty.md',
    'maruti-suzuki-flex-fuel-warranty.md',
    'hyundai-kia-flex-fuel-warranty.md',
    'insurance-cover-e85-conversion.md'
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
                icon: '🔧',
                category: 'TECH & MAINTENANCE',
                categoryColor: '#f57c00',
                gradient: 'linear-gradient(135deg,#f57c00,#ff9800)',
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
