const express = require("express");
const router = express.Router();

let orders = [
  {
    id: 1,
    productId: 2,
    quantity: 3,
    totalPrice: 24000
  },
  {
    id: 2,
    productId: 1,
    quantity: 1,
    totalPrice: 50000
  }
];

module.exports = (products) => {

  // GET orders
  router.get("/", (req, res) => {
    res.json(orders);
  });

  // CREATE order
  router.post("/", (req, res) => {

    const { productId, quantity } = req.body;

    const product = products.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    const totalPrice = product.price * quantity;

    const order = {
      id: orders.length + 1,
      productId,
      quantity,
      totalPrice
    };

    product.stock -= quantity;

    orders.push(order);

    res.status(201).json(order);
  });

  return router;
};