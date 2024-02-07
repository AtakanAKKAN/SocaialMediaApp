const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
const port = 5000;

//routes
const postRoute = require("./Routes/posts.js");
const userRoute = require("./Routes/users.js");
const userInfoRoute = require("./Routes/userInfo.js");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDb");
  } catch (error) {
    console.log("Fail to connect mongoDb", error);
  }
};

//middlewares
app.use(express.json());
app.use(cors());

app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/userInfo", userInfoRoute);

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
