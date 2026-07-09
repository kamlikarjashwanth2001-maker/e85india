const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const DATA_DIR = path.join(__dirname, '../data');
const VEHICLES_LIST_FILE = path.join(DATA_DIR, 'vehicles-to-research.json');
const INDEX_LOG_FILE = path.join(DATA_DIR, 'index-log.json');
const NEW_URLS_FILE = path.join(DATA_DIR, 'new-urls.json');
const SITEMAP_FILE = path.join(__dirname, '../sitemap.xml');
const VEHICLES_DIR = path.join(__dirname, '../vehicles');
const TEMPLATE_FILE = path.join(VEHICLES_DIR, 'honda-activa-e85-compatibility.html');

// Ensure files exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(INDEX_LOG_FILE)) fs.writeFileSync(INDEX_LOG_FILE, JSON.stringify([]));
if (!fs.existsSync(NEW_URLS_FILE)) fs.writeFileSync(NEW_URLS_FILE, JSON.stringify([]));
if (!fs.existsSync(VEHICLES_LIST_FILE)) fs.writeFileSync(VEHICLES_LIST_FILE, JSON.stringify([]));

function logIndex(item) {
    const indexLogs = JSON.parse(fs.readFileSync(INDEX_LOG_FILE, 'utf-8'));
    indexLogs.push({...item, timestamp: new Date().toISOString()});
    fs.writeFileSync(INDEX_LOG_FILE, JSON.stringify(indexLogs, null, 2));
}

async function generateVehicleHtml(vehicleName) {
    const templateHtml = fs.readFileSync(TEMPLATE_FILE, 'utf-8');
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `
    You are an expert Indian auto journalist and SEO specialist. 
    I am providing you with a highly optimized HTML template for a vehicle E85 compatibility guide (based on Honda Activa).
    
    Your task is to generate the EXACT same full HTML page for the vehicle: "${vehicleName}".
    
    REQUIREMENTS:
    1. Keep the exact CSS, layout, HTML structure, tables, Verdict boxes, and FAQ format.
    2. Maintain the Indian "Hinglish" SEO mindset in headings and text (e.g., "Use Kar Sakte Hai?", "fayde", "Nuksaan", "Kitna Bachega").
    3. Update all facts realistically for the ${vehicleName} (Prices, mileage, year-wise compatibility, engine types). 
       * Assume modern variants (2024+) might have some flex-fuel readiness or E20 readiness, while older ones don't.
       * Invent realistic but plausible mileage comparisons for Petrol vs E85.
    4. Update the <title>, <meta description>, <meta keywords>, OpenGraph tags, and canonical URL (use slug format: /vehicles/vehicle-name-e85-compatibility.html).
    5. Update the two application/ld+json Schema markups (Article and FAQPage) with the new data.
    6. Ensure the vehicle type matches (if it's a car, change bike emojis to car emojis, update wording appropriately).
    
    TEMPLATE:
    \`\`\`html
    ${templateHtml}
    \`\`\`
    
    Return ONLY the raw HTML code for the new page. Do not use markdown blocks like \`\`\`html. Just raw HTML text.
    `;

    try {
        const result = await model.generateContent(prompt);
        let htmlText = result.response.text().trim();
        if(htmlText.startsWith('\`\`\`html')) htmlText = htmlText.replace(/^\`\`\`html\n?/, '').replace(/\n?\`\`\`$/, '');
        else if(htmlText.startsWith('\`\`\`')) htmlText = htmlText.replace(/^\`\`\`\n?/, '').replace(/\n?\`\`\`$/, '');
        return htmlText;
    } catch (e) {
        console.error(`Gemini API error for ${vehicleName}:`, e.message);
        return null;
    }
}

function updateSitemap(slug) {
    const sitemap = fs.readFileSync(SITEMAP_FILE, 'utf-8');
    const dateStr = new Date().toISOString().split('T')[0];
    const newSitemapEntry = `
<url>
    <loc>https://e85india.com/vehicles/${slug}.html</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
</url>`;
    
    // We can insert this right after the XML opening tag or before the closing </urlset>.
    // It's safer to insert before </urlset>
    const updatedSitemap = sitemap.replace(
        /<\/urlset>/,
        `${newSitemapEntry}\n</urlset>`
    );
    fs.writeFileSync(SITEMAP_FILE, updatedSitemap);
}

async function processIndexing() {
    console.log("Starting indexing process...");
    let newUrls = JSON.parse(fs.readFileSync(NEW_URLS_FILE, 'utf-8'));
    
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    newUrls = newUrls.filter(entry => new Date(entry.timestamp).getTime() > thirtyDaysAgo);

    let needsSave = false;
    for (let i = 0; i < newUrls.length; i++) {
        const entry = newUrls[i];
        if (entry.indexed) continue;

        console.log(`Indexing URL: ${entry.url}`);
        const url = entry.url;
        
        try {
            await axios.get('https://www.google.com/ping?sitemap=https://e85india.com/sitemap.xml');
            logIndex({ action: "google_ping", status: "success" });
        } catch (e) { }

        if (process.env.INDEXNOW_KEY) {
            try {
                await axios.post('https://api.indexnow.org/indexnow', {
                    host: 'e85india.com',
                    key: process.env.INDEXNOW_KEY,
                    keyLocation: `https://e85india.com/${process.env.INDEXNOW_KEY}.txt`,
                    urlList: [url]
                });
                logIndex({ action: "indexnow", status: "success", url });
            } catch (e) { }
        }

        if (process.env.GOOGLE_INDEXING_SA_KEY) {
            try {
                const { google } = require('googleapis');
                const credentials = JSON.parse(process.env.GOOGLE_INDEXING_SA_KEY);
                const jwtClient = new google.auth.JWT(
                    credentials.client_email, null, credentials.private_key,
                    ['https://www.googleapis.com/auth/indexing'], null
                );
                await jwtClient.authorize();
                await axios.post(
                    'https://indexing.googleapis.com/v3/urlNotifications:publish',
                    { url, type: 'URL_UPDATED' },
                    { headers: { 'Authorization': `Bearer ${jwtClient.credentials.access_token}` } }
                );
                logIndex({ action: "google_indexing_api", status: "success", url });
            } catch (e) { }
        }
        newUrls[i].indexed = true;
        needsSave = true;
    }
    
    if (needsSave) fs.writeFileSync(NEW_URLS_FILE, JSON.stringify(newUrls, null, 2));
}

async function main() {
    console.log("Starting Vehicle Generator Pipeline...");
    const vehiclesList = JSON.parse(fs.readFileSync(VEHICLES_LIST_FILE, 'utf-8'));
    
    if (vehiclesList.length === 0) {
        console.log("No vehicles left in the queue to process.");
        return;
    }
    
    // Take 2 vehicles for this run (per user instruction: 2-3 daily)
    const toProcess = vehiclesList.splice(0, 2);
    
    for (const vehicle of toProcess) {
        console.log(`Generating guide for: ${vehicle}`);
        const htmlContent = await generateVehicleHtml(vehicle);
        
        if (!htmlContent) {
            console.log(`Failed to generate ${vehicle}. Re-adding to queue.`);
            vehiclesList.unshift(vehicle);
            continue;
        }
        
        const slug = `${vehicle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-e85-compatibility`;
        const filePath = path.join(VEHICLES_DIR, `${slug}.html`);
        
        fs.writeFileSync(filePath, htmlContent);
        updateSitemap(slug);
        
        // Add to index queue
        const newUrls = JSON.parse(fs.readFileSync(NEW_URLS_FILE, 'utf-8'));
        newUrls.push({ url: `https://e85india.com/vehicles/${slug}.html`, timestamp: new Date().toISOString(), indexed: false });
        fs.writeFileSync(NEW_URLS_FILE, JSON.stringify(newUrls, null, 2));
        
        console.log(`Successfully generated and saved ${slug}.html`);
    }
    
    // Save remaining vehicles back to file
    fs.writeFileSync(VEHICLES_LIST_FILE, JSON.stringify(vehiclesList, null, 2));
    
    // Run background indexing
    await processIndexing();
    
    console.log("Finished vehicle pipeline.");
}

main().catch(console.error);
