const UserInfo = require("../Models/UserInfo.js");
const express = require("express");
const router = express.Router();

// router.put("/userInfoCheck", async (req, res) => {
//   try {
//     const existingUser = await UserInfo.findOne({ userId: req.body.userId });

//     if (existingUser) {
//       await UserInfo.findOneAndUpdate({ userId: req.body.userId }, req.body);
//       res.status(200).json("UserInfo Updated Succesfully!");
//     } else {
//       const newUserInfo = new UserInfo(req.body);
//       await newUserInfo.save();
//       res.status(200).json("Product added succesfully");
//     }
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

module.exports = router;
