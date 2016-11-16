var eventos = require('events');

var EmisorEventos = eventos.EventEmitter; 
var ee = new EmisorEventos(); 

// Manejo del evento 'datos'
ee.on('datos', function(fecha, msg) {
   console.log(msg + "-" +fecha); 
});

ee.once('datos', function(fecha, msg) { 
   console.log('Sólo se ejecuta 1 vez - ' +msg + "-" +fecha); 
});

setInterval(function() {
	// Emisión del evento 'datos'
	ee.emit('datos', Date.now(), 'Hola'); 
}, 500);