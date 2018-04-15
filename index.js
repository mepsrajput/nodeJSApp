var express = require('express');
var app = express();

app.set('view engine','ejs');

/* GET request on root */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Udacity Student Alumni Network' });
});

/* GET request on any other node other than above nodes */
app.get('*', function(req, res) {
  res.send("Oops this page doesn't exist. Contact the admin");
});

app.listen(3000,function(){
console.log("app started");

});
