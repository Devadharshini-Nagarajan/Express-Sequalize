const Image = require("../models/image");

const imageService = {
  getImageById: async (id) => {
    try {
      const result = await Image.findOne({
        where: { id: id },
      });
      if (!result) {
        throw { status: 409, message: "No image found" };
      }
      return result;
    } catch (err) {
      throw err;
    }
  },
  deleteImageById: async (id) => {
    try {
      const result = await Image.destroy({ where: { id: id } });
      return result;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = imageService;
