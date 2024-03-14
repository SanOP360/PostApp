const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");


router.post("/upload", imageController.uploadImage);
router.get("/", imageController.getAllImages);
router.post("/:imageId/comment", imageController.postComment);
router.get("/:imageId/comments", imageController.getComments);

module.exports = router;
