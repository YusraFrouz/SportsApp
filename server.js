const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // methodOverride = require('method-override'),
    path = require('path'),
    favicon = require('serve-favicon'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(__dirname + "/public"));

mongoose.connect('mongodb://localhost/kashif');

require('./server/models/user.model.js');
require('./server/config/passport.js');

let routesApi = require('./server/routes/index');

app.use(passport.initialize());
app.use('/api', routesApi);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.listen(3000,(err) => {
    
    if (err) {
        console.error("Error: "+ err);
    }
    console.log("running on port 3000");
});

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/public/views/login.view.html');
});