var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 

//Simple request time logger
router.use(function(req, res, next) {
	console.log("Nueva petición recibida " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware 
	//function/route handler.
	next();
});

// for parsing application/json
router.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
router.use(upload.array());

// index page 
router.get('/demo', function(req, res) {
    res.render('pages/index');
});

// contact page 
router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

router.post('/contact', function(req, res){
	res.render('pages/contact', {
		body: req.body
	});
    //console.log(req.body);
    //res.send("recieved your request! -->>>" +req.body.say +" " +req.body.to);
});

router.get('/', function(req, res) {
	// se crea la variabla drinks con contenido json
	var drinks = [
		{name: 'Bloody Mary', drunkness: '2'},
		{name: 'Beer', drunkness: '5'},
		{name: 'Sangria', drunkness: '4'},
		{name: 'Wiskie', drunkness: '21'},
		{name: 'Wine', drunkness: '15'}
	];
	// Llamada a la plantilla con parámetros
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