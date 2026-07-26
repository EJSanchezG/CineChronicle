import fs from 'fs';
import path from 'path';

const dataDir = './src/data';
const files = fs.readdirSync(dataDir);

let updatedFiles = 0;

files.forEach(file => {
  if (!file.endsWith('.js')) return;
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace "./img/" with "img/"
  if (content.includes('"./img/')) {
    content = content.replaceAll('"./img/', '"img/');
    fs.writeFileSync(filePath, content, 'utf8');
    updatedFiles++;
    console.log(`Updated poster paths in: ${file}`);
  }
});

console.log(`Total datasets updated: ${updatedFiles}`);
