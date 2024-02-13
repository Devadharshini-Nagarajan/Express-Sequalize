const orderService = require("../services/orderService");

const orderController = {
  getOrders: async (req, res, next) => {
    try {
      const orders = await orderService.getOrders();
      const filteredOrders = orders.filter(
        (el) => el.userId === req.userData.id
      );
      res.status(200).json(filteredOrders);
    } catch (err) {
      next(err);
    }
  },
  postOrder: async (req, res, next) => {
    try {
      const order = await orderService.postOrder(req.body);
      res.status(201).json({
        message: "Order created",
        order: order,
      });
    } catch (err) {
      next(err);
    }
  },
  getOrderById: async (req, res, next) => {
    const id = req.params.orderId;
    const userId = req.userData.id;
    try {
      const order = await orderService.getOrderById(id, userId);
      res.status(200).json({
        message: "Fetched order",
        order: order,
      });
    } catch (err) {
      next(err);
    }
  },
  deleteOrderById: async (req, res, next) => {
    const id = req.params.orderId;
    const userId = req.userData.id;
    try {
      const result = await orderService.deleteOrderById(id, userId);
      res.status(200).json({
        message: "Deleted Order ",
        result: result,
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = orderController;
