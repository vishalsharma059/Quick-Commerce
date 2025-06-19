const express = require("express");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Shopkeeper = require("../models/Shopkeeper");
const Category = require("../models/Category");

const router = express.Router();

// GET /api/dashboard/stats
router.get("/stats", async (req, res) => {
  try {
    const [totalProducts, totalOrders, totalShopkeepers, totalCategories] =
      await Promise.all([
        Product.countDocuments(),
        Order.countDocuments(),
        Shopkeeper.countDocuments(),
        Category.countDocuments(),
      ]);

    res.status(200).json({
      totalProducts,
      totalOrders,
      totalShopkeepers,
      totalCategories,
    });
  } catch (err) {
    console.error("Dashboard stats error:", err);
    res.status(500).json({ error: "Failed to fetch dashboard statistics" });
  }
});

module.exports = router;
