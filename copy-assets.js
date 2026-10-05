const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');
if (!fs.existsSync(wwwDir)) {
  fs.mkdirSync(wwwDir, { recursive: true });
}

const filesToCopy = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'sw.js'
];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(wwwDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> www/${file}`);
  }
});

// Copy icons directory
const iconsSrc = path.join(__dirname, 'icons');
const iconsDest = path.join(wwwDir, 'icons');
if (!fs.existsSync(iconsDest)) {
  fs.mkdirSync(iconsDest, { recursive: true });
}

if (fs.existsSync(iconsSrc)) {
  fs.readdirSync(iconsSrc).forEach(file => {
    fs.copyFileSync(path.join(iconsSrc, file), path.join(iconsDest, file));
    console.log(`Copied icons/${file} -> www/icons/${file}`);
  });
}

console.log('Web assets prepared in ./www successfully!');
