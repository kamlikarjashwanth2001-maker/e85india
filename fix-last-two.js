const fs = require('fs');
const path = require('path');

const mdDir = path.join(__dirname, 'blog-md');

// Inject Conversion Kit image
let convPath = path.join(mdDir, 'e85-conversion-kits-india.md');
if (fs.existsSync(convPath)) {
    let content = fs.readFileSync(convPath, 'utf8');
    if (!content.includes('conversion_kit.png')) {
        content = content.replace('## 1. Introduction', '![E85 Conversion Kit](../images/conversion_kit.png)\n\n## 1. Introduction');
        fs.writeFileSync(convPath, content);
    }
}

// Inject Pump image
let pricePath = path.join(mdDir, 'e85-fuel-price-india-today.md');
if (fs.existsSync(pricePath)) {
    let content = fs.readFileSync(pricePath, 'utf8');
    if (!content.includes('e85_pump.png')) {
        content = content.replace('## 1. Introduction', '![E85 Fuel Pump](../images/e85_pump.png)\n\n## 1. Introduction');
        fs.writeFileSync(pricePath, content);
    }
}
