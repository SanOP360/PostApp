const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Comment=require('./comments')

const Image = sequelize.define("Image", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Image.hasMany(Comment);
Comment.belongsTo(Image);


module.exports = Image;
