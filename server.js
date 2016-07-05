var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAutentication: function (req , res , next) {
		console.log('private route hit!');
		next();
	},
	logger : function (req , res , next) {

		console.log(new Date().toString() + ' '+ req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
// app.use(middleware.requireAutentication);

app.get('/about' , middleware.requireAutentication, function( req , res){
	res.send('About Us!!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT , function(){
	console.log('express server ' + PORT)
});
