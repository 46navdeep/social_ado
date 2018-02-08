var express = require('express');
var app = express();

var port = process.env.port || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine','ejs');

app.use(session({secret: 'heyitsmenavdeep'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes.js')(app,passport);
require('./config/passport')(passport);

app.listen(port,function(req,res){
  console.log("Server running at port 3000");
})
