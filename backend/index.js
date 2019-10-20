// Server-level
const express = require('express');
const app = express();
app.use(express.json());

// Routes from other modules.
const trip = require('./routes/trip');
const request = require('./routes/trip_request');
app.use('/trip', trip);
app.use('/request', request);

module.exports = app;