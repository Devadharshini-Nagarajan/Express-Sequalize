const { DataTypes } = require("sequelize");
const sequalize = require("../dbConnection");

const User = sequalize.define(
  "USER",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
