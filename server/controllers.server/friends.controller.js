const mongoose = require('mongoose'),
    Friends = mongoose.model('User');

module.exports.get = (req,res) => { 
    console.log(req.params.id);    
    Friends.find( { userId: { $nin: [req.params.id] }}).then(friends => {         
        res.json(friends);     
    });    
}

