const fs = require('fs');
const darkColors = require('../src/dark-colors');

const darkFiles = ['xotocode-dark.json']; 

darkFiles.forEach(file => {
  let text = fs.readFileSync(`./src/${file}`, 'utf8');
  Object.entries(darkColors).forEach(([colorVar, hexStr]) => text = text.replace(new RegExp(`\\${colorVar}`, 'g'), hexStr));
  fs.writeFileSync(`./themes/${file}`, text);
});
