const airtable = require('../common').base;

/** Gets more details about the overall trip. */
exports.tripDetailGet = async (req, res, next) => {
    const tripId = req.params.trip_id;

    try {
        const tripRecord = await airtable('Trip').find(tripId);
        req.activityIds = tripRecord.fields.activities;
        req.tripTitle = tripRecord.fields.title;
        req.traveler = tripRecord.fields.user;
        next();
    } catch (error) {
        next(error);
    }
};

/** Gets the full trip with details and activities. */
exports.tripFullGet = async(req, res) => {
    const activityDays = req.activityDays; 
    const tripTitle = req.tripTitle;
    try {
        res.send({tripTitle, activityDays});
    } catch (error) {
        res.status(500).send(error);
    }
}