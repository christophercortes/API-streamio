'use strict';

function responseOk(res, data) {
    return res.json({ ok: true, data });
}

function errorResponse(res, httpCode, message, detail) {
    return res.status(httpCode).json({
        ok: false,
        message,
        detail: detail || null,
    });
}

module.exports = { responseOk, errorResponse };