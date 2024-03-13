const Sequelize=require('sequelize')

const sequelize = new Sequelize("node-schema", "root", "Sanjay@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
