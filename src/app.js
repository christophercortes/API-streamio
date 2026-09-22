'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { ENV } = require('./config/env');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ENV.FRONTEND_ORIGIN,
    credentials: true,
})
);

module.exports = { app };