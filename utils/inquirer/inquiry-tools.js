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