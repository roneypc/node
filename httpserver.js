var http = require("http");
var counter = 0;
var server = http.createServer(function (peticion, respuesta) {
	if(!peticion.url.includes('ico')) {
		counter++;
	}
	respuesta.end("<h2>Hola, este es el servidor node de Roberto. Visita [" +counter +"]</h2>");
});

server.listen(80, function() {
   console.log("tu servidor está listo en " + this.address().port);
});