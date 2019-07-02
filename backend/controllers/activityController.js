const airtable = require('../common').base;

exports.activityList = (req, res) => {
    const tripId = req.params.trip_id || 'recuKM4pqk1lcF0te';

    airtable('Trip').find(tripId, (error, trip_records) => {
        if (error) {
            res.status(500).send(error);
        }
        res.send(trip_records);
    });
};