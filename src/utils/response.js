'use strict';

function responseOk(res, data) {
    return res.json({ ok: true, data });
}

module.exports = { responseOk, };