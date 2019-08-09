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
        if (!response.ok) throw new Error(response.status);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getTrip = async () => {
    const tripURL = 'http://localhost:3000/trip/' + 'recuKM4pqk1lcF0te';
    try {
        let response = await fetch(tripURL, {
            method: 'GET',
        });
        if (!response.ok) throw new Error(response.status);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}