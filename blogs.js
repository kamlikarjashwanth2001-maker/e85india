// ========================================
// E85 INDIA - MASTER BLOG DATABASE
// ========================================
// 
// 📝 HOW TO ADD A NEW BLOG:
// Just add a new {} block to this array!
// It will automatically show on:
//   - Homepage blog section
//   - Blog listing page (/blog/)
//   - Anywhere you use blogData
// 
// 📋 BLOG OBJECT STRUCTURE:
// {
//   id: unique_number,
//   url: 'path/to/blog.html',
//   title: 'Blog Title',
//   description: 'Short description',
//   icon: '📰',
//   category: 'NEWS',
//   categoryColor: '#hex_color',
//   gradient: 'linear-gradient(...)',
//   date: 'Jan 15, 2025',
//   readTime: '5 min read',
//   isNew: true/false,
//   isLive: true/false
// }
// ========================================

const blogData = [
    // ===== NEW BLOGS (Top of list) =====
    {
        id: 1,
        url: 'blog/e85-fuel-price-today-india.html',
        title: 'E85 Fuel Price Today India - Live Rates 2025',
        description: 'E85 fuel price aaj ₹74.28/L! City-wise live rates - Mumbai, Delhi, Bengaluru. Petrol se 21% cheaper. Daily updated.',
        icon: '💰',
        category: 'PRICE TODAY',
        categoryColor: '#1B5E20',
        gradient: 'linear-gradient(135deg,#1B5E20,#43A047)',
        date: 'Today',
        readTime: '🔴 LIVE',
        isNew: true,
        isLive: true
    },
    {
        id: 2,
        url: 'blog/e85-fuel-good-or-bad-review-india.html',
        title: 'E85 Fuel Good Hai Ya Bad? Honest Review 2025',
        description: '10 Pros, 5 Cons, Real User Reviews! E85 use karna chahiye ya nahi? ₹15,000 saalana saving but limited stations.',
        icon: '🤔',
        category: 'REVIEW',
        categoryColor: '#FF6F00',
        gradient: 'linear-gradient(135deg,#FFA726,#FF6F00)',
        date: 'Jan 15, 2025',
        readTime: '10 min read',
        isNew: true
    },
    {
        id: 3,
        url: 'blog/e85-fuel-kya-hai-hindi-guide.html',
        title: 'E85 Fuel Kya Hai? Complete Hindi Guide',
        description: 'E85 = 85% ethanol + 15% petrol! Hindi me complete jankari. Use, benefits, price, mileage - sab kuch yahan!',
        icon: '📖',
        category: 'HINDI GUIDE',
        categoryColor: '#8E24AA',
        gradient: 'linear-gradient(135deg,#8E24AA,#AB47BC)',
        date: 'Jan 15, 2025',
        readTime: '8 min read',
        isNew: true
    },
    {
        id: 4,
        url: 'vehicles/honda-activa-e85-compatibility.html',
        title: 'Honda Activa E85 Use Kar Sakte Hai? Complete Guide',
        description: 'Honda Activa me E85 fuel use kar sakte hai? Year-wise check. Activa Flex Fuel (2024+) supports E85!',
        icon: '🛵',
        category: 'VEHICLE GUIDE',
        categoryColor: '#FF6F00',
        gradient: 'linear-gradient(135deg,#FF6F00,#FFA726)',
        date: 'Jan 15, 2025',
        readTime: '6 min read',
        isNew: true
    },
    
    // ===== EXISTING BLOGS =====
    {
        id: 5,
        url: 'blog/e85-launch-pib-2026.html',
        title: 'E85 Official Launch: PIB Announcement 2026',
        description: 'India\'s Press Information Bureau announces nationwide E85 fuel launch in 2026. Complete rollout plan, infrastructure expansion, and key milestones revealed.',
        icon: '🚀',
        category: 'NEWS',
        categoryColor: '#2e7d32',
        gradient: 'linear-gradient(135deg,#2e7d32,#4caf50)',
        date: 'Jan 15, 2025',
        readTime: '5 min read'
    },
    {
        id: 6,
        url: 'blog/e20-vs-e85-vs-petrol-comparison.html',
        title: 'E20 vs E85 vs Petrol: The Ultimate Comparison',
        description: 'Detailed comparison of E20, E85, and traditional petrol fuels. Price, mileage, emissions, performance, and vehicle compatibility analysis.',
        icon: '⚖️',
        category: 'COMPARISON',
        categoryColor: '#1976D2',
        gradient: 'linear-gradient(135deg,#1976D2,#42a5f5)',
        date: 'Jan 12, 2025',
        readTime: '7 min read'
    },
    {
        id: 7,
        url: 'blog/flex-fuel-vehicles-india-complete-list.html',
        title: 'Flex Fuel Vehicles in India: Complete List 2025',
        description: 'Comprehensive list of all flex fuel vehicles available in India. Cars, bikes, and auto rickshaws with prices, specs, and availability.',
        icon: '🚗',
        category: 'VEHICLES',
        categoryColor: '#E65100',
        gradient: 'linear-gradient(135deg,#E65100,#FFA726)',
        date: 'Jan 10, 2025',
        readTime: '10 min read'
    },
    {
        id: 8,
        url: 'blog/e85-stations-india-city-guide.html',
        title: 'E85 Stations in India: City-Wise Guide',
        description: 'Find E85 fuel stations across major Indian cities. Mumbai, Delhi, Bengaluru, Pune, Chennai - complete location guide with addresses.',
        icon: '📍',
        category: 'STATIONS',
        categoryColor: '#6A1B9A',
        gradient: 'linear-gradient(135deg,#6A1B9A,#AB47BC)',
        date: 'Jan 8, 2025',
        readTime: '8 min read'
    }
    
    // ===== ADD NEW BLOGS HERE =====
    // Just copy any block above and modify!
    // Example:
    // {
    //     id: 9,
    //     url: 'blog/new-blog.html',
    //     title: 'New Blog Title',
    //     description: 'Description here',
    //     icon: '🎯',
    //     category: 'NEW',
    //     categoryColor: '#2e7d32',
    //     gradient: 'linear-gradient(135deg,#2e7d32,#4caf50)',
    //     date: 'Jan 20, 2025',
    //     readTime: '5 min read',
    //     isNew: true
    // }
];

// ========================================
// AUTO-LOAD FUNCTION FOR HOMEPAGE
// ========================================
function loadBlogsForHomepage(containerId, maxBlogs = 8) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Sort by newest first
    const blogs = [...blogData].slice(0, maxBlogs);
    
    let html = '';
    blogs.forEach(blog => {
        // Detect if it's in /blog/ folder (need ../ for paths)
        const isInBlogFolder = window.location.pathname.includes('/blog/');
        const url = isInBlogFolder ? '../' + blog.url : blog.url;
        const finalUrl = blog.url.startsWith('vehicles/') && isInBlogFolder 
            ? '../' + blog.url 
            : url;
        
        const newBadge = blog.isNew ? '⭐ NEW' : '';
        const liveBadge = blog.isLive ? '🔴 LIVE' : '';
        
        html += `
        <a href="${finalUrl}" class="blog-card">
            <div class="blog-card-img-wrap">
                <div class="blog-card-img" style="background:${blog.gradient};">
                    <div class="blog-card-icon">${blog.icon}</div>
                </div>
                <span class="blog-card-category" style="background:${blog.categoryColor}E6;color:white;">${blog.category}</span>
            </div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span>📅 ${blog.date}</span>
                    <span>•</span>
                    <span>${blog.readTime}</span>
                </div>
                <h3 class="blog-card-title">${blog.title}</h3>
                <p class="blog-card-desc">${blog.description}</p>
                <span class="blog-card-link">Read More →</span>
            </div>
        </a>
        `;
    });
    
    container.innerHTML = html;
    console.log(`✅ Loaded ${blogs.length} blogs into ${containerId}`);
}

// ========================================
// AUTO-LOAD FUNCTION FOR BLOG LISTING PAGE
// ========================================
function loadBlogsForListing(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const isInBlogFolder = window.location.pathname.includes('/blog/');
    
    let html = '';
    blogData.forEach(blog => {
        // Handle paths based on current location
        let url = blog.url;
        if (isInBlogFolder) {
            if (blog.url.startsWith('blog/')) {
                url = blog.url.replace('blog/', '');
            } else if (blog.url.startsWith('vehicles/')) {
                url = '../' + blog.url;
            }
        }
        
        html += `
        <a href="${url}" class="blog-card" data-category="${blog.category.toLowerCase()}">
            <div class="blog-card-img-wrap">
                <div class="blog-card-img" style="background:${blog.gradient};">
                    <div class="blog-card-icon">${blog.icon}</div>
                </div>
                <span class="blog-card-category" style="background:${blog.categoryColor}E6;color:white;">${blog.category}</span>
            </div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span>📅 ${blog.date}</span>
                    <span>•</span>
                    <span>${blog.readTime}</span>
                </div>
                <h3 class="blog-card-title">${blog.title}</h3>
                <p class="blog-card-desc">${blog.description}</p>
                <span class="blog-card-link">Read Full Article →</span>
            </div>
        </a>
        `;
    });
    
    container.innerHTML = html;
    console.log(`✅ Loaded ${blogData.length} blogs into ${containerId}`);
}

// Auto-load on page ready
document.addEventListener('DOMContentLoaded', function() {
    // For homepage
    if (document.getElementById('autoBlogGrid')) {
        loadBlogsForHomepage('autoBlogGrid', 8);
    }
    
    // For blog listing page
    if (document.getElementById('blogGrid')) {
        loadBlogsForListing('blogGrid');
    }
});
