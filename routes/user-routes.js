const express = require('express');
const authController = require('../controller/user-controller');
const rooter = express.Router()

rooter.post("/login/", authController.login);
rooter.post("/signup/", authController.signup);


module.exports = rooter