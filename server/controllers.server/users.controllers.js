const mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.register = (req,res) => {
    let user = new User(req.body);

    user.save().then(user => {
        res.json(user);
    });
}