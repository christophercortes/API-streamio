'use strict';

const { auth } = require('../config/db.functions');

function mapUser(row) {
    if (!row) return null;
    return {
        id: row.user_id,
    }
}