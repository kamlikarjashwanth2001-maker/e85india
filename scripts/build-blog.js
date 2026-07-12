const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../blog-md');
const destDir = path.join(__dirname, '../blog');
const sitemapPath = path.join(__dirname, '../sitemap.xml');
const templatePath = path.join(__dirname, 'blog-template.html');

if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const template = fs.readFileSync(templatePath, 'utf8');

function calculateReadTime(text) {
    const words = text.split(/\s+/).length;
    return Math.ceil(words / 200); // 200 words per min
}

// Basic Markdown to HTML converter
function convertMdToHtml(md) {
    let html = md
        .replace(/^# (.*$)/gim, '') // Remove H1, it's injected in template
        .replace(/^## (.*)$/gim, (match, content) => { let cleanText = content.replace(/<[^>]*>?/gm, '').trim(); let id = cleanText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(); return `<h2 id="${id}">${cleanText}</h2>`; })
        .replace(/^### (.*)$/gim, (match, content) => { let cleanText = content.replace(/<[^>]*>?/gm, '').trim(); let id = cleanText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(); return `<h3 id="${id}">${cleanText}</h3>`; })
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        // Advanced image replacement
        .replace(/!\[(.*?)\]\((.*?)\)/gim, (match, alt, src) => {
            return `<img alt="${alt}" src="${src}" loading="lazy" />`;
        })
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\n$/gim, '<br />');

    // Fix IDs in h2/h3 (remove HTML tags inside them and lowercase)
    html = html.replace(/<h([23]) id="(.*?)">(.*?)<\/h\1>/g, (match, level, id, content) => {
        const cleanId = id.replace(/<[^>]*>?/gm, '').replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        return `<h${level} id="${cleanId}">${content}</h${level}>`;
    });

    return html.trim();
}

function generateTOC(md) {
    const headings = md.match(/^## (.*$)/gim) || [];
    let toc = '';
    headings.forEach(heading => {
        let text = heading.replace(/^## /, '');
        // strip HTML tags
        let cleanText = text.replace(/<[^>]*>?/gm, '');
        let id = cleanText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        toc += `<li><a href="#${id}">${cleanText}</a></li>\n`;
    });
    return toc;
}

function processFiles() {
    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'));
    let urls = [];

    files.forEach(file => {
        const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        
        // Extract frontmatter safely
        let frontmatter = {};
        const fmMatch = content.match(/---\n([\s\S]*?)\n---/);
        if (fmMatch) {
            const lines = fmMatch[1].split('\n');
            lines.forEach(line => {
                const parts = line.split(/:(.*)/);
                if (parts.length > 1) {
                    frontmatter[parts[0].trim()] = parts[1].trim().replace(/^"|"$/g, '');
                }
            });
        }
        
        const title = frontmatter.title || 'E85 India Blog';
        const metaTitle = frontmatter.meta_title || title;
        const metaDesc = frontmatter.meta_description || '';
        const primaryKeyword = frontmatter.primary_keyword || '';
        const secondaryKeywords = frontmatter.secondary_keywords || '';
        const canonicalUrl = frontmatter.canonical_url || `https://e85india.com/blog/${file.replace('.md', '.html')}`;
        
        const bodyContent = content.replace(/---\n([\s\S]*?)\n---/, '').trim();
        const htmlContent = convertMdToHtml(bodyContent);
        const readTime = calculateReadTime(bodyContent);
        const publishDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const tocContent = generateTOC(bodyContent);

        // Inject into template
        let pageHtml = template
            .replace(/{{META_TITLE}}/g, metaTitle)
            .replace(/{{META_DESCRIPTION}}/g, metaDesc)
            .replace(/{{PRIMARY_KEYWORD}}/g, primaryKeyword)
            .replace(/{{SECONDARY_KEYWORDS}}/g, secondaryKeywords)
            .replace(/{{CANONICAL_URL}}/g, canonicalUrl)
            .replace(/{{TITLE}}/g, title)
            .replace(/{{READ_TIME}}/g, readTime)
            .replace(/{{PUBLISH_DATE}}/g, publishDate)
            .replace(/{{CONTENT}}/g, htmlContent)
            .replace(/{{TOC_CONTENT}}/g, tocContent)
            .replace(/{{HERO_IMG_TAG}}/g, `<img src="https://via.placeholder.com/1000x500.png?text=${encodeURIComponent(title)}" alt="${title} Hero Image" />`); // Placeholder until real images are added
            
        const fileNameHtml = file.replace('.md', '.html');
        fs.writeFileSync(path.join(destDir, fileNameHtml), pageHtml);
        urls.push(`https://e85india.com/blog/${fileNameHtml}`);
    });

    // Update sitemap logic
    if (fs.existsSync(sitemapPath) && urls.length > 0) {
        let sitemap = fs.readFileSync(sitemapPath, 'utf8');
        urls.forEach(url => {
            if (!sitemap.includes(url)) {
                sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`);
            }
        });
        fs.writeFileSync(sitemapPath, sitemap);
    }
    
    console.log(`Processed ${files.length} articles using the new template engine.`);
}

processFiles();
