const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Ticker updates
content = content.replace(
    /<div class="price-ticker">[\s\S]*?<\/div><\/div>/i,
    `<div class="price-ticker"><div class="ticker-track">
<span class="ticker-item"><span class="ticker-dot"></span> <strong>Mumbai:</strong> E85 ₹91.18/L</span>
<span class="ticker-item"><span class="ticker-dot"></span> <strong>Delhi:</strong> E85 ₹82.12/L</span>
<span class="ticker-item"><span class="ticker-dot"></span> <strong>Bengaluru:</strong> E85 ₹80.50/L</span>
<span class="ticker-item"><span class="ticker-dot"></span> <strong>Pune:</strong> E85 ₹73.95/L</span>
<span class="ticker-item"><span class="ticker-dot"></span> <strong>Nagpur:</strong> E85 ₹74.50/L</span>
<span class="ticker-item"><span class="ticker-dot"></span> <strong>Chennai & Hyderabad:</strong> Coming Soon</span>
<span class="ticker-item"><span class="ticker-dot"></span> 📅 <strong>Last Updated:</strong> July 11, 2026 | <a href="#policy" style="color:#c8e6c9">Source</a></span>
</div></div>`
);

// 2. Station data updates
content = content.replace(
    /var stationsData = \[[\s\S]*?\];/i,
    `var stationsData = [
    {name:"IOCL E85 - Connaught Place", brand:"IOCL", city:"Delhi", address:"Connaught Place, New Delhi - 110001", price:82.12, status:"open", lat:28.6328, lng:77.2197},
    {name:"BPCL E85 - Bandra", brand:"BPCL", city:"Mumbai", address:"Bandra West, Mumbai - 400050", price:91.18, status:"open", lat:19.0596, lng:72.8295},
    {name:"HPCL E85 - Whitefield", brand:"HPCL", city:"Bengaluru", address:"Whitefield, Bengaluru - 560066", price:80.50, status:"open", lat:12.9698, lng:77.7500},
    {name:"IOCL E85 - Hinjewadi", brand:"IOCL", city:"Pune", address:"Hinjewadi, Pune - 411057", price:73.95, status:"open", lat:18.5908, lng:73.7385},
    {name:"BPCL E85 - T. Nagar", brand:"BPCL", city:"Chennai", address:"T. Nagar, Chennai - 600017", price:0.00, status:"coming soon", lat:13.0418, lng:80.2341},
    {name:"HPCL E85 - Noida", brand:"HPCL", city:"Noida", address:"Sector 62, Noida - 201309", price:82.12, status:"open", lat:28.6280, lng:77.3649},
    {name:"IOCL E85 - Banjara Hills", brand:"IOCL", city:"Hyderabad", address:"Banjara Hills, Hyderabad - 500034", price:0.00, status:"coming soon", lat:17.4126, lng:78.4350}
  ];`
);

// 3. Dashboard metrics update (81.28 -> 82.12)
content = content.replace(
    /<div class="metric-number">₹ 81.28 <span style="font-size:0.95rem;opacity:0.8">\/L<\/span><\/div>/,
    `<div class="metric-number">₹ 82.12 <span style="font-size:0.95rem;opacity:0.8">/L</span></div>`
);

// 4. Hero stats updates
content = content.replace(
    /<div class="stat-sublabel">Across India<\/div><div class="stat-change">↑ 18% this month<\/div><\/div>/,
    `<div class="stat-sublabel">500 by Dec 2026, 5000 by 2027</div><div class="stat-change">↑ Expanding rapidly</div></div>`
);

// 5. Desktop Nav Links
content = content.replace(
    /<nav class="nav-links">[\s\S]*?<\/nav>/i,
    `<nav class="nav-links">
<a href="/" class="active">Home</a>
<a href="/vehicle-checker.html">Vehicle Check</a>
<a href="/stations.html">Fuel Stations</a>
<a href="/calculator.html">Calculator</a>
<a href="/dashboard.html">Dashboard</a>
<a href="/catalog.html">FFV Models</a>
<a href="/about.html">Policy</a>
<a href="/blog/index.html">Blog</a>
<a href="/dashboard.html" class="nav-cta-btn">Live Dashboard</a>
</nav>`
);

// 6. Mobile Nav Links
content = content.replace(
    /<div class="mobile-nav-links">[\s\S]*?<\/div>/i,
    `<div class="mobile-nav-links">
<a href="/">🏠 Home</a>
<a href="/vehicle-checker.html">🚗 Vehicle Check</a>
<a href="/stations.html">📍 Fuel Stations</a>
<a href="/calculator.html">💰 Cost Calculator</a>
<a href="/dashboard.html">📊 Live Dashboard</a>
<a href="/catalog.html">🚙 FFV Models</a>
<a href="/catalog.html#vehicle-guides">📚 Vehicle Guides</a>
<a href="/blog/index.html">📰 Blog & Guides</a>
<a href="/blog/index.html">📚 All Blog Posts</a>
<a href="/about.html">📜 Policy Timeline</a>
</div>`
);

// 7. Inject FAQ schema
if (!content.includes('FAQPage')) {
    const faqSchema = `\n<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is my car E85 compatible?","acceptedAnswer":{"@type":"Answer","text":"Only factory-fitted Flex Fuel Vehicles or those with conversion kits are fully E85 compatible. Standard vehicles made after 2020 are usually E20 compatible but cannot run on E85."}},{"@type":"Question","name":"How much does E85 cost vs petrol?","acceptedAnswer":{"@type":"Answer","text":"E85 is significantly cheaper than petrol. For example, in Delhi, E85 is priced around ₹82.12/L compared to petrol at over ₹94/L, saving you up to 21%."}},{"@type":"Question","name":"Where can I get E85 in Delhi/Mumbai/Bengaluru?","acceptedAnswer":{"@type":"Answer","text":"E85 is available at select IOCL, BPCL, and HPCL stations. Key locations include Connaught Place in Delhi, Bandra in Mumbai, and Whitefield in Bengaluru."}},{"@type":"Question","name":"Is E85 available in Chennai/Hyderabad?","acceptedAnswer":{"@type":"Answer","text":"E85 is not yet officially launched in Chennai or Hyderabad. Stations are being built, and official availability in these cities is coming soon."}}]}
</script>`;
    content = content.replace('</head>', faqSchema + '\n</head>');
}

fs.writeFileSync(filePath, content);
console.log('index.html successfully patched.');
