// Server-level
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();
app.use(express.json());

// Twilio API
const accountSid = 'ACa41f6de1b6f7bde19f5192ad2223908b';
const authToken = 'f4aface3d7133312deecab813f3355ec';
const client = require('twilio')(accountSid, authToken);

// Airtable API
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYu1ZfxjAzR3wVs'}).base('appVJIbLHJzjJsJps');

app.get('*', (req, res) => {
    res.send('You are GETing.');
});

app.post('*', (req, res) => {
    validateContactInfo(req.body).then(validatedBody => {
        const {name, phoneNumber} = validatedBody;
        return client.messages.create({
            body: `Thanks for signing up for Onetap. A planner will be in touch shortly! Oh and we love your acting ${name}.`,
            from: '+12015489471',
            to: phoneNumber, 
        })
        .then(() => validatedBody);
    }).then(validatedBody => {
        const {name, phoneNumber} = validatedBody;
        return base('Contacts').create({
            "Name": name,
            "Phone Number": phoneNumber
        });
    }).then(() => res.status(200).send())
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