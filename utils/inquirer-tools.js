import { password, input, select, confirm, Separator } from '@inquirer/prompts';


export async function inputMenu(message) {
    return await input({
        message: message,
    });
}

export async function secureInputMenu(message) {
    return await password({
        message: message,
        mask: true,
    });
}

export async function confirmationMenu(message) {
  return await confirm({
    message: message,
  })
}

export async function mainMenu(message, choices) {
    return await select({
      message: "Select an object type:",
      choices: [
        {
          name: "Users",
          value: "users",
          description: "User CRUD Actions",
        },
        {
          name: "Exit",
          value: "exit",
          description: "Exit CLI",
        },
        {
          name: "Groups",
          value: "groups",
          disabled: "Group CRUD Actions (Unavailable)",
        },
        {
          name: "Apps",
          value: "apps",
          disabled: "Apps CRUD Actions (Unavailable)",
        },
        {
          name: "Auths",
          value: "auths",
          disabled: "Login to Okta API (Unavailable)",
        },
        new Separator(),
      ],
    });
}

export async function usersMenu() {
    return await select({
        message: 'Select an object type:',
        choices: [
          {
            name: 'Create User',
            value: 'createUser',
            description: 'User CRUD Actions',
          },
          new Separator(),
          {
            name: 'Find User',
            value: 'findUser',
            disabled: 'Find User Action (Unavailble)',
          },
          {
            name: 'Update User',
            value: 'updateUser',
            disabled: 'Update User Action (Unavailable)',
          },
          {
            name: 'Delete User',
            value: 'deleteUser',
            disabled: 'Delete User Action (Unavailable)',
          },
        ],
      });
}