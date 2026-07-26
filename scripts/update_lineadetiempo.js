import fs from 'fs';
import path from 'path';

const ltBaseDir = '../LineaDeTiempo';
const dataDir = path.join(ltBaseDir, 'src/data');
const compDir = path.join(ltBaseDir, 'src/components');

// 1. Update datasets (*Data.js)
const dataFiles = fs.readdirSync(dataDir);
let datasetCount = 0;

dataFiles.forEach(file => {
  if (!file.endsWith('.js')) return;
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Change .jpg or .png to .webp
  if (content.match(/\.(jpg|png)/gi)) {
    content = content.replace(/\.(jpg|png)/gi, '.webp');
    modified = true;
  }

  // Normalize "./img/" to "img/"
  if (content.includes('"./img/')) {
    content = content.replaceAll('"./img/', '"img/');
    modified = true;
  }
  if (content.includes("'./img/")) {
    content = content.replaceAll("'./img/", "'img/");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    datasetCount++;
    console.log(`Updated dataset: ${file}`);
  }
});

// 2. Update translations.js (flags)
const transPath = path.join(ltBaseDir, 'src/context/translations.js');
if (fs.existsSync(transPath)) {
  let transContent = fs.readFileSync(transPath, 'utf8');
  if (transContent.includes('./flags/')) {
    transContent = transContent.replaceAll('./flags/', 'flags/');
    fs.writeFileSync(transPath, transContent, 'utf8');
    console.log('Updated translations.js flag paths to flags/');
  }
}

// 3. Update components (*.jsx)
const compFiles = fs.readdirSync(compDir);
let compCount = 0;

compFiles.forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(compDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Add loading="lazy" decoding="async" if not present in img tags
  if (content.includes('<img') && !content.includes('loading="lazy"')) {
    content = content.replace(/<img\s+/g, '<img loading="lazy" decoding="async" ');
    modified = true;
  }

  // Normalize any hardcoded ./img/ to img/
  if (content.includes('./img/')) {
    content = content.replaceAll('./img/', 'img/');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    compCount++;
    console.log(`Updated component: ${file}`);
  }
});

console.log(`LineaDeTiempo update complete! Datasets: ${datasetCount}, Components: ${compCount}`);
