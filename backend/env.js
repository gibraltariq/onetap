const isNow = process.env.NOW_REGION;
const isDev = isNow === 'dev1';

module.exports = {
    twilio_sid: isDev ? 'ACa45c98493bb668e8758c0dbe90b08878' : process.env.TWILIO_SID,
    twilio_key: process.env.TWILIO_KEY, // defined in .env
    twilio_number: isDev ? '+15005550006' : process.env.TWILIO_NUMBER,
    airtable_key: process.env.AIRTABLE_KEY // defined in .env
};