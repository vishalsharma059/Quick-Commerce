const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderid: { type: Number, required: true },
    buyerName: { type: String, required: true },
    items: { type: String, required: true }, // Can be changed to an array for real use
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "delivered"],
      default: "pending",
    },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
