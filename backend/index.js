// Server-level
const express = require('express');
const app = express();
app.use(express.json());

// Routes from other modules.
const trip = require('./routes/trip');
const tripRequest = require('./routes/trip_request');
app.use('/trip', trip);
app.use('/tripRequest', tripRequest);

module.exports = app;