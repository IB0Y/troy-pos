const express = require('express');

const router = express.Router();
// controllers
const { addInventory, products } = require('../controllers/products');

// Routes
router.route("/add").post(addInventory);
router.route("/").get(products);

module.exports = router;
