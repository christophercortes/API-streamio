'use strict';

function getNumber(variable, defaultValue) {
    const value = Number(variable);
    return Number.isFinite(value) ? value : defaultValue;
}

function requireVariable(variable, name) {
    if (!variable) {
        throw new Error(`Required environment variable is not defined: ${name}`);
    }

    return variable;
}

function getText(variable, defaultValue) {
    return variable ? String(variable) : defaultValue;
}

const ENV = {
    PORT: getNumber(process.env.PORT, 3000),

    NODE_ENV: getText(process.env.NODE_ENV, 'development'),
    FRONTEND_ORIGIN: requireVariable(process.env.FRONTEND_ORIGIN, 'FRONTEND_ORIGIN'),
};

module.exports = { ENV };