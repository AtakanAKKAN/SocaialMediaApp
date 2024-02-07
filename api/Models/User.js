const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userName: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    userId: { type: String, require: true },
    posts: { type: Array, require: true },
    followerCount: { type: Number, require: true },
    followCount: { type: Number, require: true },
    userImg: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
