import express from "express";
import "dotenv/config";
import readline from "node:readline";
import okta from "./api/middleware/okta_api.js";

const app = express();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// okta.createUser('Velvet', 'Velore', 'jessalder1989@gmail.com', `vv@${process.env.OKTA_DOMAIN}`, 'BloodyNights123');
// okta.createGroup('Vampires', 'A group for blood drinkers.');
// okta.assignApp(process.env.VAMPIRE_APP_ID, process.env.VAMPIRE_USER_ID);


app.listen(3000);
console.log("App running on 3000");