const express = require('express');

const router = express.Router();
// controllers
const { recordSale, records } = require('../controllers/sale');
// Middleware
const { protect } = require('../middleware/auth');
// Routes
router.route("/").get(records);
router.route("/add").post(recordSale);

module.exports = router;
