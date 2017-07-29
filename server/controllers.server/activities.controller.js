const mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Activities = mongoose.model('Activity');

module.exports.get = (req,res) => {
    Activities.find({user:req.params.id}).then(activities => {
        res.json(activities);
    });
}

module.exports.post = (req,res) => {
    let activity = new Activities(req.body);
    activity.user = req.params.id;

    activity.save().then(activity => {
        res.json(activity);
    });
}