const { DataTypes } = require("sequelize");
const sequalize = require("../dbConnection");

const Product = sequalize.define(
  "PRODUCT",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;
