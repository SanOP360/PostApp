const { DataTypes } = require("sequelize");
const sequelize = require("../database");

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

module.exports = Image;
