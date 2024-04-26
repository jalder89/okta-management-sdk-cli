import select, { Separator } from '@inquirer/select';
import input from '@inquirer/input';

export async function inputMenu(message) {
    return await input({
        message: "What is your First Name: ",
    })
}

export async function selectMenu(message, choices) {
    return await select({
        message: 'Select an object type:',
        choices: [
          {
            name: 'Users',
            value: 'users',
            description: 'User CRUD Actions',
          },
          {
            name: 'Groups',
            value: 'groups',
            description: 'Group CRUD Actions',
          },
          {
            name: 'Apps',
            value: 'apps',
            description: 'Apps CRUD Actions',
          },
          new Separator(),
          {
            name: 'Auths',
            value: 'auths',
            disabled: '(Custom authentication not available yet)',
          },
        ],
      });
}
