const Image = require("../models/image");
const Product = require("../models/product");

const productService = {
  getProducts: async () => {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Image,
            attributes: ["name", "type", "data"],
          },
        ],
      });
      return products;
    } catch (err) {
      throw err;
    }
  },
  postProduct: async (body, file) => {
    try {
      if (!file) {
        throw { statusCode: 400, message: "No image provided" };
      }
      const { buffer, mimetype, originalname } = file;
      const image = await Image.create({
        name: originalname,
        type: mimetype,
        data: buffer,
      });
      if (!image) {
        throw { statusCode: 400, message: "Image could not be created" };
      }
      const newProduct = {
        name: body.name,
        price: body.price,
        email: body.email,
        imageId: image.id,
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
      const result = await Product.findOne({
        where: { id: id },
        include: [
          {
            model: Image,
            attributes: ["name", "type", "data"],
          },
        ],
      });
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
