const fs = require('fs');
const path = require('path');

// 1. Fix blogs.js
const blogsJsPath = path.join(__dirname, '../blogs.js');
let blogsJsContent = fs.readFileSync(blogsJsPath, 'utf8');

// We need to re-add the missing blogs to blogs.js if they aren't there.
const missingBlogs = `
    {
        id: 1720608757300,
        url: 'blog/bhandara-uncle-death-news.html',
        title: '"Bhandara Kara Do Babuji": The Tragic End to Viral Fame',
        description: 'The viral "Bhandara Kara Do Babuji" internet sensation has reportedly been found dead near Haridwar.',
        icon: '🙏',
        category: 'NEWS',
        categoryColor: '#37474f',
        gradient: 'linear-gradient(135deg,#37474f,#263238)',
        date: 'Jul 10, 2026',
        readTime: '3 min read',
        isNew: true,
        isE85: false
    },
    {
        id: 1720608757200,
        url: 'blog/bsnl-rs-134166-satellite-phone.html',
        title: 'BSNL Rs 134,166 Satellite Phone Explained',
        description: 'Discover the details of the BSNL Rs 134,166 satellite phone. Learn about its features, pricing, plans.',
        icon: '📡',
        category: 'TECH',
        categoryColor: '#0033a0',
        gradient: 'linear-gradient(135deg,#0033a0,#002277)',
        date: 'Jul 10, 2026',
        readTime: '3 min read',
        isNew: true,
        isE85: false
    },
    {
        id: 1720608757100,
        url: 'blog/peddi-ott-release-date.html',
        title: 'Peddi OTT Release Date & Platform: When & Where to Watch?',
        description: 'Looking for the Peddi OTT release date? Find out which platform bought the digital rights and when you can stream.',
        icon: '📱',
        category: 'OTT',
        categoryColor: '#d32f2f',
        gradient: 'linear-gradient(135deg,#d32f2f,#f44336)',
        date: 'Jul 10, 2026',
        readTime: '2 min read',
        isNew: true,
        isE85: false
    },
    {
        id: 1720608757000,
        url: 'blog/peddi-full-movie-watch-online-tickets.html',
        title: 'Peddi Full Movie: Where to Watch Online & Buy Tickets',
        description: 'Looking for Peddi full movie watch online? Find out how to securely book your tickets and stream the latest hit.',
        icon: '🍿',
        category: 'MOVIES',
        categoryColor: '#512da8',
        gradient: 'linear-gradient(135deg,#512da8,#673ab7)',
        date: 'Jul 10, 2026',
        readTime: '2 min read',
        isNew: true,
        isE85: false
    },
    {
        id: 1720608756900,
        url: 'blog/why-washington-sundar-again-fans-question-indias-selection.html',
        title: 'Why Washington Sundar Again? Fans Question India\\'s Selection',
        description: 'Cricket fans are asking "Why Washington Sundar again?" after his inclusion in the latest squad.',
        icon: '🏏',
        category: 'SPORTS',
        categoryColor: '#1976d2',
        gradient: 'linear-gradient(135deg,#1976d2,#2196f3)',
        date: 'Jul 10, 2026',
        readTime: '3 min read',
        isNew: true,
        isE85: false
    },`;

if (!blogsJsContent.includes('bhandara-uncle')) {
    blogsJsContent = blogsJsContent.replace('const blogData = [', 'const blogData = [\n' + missingBlogs);
}

// Update loadBlogsForHomepage to filter out isE85: false
if (!blogsJsContent.includes('blog.isE85 !== false')) {
    blogsJsContent = blogsJsContent.replace(
        'const blogs = [...blogData].slice(0, maxBlogs);',
        'const blogs = [...blogData].filter(blog => blog.isE85 !== false).slice(0, maxBlogs);'
    );
}

fs.writeFileSync(blogsJsPath, blogsJsContent);


// 2. Fix CSS in index.html
const indexHtmlPath = path.join(__dirname, '../index.html');
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

if (!indexHtmlContent.includes('.blog-card-category')) {
    indexHtmlContent = indexHtmlContent.replace(
        '.blog-card-img-wrap{position:relative}',
        '.blog-card-img-wrap{position:relative}\n.blog-card-category{position:absolute;bottom:0;left:0;font-size:0.75rem;font-weight:800;padding:6px 12px;border-top-right-radius:var(--radius-md);letter-spacing:1px;z-index:3}'
    );
    fs.writeFileSync(indexHtmlPath, indexHtmlContent);
}

// 3. Update blog/index.html to use blogs.js dynamically and fix its CSS
const blogIndexHtmlPath = path.join(__dirname, '../blog/index.html');
let blogIndexHtmlContent = fs.readFileSync(blogIndexHtmlPath, 'utf8');

if (!blogIndexHtmlContent.includes('.blog-card-category')) {
    blogIndexHtmlContent = blogIndexHtmlContent.replace(
        '.blog-card-img-wrap{position:relative}',
        '.blog-card-img-wrap{position:relative}\n.blog-card-category{position:absolute;bottom:0;left:0;font-size:0.75rem;font-weight:800;padding:6px 12px;border-top-right-radius:var(--radius-md);letter-spacing:1px;z-index:3}'
    );
}

// Replace the hardcoded blog-grid in blog/index.html with dynamic auto-loading
if (!blogIndexHtmlContent.includes('id="blogGrid"')) {
    // wait, it DOES have id="blogGrid"
}

// Clear the content of id="blogGrid" in blog/index.html
blogIndexHtmlContent = blogIndexHtmlContent.replace(
    /<div class="blog-grid" id="blogGrid">[\s\S]*?<\/div>\s*<div id="noResults"/,
    `<div class="blog-grid" id="blogGrid">
<div style="text-align:center;padding:40px;color:#999;grid-column:1/-1">Loading blogs...</div>
</div>\n<div id="noResults"`
);

// Add <script src="../blogs.js"></script> before closing body if missing
if (!blogIndexHtmlContent.includes('blogs.js')) {
    blogIndexHtmlContent = blogIndexHtmlContent.replace('</body>', '<script src="../blogs.js"></script>\n</body>');
}

fs.writeFileSync(blogIndexHtmlPath, blogIndexHtmlContent);

console.log('Fixed blogs visibility and CSS');
