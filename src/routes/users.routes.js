'use strict';

const express = require('express');
const userController = require('../controllers/users.controller');
const router = express.Router();

//Lists
router.get('/', userController.listUsers);

module.exports = router;