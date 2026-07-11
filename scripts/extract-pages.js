const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// Helper to extract a section by ID (very basic, assumes standard <section... id="xxx">...</section>)
function extractSection(html, id) {
    const startRegex = new RegExp(`<section[^>]*id="${id}"[^>]*>`, 'i');
    const startMatch = html.match(startRegex);
    if (!startMatch) return '';
    
    let startIndex = startMatch.index;
    // Find the matching closing tag. Assuming no nested <section> inside the section
    let endIndex = html.indexOf('</section>', startIndex);
    if (endIndex === -1) return '';
    
    return html.substring(startIndex, endIndex + '</section>'.length);
}

// Extract base template parts
const headMatch = indexContent.match(/([\s\S]*?)<\/head>/i);
let baseHead = headMatch ? headMatch[1] : '';

const headerMatch = indexContent.match(/(<header class="navbar">[\s\S]*?<\/header>)/i);
const headerHTML = headerMatch ? headerMatch[1] : '';

const mobileNavMatch = indexContent.match(/(<!-- MOBILE NAV OVERLAY -->[\s\S]*?<\/nav>)/i);
const mobileNavHTML = mobileNavMatch ? mobileNavMatch[1] : '';

const footerMatch = indexContent.match(/(<footer class="footer">[\s\S]*?<\/footer>)/i);
const footerHTML = footerMatch ? footerMatch[1] : '';

const scriptMatch = indexContent.match(/(<script>[\s\S]*?<\/script>\s*<\/body>\s*<\/html>)/i);
const scriptHTML = scriptMatch ? scriptMatch[1] : '';

// Function to generate a page
function generatePage(filename, title, description, schema, sectionIds) {
    let newHead = baseHead
        .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
        .replace(/<meta name="description" content=".*?">/i, `<meta name="description" content="${description}">`)
        .replace(/<link rel="canonical" href=".*?">/i, `<link rel="canonical" href="https://e85india.com/${filename}">`);

    // Add schema
    if (schema) {
        newHead += `\n${schema}\n`;
    }

    let bodyContent = `</head>\n<body>\n${headerHTML}\n${mobileNavHTML}\n<div style="padding-top: 100px;"></div>\n`;
    
    for (const id of sectionIds) {
        const sec = extractSection(indexContent, id);
        if (sec) {
            bodyContent += sec + '\n';
        }
    }
    
    bodyContent += `\n${footerHTML}\n${scriptHTML}`;
    
    fs.writeFileSync(path.join(__dirname, '..', filename), newHead + bodyContent);
    console.log(`Generated ${filename}`);
}

// 1. vehicle-checker.html
generatePage('vehicle-checker.html', 'E85 Vehicle Compatibility Checker | E85 India', 'Free online tool to instantly check if your car, bike, or auto rickshaw is compatible with E85 flex fuel in India.', `<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"E85 Vehicle Compatibility Checker","url":"https://e85india.com/vehicle-checker.html","applicationCategory":"UtilityApplication","operatingSystem":"Any"}</script>`, ['vehicles']);

// 2. catalog.html
generatePage('catalog.html', 'Flex Fuel Vehicle Catalog 2025 | E85 India', 'Browse all E85 compatible flex fuel vehicles available in India, including cars and bikes from top manufacturers.', '', ['catalog', 'vehicle-guides']);

// 3. stations.html
generatePage('stations.html', 'E85 Fuel Stations Map | E85 India', 'Locate the nearest E85 fuel station in India. Live availability map for Delhi, Mumbai, Pune, and Bengaluru.', '', ['stations']);

// 4. calculator.html
generatePage('calculator.html', 'E85 Fuel Savings Calculator | E85 India', 'Calculate your yearly fuel savings and CO2 reduction by switching from Petrol to E85 fuel.', '', ['calculator', 'comparison']);

// 5. dashboard.html
generatePage('dashboard.html', 'Live E85 Data Dashboard | E85 India', 'Real-time analytics, pricing, and ethanol blending data for the Indian E85 ecosystem.', '', ['dashboard']);

// 6. about.html
generatePage('about.html', 'About E85 India & Policy Timeline', 'Learn about E85 India, ethanol blending policies, and the roadmap to 2026 flex fuel mandates.', `<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is my car E85 compatible?","acceptedAnswer":{"@type":"Answer","text":"Only factory-fitted Flex Fuel Vehicles or those with conversion kits are fully E85 compatible. Standard vehicles made after 2020 are usually E20 compatible but cannot run on E85."}},{"@type":"Question","name":"How much does E85 cost vs petrol?","acceptedAnswer":{"@type":"Answer","text":"E85 is significantly cheaper than petrol. For example, in Delhi, E85 is priced around ₹82.12/L compared to petrol at over ₹94/L, saving you up to 21%."}},{"@type":"Question","name":"Where can I get E85 in Delhi/Mumbai/Bengaluru?","acceptedAnswer":{"@type":"Answer","text":"E85 is available at select IOCL, BPCL, and HPCL stations. Key locations include Connaught Place in Delhi, Bandra in Mumbai, and Whitefield in Bengaluru."}},{"@type":"Question","name":"Is E85 available in Chennai/Hyderabad?","acceptedAnswer":{"@type":"Answer","text":"E85 is not yet officially launched in Chennai or Hyderabad. Stations are being built, and official availability in these cities is coming soon."}}]}</script>`, ['policy']);

console.log('All pages extracted successfully.');
