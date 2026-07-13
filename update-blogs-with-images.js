const fs = require('fs');
const path = require('path');

const blogsJsPath = path.join(__dirname, 'blogs.js');
let blogsContent = fs.readFileSync(blogsJsPath, 'utf8');

// Define mapping function
function getBlogImage(url, title, category) {
    const u = url.toLowerCase();
    const t = title.toLowerCase();

    // 1. Check local images
    if (u.includes('tvs-apache') || t.includes('tvs apache') || t.includes('apache rtr')) return 'apache_flex.png';
    if (u.includes('stations-bengaluru') || (t.includes('bengaluru') && u.includes('station'))) return 'bengaluru_e85.png';
    if (u.includes('best-flex-fuel-bikes')) return 'best_flex_bikes.png';
    if (u.includes('top-biofuel-companies') || u.includes('top-5-biofuel-companies') || u.includes('biofuel-companies')) return 'biofuel_companies.png';
    if (u.includes('bosch-vs-magneti')) return 'bosch_vs_magneti.png';
    if (u.includes('conversion-kit') || u.includes('install-e85')) return 'conversion_kit.png';
    if (u.includes('stations-delhi') || (t.includes('delhi') && u.includes('station'))) return 'delhi_e85.png';
    if (u.includes('fuel-pump-upgrades') || u.includes('injectors-sizing')) return 'e85_fuel_pump_upgrades.png';
    if (u.includes('flex-fuel-vs-ev') || u.includes('carbon-intensity-e85-vs-evs')) return 'flex_vs_ev.png';
    if (u.includes('honda-activa') || t.includes('activa')) return 'honda_activa_flex.png';
    if (u.includes('stations-india') || u.includes('stations-map')) return 'india_map_e85.png';
    if (u.includes('innova-hycross') || t.includes('innova')) return 'innova_flex.png';
    if (u.includes('stations-mumbai') || (t.includes('mumbai') && u.includes('station'))) return 'mumbai_e85.png';
    if (u.includes('scooters-vs-electric') || u.includes('flex-fuel-vs-electric-scooters')) return 'scooters_flex_vs_ev.png';
    if (u.includes('subsidies') || u.includes('fame-iii')) return 'subsidies_fame_iii.png';
    if (u.includes('upcoming-flex-fuel-cars') || u.includes('upcoming-flex-cars')) return 'upcoming_flex_cars.png';

    // 2. Map Unsplash images based on keywords
    if (t.includes('warranty') || t.includes('insurance')) {
        return 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('pump') || t.includes('station') || t.includes('locator') || t.includes('find near me') || t.includes('availability') || t.includes('delhi') || t.includes('mumbai') || t.includes('bengaluru') || t.includes('hyderabad') || t.includes('pune')) {
        return 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('corrosion') || t.includes('clogging') || t.includes('clean') || t.includes('rust') || t.includes('filter') || t.includes('maintenance')) {
        return 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('injector') || t.includes('ecu') || t.includes('timing') || t.includes('afr') || t.includes('fuel line') || t.includes('ptfe') || t.includes('spark plug') || t.includes('sensor')) {
        return 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('motorcycle') || t.includes('bike') || t.includes('bullet') || t.includes('classic 350') || t.includes('pulsar') || t.includes('glamour') || t.includes('splendor') || t.includes('royal enfield') || t.includes('tvs')) {
        return 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('scooter') || t.includes('ola') || t.includes('ather')) {
        return 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('rickshaw') || t.includes('three-wheeler') || t.includes('auto')) {
        return 'https://images.unsplash.com/photo-1566908829748-0ca1a1d13a69?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('sugarcane') || t.includes('farmer') || t.includes('agriculture') || t.includes('crop') || t.includes('deforestation') || t.includes('food vs fuel') || t.includes('water consumption') || t.includes('sustainable')) {
        return 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('economic') || t.includes('forex') || t.includes('import') || t.includes('oil bill') || t.includes('savings') || t.includes('cost') || t.includes('business') || t.includes('franchise') || t.includes('market') || t.includes('price')) {
        return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('brezza') || t.includes('nexon') || t.includes('creta') || t.includes('seltos') || t.includes('elevate') || t.includes('hycross') || t.includes('car') || t.includes('vehicle') || t.includes('tata') || t.includes('maruti') || t.includes('honda') || t.includes('hyundai') || t.includes('kia') || t.includes('toyota')) {
        return 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('racing') || t.includes('motorsports') || t.includes('drag') || t.includes('methanol') || t.includes('turbo') || t.includes('timing') || t.includes('tuning') || t.includes('horsepower') || t.includes('boost') || t.includes('knock') || t.includes('detonation')) {
        return 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('environmental') || t.includes('emissions') || t.includes('co2') || t.includes('carbon') || t.includes('green') || t.includes('climate')) {
        return 'https://images.unsplash.com/photo-1500485035595-cbeee2664d44?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('cold') || t.includes('winter') || t.includes('freeze') || t.includes('block heater')) {
        return 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('phase separation') || t.includes('water in fuel') || t.includes('chemistry') || t.includes('science')) {
        return 'https://images.unsplash.com/photo-1548880813-440430e38634?auto=format&fit=crop&w=600&q=80';
    }
    if (t.includes('hydrogen') || t.includes('plants') || t.includes('2g') || t.includes('agri-waste') || t.includes('aviation') || t.includes('saf')) {
        return 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80';
    }

    // Default based on category
    if (category === 'BUSINESS & INDUSTRY') return 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80';
    if (category === 'TECH & MAINTENANCE') return 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80';
    if (category === 'GUIDES') return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
    return 'e85_pump.png';
}

// 1. First, parse the blogData variable out of blogs.js by extracting the array block
const startIndex = blogsContent.indexOf('const blogData = [') + 'const blogData = '.length;
const endIndex = blogsContent.indexOf('];', startIndex) + 1;
const arrayString = blogsContent.slice(startIndex, endIndex);
const blogData = eval(arrayString);

console.log(`Loaded ${blogData.length} blogs to update.`);

// 2. Add the "image" field to each blog object
blogData.forEach(blog => {
    blog.image = getBlogImage(blog.url, blog.title, blog.category);
});

// 3. Rebuild the const blogData section in blogs.js
const arrayStartIndex = blogsContent.indexOf('const blogData = [');
const arrayEndIndex = blogsContent.indexOf('];', arrayStartIndex) + 2;

const newArrayStr = `const blogData = ${JSON.stringify(blogData, null, 4)};`;

let updatedContent = blogsContent.slice(0, arrayStartIndex) + newArrayStr + blogsContent.slice(arrayEndIndex);

// 4. Also update the DOM rendering functions to support the image field if not already done
const imgWrapRegex = /<div class="blog-card-img" style="background:\s*\${blog\.gradient};">\s*<div class="blog-card-icon">\s*\${blog\.icon}\s*<\/div>\s*<\/div>/g;

const replacementImgWrap = `<div class="blog-card-img" style="background:\${blog.gradient};">
                    \${blog.image ? \`<img src="\${blog.image.startsWith('http') ? blog.image : (isInBlogFolder ? '../images/' + blog.image : 'images/' + blog.image)}" alt="\${blog.title}" style="width:100%; height:100%; object-fit:cover; position:absolute; inset:0;">\` : \`<div class="blog-card-icon">\${blog.icon}</div>\`}
                </div>`;

updatedContent = updatedContent.replace(imgWrapRegex, replacementImgWrap);

fs.writeFileSync(blogsJsPath, updatedContent, 'utf8');
console.log('✅ Successfully updated blogs.js with matching images and DOM rendering logic!');
