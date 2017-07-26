const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // methodOverride = require('method-override'),
    mongoose = require('mongoose');

app.use(bodyParser.json());
// app.use(express.static(__dirname, 'public'));
// app.use(favicon(__dirname, 'public', 'favicon.ico'));

// routes ==================================================
// require('./server/routes')(app); // configure our routes
require('./server/models/user.model.js');

const User = require('./server/routes/user.route.js');

app.get('/', (req,res) =>{
    res.send("Hello World");
});

app.listen(3000,(err) => {
    
    if (err) {
        console.error("Error: "+ err);
    }
    console.log("running on port 3000");
})

mongoose.connect('mongodb://localhost/myapp');

app.post('/', (req,res) =>{
    let user = new User(req.body);
    user.save().then(user => {
         res.send(user);
    }); 
})