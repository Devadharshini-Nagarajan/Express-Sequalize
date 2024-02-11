const User = require("../models/user");

const userService = {
  getAllUsers: async () => {
    const users = await User.findAll();
    return users;
  },
};

module.exports = userService;
