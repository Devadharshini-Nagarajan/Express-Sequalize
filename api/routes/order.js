const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.get("/", checkAuth, orderController.getOrders);
router.post("/", checkAuth, orderController.postOrder);
router.get("/:orderId", checkAuth, orderController.getOrderById);
router.delete("/:orderId", checkAuth, orderController.deleteOrderById);

module.exports = router;
