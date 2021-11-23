const express = require('express');

const router = express.Router();
// controllers
const { recordSale, records } = require('../controllers/sale');

// Routes
router.route("/").get(records);
router.route("/add").post(recordSale);

module.exports = router;
