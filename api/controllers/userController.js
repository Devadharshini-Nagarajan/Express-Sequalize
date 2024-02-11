const userService = require("../services/userService");

const userController = {
  getAllUsers: async () => {
    const users = await userService.getAllUsers();
    return users;
  },
};

module.exports = userController;
