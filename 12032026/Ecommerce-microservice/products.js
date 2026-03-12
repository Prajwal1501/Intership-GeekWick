const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Mobile", price: 8000, stock: 5 }
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET product by id
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

module.exports = { router, products };