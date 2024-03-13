const Image = require("../models/image");

// Function to upload an image
exports.uploadImage = async (req, res) => {
  const { name, imageUrl } = req.body;
  try {
    const image = await Image.create({ name, imageUrl });
    res.status(201).json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to get all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
