import * as inquire from './inquiry-tools.js'
import okta from '../../api/okta_api.js';

async function createUser() {
    // Gather required user info for creation
    const firstName = await inquire.inputMenu(
        "Enter your first name: "
    );
    const lastName = await inquire.inputMenu(
        "Enter your last name: "
    );
    const email = await inquire.inputMenu(
        "Enter your email: "
    );
    const password = await inquire.secureInputMenu(
        "Enter your password: "
    )
    // Attempt to create user
    const response = await okta.createUser(firstName, lastName, email, password)
    if (response.statusText !== 'OK') {
    console.log("User creation failed...");
    return;
    } 
    console.log(`User ${response.data.profile.firstName} ${response.data.profile.lastName} was created successfully!`);
    // Prompt for user activation
    const activate = await inquire.confirmationMenu("Would you like to activate this user?");
    if (activate) {
        await okta.activateUser(response.data.id);
    } else {
        console.log(`User ${response.data.profile.firstName} ${response.data.profile.lastName} was not actived. Manage user manually.`);
    }
}

const inquiryFlows = {
    createUser,
};

export default inquiryFlows;