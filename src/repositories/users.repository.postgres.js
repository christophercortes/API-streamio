'use strict';

function userMap(row) {
    if (!row) return null;
    return {
        id: row.user_id,
    }
}