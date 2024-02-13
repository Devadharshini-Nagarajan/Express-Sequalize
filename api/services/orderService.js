const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");

const orderService = {
  getOrders: async () => {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: Product,
            attributes: ["name", "price"],
          },
          {
            model: User,
            attributes: ["email", "username"],
          },
        ],
      });
      return orders;
    } catch (err) {
      throw err;
    }
  },
  postOrder: async (body) => {
    try {
      const newOrder = {
        productId: body.productId,
        count: body.count,
        userId: body.userId,
      };
      const createdOrder = await Order.create(newOrder);
      return createdOrder;
    } catch (err) {
      throw err;
    }
  },

  getOrderById: async (id, userId) => {
    try {
      const result = await Order.findOne({ where: { id: id } });
      if (!result) {
        throw { status: 409, message: "No order found" };
      }
      if (result.userId !== userId) {
        throw { status: 409, message: "You are not authorized" };
      }
      return result;
    } catch (err) {
      throw err;
    }
  },
  deleteOrderById: async (id, userId) => {
    try {
      const orderDetails = await orderService.getOrderById(id);
      if (!orderDetails) {
        throw { status: 409, message: "No order found" };
      }
      if (orderDetails.userId !== userId) {
        throw { status: 409, message: "You are not authorized" };
      }
      const result = await Order.destroy({ where: { id: id } });
      return result;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = orderService;
