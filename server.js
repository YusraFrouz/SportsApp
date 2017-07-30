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
app.use(passport.initialize());

app.use('/',express.static(__dirname + "/public"));

mongoose.connect('mongodb://localhost/sportsApp');

require('./server/models/user.model.js');
let userRouter = require('./server/routes/user.route');

require('./server/config/passport.js');

app.use('/api/user', userRouter);

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
