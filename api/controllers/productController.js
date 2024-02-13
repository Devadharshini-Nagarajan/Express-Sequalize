const productService = require("../services/productService");

const productController = {
  getProducts: async (req, res, next) => {
    try {
      const products = await productService.getProducts();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
  postProduct: async (req, res, next) => {
    try {
      const product = await productService.postProduct(req.body);
      res.status(201).json({
        message: "Product created",
        product: product,
      });
    } catch (err) {
      next(err);
    }
  },
  getProductById: async (req, res, next) => {
    const id = req.params.userId;
    try {
      const product = await productService.getProductById(id);
      res.status(200).json({
        message: "Fetched Product",
        product: product,
      });
    } catch (err) {
      next(err);
    }
  },
  patchProductById: async (req, res, next) => {
    const id = req.params.productId;
    try {
      const result = await productService.patchProductById(id, req.body);
      res.status(200).json({
        message: "Updated Product ",
        result: result,
      });
    } catch (err) {
      next(err);
    }
  },
  deleteProductById: async (req, res, next) => {
    const id = req.params.productId;
    try {
      const result = await productService.deleteProductById(id);
      res.status(200).json({
        message: "Deleted Product ",
        result: result,
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = productController;
