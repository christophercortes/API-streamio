'use strict';

const { auth } = require('../config/db.functions');

function mapUserFromDatabase(row) {
    if (!row) return null;

    return {
        id: row.user_id,
        fullName: row.user_name,
        userEmail: row.user_email,
        userPhone: row.user_phone,
        userAddress: row.user_address,
        lastLogin: row.last_login,
        createdDate: row.created_date,
        updatedDate: row.updated_date,
    };
}

const repositoryUserPostgres = {

    /**
     * Get all active users
     * @returns {Promise<Array>}
     */
    async getAllUsers() {
        const { rows } = await auth.getAll();
        return rows.map(mapUserFromDatabase);
    },
};

module.exports = { repositoryUserPostgres };