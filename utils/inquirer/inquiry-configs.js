import { Separator } from "@inquirer/prompts";

const mainMenuConfig = {
    message: "Select an object type:",
    choices: [
        {
            name: "Users",
            value: "users",
            description: "User CRUD Actions",
        },
        {
            name: "Groups",
            value: "groups",
            description: "Group CRUD Actions (Testing)",
        },
        {
            name: "Exit",
            value: "exit",
            description: "Exit CLI",
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
};

const userMenuConfig = {
    message: "Select an action type:",
    choices: [
        {
            name: "Create User",
            value: "createUser",
            description: "Create User Action",
        },
        {
            name: "Get User",
            value: "getUser",
            description: "Get User by Login Action (WIP)",
        },
        {
            name: "Find User",
            value: "findUser",
            description: "Find User by Filter Action (WIP)",
        },
        {
            name: "Assign Group",
            value: "assignGroup",
            description: "Assign User to Group Action (WIP)",
        },
        {
            name: "Assign App",
            value: "assignAppUser",
            description: "Assign User to App Action (WIP)",
        },
        {
            name: "Deactivate User",
            value: "deactivateUser",
            description: "Deactivate User Action (DANGER)",
        },
        {
            name: "Delete User",
            value: "deleteUser",
            description: "Delete User Action (DANGER)",
        },
        {
            name: "Exit",
            value: "back",
            description: "Exit User Menu (Go Back)",
        },
        new Separator(),
        {
            name: "Update User",
            value: "updateUser",
            disabled: "Update User Action (WIP)",
        },
        {
            name: "Delete User",
            value: "deleteUser",
            disabled: "Delete User Action (WIP)",
        },
    ],
};

const findUserMenuConfig = {
  message: "Find By:",
  choices: [
    {
      name: "Name",
      value: "lastName",
      description: "Find user by last name",
    },
    {
      name: "Email",
      value: "email",
      disabled: "Find user by email (Unavailable)",
    },
    {
      name: "Login",
      value: "login",
      disabled: "Find user by Okta login/username (Unavailable)",
    },
  ],
};

const groupMenuConfig = {
    message: "Select an action type:",
    choices: [
        {
            name: "Assign App",
            value: "assignAppGroup",
            description: "Assign Group to App (WIP)",
        },
        {
            name: "Exit",
            value: "back",
            description: "Exit User Menu (Go Back)",
        },
        new Separator(),
        {
            name: "Create Group",
            value: "createGroup",
            disabled: "Group CRUD Actions",
        },
        {
            name: "Find Group",
            value: "findGroup",
            disabled: "Find User Action (Unavailable)",
        },
        {
            name: "Delete Group",
            value: "deleteGroup",
            disabled: "Delete User Action (Unavailable)",
        },
    ],
};

const inquiryConfigs = {
    mainMenuConfig,
    userMenuConfig,
    findUserMenuConfig,
    groupMenuConfig,
}

export default inquiryConfigs;