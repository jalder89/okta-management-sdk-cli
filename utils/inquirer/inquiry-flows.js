import * as inquiry from './inquiry-tools.js'
import okta from '../../api/okta-api.js';
import inquiryConfigs from './inquiry-configs.js';
import { response } from 'express';

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
    const password = await inquiry.secureInputMenu(
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
    const activate = await inquiry.confirmationMenu("Would you like to activate this user?");
    if (activate) {
        await okta.activateUser(response.data.id);
    } else {
        console.log(`User ${response.data.profile.firstName} ${response.data.profile.lastName} was not actived. Manage user manually.`);
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

const inquiryFlows = {
    createUser,
    findUser,
};

export default inquiryFlows;