// extract-urls.js
// This script parses sitemap.xml, extracts all URLs that contain '/blog/' and writes them to urls.txt

const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const sitemapPath = path.join(__dirname, 'sitemap.xml');
const outputPath = path.join(__dirname, 'urls.txt');

fs.readFile(sitemapPath, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.error('Failed to read sitemap.xml:', err);
    process.exit(1);
  }
  xml2js.parseString(data, (parseErr, result) => {
    if (parseErr) {
      console.error('Failed to parse XML:', parseErr);
      process.exit(1);
    }
    // Sitemap schema: <urlset><url><loc>...</loc></url>...</urlset>
    const urls = [];
    const urlEntries = result.urlset && result.urlset.url ? result.urlset.url : [];
    urlEntries.forEach(entry => {
      const loc = entry.loc && entry.loc[0];
      if (loc && loc.includes('/blog/')) {
        urls.push(loc.trim());
      }
    });
    fs.writeFileSync(outputPath, urls.join('\n'), { encoding: 'utf8' });
    console.log(`Extracted ${urls.length} blog URLs to ${outputPath}`);
  });
});
