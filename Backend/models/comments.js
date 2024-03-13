// models/comment.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Comment = sequelize.define("Comment", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add any other necessary fields
});

module.exports = Comment;
