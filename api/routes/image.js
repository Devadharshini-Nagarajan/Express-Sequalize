const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const checkAuth = require("../middleware/checkAuth");

router.get("/:imageId", checkAuth, imageController.getImageById);

router.delete("/:imageId", checkAuth, imageController.deleteImageById);

module.exports = router;
