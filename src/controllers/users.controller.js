'use strict';

const userService = require('../services/users.service');
const { responseOk } = require('../utils/response');

async function listUsers(req, res) {
    const list = await userService.listUsers();
    return responseOk(res, list);
}

module.exports = { listUsers, };