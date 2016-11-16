for(var i=0; i<10; i++) {
	console.log('Hola mundo node[' +i +']');
}

setTimeout(function() {
	console.log('Hola NodeJS-1');
}, 5000);

setTimeout(function() {
	console.log('Hola NodeJS-2');
}, 3000);

setInterval(function() {
	console.log('Hola NodeJS-interval');
}, 1000);

console.log('Ultima linea');