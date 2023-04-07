const express = require("express");
const mongoose = require("mongoose");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const cors = require("cors");

const connectDb = (url) => {
  return mongoose.connect(url);
};
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Hi sever listin on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
