console.log('Hola');

var fs = require('fs');
fs.readFile('x.txt', function(error, archivo) {
	console.log("archivo");
});

console.log('ya');