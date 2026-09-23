'use strict';

const express = require('express');
const userController = require('../controllers/users.controller');
const router = express.Router();

//Lists
router.get('/', userController.listUsers);
router.get('/:id', userController.userById);

module.exports = router;