import createUser from "../create_user.js";
import createGroup from "../create_group.js";
import assignAppUser from "../assign_app_user.js";

const okta = {
    createUser,
    createGroup,
    assignAppUser,
}

export default okta;