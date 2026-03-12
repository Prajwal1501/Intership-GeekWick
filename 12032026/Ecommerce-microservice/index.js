const express = require("express");
const app = express();

app.use(express.json());

const productModule = require("./products");
const categoryRoutes = require("./categories");
const orderRoutes = require("./orders");

// Routes
app.use("/products", productModule.router);
app.use("/categories", categoryRoutes);
app.use("/orders", orderRoutes(productModule.products));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});