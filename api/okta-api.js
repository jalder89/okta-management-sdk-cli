import axios from "axios";

async function createUser(firstName, lastName, email, login, password) {
  try {
    const response = axios({
      url: `https://${process.env.OKTA_DOMAIN}/api/v1/users?activate=false`,
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
      },
      data: {
        profile: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          login: email,
        },
        credentials: {
          password: { value: password },
        },
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
}

async function activateUser(userID) {
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
        console.log(error);
    }
}

function assignAppUser(appID, userID) {
  axios({
    url: `https://${process.env.OKTA_DOMAIN}/api/v1/apps/${appID}/users`,
    method: "POST",
    headers: {
      Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      id: userID,
      scope: "USER",
    },
  });
}

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
      },
    },
  });
}

const okta = {
  createUser,
  createGroup,
  assignAppUser,
  activateUser,
};

export default okta;