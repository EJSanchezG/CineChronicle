import fs from 'fs';
import path from 'path';

const dataDir = './src/data';
const files = fs.readdirSync(dataDir);

files.forEach(file => {
  if (!file.endsWith('Data.js')) return;
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const lines = content.split('\n');
  lines.forEach(line => {
    if (line.includes('"poster"') || line.includes("'poster'")) {
      const match = line.match(/"poster":\s*"([^"]+)"/);
      if (match) {
        const posterPath = match[1];
        // Check if file exists in public/
        const publicPath = path.join('./public', posterPath.replace(/^\.\//, ''));
        const exists = fs.existsSync(publicPath);
        if (!exists) {
          console.log(`MISSING [${file}]: poster "${posterPath}" -> expected at "${publicPath}"`);
        }
      }
    }
  });
});
console.log('Inspection complete!');
