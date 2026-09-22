'use strict';

const { app } = require('./app');
const { ENV } = require('./config/env');

async function start() {
    app.listen(ENV.PORT, () => {
        console.log(`Streamio API listening on http://localhost:${ENV.PORT}`);
    });
}

start().catch((error) => {
    console.error('Error starting Streamio API:', error);
    process.exit(1);
});