const imageService = require("../services/imageService");

const imageController = {
  getImageById: async (req, res, next) => {
    const id = req.params.imageId;
    try {
      const image = await imageService.getImageById(id);
      res.contentType("image/png");
      res.send(image.data);
    } catch (err) {
      next(err);
    }
  },
  deleteImageById: async (req, res, next) => {
    const id = req.params.imageId;
    try {
      const result = await imageService.deleteImageById(id);
      res.status(201).json({
        message: "Deleted Image Successfull",
        result: result,
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = imageController;
