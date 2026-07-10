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
        id: 1720608757300,
        url: 'blog/bhandara-uncle-death-news.html',
        title: '"Bhandara Kara Do Babuji": The Tragic End to Viral Fame',
        description: 'The viral "Bhandara Kara Do Babuji" internet sensation has reportedly been found dead near Haridwar. Here is everything we know about the tragic end of Insta Bhandara Uncle.',
        icon: '🙏',
        category: 'NEWS',
        categoryColor: '#37474f',
        gradient: 'linear-gradient(135deg,#37474f,#263238)',
        date: 'Jul 10, 2026',
        readTime: '3 min read',
        isNew: true
    },
    {
        id: 1720608757200,
        url: 'blog/bsnl-rs-134166-satellite-phone.html',
        title: 'BSNL Rs 134,166 Satellite Phone Explained',
        description: 'Discover the details of the BSNL Rs 134,166 satellite phone. Learn about its features, pricing, plans, and how it is used for critical communication in India.',
        icon: '📡',
        category: 'TECH',
        categoryColor: '#0033a0',
        gradient: 'linear-gradient(135deg,#0033a0,#002277)',
        date: 'Jul 10, 2026',
        readTime: '3 min read',
        isNew: true
    },
    {
        id: 1720608757100,
        url: 'blog/peddi-ott-release-date.html',
        title: 'Peddi OTT Release Date & Platform: When & Where to Watch?',
        description: 'Looking for the Peddi OTT release date? Find out which platform bought the streaming rights and when Ram Charan\'s Peddi movie will be available online.',
        icon: '📱',
        category: 'OTT',
        categoryColor: '#c62828',
        gradient: 'linear-gradient(135deg,#c62828,#b71c1c)',
        date: 'Jul 10, 2026',
        readTime: '2 min read',
        isNew: true
    },
    {
        id: 1720608757000,
        url: 'blog/peddi-full-movie-watch-online-tickets.html',
        title: 'Peddi Full Movie: Where to Watch Online & Buy Tickets',
        description: 'Looking for Peddi full movie watch online? Find out how to securely book your tickets and stream the latest hit Peddi using the official District App.',
        icon: '🍿',
        category: 'MOVIES',
        categoryColor: '#6a1b9a',
        gradient: 'linear-gradient(135deg,#6a1b9a,#4a148c)',
        date: 'Jul 10, 2026',
        readTime: '2 min read',
        isNew: true
    },
    {
        id: 1720608756914,
        url: 'blog/why-washington-sundar-again-fans-question-indias-selection.html',
        title: '\'Why Washington Sundar Again?\' Fans Question India\'s Selection',
        description: 'Following a poor performance against England, all-rounder Washington Sundar\'s place in India\'s T20 team is being heavily debated by fans and critics.',
        icon: '🏏',
        category: 'SPORTS',
        categoryColor: '#1565c0',
        gradient: 'linear-gradient(135deg,#1565c0,#0d47a1)',
        date: 'Jul 10, 2026',
        readTime: '3 min read',
        isNew: true
    },
    {
        id: 1783611121832,
        url: 'blog/govt-announces-e85-subsidies-2026.html',
        title: 'Government Announces Huge E85 Subsidies for 2026',
        description: 'The Indian Government has announced major subsidies for E85 flex-fuel vehicles starting in 2026 to combat pollution and lower fuel costs.',
        icon: '📰',
        category: 'NEWS',
        categoryColor: '#e65100',
        gradient: 'linear-gradient(135deg,#e65100,#ff6f00)',
        date: 'Jul 9, 2026',
        readTime: '2 min read',
        isNew: true
    },
{
        id: 99,
        url: 'blog/top-upcoming-flex-fuel-cars-india.html',
        title: 'Top 5 Upcoming Flex Fuel Cars in India (E85 Ready)',
        description: 'Maruti Suzuki, Tata Motors, and Toyota are gearing up to launch E85 flex fuel cars in India. Check out the top 5 anticipated vehicles!',
        icon: '🚗',
        category: 'TRENDING',
        categoryColor: '#e65100',
        gradient: 'linear-gradient(135deg,#e65100,#ff6f00)',
        date: 'Jul 9, 2026',
        readTime: '6 min read',
        isNew: true
    },
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
    },
        {
        id: 9,
        url: 'blog/best-mileage-e85-bikes-india-2025.html',
        title: 'Best Mileage E85 Bikes India 2025 - Top 10 List',
        description: 'Top 10 flex fuel bikes - Hero Splendor (70 km/L), Bajaj CT 110X, Honda Activa Flex! Compare prices, mileage, brands.',
        icon: '🏍️',
        category: 'BIKES LIST',
        categoryColor: '#FF6F00',
        gradient: 'linear-gradient(135deg,#FF6F00,#FFA726)',
        date: 'Jan 16, 2025',
        readTime: '8 min read',
        isNew: true
    },
    {
        id: 10,
        url: 'blog/e85-vs-petrol-vs-cng-comparison-india.html',
        title: 'E85 vs Petrol vs CNG - Konsa Better Hai? 2025',
        description: 'Complete fuel comparison - E85 ₹74, Petrol ₹94, CNG ₹76. Price, mileage, pollution, availability. Konsa best?',
        icon: '⚔️',
        category: 'COMPARISON',
        categoryColor: '#1976D2',
        gradient: 'linear-gradient(135deg,#1976D2,#42a5f5)',
        date: 'Jan 16, 2025',
        readTime: '10 min read',
        isNew: true
    },
        {
        id: 11,
        url: 'blog/e85-conversion-kit-price-india-2025.html',
        title: 'E85 Conversion Kit Price India 2025 - ₹15,000?',
        description: 'E85 conversion kit price India ₹15,000-25,000! Old car/bike ko E85 me convert kaise karein. Bosch, Magneti Marelli brands, installation guide.',
        icon: '🔧',
        category: 'CONVERSION',
        categoryColor: '#FF6F00',
        gradient: 'linear-gradient(135deg,#E65100,#FF6F00)',
        date: 'Jan 17, 2025',
        readTime: '9 min read',
        isNew: true
    },
    {
        id: 12,
        url: 'blog/e85-fuel-engine-damage-truth-india.html',
        title: 'E85 Fuel Engine Damage - Sach Kya Hai? Myths Busted',
        description: '7 common myths busted! E85 se engine damage hota hai? FFV me 100% safe, old vehicles me risk. Real facts revealed.',
        icon: '⚠️',
        category: 'TRUTH',
        categoryColor: '#c62828',
        gradient: 'linear-gradient(135deg,#c62828,#e53935)',
        date: 'Jan 17, 2025',
        readTime: '11 min read',
        isNew: true
    },
    {
    id: 13,
    url: 'blog/e85-fuel-stations-delhi.html',
    title: 'E85 Fuel Stations in Delhi - Price ₹82.12/L | Find Near Me',
    description: 'Delhi me E85 kahan milta hai? 8 verified stations with addresses. Current price ₹82.12/L. Petrol se ₹20/L sasta!',
    icon: '🏛️',
    category: 'STATIONS',
    categoryColor: '#1565c0',
    gradient: 'linear-gradient(135deg,#1565c0,#1976d2)',
    date: 'Jun 9, 2026',
    readTime: '3 min read',
    isNew: true
},
    {
    id: 14,
    url: 'blog/e85-fuel-stations-mumbai.html',
    title: 'E85 Fuel Stations in Mumbai - Price ₹91.21/L | Find Near Me',
    description: 'Mumbai me E85 petrol pump kahan hai? 6 verified stations. Current price ₹91.21/L. Regular petrol se ₹20/L bachao!',
    icon: '🌊',
    category: 'STATIONS',
    categoryColor: '#1565c0',
    gradient: 'linear-gradient(135deg,#1565c0,#1976d2)',
    date: 'Jun 9, 2026',
    readTime: '3 min read',
    isNew: true
},
{
    id: 15,
    url: 'blog/e85-fuel-stations-pune.html',
    title: 'E85 Fuel Stations in Pune - Price ₹91.52/L | Find Near Me',
    description: 'Pune me E85 kahan milega? 3 verified stations with exact addresses. ₹91.52/L price. Flex fuel users ke liye guide.',
    icon: '🏙️',
    category: 'STATIONS',
    categoryColor: '#1565c0',
    gradient: 'linear-gradient(135deg,#1565c0,#1976d2)',
    date: 'Jun 9, 2026',
    readTime: '3 min read',
    isNew: true
},
{
    id: 16,
    url: 'blog/e85-fuel-stations-bengaluru.html',
    title: 'E85 Fuel Stations in Bengaluru - Price ₹90.89/L | Find Near Me',
    description: 'Bengaluru me E85 pump kahan hai? 5 verified locations. ₹90.89/L current price. Indiranagar, Koramangala, Whitefield aur zyada.',
    icon: '🌿',
    category: 'STATIONS',
    categoryColor: '#1565c0',
    gradient: 'linear-gradient(135deg,#1565c0,#1976d2)',
    date: 'Jun 9, 2026',
    readTime: '3 min read',
    isNew: true
},
{
    id: 17,
    url: 'blog/e85-fuel-stations-chennai.html',
    title: 'E85 Fuel Stations in Chennai - Price ₹87.87/L | Find Near Me',
    description: 'Chennai me E85 petrol kahan milta hai? 5 verified stations. ₹87.87/L price. Anna Nagar, OMR, T. Nagar locations included.',
    icon: '🌴',
    category: 'STATIONS',
    categoryColor: '#1565c0',
    gradient: 'linear-gradient(135deg,#1565c0,#1976d2)',
    date: 'Jun 9, 2026',
    readTime: '3 min read',
    isNew: true
},
{
    id: 18,
    url: 'blog/e85-fuel-stations-hyderabad.html',
    title: 'E85 Fuel Stations in Hyderabad - Price ₹95.69/L | Find Near Me',
    description: 'Hyderabad me E85 kahan milega? 4 verified stations. ₹95.69/L price. Hitech City, Gachibowli, Jubilee Hills locations.',
    icon: '💎',
    category: 'STATIONS',
    categoryColor: '#1565c0',
    gradient: 'linear-gradient(135deg,#1565c0,#1976d2)',
    date: 'Jun 9, 2026',
    readTime: '3 min read',
    isNew: true
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
