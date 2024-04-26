import express from "express";
import "dotenv/config";
import * as inquire from './utils/inquirer-tools.js'
import select, { Separator } from '@inquirer/select';
import okta from "./api/middleware/okta_api.js";

// const app = express();
// app.listen(3000);
// console.log("App running on 3000");

const firstName = await inquire.inputMenu();
const menuChoice = await inquire.selectMenu();
console.log(`First Name: ${firstName}`);
console.log(`Menu Choice: ${menuChoice}`);

// okta.createUser('Velvet', 'Velore', 'jessalder1989@gmail.com', `vv@${process.env.OKTA_DOMAIN}`, 'BloodyNights123');
// okta.createGroup('Vampires', 'A group for blood drinkers.');
// okta.assignAppUser(process.env.VAMPIRE_APP_ID, process.env.VAMPIRE_USER_ID);