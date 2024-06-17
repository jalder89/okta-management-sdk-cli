import * as inquiry from './inquiry-tools.js'
import oktaAPI from '../../api/okta-api.js';
import inquiryConfigs from './inquiry-configs.js';


// ----- User flows -----
async function createUser() {
    // Gather required user info for creation
    const firstName = await inquiry.inputMenu(
        "Enter your first name: "
    );
    const lastName = await inquiry.inputMenu(
        "Enter your last name: "
    );
    const email = await inquiry.inputMenu(
        "Enter your email: "
    );
    const login = await inquiry.inputMenu(
        "Enter your login username (email format): "
    );
    const password = await inquiry.secureInputMenu(
        "Enter your password: "
    )
    const userid = await inquiry.inputMenu(
        "Enter your desired userid (j.doe): "
    )

    // Attempt to create user
    try {
        await oktaAPI.createUser(firstName, lastName, email, login, password, userid)
    } catch (error) {
        console.log(error)
    }
}

async function getUser() {
    const login = await inquiry.inputMenu(
        "Enter the login for the user: "
    );
    try {
        const user = await oktaAPI.getUser(login);
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function findUser() {
    const menuChoice = await inquiry.selectMenu(inquiryConfigs.findUserMenuConfig);
    switch (menuChoice) {
        case "email":
            const email = await inquiry.inputMenu(
                "Enter the user's email: "
            )
            break;
    
        case "lastName":
            const lastName = await inquiry.inputMenu(
                "Enter the user's last name: "
            )
            if (lastName) {
                const response = await okta.findUser(`profile.lastName eq "${lastName}"&limit=5`);
                if (response.statusText !== 'OK') {
                    console.log("Find User API Response Not OK");
                }
                const userResultConfig = await inquiry.parseUserResults(response.data);
                const menuChoice = await inquiry.selectMenu(userResultConfig);
                console.log(`User Profile: ${userResultConfig.choices[menuChoice].name}`)
            }
            break;
    
        case "login":
            const login = await inquiry.inputMenu(
              "Enter the user's Okta login/username: "
            );
            break;
    
        default:
            break;
    }
}

async function assignGroup() {
    // Attempt to assign a user to a group
    // Gather required info for assignment
    const groupID = await inquiry.inputMenu(
        "Enter Group ID: "
    );
    const userID = await inquiry.inputMenu(
        "Enter User ID: "
    );
    try {
        await oktaAPI.assignGroupUser(groupID, userID)
    } catch (error) {
        console.log(error)
    }
}

async function assignAppUser() {
    // Gather required info for assignment
    const appID = await inquiry.inputMenu(
        "Enter App ID: "
    );
    const userID = await inquiry.inputMenu(
        "Enter User ID: "
    );
    try {
        await oktaAPI.assignAppUser(appID, userID)
    } catch (error) {
        console.log(error)
    }
}

async function deactivateUser() {
    // Gather required info for deactivation
    const userID = await inquiry.inputMenu(
        "Enter User ID of user to deactivate: "
    );
    await oktaAPI.deactivateUser(userID)
}

async function deleteUser() {
    const user = await getUser()
    if (!user) {
        console.log("User does not exist or could not be fetched for deletion.")
    };

    // User must be deactivated before deletion
    if (user.status == "ACTIVE") {
        await deactivateUser();
        await oktaAPI.deleteUser(user.id);
    } else if (user.status == "DEPROVISIONED") {
        await oktaAPI.deleteUser(user.id);
    }
}

// ----- Groups Flows -----
async function assignAppGroup() {
    // Gather required info for assignment
    const appID = await inquiry.inputMenu(
        "Enter App ID: "
    );
    const groupID = await inquiry.inputMenu(
        "Enter Group ID: "
    );
    try {
        await oktaAPI.assignAppGroup(appID, groupID)
    } catch (error) {
        console.log(error)
    }
}

const inquiryFlows = {
    createUser,
    findUser,
    assignGroup,
    assignAppUser,
    deactivateUser,
    deleteUser,
    assignAppGroup,
};

export default inquiryFlows;