const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract title
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'E85 India Blog';

    // If it doesn't already have Article schema
    if (!content.includes('"@type":"Article"')) {
        const schema = `\n<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title.replace(/"/g, '\\"')}",
  "author": {
    "@type": "Organization",
    "name": "E85 India"
  },
  "publisher": {
    "@type": "Organization",
    "name": "E85 India",
    "logo": {
      "@type": "ImageObject",
      "url": "https://e85india.com/apple-touch-icon.png"
    }
  },
  "datePublished": "2026-07-11T08:00:00+05:30"
}
</script>\n`;

        content = content.replace('</head>', schema + '</head>');
        fs.writeFileSync(filePath, content);
    }
}

console.log(`Injected Article schema into ${files.length} blog posts.`);
