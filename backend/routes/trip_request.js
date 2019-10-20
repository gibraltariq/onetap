const express = require('express');
const router = express.Router();
router.use(express.json());

const Joi = require('@hapi/joi');
const airtable = require('../common').base;

const DEFAULT_PLANNER = {
    "id": "usrzvformhSIDUbxg",
    "email": "onetaptravel@outlook.com",
    "name": "Onetap Travel",
};

router.post('/', (req, res) => {
    validateContactInfo(req.body).then(validatedBody => {
        const {name, phoneNumber} = validatedBody;
        return airtable('User').create({
           'Name': name,
           'Phone Number': phoneNumber,
           'Planner': DEFAULT_PLANNER,
        });
    }).then(() => res.sendStatus(200))
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
        phoneNumber: Joi.string()
            .regex(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
            .required(),
        location: Joi.string().required()
    });
    return Joi.validate(requestBody, schema);
}

module.exports = router;
