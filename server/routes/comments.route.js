const app = require('express'),
    mongoose = require('mongoose');

var CommentsModel = mongoose.model('Comments');


const express = require('express'),
    Router = express.Router(),
    Activities = require('../controllers.server/activities.controller.js');

Router.post('/:id',Activities.post);
Router.get('/:id',Activities.get);
module.exports = Router;