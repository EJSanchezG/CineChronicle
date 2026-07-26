const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '../src/data');
const componentsDir = path.resolve(__dirname, '../src/components');

// 1. Update data files
fs.readdirSync(dataDir).forEach(file => {
  if (file.endsWith('.js')) {
    const fullPath = path.join(dataDir, file);
    let content = fs.readFileSync(fullPath, 'utf-8');
    // Replace .jpg, .jpeg, .png with .webp
    const updated = content.replace(/\.(jpg|jpeg|png)/gi, '.webp');
    if (content !== updated) {
      fs.writeFileSync(fullPath, updated, 'utf-8');
      console.log(`Updated data file: ${file}`);
    }
  }
});

// 2. Update component files for lazy loading, decoding async, and webp fallbacks
fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(componentsDir, file);
    let content = fs.readFileSync(fullPath, 'utf-8');
    let updated = content.replace(/\.(jpg|jpeg|png)/gi, '.webp');
    
    // Ensure loading="lazy" and decoding="async" in img tags
    if (updated.includes('<img') && !updated.includes('loading="lazy"')) {
      updated = updated.replace(/<img\s+/g, '<img loading="lazy" decoding="async" ');
    }
    
    if (content !== updated) {
      fs.writeFileSync(fullPath, updated, 'utf-8');
      console.log(`Updated component file: ${file}`);
    }
  }
});

console.log('All dataset references updated to .webp and img tags optimized with loading="lazy" decoding="async"!');
