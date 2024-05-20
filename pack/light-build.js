const fs = require('fs');
const lightColors = require('../src/light-colors');
const lightFiles = ['xotocode-light.json']; 

lightFiles.forEach(file => {
  let text = fs.readFileSync(`./src/${file}`, 'utf8');
  Object.entries(lightColors).forEach(([colorVar, hexStr]) => text = text.replace(new RegExp(`\\${colorVar}`, 'g'), hexStr));
  fs.writeFileSync(`./themes/${file}`, text);
});
