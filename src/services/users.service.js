'use strict';

const { repositoryUserPostgres } = require('../repositories/users.repository.postgres');
const { userResponse } = require('../models/users.model');

async function listUsers() {
    const users = await repositoryUserPostgres.getAllUsers();
    return users.map(userResponse);
}

module.exports = {
    listUsers,
};