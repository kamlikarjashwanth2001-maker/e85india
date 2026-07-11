const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../blogs.js');
let content = fs.readFileSync(filePath, 'utf8');

// The blogs to remove
const toRemove = [
    'blog/bhandara-uncle-death-news.html',
    'blog/bsnl-rs-134166-satellite-phone.html',
    'blog/peddi-ott-release-date.html',
    'blog/peddi-full-movie-watch-online-tickets.html',
    'blog/why-washington-sundar-again-fans-question-indias-selection.html'
];

for (const url of toRemove) {
    // Regex to match the object block { ... url: '...' ... },
    const regex = new RegExp(`\\{\\s*id:[\\s\\S]*?url:\\s*'${url.replace(/\//g, '\\/')}'[\\s\\S]*?\\},?`, 'g');
    content = content.replace(regex, '');
}

fs.writeFileSync(filePath, content);
console.log('blogs.js patched successfully');
