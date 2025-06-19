const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category: String,
  description: String,
});

module.exports = mongoose.model("Category", CategorySchema);
