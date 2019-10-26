const airtable = require('../common').base;
const Joi = require('@hapi/joi');
const env = require('../env');
const twilio = require('twilio')(env.twilio_sid, env.twilio_key);

const DEFAULT_PLANNER = {
    "id": "usrzvformhSIDUbxg",
    "email": "onetaptravel@outlook.com",
    "name": "Onetap Travel",
};

const AUTO_REPLY = (name) => {
  return `Hi ${name}! It's Onetap and we got your request. To help our ` +
    `trip writers craft the perfect itinerary, fill out your ` +
    `preferences here: https://forms.gle/FgthdDm9XbszDjW48`;
}

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
    next();
  } catch (error) {
    next(error);
  }
};

/** Auto reply to a user when they post a request. */
exports.tripRequestReply = async (req, res, next) => {
  const {name, phoneNumber} = req.validatedBody;
  try {
    const result = await twilio.messages.create({
      body: AUTO_REPLY(name),
      from: env.twilio_number,
      to: phoneNumber,
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(`Uh oh our Moroccan monkeys messed up our app! ${error}`)
  }
}