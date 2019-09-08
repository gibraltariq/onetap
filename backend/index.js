// Server-level
const express = require('express');
const app = express();
app.use(express.json());

// Routes from other modules.
const trip = require('./routes/trip');
const contact = require('./routes/contact');
app.use('/trip', trip);
app.use('/contact', contact);

module.exports = app; 