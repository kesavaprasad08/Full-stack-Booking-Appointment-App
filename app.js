const express = require("express");
const bodyParser = require('body-parser')

const cors = require('cors');

const sequelize = require("./util/database");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const adminRoutes = require("./routes/admin");

app.use("/admin", adminRoutes);
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    // console.log(err);
  });
