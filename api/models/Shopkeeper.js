const mongoose = require("mongoose");

const ShopkeeperSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    shopName: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shopkeeper", ShopkeeperSchema);
