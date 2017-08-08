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

module.exports.put = (req, res) => {
    Activities.update(req.params.id).then(activity => {
        res.send(activity);
    });
}

module.exports.put = (req, res) => {
    Activities.edit(req.params.id).then(activity => {
        res.send(activity);
    });
}

module.exports.delete = (req, res) => {
    console.log(req.params);
    Activities.deleteOne({ 'activitySchemaId': req.params.id }).then(() => {
        console.log("the record is deleted");
        res.sendStatus(200);
    });
}

