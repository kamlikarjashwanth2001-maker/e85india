const fs = require('fs');
const path = require('path');

const blogsJsPath = path.join(__dirname, 'blogs.js');
let blogsJs = fs.readFileSync(blogsJsPath, 'utf8');

const newBlogs = [
    {
        id: Date.now() + 1,
        url: 'blog/toyota_innova_hycross_flex_fuel.html',
        title: 'Toyota Innova HyCross Flex Fuel: Launch Date & Specs',
        description: 'Discover the Toyota Innova HyCross Flex Fuel prototype, its expected launch date, pricing, specs, and how it compares to the petrol hybrid.',
        icon: '🚙',
        category: 'VEHICLES',
        categoryColor: '#E65100',
        gradient: 'linear-gradient(135deg,#E65100,#FFA726)',
        date: 'Jul 12, 2026',
        readTime: '12 min read',
        isNew: true
    },
    {
        id: Date.now() + 2,
        url: 'blog/tvs-apache-rtr-160-ffv-review.html',
        title: 'TVS Apache RTR 160 4V FFV: Price, Mileage & Specs',
        description: 'Complete review of the TVS Apache RTR 160 4V FFV flex-fuel motorcycle. Check E85 mileage, expected price, and launch date in India.',
        icon: '🏍️',
        category: 'BIKES LIST',
        categoryColor: '#FF6F00',
        gradient: 'linear-gradient(135deg,#FF6F00,#FFA726)',
        date: 'Jul 12, 2026',
        readTime: '11 min read',
        isNew: true
    },
    {
        id: Date.now() + 3,
        url: 'blog/e85-conversion-kits-india.html',
        title: 'E85 Conversion Kits in India: Price, Legality & Top Brands',
        description: 'Looking for E85 conversion kits in India? Learn about the pricing, legality, top global brands, and the truth about converting your old car.',
        icon: '🔧',
        category: 'CONVERSION',
        categoryColor: '#FF6F00',
        gradient: 'linear-gradient(135deg,#E65100,#FF6F00)',
        date: 'Jul 12, 2026',
        readTime: '10 min read',
        isNew: true
    },
    {
        id: Date.now() + 4,
        url: 'blog/e85-fuel-price-india-today.html',
        title: 'E85 Fuel Price in India Today: Live Rates & Calculator',
        description: 'Check today’s live E85 fuel prices across major Indian cities, compare with petrol, and calculate your annual savings using our interactive guide.',
        icon: '💰',
        category: 'PRICE TODAY',
        categoryColor: '#1B5E20',
        gradient: 'linear-gradient(135deg,#1B5E20,#43A047)',
        date: 'Jul 12, 2026',
        readTime: '9 min read',
        isNew: true
    }
];

// Insert new blogs just below the // ===== NEW BLOGS (Top of list) ===== comment
const insertIndex = blogsJs.indexOf('// ===== NEW BLOGS (Top of list) =====');
if (insertIndex !== -1) {
    const endOfLine = blogsJs.indexOf('\n', insertIndex) + 1;
    
    let injectionStr = '\n';
    newBlogs.forEach(blog => {
        injectionStr += `    ${JSON.stringify(blog, null, 4)},\n`;
    });
    
    blogsJs = blogsJs.slice(0, endOfLine) + injectionStr + blogsJs.slice(endOfLine);
    fs.writeFileSync(blogsJsPath, blogsJs);
    console.log("Successfully patched blogs.js");
} else {
    console.log("Could not find insertion point.");
}
