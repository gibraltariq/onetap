export const submitContact = async () => {
    try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let json = await response.json();
        return json.movies;
    } catch (error) {}
}