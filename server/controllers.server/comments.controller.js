const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Activities = mongoose.model('Activity'),
    Comments = mongoose.model('Comments');

module.exports.get = (req,res) => {
    User.find({user:req.params.id}).then(users => {
        res.json(users);
    });
}

module.exports.get = (req,res) => {
    Activities.find({user:req.params.id}).then(activities => {
        res.json(activities);
    });
}

module.exports.post = (req,res) => {
    let activity = new Comment(req.body);
    activity.user = req.params.id;

    activity.save().then(comment => {
        res.json(comment);
    });
}