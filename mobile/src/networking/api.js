import Sentry from 'react-native-sentry';
import getEnvVars from '../environment';
const {apiURL} = getEnvVars();

export const submitContact = async (name, phoneNumber) => {
    try {
        let response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, phoneNumber}),
        });
        if (!response.ok) {
            console.log(`Bad contact request ${JSON.stringify(response)}`)
        } 
        return response;
    } catch (error) {
        console.log(`Bad contact request ${JSON.stringify(error)}`)
    }
}

export const getTrip = async (tripId) => {
    const tripURL = apiURL + '/trip/' + tripId;
    try {
        let response = await fetch(tripURL, {
            method: 'GET',
        });
        if (!response.ok) {
            console.log(`Bad trip request ${JSON.stringify(response)}`);
        }
        return response.json();
    } catch (error) {
        console.log(`Bad trip request ${JSON.stringify(error)}`);
    }
}