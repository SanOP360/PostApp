const Image = require("../models/image");
const Comment=require("../models/comments")


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


exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
   
  }
};


exports.postComment = async (req, res) => {
  try {
    console.log("The image Id is ",req.params,"and comment is ",req.body);
    const { imageId } = req.params;
    const { comment } = req.body;

    const image = await Image.findByPk(imageId);
    console.log("image is",image);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    const newComment = await Comment.create({
      text: comment,
      ImageId: imageId,
    }); 

    return res.status(201).json({ success: true, comment: newComment });
  } catch (error) {
    console.error(error);
    
  }
};


exports.getComments = async (req, res) => {
  try {
    const { imageId } = req.params;

    const comments = await Comment.findAll({ where: { ImageId: imageId } });

    return res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }

}