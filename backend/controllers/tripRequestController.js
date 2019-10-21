const airtable = require('../common').base;
const Joi = require('@hapi/joi');

const DEFAULT_PLANNER = {
    "id": "usrzvformhSIDUbxg",
    "email": "onetaptravel@outlook.com",
    "name": "Onetap Travel",
};

/** Validates a request from a user for a trip. */
exports.tripRequestValidate = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    phoneNumber: Joi.string()
        .regex(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
        .required(),
    location: Joi.string().required()
  });

  try {
    req.validatedBody = await Joi.validate(req.body, schema);
    next();
  }
  catch(error) {
    next(error);
  }
};

/** Posts a request from a user for a trip. */
exports.tripRequestPost = async (req, res, next) => {
  const {name, phoneNumber, location} = req.validatedBody;

  try {
    await airtable('TripRequest').create({
        'name': name,
        'phone_number': phoneNumber,
        'planner': DEFAULT_PLANNER,
        'location_requested': location,
    });
    res.sendStatus(200);
    next();
  } catch (error) {
    res.status(400).send(`Error! Here are the details ${error}`)
  }
};

/** Auto reply to a user when they post a request. */
exports.tripRequestReply = async (req, res, next) => {

}