const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Friends = mongoose.model('User');

module.exports.get = (req,res) => {
    Friends.find({user:req.params.id}).then(friends => {
        res.json(friends);
    });
}

// ( { userId: { $nin: [4] } } )