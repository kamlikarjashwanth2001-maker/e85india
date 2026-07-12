const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'blog-md');

const blogUpdates = [
    {
        file: 'upcoming-flex-fuel-cars-india.md',
        image: 'upcoming_flex_cars.png',
        url: 'blog/upcoming-flex-fuel-cars-india.html',
        title: 'Upcoming Flex Fuel Cars in India: 2026-2027 Launch Timeline',
        description: 'Discover the highly anticipated flex-fuel cars launching in India between 2026 and 2027, featuring models from Maruti Suzuki, Toyota, and Tata.',
        icon: '🚗',
        category: 'VEHICLES',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'flex-fuel-vs-ev-india.md',
        image: 'flex_vs_ev.png',
        url: 'blog/flex-fuel-vs-ev-india.html',
        title: 'Flex Fuel vs Electric Vehicles (EVs): Which is Better for India?',
        description: 'A deep dive comparing Flex Fuel vehicles and EVs in the Indian context. Analyzing infrastructure, cost, and environmental impact.',
        icon: '⚡',
        category: 'COMPARISONS',
        categoryColor: '#d32f2f',
        gradient: 'linear-gradient(135deg,#d32f2f,#e53935)'
    },
    {
        file: 'best-flex-fuel-bikes-scooters.md',
        image: 'best_flex_bikes.png',
        url: 'blog/best-flex-fuel-bikes-scooters.html',
        title: 'Best Flex Fuel Bikes & Scooters in India (2026 List)',
        description: 'Explore the top flex fuel motorcycles and scooters available in India. Find the perfect E85 compatible two-wheeler for your daily commute.',
        icon: '🏍️',
        category: 'VEHICLES',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'honda-activa-flex-fuel.md',
        image: 'honda_activa_flex.png',
        url: 'blog/honda-activa-flex-fuel.html',
        title: 'Honda Activa Flex Fuel Launch Timeline and Expected Price',
        description: 'Everything you need to know about the upcoming Honda Activa Flex Fuel scooter, including expected launch dates, pricing, and specs.',
        icon: '🛵',
        category: 'VEHICLES',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'hero-glamour-xtec-flex-fuel.md',
        image: 'e85_pump.png',
        url: 'blog/hero-glamour-xtec-flex-fuel.html',
        title: 'Hero Glamour XTEC Flex Fuel: The Commuter\'s Green Choice',
        description: 'Detailed review of the Hero Glamour XTEC Flex Fuel. Learn why it is becoming the top green choice for Indian commuters.',
        icon: '🏍️',
        category: 'VEHICLES',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#1976d2)'
    },
    {
        file: 'flex-fuel-vs-electric-scooters.md',
        image: 'scooters_flex_vs_ev.png',
        url: 'blog/flex-fuel-vs-electric-scooters.html',
        title: 'Flex Fuel Scooters vs Electric Scooters: The Ultimate Comparison',
        description: 'Which green scooter should you buy? We compare flex fuel and electric scooters based on range, charging/fueling time, and total cost of ownership.',
        icon: '⚖️',
        category: 'COMPARISONS',
        categoryColor: '#d32f2f',
        gradient: 'linear-gradient(135deg,#d32f2f,#e53935)'
    },
    {
        file: 'bosch-vs-magneti-marelli-flex-sensor.md',
        image: 'bosch_vs_magneti.png',
        url: 'blog/bosch-vs-magneti-marelli-flex-sensor.html',
        title: 'Bosch vs Magneti Marelli: Best Flex Fuel Sensors Compared',
        description: 'An in-depth technical comparison between Bosch and Magneti Marelli flex fuel sensors for your E85 conversion project.',
        icon: '⚙️',
        category: 'TECHNOLOGY',
        categoryColor: '#e65100',
        gradient: 'linear-gradient(135deg,#e65100,#ff6f00)'
    },
    {
        file: 'e85-fuel-pump-upgrades.md',
        image: 'e85_fuel_pump_upgrades.png',
        url: 'blog/e85-fuel-pump-upgrades.html',
        title: 'Fuel Pump Upgrades for E85 Conversions (Walbro, AEM)',
        description: 'Guide to upgrading your fuel pump for E85 conversions. Comparing top aftermarket brands like Walbro and AEM for optimal fuel delivery.',
        icon: '🔧',
        category: 'TECHNOLOGY',
        categoryColor: '#e65100',
        gradient: 'linear-gradient(135deg,#e65100,#ff6f00)'
    },
    {
        file: 'flex-fuel-vs-fame-iii-subsidies.md',
        image: 'subsidies_fame_iii.png',
        url: 'blog/flex-fuel-vs-fame-iii-subsidies.html',
        title: 'Flex Fuel vs FAME III: How Subsidies Compare to EVs',
        description: 'Understanding government incentives. A complete breakdown of FAME III subsidies for EVs versus expected incentives for Flex Fuel vehicles.',
        icon: '💰',
        category: 'POLICY',
        categoryColor: '#388e3c',
        gradient: 'linear-gradient(135deg,#388e3c,#4caf50)'
    },
    {
        file: 'e85-vs-cng-vs-lpg-cost.md',
        image: 'e85_pump.png',
        url: 'blog/e85-vs-cng-vs-lpg-cost.html',
        title: 'E85 vs CNG vs LPG: Cost Per KM Comparison in 2026',
        description: 'Comparing alternative fuels. Calculate your running costs with our detailed E85 vs CNG vs LPG cost per kilometer comparison.',
        icon: '📉',
        category: 'COMPARISONS',
        categoryColor: '#d32f2f',
        gradient: 'linear-gradient(135deg,#d32f2f,#e53935)'
    }
];

let injectedData = [];

blogUpdates.forEach(b => {
    let p = path.join(mdDir, b.file);
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        
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
                readTime: '12 min read',
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
    console.log(`Successfully injected ${injectedData.length} new blogs into blogs.js`);
}
