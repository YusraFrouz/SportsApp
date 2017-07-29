const passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.register = (req, res) => {
    let user = new User(req.body);

    var encryptData = user.setPassword(req.body.password);

    console.log(encryptData);

    user.salt = encryptData.salt;
    user.hash = encryptData.hash;

    user.save((err) => {
        if (err) {
            console.log(err);
        }
        var token;
        token = user.generateJwt(user._id,user.fullname,user.email);
        console.log(token);
        res.status(200);
        res.json({
            "token": token
        });
    });
}

module.exports.login = (req, res) => {

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            res.status(404).json(err);
            return;
        }

        if (user) {
            var token;
            token = user.generateJwt(user._id,user.fullname,user.email);
            console.log(token);
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};