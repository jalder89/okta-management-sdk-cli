import axios from "axios";

function createGroup(groupName, description) {
  axios({
    url: `https://${process.env.OKTA_DOMAIN}/api/v1/groups`,
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
    },
    data: {
      profile: {
        name: groupName,
        description: description,
      }
    },
  });
}

export default createGroup;