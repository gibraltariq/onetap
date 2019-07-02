// Airtable API
const env = require('./env');
var Airtable = require('airtable');
exports.base = new Airtable({apiKey: env.airtable_key}).base('appVJIbLHJzjJsJps');