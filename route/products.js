const express = require('express');

const router = express.Router();
// controllers
const { addInventory, products, update } = require('../controllers/products');
// middleware
const { protect } = require('../middleware/auth');
// Routes
router.route("/add").post(protect, addInventory);
router.route("/").get(protect, products);
router.route("/update").put(protect, update);

module.exports = router;
