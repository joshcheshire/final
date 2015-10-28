// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./public/controllers/mainctrl.js')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/final')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('/index.html', {root: './public/html'});
});

app.get('/submit', function(req, res){
  res.sendFile('/submit.html', {root: './public/html'});
});


app.get('/submitArtist', mainCtrl.getArtist)

app.post('/submit', mainCtrl.createArtist)

app.get('/playing', function(req, res){
  res.sendFile('/playing.html', {root: './public/html'});
});

app.get('/about', function(req, res){
  res.sendFile('/about.html', {root: './public/html'});
});



// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

})