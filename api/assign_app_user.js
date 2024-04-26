import axios from "axios";

function assignAppUser(appID, userID) {
    axios({
      url: `https://${process.env.OKTA_DOMAIN}/api/v1/apps/${appID}/users`,
      method: "POST",
      headers: {
        "Authorization": `SSWS ${process.env.OKTA_API_TOKEN}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      data: {
        id: userID,
        scope: "USER",
      },
    });
}

export default assignAppUser;