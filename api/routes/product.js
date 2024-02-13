const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const checkAuth = require("../middleware/checkAuth");

router.get("/", productController.getProducts);

router.post("/", checkAuth, productController.postProduct);

router.get("/:productId", productController.getProductById);

router.patch("/:productId", checkAuth, productController.patchProductById);

router.delete("/:productId", checkAuth, productController.deleteProductById);

module.exports = router;
