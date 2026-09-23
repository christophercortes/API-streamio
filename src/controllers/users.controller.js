'use strict';

const userService = require('../services/users.service');
const { responseOk, errorResponse } = require('../utils/response');

async function listUsers(req, res) {
    const list = await userService.listUsers();
    return responseOk(res, list);
}

async function userById(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return errorResponse(res, 400, 'Id invalid');

    const user = await userService.GetUserById(id);
    if (!user) return errorResponse(res, 404, 'User not found');

    return responseOk(res, user);
}

module.exports = { listUsers, userById,};