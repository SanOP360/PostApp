const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");

// Route for uploading image
router.post("/upload", imageController.uploadImage);

// Route for getting all images
router.get("/", imageController.getAllImages);

module.exports = router;
