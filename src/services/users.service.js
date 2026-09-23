'use strict';

const { repositoryUserPostgres } = require('../repositories/users.repository.postgres');
const { userResponse } = require('../models/users.model');

async function listUsers() {
    const users = await repositoryUserPostgres.getAllUsers();
    return users.map(userResponse);
}

async function GetUserById(id) {
    const user = await repositoryUserPostgres.userById(id);
    return user ? userResponse(user) : null;
}

module.exports = {
    listUsers,
    GetUserById,
};