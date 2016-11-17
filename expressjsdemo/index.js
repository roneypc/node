var express = require('express');
var app = express();
var things = require('./things.js'); 

// se indica el motor que se utiliza )ejs)
app.set('view engine', 'ejs');
// carpeta por defecto donde se ponen las vistas (./views)
app.set('views', './views');

//both index.js and things.js should be in same directory
app.use('/', things);
app.use(express.static('public'));
app.use(express.static('images'));

//app.use(express.static('public'));

// inicio del servidor
app.listen(80, function() {
	console.log('Servidor express funcionando correctamente.');
});
