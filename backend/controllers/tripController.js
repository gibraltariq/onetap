const airtable = require('../common').base;

/** Gets more details about the overall trip. */
exports.tripDetail = async (req, res, next) => {
    const tripId = req.params.trip_id;

    try {
        const tripRecord = await airtable('Trip').find(tripId);
        req.activityIds = tripRecord.fields.activities;
        req.title = tripRecord.fields.title;
        req.traveler = tripRecord.fields.user;
        next();
    } catch (error) {
        next(error);
    }
};
