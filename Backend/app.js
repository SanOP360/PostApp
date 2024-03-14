const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const imageRoutes = require("./routes/imageRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/images", imageRoutes);

sequelize
  .sync({alter:true})
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error syncing database:", error));
