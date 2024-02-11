const { DataTypes } = require("sequelize");
const sequalize = require("../dbConnection");

const User = sequalize.define("USER", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = User;
