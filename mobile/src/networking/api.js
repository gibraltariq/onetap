export const submitContact = async (phoneNumber, name) => {
    try {
        let response = await fetch('http://localhost:3000', {
            method: 'POST',
        });
        return response;
    } catch (error) {}
}