const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    img: { type: String, require: true },
    category: { type: Array, require: true },
    likeQuantity: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("posts", PostSchema);
module.exports = Post;
