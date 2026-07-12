const fs = require('fs');

function test(mdPath) {
    const md = fs.readFileSync(mdPath, 'utf8');
    let html = md
        .replace(/^---[\s\S]*?^---\r?\n/m, '') 
        .replace(/^# (.*$)/gim, '')
        .replace(/^## (.*)$/gim, (match, content) => { return `<h2>${content}</h2>`; })
        .replace(/^### (.*)$/gim, (match, content) => { return `<h3>${content}</h3>`; })
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, (match, alt, src) => {
            return `<img alt="${alt}" src="${src}" loading="lazy" />`;
        });
        
    console.log(`Testing ${mdPath}`);
    console.log('Original MD contains ![: ', md.includes('!['));
    console.log('Final HTML contains <img: ', html.includes('<img'));
    if (!html.includes('<img')) {
        console.log("WAIT, WHY?");
        console.log("Index of ![ : ", md.indexOf('!['));
    }
}

test('blog-md/top-biofuel-companies-india.md');
test('blog-md/e85-fuel-stations-india.md');
