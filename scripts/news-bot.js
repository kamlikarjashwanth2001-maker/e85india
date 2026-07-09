const Parser = require('rss-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const parser = new Parser();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const FEEDS = [
    'https://feeds.feedburner.com/ndtvnews-top-stories',
    'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    'https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml',
    'https://www.indiatoday.in/rss/1206514',
    'https://www.thehindu.com/news/national/feeder/default.rss',
    'https://www.news18.com/rss/india.xml',
    'https://timesofindia.indiatimes.com/rssfeeds/74317216.cms' // TOI Auto
];

const KEYWORDS = [
    "E85", "ethanol", "flex fuel", "flex-fuel", "biofuel", "fuel price",
    "petrol price", "diesel price", "CNG", "electric vehicle", "EV",
    "hybrid car", "mileage", "fuel efficiency", "fuel policy",
    "automobile", "car launch", "bike launch", "vehicle emission",
    "pollution norms", "BS6", "green fuel", "sugarcane ethanol",
    "oil ministry", "petroleum ministry", "Nitin Gadkari", "fuel subsidy"
];

const DATA_DIR = path.join(__dirname, '../data');
const POSTED_URLS_FILE = path.join(DATA_DIR, 'posted-urls.json');
const INDEX_LOG_FILE = path.join(DATA_DIR, 'index-log.json');
const NEW_URLS_FILE = path.join(DATA_DIR, 'new-urls.json');
const BLOGS_JS_FILE = path.join(__dirname, '../blogs.js');
const SITEMAP_FILE = path.join(__dirname, '../sitemap.xml');
const BLOG_DIR = path.join(__dirname, '../blog');

// Ensure data dir and files exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(POSTED_URLS_FILE)) fs.writeFileSync(POSTED_URLS_FILE, JSON.stringify([]));
if (!fs.existsSync(INDEX_LOG_FILE)) fs.writeFileSync(INDEX_LOG_FILE, JSON.stringify([]));
if (!fs.existsSync(NEW_URLS_FILE)) fs.writeFileSync(NEW_URLS_FILE, JSON.stringify([]));

const postedUrls = JSON.parse(fs.readFileSync(POSTED_URLS_FILE, 'utf-8'));
const indexLogs = JSON.parse(fs.readFileSync(INDEX_LOG_FILE, 'utf-8'));

function logIndex(item) {
    indexLogs.push({...item, timestamp: new Date().toISOString()});
    fs.writeFileSync(INDEX_LOG_FILE, JSON.stringify(indexLogs, null, 2));
}

function matchesKeywords(text) {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    return KEYWORDS.some(k => lowerText.includes(k.toLowerCase()));
}

async function fetchRelevantNews() {
    let relevantItems = [];
    for (const feed of FEEDS) {
        try {
            const feedData = await parser.parseURL(feed);
            for (const item of feedData.items) {
                if (postedUrls.includes(item.link)) continue;
                if (matchesKeywords(item.title) || matchesKeywords(item.contentSnippet || item.content)) {
                    relevantItems.push(item);
                }
            }
        } catch (e) {
            console.error(`Error fetching ${feed}:`, e.message);
        }
    }
    return relevantItems;
}

async function rewriteWithGemini(item) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
    You are an expert fuel and auto journalist. Rewrite the following news article in your own words.
    Do NOT copy sentences verbatim. The output should be a professional, engaging blog post of 300-400 words.
    
    Article Title: ${item.title}
    Article Content/Snippet: ${item.contentSnippet || item.content}
    Original Source Outlet: ${item.creator || 'News Source'}
    Original URL: ${item.link}

    First, score the article's relevance specifically to E85 fuel, EVs, auto industry, or fuel prices in India from 0 to 10.
    If the score is below 6, we will discard it.

    Return the response as a strict JSON object with these keys:
    {
        "relevance_score": number (0-10),
        "seo_title": "string (60 char max)",
        "meta_description": "string (155 char max)",
        "slug": "kebab-case-string",
        "tags": ["tag1", "tag2", "tag3"],
        "content": "string (HTML format containing paragraphs <p> and subheadings <h2>. At the very end, include a paragraph: <p><em>Source: [Outlet Name]</em></p>)"
    }
    Return ONLY the raw JSON object, no markdown blocks or extra text.
    `;

    try {
        const result = await model.generateContent(prompt);
        let text = result.response.text().trim();
        if(text.startsWith('```json')) text = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
        return JSON.parse(text);
    } catch (e) {
        console.error(`Gemini API error for item ${item.title}:`, e.message);
        return null;
    }
}

function generateHtmlFile(geminiData) {
    const dateStr = new Date().toISOString().split('T')[0];
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${geminiData.seo_title} | E85 India</title>

<meta name="description" content="${geminiData.meta_description}">

<meta name="keywords" content="${geminiData.tags.join(', ')}">

<meta name="author" content="E85 India">
<meta name="robots" content="index, follow">

<link rel="canonical" href="https://e85india.com/blog/${geminiData.slug}.html">

<meta property="og:title" content="${geminiData.seo_title}">
<meta property="og:description" content="${geminiData.meta_description}">
<meta property="og:url" content="https://e85india.com/blog/${geminiData.slug}.html">
<meta property="og:image" content="https://e85india.com/hero-bg.jpg">

<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%232e7d32'/></svg>">

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;line-height:1.7;color:#1a1a1a;background:#f5f7f5}
.container{max-width:900px;margin:0 auto;padding:20px}
.header{background:linear-gradient(135deg,#e65100,#ff6f00);color:white;padding:30px 20px;text-align:center}
.header .logo{color:white;text-decoration:none;font-size:1.3rem;font-weight:800;margin-bottom:15px;display:inline-block}
.header h1{font-size:2.2rem;margin:15px 0 10px;font-weight:800}
.live-badge{display:inline-block;background:#ff3d00;color:white;padding:5px 15px;border-radius:50px;font-size:0.85rem;font-weight:700;margin-top:10px;}
.breadcrumb{background:white;padding:14px 20px;border-bottom:1px solid #e0e0e0;font-size:0.9rem}
.breadcrumb a{color:#e65100;text-decoration:none;font-weight:600}
.main{background:white;padding:40px;margin:30px 0;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.05)}
h2{color:#e65100;margin:30px 0 15px;font-size:1.6rem;border-bottom:2px solid #fff3e0;padding-bottom:10px}
p{margin-bottom:15px;color:#444}
.cta{background:linear-gradient(135deg,#e65100,#ff6f00);color:white;padding:30px;border-radius:12px;text-align:center;margin:30px 0}
.cta-btn{display:inline-block;background:white;color:#e65100;padding:14px 30px;border-radius:50px;font-weight:700;text-decoration:none;margin:8px 5px}
.footer{background:#111;color:white;padding:30px 20px;text-align:center;margin-top:40px}
.footer a{color:#ff9800;text-decoration:none;margin:0 10px}
</style>
</head>
<body>
<header class="header">
<a href="../index.html" class="logo">🌿 E85 India</a>
<h1>${geminiData.seo_title}</h1>
<div class="live-badge">📰 AUTO NEWS</div>
</header>
<div class="breadcrumb">
<div class="container">
<a href="../index.html">🏠 Home</a> › <a href="index.html">📰 Blog</a> › <strong>News Update</strong>
</div>
</div>
<div class="container">
<article class="main">
${geminiData.content}
<div class="cta">
<h2>💰 Ready to Save on Fuel?</h2>
<p>Check how much you can save with E85 using our free calculator!</p>
<a href="../index.html#calculator" class="cta-btn">Calculate Savings</a>
</div>
</article>
</div>
<footer class="footer">
<p>© 2025 E85 India. India ka #1 E85 Fuel Platform.</p>
<p>
<a href="../index.html">🏠 Home</a> |
<a href="../index.html#stations">📍 Stations</a> |
<a href="index.html">📰 Blog</a>
</p>
</footer>
</body>
</html>`;
    
    fs.writeFileSync(path.join(BLOG_DIR, `${geminiData.slug}.html`), htmlTemplate);
}

function updateBlogsJs(geminiData) {
    const blogJs = fs.readFileSync(BLOGS_JS_FILE, 'utf-8');
    const newId = Date.now();
    
    const dateObj = new Date();
    const dateFormatted = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const newEntry = `    {
        id: ${newId},
        url: 'blog/${geminiData.slug}.html',
        title: '${geminiData.seo_title.replace(/'/g, "\\'")}',
        description: '${geminiData.meta_description.replace(/'/g, "\\'")}',
        icon: '📰',
        category: 'NEWS',
        categoryColor: '#e65100',
        gradient: 'linear-gradient(135deg,#e65100,#ff6f00)',
        date: '${dateFormatted}',
        readTime: '3 min read',
        isNew: true
    },\n`;

    const updatedBlogJs = blogJs.replace(
        /const blogData = \[\s*\/\/ ===== NEW BLOGS \(Top of list\) =====\s*/, 
        `const blogData = [\n    // ===== NEW BLOGS (Top of list) =====\n${newEntry}`
    );
    
    fs.writeFileSync(BLOGS_JS_FILE, updatedBlogJs);
}

function updateSitemap(geminiData) {
    const sitemap = fs.readFileSync(SITEMAP_FILE, 'utf-8');
    const dateStr = new Date().toISOString().split('T')[0];
    const newSitemapEntry = `
<url>
    <loc>https://e85india.com/blog/${geminiData.slug}.html</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
</url>`;
    
    const updatedSitemap = sitemap.replace(
        /<!-- ========== BLOG PAGES ========== -->/,
        `<!-- ========== BLOG PAGES ========== -->${newSitemapEntry}`
    );
    fs.writeFileSync(SITEMAP_FILE, updatedSitemap);
}

async function processIndexing() {
    console.log("Starting indexing process...");
    let newUrls = JSON.parse(fs.readFileSync(NEW_URLS_FILE, 'utf-8'));
    
    // Prune entries older than 30 days
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    newUrls = newUrls.filter(entry => new Date(entry.timestamp).getTime() > thirtyDaysAgo);

    for (let i = 0; i < newUrls.length; i++) {
        const entry = newUrls[i];
        if (entry.indexed) continue;

        console.log(`Indexing URL: ${entry.url}`);
        const url = entry.url;
        
        // 1. Google Ping
        try {
            await axios.get('https://www.google.com/ping?sitemap=https://e85india.com/sitemap.xml');
            logIndex({ action: "google_ping", status: "success" });
        } catch (e) {
            logIndex({ action: "google_ping", status: "error", msg: e.message });
        }

        // 2. IndexNow
        if (process.env.INDEXNOW_KEY) {
            try {
                await axios.post('https://api.indexnow.org/indexnow', {
                    host: 'e85india.com',
                    key: process.env.INDEXNOW_KEY,
                    keyLocation: `https://e85india.com/${process.env.INDEXNOW_KEY}.txt`,
                    urlList: [url]
                });
                logIndex({ action: "indexnow", status: "success", url });
            } catch (e) {
                logIndex({ action: "indexnow", status: "error", url, msg: e.message });
            }
        }

        // 3. Google Indexing API
        if (process.env.GOOGLE_INDEXING_SA_KEY) {
            try {
                const { google } = require('googleapis');
                const credentials = JSON.parse(process.env.GOOGLE_INDEXING_SA_KEY);
                const jwtClient = new google.auth.JWT(
                    credentials.client_email,
                    null,
                    credentials.private_key,
                    ['https://www.googleapis.com/auth/indexing'],
                    null
                );
                
                await jwtClient.authorize();
                await axios.post(
                    'https://indexing.googleapis.com/v3/urlNotifications:publish',
                    { url, type: 'URL_UPDATED' },
                    { headers: { 'Authorization': `Bearer ${jwtClient.credentials.access_token}` } }
                );
                logIndex({ action: "google_indexing_api", status: "success", url });
            } catch (e) {
                logIndex({ action: "google_indexing_api", status: "error", url, msg: e.message });
            }
        }
        
        newUrls[i].indexed = true;
    }
    
    // Always save to persist pruning and indexed status
    fs.writeFileSync(NEW_URLS_FILE, JSON.stringify(newUrls, null, 2));
}

async function main() {
    console.log("Starting News Bot Pipeline...");
    const items = await fetchRelevantNews();
    console.log(`Found ${items.length} relevant unfiltered items.`);
    
    let processedCount = 0;
    
    for (const item of items) {
        if (processedCount >= 3) {
            console.log("Hit limit of 3 posts per run.");
            break; // Max 3 per run
        }
        
        console.log(`Evaluating: ${item.title}`);
        const aiResult = await rewriteWithGemini(item);
        
        if (!aiResult) continue;
        
        if (aiResult.relevance_score < 6) {
            console.log(`Skipping due to low relevance score: ${aiResult.relevance_score}`);
            // Add to posted anyway so we don't keep asking Gemini about it
            postedUrls.push(item.link);
            fs.writeFileSync(POSTED_URLS_FILE, JSON.stringify(postedUrls, null, 2));
            continue;
        }

        console.log(`Publishing: ${aiResult.slug}`);
        generateHtmlFile(aiResult);
        updateBlogsJs(aiResult);
        updateSitemap(aiResult);
        
        postedUrls.push(item.link);
        fs.writeFileSync(POSTED_URLS_FILE, JSON.stringify(postedUrls, null, 2));
        
        // Add to new-urls.json
        const newUrls = JSON.parse(fs.readFileSync(NEW_URLS_FILE, 'utf-8'));
        newUrls.push({ url: `https://e85india.com/blog/${aiResult.slug}.html`, timestamp: new Date().toISOString(), indexed: false });
        fs.writeFileSync(NEW_URLS_FILE, JSON.stringify(newUrls, null, 2));
        
        processedCount++;
    }
    
    await processIndexing();
    
    console.log(`Finished processing ${processedCount} items.`);
}

main().catch(console.error);
