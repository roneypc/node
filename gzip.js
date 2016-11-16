var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('x.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('x.txt.gz'));
  
console.log("File Compressed.");