const express = require('express'),
    Router = express.Router(),
    Activities = require('../controllers.server/activities.controller.js');

Router.post('/:id',Activities.post);
Router.get('/:id',Activities.get);

Router.put('/:id',Activities.put);
Router.delete('/:id',Activities.delete);

module.exports = Router;