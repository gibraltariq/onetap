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
            let activity = await getActivity(activityId);

            // Activity start_time is required. Really this should be in 
            // Airtable but they don't support required fields.
            if (activity.start_time) {
                activities.push(activity);
            }
        }

        // Sort activities by start time.
        activities.sort((activityA, activityB) => {
            const startTimeA = new Date(activityA.start_time);
            const startTimeB = new Date(activityB.start_time);
            return startTimeA.getTime() - startTimeB.getTime();
        });

        res.send(activities);
    } catch (error) {
        res.status(500).send(error);
    }
};