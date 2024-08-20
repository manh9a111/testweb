const express = require('express');
const router = express.Router();
const authController = require('/Users/manh/Back_end/nodejs/controllers/authController.js');

router.get('/login', authController.showLoginPage);
router.post('/login', authController.login);

module.exports = router;
