const airtable = require('../common').base;

/** Hooks into Activities table to get activity by id. */
const getActivity = async (activityId) => {
    const activity = await airtable('Activities').find(activityId);
    return activity.fields;
}

/** Returns the date without the time of day. */
const strippedDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getYear();
    return new Date(year, month, day);
}

const groupActivitiesByDay = (activities) => {
    let days = [];
    if (!activities) {
        return days;
    }

    let currentDay = [];
    let currentDate = strippedDate(new Date(activities[0].start_time));
    for (const activity of activities) {
        const activityDate = strippedDate(new Date(activity.start_time));
        if (activityDate.getTime() > currentDate.getTime()) {
            // Push old day of activities into the group of days.
            days.push(currentDay);

            // Instantiate new group of days.
            currentDay = [];
            currentDate = activityDate;
        }
        currentDay.push(activity);
    }
    days.push(currentDay);
    return days;
}

/** Lists the of activities for a certain trip grouped by day. */
exports.activityList = async (req, res, next) => {
    try {
        const activityIds = req.activityIds; 
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

        const activityDays = groupActivitiesByDay(activities);
        req.activityDays = activityDays;
        res.send(activityDays);
    } catch (error) {
        res.status(500).send(error);
    }
};