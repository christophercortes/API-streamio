'use strict';

/**
 * =================================
 * db.functions.js
 * =================================
 * 
 * Centralizes All database function calls for api-streamio.
 * 
 * RULES:
 * 1. NO direct queries (SELECT/INSERT/UPDATE/DELETE on tables)
 * 2. ONLY calls to database functions
 * 3. ALWAYS specify columns (never SELECT *)
 * 4. If something changes in the database, only this file needs to be modified.
 * 
 * ===================================
 */

const { pool } = require('./database');

// ===================================
// COLUMNS BY ENTITY
// ===================================

const COLUMNS = {
    user: {
        base: `
            user_id,
            user_name,
            user_email,
            user_phone,
            user_address,
            last_login,
            created_date,
            updated_date
        `
            .trim()
            .replace(/\s+/g, " "),
    },
};

// =====================================
// SCHEMA: Auth
// =====================================

const auth = {
    /**
     * List all users
     * @returns {Promise<{rows: Array}>}
     */
    getAll: () =>
        pool.query(
            `SELECT ${COLUMNS.user.base}
            FROM auth.user_get_all()`
        ),
    
    /**
     * Get user by ID
     * @param {number} id
     * @returns {Promise<{rows: Array}>}
     */
    getUserById: (id) =>
        pool.query(
            `SELECT ${COLUMNS.user.base}
            FROM auth.user_get_by_id($1)`,
            [id],
        ),
};

module.exports = { auth };