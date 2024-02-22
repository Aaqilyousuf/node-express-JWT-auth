const express = require("express");
const mongoose = require("mongoose");
const router = require("../backend/routers/user-router");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 5000;
const dbConfig = process.env.DBCONFIG;

app.use(cors());
app.use(express.json());

app.use("/api/users", router);

mongoose
  .connect(dbConfig)
  .then(() => app.listen(PORT))
  .then(() => console.log(`Connected to DataBase and running on PORT ${PORT}`))
  .catch((err) => {
    console.log(err);
  });
