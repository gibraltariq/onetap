// Server-level
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();
app.use(express.json());

// Twilio API
const env = require('./env');
const client = require('twilio')(env.twilio_sid, env.twilio_key);

// Airtable API
var Airtable = require('airtable');
var base = new Airtable({apiKey: env.airtable_key}).base('appVJIbLHJzjJsJps');

app.get('*', (req, res) => {
    res.send('You are GETing.');
});

app.post('/contact', (req, res) => {
    validateContactInfo(req.body).then(validatedBody => {
        const {name, phoneNumber} = validatedBody;
        return client.messages.create({
            body: `Thanks for signing up for Onetap ${name}. A planner will be in touch shortly!`,
            from: env.twilio_number,
            to: phoneNumber, 
        })
        .then(() => validatedBody);
    }).then(validatedBody => {
        const {name, phoneNumber} = validatedBody;
        return base('Contacts').create({
            "Name": name,
            "Phone Number": phoneNumber
        });
    }).then(() => res.status(200).send('Message sent successfully!'))
    .catch(error => {
        if (error.name === 'ValidationError') {
            res.status(400).send(`Validation error: ${error.details[0].message}`);
        } else {
            res.status(400).send(`Here is the error: ${error}`);
        }
    });
});

function validateContactInfo(requestBody) {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        phoneNumber: Joi.string().regex(/\+1[0-9]{10}/).required()
    });
    return Joi.validate(requestBody, schema);
}

module.exports = app; 