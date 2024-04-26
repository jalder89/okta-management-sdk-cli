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

export default createUser;