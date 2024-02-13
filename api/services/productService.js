const Product = require("../models/product");

const productService = {
  getProducts: async () => {
    try {
      const products = await Product.findAll();
      return products;
    } catch (err) {
      throw err;
    }
  },
  postProduct: async (body) => {
    try {
      const newProduct = {
        name: body.name,
        price: body.price,
        email: body.email,
      };
      const createdProduct = await Product.create(newProduct);
      return createdProduct;
    } catch (err) {
      throw err;
    }
  },
  patchProductById: async (id, body) => {
    try {
      const createdProduct = await Product.update(body, {
        where: { id: id },
      });
      return createdProduct;
    } catch (err) {
      throw err;
    }
  },
  getProductById: async (id) => {
    try {
      const result = await Product.findOne({ where: { id: id } });
      if (!result) {
        throw { status: 409, message: "No product found" };
      }
      return result;
    } catch (err) {
      throw err;
    }
  },
  deleteProductById: async (id) => {
    try {
      const result = await Product.destroy({ where: { id: id } });
      return result;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = productService;
