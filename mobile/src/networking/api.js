export const submitContact = async (phoneNumber, name) => {
    try {
        let response = await fetch('https://onetap-backend.tariqpatanam.now.sh', {
            method: 'POST',
        });
        return response;
    } catch (error) {}
}