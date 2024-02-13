const { DataTypes } = require("sequelize");
const sequalize = require("../dbConnection");
const Product = require("./product");
const User = require("./user");

const Order = sequalize.define(
  "ORDER",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.UUID,
      references: {
        model: Product,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  }
);

Order.belongsTo(Product, { foreignKey: "productId", targetKey: "id" });
Order.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

module.exports = Order;
