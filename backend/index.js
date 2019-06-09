const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('*', (req, res) => {
    res.send('You are GETing.');
});

app.post('*', (req, res) => {
    // Input validation
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        phoneNumber: Joi.string().regex(/[0-9]{10}/).required()
    });
    const validationResult = Joi.validate(req.body, schema);
    if (validationResult.error) {
        res.status(400).send(validationResult.error.details[0].message);
        return;
    }

    res.status(200).send();

    // // Parse the request to get phone number and name
    // const userPhoneNumber = req.body.phoneNumber;
    // const userName = req.body.name;

    // // Send a confirmaiton message using Twilio

    // // Store name and number in Airtable if the name does not exist 

    // res.status(200).send();

    // Return an invalid status when not valid phone number or name or TWILIO or Airtable fails
});

module.exports = app; 