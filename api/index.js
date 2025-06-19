const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Ensure this path is correct

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);

const categoryRoutes = require("./routes/category");
app.use("/api/categories", categoryRoutes);

const shopkeeperRoutes = require("./routes/shopkeeper");
app.use("/api/shopkeepers", shopkeeperRoutes);

const orderRoutes = require("./routes/order");
app.use("/api/orders", orderRoutes);

const dashboardRoutes = require("./routes/dashboard");
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
