const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

const accountSid = 'ACa41f6de1b6f7bde19f5192ad2223908b';
const authToken = 'f4aface3d7133312deecab813f3355ec';
const client = require('twilio')(accountSid, authToken);

app.use(express.json());

app.get('*', (req, res) => {
    res.send('You are GETing.');
});

app.post('*', (req, res) => {
    validateContactInfo(req.body).then(validatedBody => {
        const {name, phoneNumber} = validatedBody;
        return client.messages.create({
            body: `${name}, this is one tap that began it all.`,
            from: '+12015489471',
            to: phoneNumber, 
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