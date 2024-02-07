const mongoose = require("mongoose");

const UserInfoSchema = mongoose.Schema(
  {
    userId: { type: String, require: true },
    posts: { type: Array, require: true },
    postCount: { type: Number, require: true },
    followerCount: { type: Number, require: true },
    followCount: { type: Number, require: true },
    userImg: { type: String, require: true },
  },
  { timestamps: true }
);

const UserInfo = mongoose.model("userInfo", UserInfoSchema);
module.exports = UserInfo;
