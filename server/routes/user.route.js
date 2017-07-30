const express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt'),
    auth = jwt({
        secret: 'Yuzzi is awesome',
        userProperty: 'payload'
    });

let ctrlAuth = require('../controllers.server/authentication');
let ctrlProfile = require('../controllers.server/profile');

router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);

module.exports = router;
