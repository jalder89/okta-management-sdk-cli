import axios from "axios";
import okta from '@okta/okta-sdk-nodejs';


const client = new okta.Client({
  orgUrl: 'https://jessica-prod.com',
  token: process.env.OKTA_API_TOKEN    // Obtained from Developer Dashboard
});

// User APIs 
async function createUser(firstName, lastName, email, login, password, userid) {
  const newUser = {
    profile: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      login: login,
      userid: userid
    },
    credentials: {
      password: {
        value: password
      }
    }
  };
  
  try {
    const user = await client.userApi.createUser({ body: newUser });
    console.log('Created user', user);
  } catch (error) {
    console.log(error)
  }
}

async function findUser(filter) {
  try {
    const response = axios({
      url: `https://${process.env.OKTA_DOMAIN}/api/v1/users?search=${filter}`,
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
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

async function deactivateUser(userID) {
  await client.userApi.deactivateUser({ userId: userID });
}

async function deleteUser(userID) {
  await client.userApi.deactivateUser({ userId: userID });
  await client.userApi.deleteUser({ userId: userID });
}

async function assignAppUser(appID, userID) {
  try {
    const appUser = await client.applicationApi.assignUserToApplication({
      appId: appID,
      appUser: {
        id:userID
      }
    });
    console.log('Assigned user to app, app user instance:', appUser);
  } catch (error) {
    console.log(error)
  }
}


// Group APIs
async function assignAppGroup(appID, groupID) {
  try {
    const assignment = await client.applicationApi.assignGroupToApplication({
      appId: appID, 
      groupId: groupID, 
      applicationGroupAssignment: {}
    });
    console.log('Assignment:', assignment);
  } catch (error) {
    console.log(error)
  }
}

async function assignGroupUser(groupID, userID) {
  try {
    await client.groupApi.assignUserToGroup({ groupId: groupID, userId: userID });
    console.log('User has been added to group');
  } catch (error) {
    console.log(`Status: ${error.status} - ${error.errorSummary}`)
  }
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

const oktaAPI = {
  findUser,
  createUser,
  activateUser,
  deactivateUser,
  deleteUser,
  assignAppUser,
  assignGroupUser,
  createGroup,
  assignAppGroup,
};

export default oktaAPI;