const express = require('express'),
    Router = express.Router(),
    Friends = require('../controllers.server/friends.controller.js');

Router.get('/:id',Friends.get);

module.exports = Router;