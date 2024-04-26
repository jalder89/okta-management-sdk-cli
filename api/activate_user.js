import axios from "axios";

export default async function activateUser(userID) {
    try {
        const response = axios({
            url: `https://${process.env.OKTA_DOMAIN}/api/v1/users/${userID}/lifecycle/activate`,
            method: 'post',
            headers: {
                "Authorization": `SSWS ${process.env.OKTA_API_TOKEN}`,
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
    } catch (error) {
        
    }
}