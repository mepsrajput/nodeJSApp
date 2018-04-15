var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//views is the directory for all template fileSize
app.set('views',_dirname + '/views');
app.set('view engine','ejs');

/* GET request on root */
//app.get('/', function(req, res, next) {
//	res.render('index', { title: 'PSRajput' });
//});

/* GET request on any other node other than above nodes */
app.get('*', function(req, res) {
	res.send("Oops this page doesn't exist. Contact the admin");
});

app.listen(app.get('port'), function(){
	console.log('app is running on port', app.get('port'));
});
