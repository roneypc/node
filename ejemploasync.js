var async = require('async');

var createUser = function(id, callback) {
	callback(null, {
		id: 'user' +id
	});
};

// Generar 5 usuarios
async.times(10, function(n, next) {
	createUser(n, function(err, user) {
		next(err, user);
		console.log(user.id);
	});
}, function(err, users) {
	// Aquí deberíamos tener 5 usuarios
});