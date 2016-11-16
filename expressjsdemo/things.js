var express = require('express');
var router = express.Router();

//Simple request time logger
router.use(function(req, res, next) {
	console.log("Nueva petición recibida " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware 
	//function/route handler.
	next();
});

router.get('/', function(req, res) {
	//res.send('Hola mundo express..!!!');
	var drinks = [
		{name: 'Bloody Mary', drunkness: '2'},
		{name: 'Beer', drunkness: '5'},
		{name: 'Wine', drunkness: '15'}
	];
	res.render('home', {
		name: "Roberto",
		url: "www.roney.es",
		drinks: drinks
	});
});

router.get('/bienvenido/:nombre', function(req, res) {
	res.send('Bienvenido al curso ' +req.params.nombre +'..!!!');
});

// El parámetro id debe ser numérico (0-9) y de 5 cifras:
router.get('/ids/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

router.post('/hello/:nombre', function(req, res) {
	res.send('POST-->> Bienvenido al curso ' +req.params.nombre +'..!!!');
});

//export this router to use in our index.js
module.exports = router;