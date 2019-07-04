const airtable = require('../common').base;

/** Hooks into Activities table to get activity by id. */
const getActivity = async (activityId) => {
    const activity = await airtable('Activities').find(activityId);
    return activity.fields;
}

/** Gets the list of activities for a certain trip. */
exports.activityList = async (req, res) => {
    const tripId = req.params.trip_id || 'recuKM4pqk1lcF0te';

    try {
        const tripRecord = await airtable('Trip').find(tripId);
        const activityIds = tripRecord.fields.activities;
        let activities = [];
        for (const activityId of activityIds) {
            activities.push(await getActivity(activityId));
        }

        res.send(activities);
    } catch (error) {
        res.status(500).send(error);
    }
};