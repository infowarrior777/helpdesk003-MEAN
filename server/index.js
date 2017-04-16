var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// New Auth requirements added 10-7-16

var multer        = require('multer'); 
var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

// configuration for passport 

 require('./config/passport')(passport); // pass passport for configuration

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//New Auth Middleware necessary for passport added 10-7-16
multer();
app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // http://localhost:9000
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});





// Connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {
				


  // Load the models.
  app.models = require('./models/index');


//added 10-20-16 
//var authroute = express.Router();

//var authroute = require('./auth/auth1.js')(app, passport); // load our routes and pass in our app and fully configured passport
//app.use('/auth', authroute);

//require('./auth/auth1.js')(app, passport);

//secure router

//var secure = express.Router();

//require('./auth/secure.js')(secure, passport);
//app.use('/', secure);

//added 11-4-16 new passport try 

var auth4 = require('./auth/auth4');
app.use('/auth', auth4);


// Load the routes.
var routes = require('./routes');
_.each(routes, function(controller, route) {
  app.use(route, controller(app, route));
});




  console.log('Listening on port 3000...');
  app.listen(3000);
});