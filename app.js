// ************************************************************************************* //
// ************************** Welcome to the Okta Core API CLI! ************************ //
// ************************************************************************************* //
// ** This CLI is designed to help you manage Okta Users, Groups, and Apps ************* //
// ************************************************************************************* //
import "dotenv/config";
import * as inquiry from './utils/inquirer/inquiry-tools.js'
import inquiryConfigs from "./utils/inquirer/inquiry-configs.js";
import inquiryFlows from "./utils/inquirer/inquiry-flows.js";


// Declerations
let menuChoice = "";

while (menuChoice !== "exit") {
  // Present user with the main navigation menu
  menuChoice = await inquiry.selectMenu(inquiryConfigs.mainMenuConfig);
  switch (menuChoice) {
    // Present User CRUD menu
    case "users":
      menuChoice = await inquiry.selectMenu(inquiryConfigs.userMenuConfig);
      switch (menuChoice) {
        // Initiate user creation flow
        case "createUser":
          await inquiryFlows.createUser();
          break;

        case "findUser":
          email = await inquiry.inputMenu(
            "Enter the email of the user you wish to find: "
          );
          console.log(email);
          break;

        case "updateUser":
          email = await inquiry.inputMenu(
            "Enter the email of the user you wish to update: "
          );
          console.log(email);
          break;

        case "deleteUser":
          email = await inquiry.inputMenu(
            "Enter the email of the user you wish to delete: "
          );
          console.log(email);
          break;
        
        case "back":
          break;
        
        default:
          break;
      }
      break;

    case "groups":
      break;

    case "apps":
      break;

    default:
      break;
  }
}


// okta.createUser('Velvet', 'Velore', 'vv@example.com', `vv@${process.env.OKTA_DOMAIN}`, 'BloodyNights123');
// okta.createGroup('Vampires', 'A group for blood drinkers.');
// okta.assignAppUser(process.env.VAMPIRE_APP_ID, process.env.VAMPIRE_USER_ID);