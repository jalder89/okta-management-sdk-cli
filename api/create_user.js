import axios from "axios";

function createUser(firstName, lastName, email, login, password) {
    axios({
      url: `https://${process.env.OKTA_DOMAIN}/api/v1/users?activate=true`,
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
    }).then(async function (response) {
      console.log(await response);
    })
}

export default createUser;