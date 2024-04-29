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

export async function selectMenu(config) {
  return await select(config);
}

export function parseUserResults(resultArray) {
  let menuConfig = {
    message: "User Search Results:",
    choices: []
  }
  for (let i = 0; i < resultArray.length; i++) {
    let choice = {
      name: `${resultArray[i].profile.firstName} ${resultArray[i].profile.lastName} (${resultArray[i].profile.login})`,
      value: `${i}`,
      description: `Result ${i + 1}`,
    }
    menuConfig.choices.push(choice);
  }
  return menuConfig;
}