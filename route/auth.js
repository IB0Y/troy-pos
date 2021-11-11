const express = require('express');

const router = express.Router();
// controllers
const { register, login } = require('../controllers/auth');

// Routes
router.route("/auth/register").post(register);
router.route("/auth/login").post(login);

module.exports = router;
