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

// models
require('./server/models/user.model.js');
require('./server/models/activities.model.js');
// routes
const userRouter = require('./server/routes/user.route.js');
const activityRouter = require('./server/routes/activities.route.js');

mongoose.connect('mongodb://localhost/sportsApp');

require('./server/config/passport.js');

app.use('/api/user', userRouter);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.use('/api',userRouter);
app.use('/activity',activityRouter);

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html');
});

app.listen(3000,(err) => {
    if (err) {
        console.error("Error: "+ err);
    }
    console.log("running on port 3000");
});
