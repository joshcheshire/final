// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/mainctrl.js')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/final')

// Auth Requires
var session = require('express-session');
var passport = require('passport');

var passportConfig = require('./config/passport');



// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));
app.use(express.static(__dirname + '/public'));


// Session Setup
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());

// Routes \\

var authenticationController = require('./controllers/authentication');

// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
app.get('/api/me', function(req, res){
	res.send(req.user)
})


// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()



app.get('/', function(req, res){
  res.sendFile('/html/login.html', {root : './public'})
});


app.use(passportConfig.ensureAuthenticated);

app.get('/index', function(req,res){
	res.sendFile('/html/index.html', {root : './public'})
});



app.get('/submit', function(req, res){
  res.sendFile('/submit.html', {root: './public/html'});
});

app.get('/showinfo', function(req, res){
  res.sendFile('/showInfo.html', {root: './public/html'});
});

//=-=-=-=-=-=-=-=-=-=-=problems-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=//

app.get('/submitShow', mainCtrl.showController.getShow)

app.post('/showInfo', mainCtrl.showController.createShow)

app.get('/submitArtist', mainCtrl.apiController.getArtist)

app.post('/submit', mainCtrl.apiController.createArtist)



 //-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

app.get('/tours', function(req, res){
  res.sendFile('/tours.html', {root: './public/html'});
});

app.get('/about', function(req, res){
  res.sendFile('/about.html', {root: './public/html'});
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})