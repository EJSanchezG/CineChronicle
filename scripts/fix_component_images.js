import fs from 'fs';
import path from 'path';

const compDir = './src/components';
const files = fs.readdirSync(compDir);

files.forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(compDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any leftover ./img/ with img/ in components
  if (content.includes('./img/')) {
    content = content.replaceAll('./img/', 'img/');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned ./img/ in component: ${file}`);
  }
});

console.log('Component image paths normalized!');
