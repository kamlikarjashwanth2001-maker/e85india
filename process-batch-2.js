const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'blog-md');

const blogUpdates = [
    {
        file: 'e85-fuel-stations-india.md',
        image: 'india_map_e85.png',
        url: 'blog/e85-fuel-stations-india.html',
        title: 'E85 Fuel Stations in India: Complete City-Wise Directory',
        description: 'A comprehensive guide to all E85 fuel stations across India. Find the nearest flex fuel pump in your city with our updated 2026 directory.',
        icon: '🗺️',
        category: 'STATIONS',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'e85-fuel-stations-delhi-ncr.md',
        image: 'delhi_e85.png',
        url: 'blog/e85-fuel-stations-delhi-ncr.html',
        title: 'E85 Fuel Stations in Delhi NCR: Locations & Prices',
        description: 'Looking for E85 fuel in Delhi, Gurgaon, or Noida? Check our verified list of Delhi NCR E85 station locations, live prices, and availability.',
        icon: '🏛️',
        category: 'STATIONS',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'e85-fuel-stations-mumbai-pune.md',
        image: 'mumbai_e85.png',
        url: 'blog/e85-fuel-stations-mumbai-pune.html',
        title: 'E85 Fuel Stations in Mumbai & Pune: Locations Map',
        description: 'Find E85 flex fuel stations across Mumbai and Pune. Complete list of verified petrol pumps offering ethanol blended fuel with current prices.',
        icon: '🌊',
        category: 'STATIONS',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'e85-fuel-stations-bengaluru-hyderabad.md',
        image: 'bengaluru_e85.png',
        url: 'blog/e85-fuel-stations-bengaluru-hyderabad.html',
        title: 'E85 Fuel Stations in Bengaluru & Hyderabad',
        description: 'The ultimate South India guide for E85 fuel. Find the nearest flex fuel stations in Bengaluru (Bangalore) and Hyderabad with exact locations.',
        icon: '💻',
        category: 'STATIONS',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'top-biofuel-companies-india.md',
        image: 'biofuel_companies.png',
        url: 'blog/top-biofuel-companies-india.html',
        title: 'Praj Industries & Other Top Biofuel Companies in India',
        description: 'Explore the leading biofuel companies driving India’s ethanol revolution, featuring Praj Industries, Shree Renuka Sugars, and Balarampur Chini.',
        icon: '🏭',
        category: 'INDUSTRY',
        categoryColor: '#e65100',
        gradient: 'linear-gradient(135deg,#e65100,#ff6f00)'
    }
];

let injectedData = [];

blogUpdates.forEach(b => {
    let p = path.join(mdDir, b.file);
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        
        // Find the first H2 heading to inject the image before it
        const firstH2 = content.match(/^##\s+.+$/m);
        if (firstH2 && !content.includes(b.image)) {
            content = content.replace(firstH2[0], `![${b.title}](../images/${b.image})\n\n${firstH2[0]}`);
            fs.writeFileSync(p, content);
            
            injectedData.push({
                id: Date.now() + Math.floor(Math.random() * 1000),
                url: b.url,
                title: b.title,
                description: b.description,
                icon: b.icon,
                category: b.category,
                categoryColor: b.categoryColor,
                gradient: b.gradient,
                date: 'Jul 12, 2026',
                readTime: '10 min read',
                isNew: true
            });
        }
    }
});

// Update blogs.js
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
    console.log("Successfully injected 5 new blogs into blogs.js");
}
