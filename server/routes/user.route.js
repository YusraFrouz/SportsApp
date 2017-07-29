let express = require('express'),
    Router = express.Router();

let userController = require('../controllers.server/users.controllers');

Router.post('/',userController.register);

module.exports = Router;