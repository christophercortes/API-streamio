'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/users.routes');

const { ENV } = require('./config/env');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ENV.FRONTEND_ORIGIN,
    credentials: true,
})
);

// Routes
app.use('/users', userRoutes);

module.exports = { app };