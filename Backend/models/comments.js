// comment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Image = require("./image"); 

const Comment = sequelize.define("Comment", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ImageId: {
    type: DataTypes.INTEGER,
    allowIncrement:true,
    references: {
      model: Image, 
      key: "id", 
    },
    allowNull: false,
  },
});

Comment.belongsTo(Image,{foreignKey:"ImageId",onDelete:'CASCADE'});
module.exports = Comment;
