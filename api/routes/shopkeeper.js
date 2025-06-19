const express = require("express");
const Shopkeeper = require("../models/Shopkeeper");
const router = express.Router();

// CREATE

router.post("/", async (req, res) => {
  try {
    const newShopkeeper = new Shopkeeper(req.body);
    const savedShopkeeper = await newShopkeeper.save();
    res.status(201).json(savedShopkeeper);
  } catch (err) {
    res.status(500).json({ error: "Failed to add shopkeeper" });
  }
});

// READ ALL

router.get("/", async (req, res) => {
  try {
    const Shopkeepers = await Shopkeeper.find();
    res.status(200).json(Shopkeepers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch shopkeepers" });
  }
});

// Delete

router.delete("/:id", async (req, res) => {
  try {
    await Shopkeeper.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Shopkeeper deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete Shopkeeper" });
  }
});

module.exports = router;
