const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../blog-md');
const destDir = path.join(__dirname, '../blog');
const sitemapPath = path.join(__dirname, '../sitemap.xml');

// Ensure directories exist
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

// Basic Markdown to HTML converter (simplified for this script)
function convertMdToHtml(md) {
    let html = md
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\n$/gim, '<br />');

    return html.trim();
}

function processFiles() {
    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'));
    let urls = [];

    files.forEach(file => {
        const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        // Extract frontmatter
        const titleMatch = content.match(/title:\s*"(.*?)"/);
        const title = titleMatch ? titleMatch[1] : 'E85 India Blog';

        const htmlContent = convertMdToHtml(content.replace(/---[\s\S]*?---/, '')); // strip frontmatter
        const fileNameHtml = file.replace('.md', '.html');

        const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="../styles.css"> <!-- Assuming a global CSS -->
</head>
<body>
    <header>
        <h1>E85 India</h1>
        <nav><a href="/">Home</a> | <a href="/blog/index.html">Blog</a></nav>
    </header>
    <main>
        <article class="blog-content">
            ${htmlContent}
        </article>
    </main>
    <footer>
        <p>&copy; 2026 E85 India.</p>
    </footer>
</body>
</html>`;

        fs.writeFileSync(path.join(destDir, fileNameHtml), fullHtml);
        urls.push(`https://e85india.com/blog/${fileNameHtml}`);
    });

    // Update sitemap logic (simplified)
    if (fs.existsSync(sitemapPath) && urls.length > 0) {
        let sitemap = fs.readFileSync(sitemapPath, 'utf8');
        urls.forEach(url => {
            if (!sitemap.includes(url)) {
                sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`);
            }
        });
        fs.writeFileSync(sitemapPath, sitemap);
    }
    
    console.log(`Processed ${files.length} articles.`);
}

processFiles();
