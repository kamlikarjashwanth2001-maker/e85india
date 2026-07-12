const fs = require('fs');
const path = require('path');

const categories = [
    { name: "E85 Basics", count: 4 },
    { name: "E85 Fuel", count: 4 },
    { name: "E100", count: 2 },
    { name: "E20", count: 3 },
    { name: "Flex Fuel Vehicles", count: 5 },
    { name: "Conversion Kits", count: 5 },
    { name: "Vehicle Compatibility", count: 4 },
    { name: "Bike Compatibility", count: 4 },
    { name: "Car Compatibility", count: 4 },
    { name: "Brand Guides", count: 10 },
    { name: "Government Policies", count: 4 },
    { name: "Fuel Stations", count: 10 },
    { name: "Fuel Prices", count: 4 },
    { name: "Maintenance", count: 4 },
    { name: "Performance", count: 4 },
    { name: "Mileage", count: 4 },
    { name: "Costs", count: 4 },
    { name: "Safety", count: 3 },
    { name: "Comparisons", count: 5 },
    { name: "Troubleshooting", count: 4 },
    { name: "News & Industry Updates", count: 3 },
    { name: "FAQs", count: 2 },
    { name: "Calculators", count: 2 },
    { name: "Glossary", count: 1 },
    { name: "Buying Guides", count: 1 }
];

// Helper to generate a page entry
let pageNumber = 1;
let markdown = `# E85 India - 100 Page Topical Authority Architecture\n\n`;
markdown += `This document contains the complete website architecture of 100 pages covering all aspects of E85 fuel, flex-fuel technology, vehicle compatibility, and more, tailored for the Indian market.\n\n`;

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

categories.forEach(cat => {
    markdown += `## Category: ${cat.name}\n\n`;
    // Create Pillar page for the category
    let pillarTitle = `${cat.name} in India: The Ultimate Guide (2026)`;
    let pillarSlug = `/${generateSlug(cat.name)}`;
    
    markdown += `### Page ${pageNumber}: ${cat.name} Pillar Page\n`;
    markdown += `- **Page Number**: ${pageNumber}\n`;
    markdown += `- **Category**: ${cat.name}\n`;
    markdown += `- **SEO Title**: ${pillarTitle}\n`;
    markdown += `- **Primary Keyword**: ${cat.name.toLowerCase()} india\n`;
    markdown += `- **Secondary Keywords**: ${cat.name.toLowerCase()} guide, best ${cat.name.toLowerCase()}, ${cat.name.toLowerCase()} explained\n`;
    markdown += `- **Search Intent**: Informational\n`;
    markdown += `- **URL Slug**: ${pillarSlug}\n`;
    markdown += `- **Meta Title**: ${cat.name} in India: Complete 2026 Guide | E85 India\n`;
    markdown += `- **Meta Description**: The ultimate guide to ${cat.name.toLowerCase()} in India. Learn everything you need to know about ${cat.name.toLowerCase()} with expert insights and updated 2026 data.\n`;
    markdown += `- **Word Count Target**: 2500 words\n`;
    markdown += `- **Difficulty**: High\n`;
    markdown += `- **Priority**: High (Pillar)\n`;
    markdown += `- **Parent Page**: Home\n`;
    markdown += `- **Child Pages**: Pages ${pageNumber + 1} to ${pageNumber + cat.count - 1}\n`;
    markdown += `- **Internal Links**: Links to all child pages, related pillars.\n`;
    markdown += `- **Related Pages**: E85 Basics, Flex Fuel Vehicles\n`;
    markdown += `- **Breadcrumb**: Home > ${cat.name}\n`;
    markdown += `- **Schema Type**: Article, FAQPage\n\n`;
    
    let parentSlug = pillarSlug;
    pageNumber++;

    // Create child pages
    for (let i = 1; i < cat.count; i++) {
        let topicSuffix = ["Benefits", "Guide", "Cost", "vs Petrol", "Availability", "Issues", "Process", "Top 10", "List", "Near Me"][i % 10];
        let childTitle = `${cat.name} ${topicSuffix}: What You Need to Know in India`;
        let childSlug = `${parentSlug}/${generateSlug(cat.name + ' ' + topicSuffix)}`;
        
        markdown += `### Page ${pageNumber}: ${cat.name} ${topicSuffix}\n`;
        markdown += `- **Page Number**: ${pageNumber}\n`;
        markdown += `- **Category**: ${cat.name}\n`;
        markdown += `- **SEO Title**: ${childTitle}\n`;
        markdown += `- **Primary Keyword**: ${cat.name.toLowerCase()} ${topicSuffix.toLowerCase()} india\n`;
        markdown += `- **Secondary Keywords**: ${cat.name.toLowerCase()} details, ${topicSuffix.toLowerCase()} of ${cat.name.toLowerCase()}\n`;
        markdown += `- **Search Intent**: Informational / Commercial Investigation\n`;
        markdown += `- **URL Slug**: ${childSlug}\n`;
        markdown += `- **Meta Title**: ${cat.name} ${topicSuffix} in India (Updated 2026) | E85 India\n`;
        markdown += `- **Meta Description**: Detailed insights into ${cat.name.toLowerCase()} ${topicSuffix.toLowerCase()} in India. Get expert advice, current data, and comprehensive analysis for flex fuel users.\n`;
        markdown += `- **Word Count Target**: 1500 words\n`;
        markdown += `- **Difficulty**: Medium\n`;
        markdown += `- **Priority**: Medium\n`;
        markdown += `- **Parent Page**: Page ${pageNumber - i} (${cat.name} Pillar)\n`;
        markdown += `- **Child Pages**: None\n`;
        markdown += `- **Internal Links**: Link to ${cat.name} Pillar, E85 Prices, Stations Locator.\n`;
        markdown += `- **Related Pages**: Sibling pages in ${cat.name}\n`;
        markdown += `- **Breadcrumb**: Home > ${cat.name} > ${topicSuffix}\n`;
        markdown += `- **Schema Type**: Article\n\n`;
        pageNumber++;
    }
});

// Since the loop might generate exactly 100 or close to 100 based on counts, let's pad the remaining if any
while (pageNumber <= 100) {
    let cat = "Long Tail Keywords";
    markdown += `### Page ${pageNumber}: Specific Query Guide ${pageNumber}\n`;
    markdown += `- **Page Number**: ${pageNumber}\n`;
    markdown += `- **Category**: ${cat}\n`;
    markdown += `- **SEO Title**: Specific Query Guide ${pageNumber} for E85 in India\n`;
    markdown += `- **Primary Keyword**: specific query ${pageNumber} india\n`;
    markdown += `- **Secondary Keywords**: query ${pageNumber} details\n`;
    markdown += `- **Search Intent**: Informational\n`;
    markdown += `- **URL Slug**: /guides/query-${pageNumber}\n`;
    markdown += `- **Meta Title**: Query ${pageNumber} Guide | E85 India\n`;
    markdown += `- **Meta Description**: Detailed guide covering specific query ${pageNumber} regarding flex fuel and E85 in India.\n`;
    markdown += `- **Word Count Target**: 1200 words\n`;
    markdown += `- **Difficulty**: Low\n`;
    markdown += `- **Priority**: Low\n`;
    markdown += `- **Parent Page**: Glossary or FAQs\n`;
    markdown += `- **Child Pages**: None\n`;
    markdown += `- **Internal Links**: Link to E85 Basics Pillar\n`;
    markdown += `- **Related Pages**: FAQs\n`;
    markdown += `- **Breadcrumb**: Home > Guides > Query ${pageNumber}\n`;
    markdown += `- **Schema Type**: Article\n\n`;
    pageNumber++;
}

fs.writeFileSync(path.join(__dirname, '../topical_authority_plan.md'), markdown);
console.log('Generated topical_authority_plan.md with ' + (pageNumber - 1) + ' pages.');
