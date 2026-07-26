const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.resolve(__dirname, '../public/img');

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath));
    } else {
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

async function convertAll() {
  const files = getAllImageFiles(imgDir);
  console.log(`Found ${files.length} JPG/PNG images to convert to WebP...`);

  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  let convertedCount = 0;

  for (let i = 0; i < files.length; i++) {
    const filePath = files[i];
    const ext = path.extname(filePath);
    const webpPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
    const originalSize = fs.statSync(filePath).size;
    totalOriginalSize += originalSize;

    try {
      await sharp(filePath)
        .webp({ quality: 82, effort: 4 })
        .toFile(webpPath);

      if (fs.existsSync(webpPath)) {
        const webpSize = fs.statSync(webpPath).size;
        totalWebpSize += webpSize;
        convertedCount++;
        // Remove original non-webp image
        fs.unlinkSync(filePath);
        console.log(`[${i + 1}/${files.length}] Converted: ${path.basename(filePath)} (${(originalSize/1024).toFixed(1)}KB -> ${(webpSize/1024).toFixed(1)}KB)`);
      }
    } catch (err) {
      console.error(`Failed ${filePath}:`, err.message);
    }
  }

  console.log('\n======================================');
  console.log(`SUCCESS: Converted ${convertedCount} images to WebP!`);
  console.log(`Original total size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`New WebP total size: ${(totalWebpSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total Space Saved: ${(((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('======================================\n');
}

convertAll();
