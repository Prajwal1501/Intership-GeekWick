const express = require("express");
const router = express.Router();

let categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Books" }
];

// GET categories
router.get("/categories", (req, res) => {
  res.json(categories);
});

// ADD category
router.post("/", (req, res) => {
  const { name } = req.body;

  const category = {
    id: categories.length + 1,
    name
  };

  categories.push(category);

  res.status(201).json(category);
});

module.exports = router;