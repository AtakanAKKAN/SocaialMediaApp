const Post = require("../Models/Post.js");
const express = require("express");
const router = express.Router();

//! Get Post
router.get("/get-all", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
});

//! Create Post
router.post("/create-post", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(200).json("Post create succesfully!");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
