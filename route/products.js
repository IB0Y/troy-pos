const express = require('express');

const router = express.Router();
// controllers
const { addInventory, recordSale } = require('../controllers/products');

// Routes
router.route("/products/add-inventory").post(addInventory);
router.route("/products/record-sale").post(recordSale);

module.exports = router;
