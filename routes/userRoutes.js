const express = require('express');

const routes = express.Router();

const userController = require('../controllers/usercontroller');

routes.get('/',userController.dashboard);
routes.get('/user',userController.user);
routes.get('/table',userController.table);
routes.get('/typography',userController.typography);
routes.get('/icon',userController.icon);
routes.get('/notification',userController.notification);
routes.get('/upgrad',userController.upgrad);

module.exports = routes;