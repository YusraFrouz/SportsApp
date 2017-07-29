const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // methodOverride = require('method-override'),
    mongoose = require('mongoose');

app.use(bodyParser.json());
// app.use(express.static(__dirname, 'public'));

// models
require('./server/models/user.model.js');
require('./server/models/activities.model.js');
// routes
const User = require('./server/routes/user.route.js');

app.use('/',express.static(__dirname));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/views/all-activities.view.html');

});


app.use('/',express.static(__dirname + "/public"));

const userRouter = require('./server/routes/user.route.js');
const activityRouter = require('./server/routes/activities.route.js');

app.use('/user',userRouter);
app.use('/activity',activityRouter);

app.listen(3000,(err) => {
    
    if (err) {
        console.error("Error: "+ err);
    }
    console.log("running on port 3000");
})


mongoose.connect('mongodb://localhost/sportsApp');

app.post('/', (req,res) =>{
    let user = new User(req.body);
    user.save().then(user => {
         res.send(user);
    }); 
})