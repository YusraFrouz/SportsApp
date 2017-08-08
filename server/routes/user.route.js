const express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt'),
    auth = jwt({
        secret: '566B597033733676',  //Encryption Key
        userProperty: 'payload'
    });

let ctrlAuth = require('../controllers.server/authentication');
let ctrlProfile = require('../controllers.server/profile');

router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);

router.delete('/:id',ctrlAuth.deleteUser);

module.exports = router;
