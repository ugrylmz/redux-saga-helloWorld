export const fetchData = async () => {
    try {
        const apiUrl = 'https://randomuser.me/api';
        const response = await fetch(apiUrl);
        console.log(response);
        const data = await response.json();
        return data;

    } catch (e) {
        console.log(e);

    }


}