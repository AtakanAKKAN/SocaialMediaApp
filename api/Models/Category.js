const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    category: { type: String, require: true },
  }, 
  {
    timestamps: true,
  }
);

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;

