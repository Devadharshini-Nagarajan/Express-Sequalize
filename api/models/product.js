const { DataTypes } = require("sequelize");
const sequalize = require("../dbConnection");
const Image = require("./image");

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
    imageId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Image,
        key: "id",
      },
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  }
);

Product.belongsTo(Image, { foreignKey: "imageId", targetKey: "id" });

module.exports = Product;
