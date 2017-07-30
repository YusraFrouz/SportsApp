const express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt'), //JSON Web Token's are used to securely transmitting information between parties as a JSON object.
    auth = jwt({
        secret: '566B597033733676', //Encryption Key
        userProperty: 'payload'
    });

let ctrlAuth = require('../controllers/authentication');
let ctrlProfile = require('../controllers/profile');

router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);

module.exports = router;