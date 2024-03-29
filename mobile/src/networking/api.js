import Sentry from 'react-native-sentry';
import getEnvVars from '../environment';
const {apiUrl} = getEnvVars();

export const submitTripRequest = async (tripRequest) => {
    const tripRequestUrl = apiUrl + '/tripRequest'
    try {
        let response = await fetch(tripRequestUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tripRequest),
        });
        if (!response.ok) {
            console.log(`Bad contact request ${JSON.stringify(response)}`);
            return;
        }
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getTrip = async (tripId) => {
    const tripUrl = apiUrl + '/trip/' + tripId;
    try {
        let response = await fetch(tripUrl, {
            method: 'GET',
        });
        if (!response.ok) {
            console.log(`Bad trip request ${JSON.stringify(response)}`);
            return;
        }
        const {tripTitle, activityDays} = await response.json();
        return {tripTitle, activityDays};
    } catch (error) {
        // Use console.error and not .log to clearly see errors in development.
        console.error(error);
    }
}