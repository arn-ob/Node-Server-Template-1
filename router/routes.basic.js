const express = require('express');
const BasicController = require('../controllers/basic.controller');
const Auth = require('../middleware/auth.middleware');
const Log = require('../middleware/log.middleware');
const basic = express.Router();

basic
  .get('/register', [Log.viewRoute, Auth.authenticate, Auth.isAdmin], BasicController.register)
  .get('/login', [Log.viewRoute], BasicController.login)

module.exports = basic;