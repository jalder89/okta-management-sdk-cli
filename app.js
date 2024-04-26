// ************************************************************************************* //
// ************************** Welcome to the Okta Core API CLI! ************************ //
// ************************************************************************************* //
// ** This CLI is designed to help you manage Okta Users, Groups, and Apps ************* //
// ************************************************************************************* //
import "dotenv/config";
import * as inquire from './utils/inquirer-tools.js'
import okta from "./api/middleware/okta_api.js";

// Declerations
let menuChoice = "";

while (menuChoice !== "exit") {
  // Present user with the main navigation menu
  menuChoice = await inquire.mainMenu();
  switch (menuChoice) {
    // Present User CRUD Menu
    case "users":
      menuChoice = await inquire.usersMenu();
      switch (menuChoice) {
        case "createUser":
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
          );
          okta.createUser(firstName, lastName, email, password);
          // ToDo: Update to be functional
          console.log(`User creation complete, please verify status.`);
          break;

        case "findUser":
          email = await inquire.inputMenu(
            "Enter the email of the user you wish to find: "
          );
          console.log(email);
          break;

        case "updateUser":
          email = await inquire.inputMenu(
            "Enter the email of the user you wish to update: "
          );
          console.log(email);
          break;

        case "deleteUser":
          email = await inquire.inputMenu(
            "Enter the email of the user you wish to delete: "
          );
          console.log(email);
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


// okta.createUser('Velvet', 'Velore', 'jessalder1989@gmail.com', `vv@${process.env.OKTA_DOMAIN}`, 'BloodyNights123');
// okta.createGroup('Vampires', 'A group for blood drinkers.');
// okta.assignAppUser(process.env.VAMPIRE_APP_ID, process.env.VAMPIRE_USER_ID);