const crypto = require('crypto');
// Models
const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');

//Register route
exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({
      email,
      password
    });

    sendToken(user, 201, res);

  } catch (e) {
    next(e);
  }
};


// Login route
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide email and password", 400))
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401))

    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401))

    }

    sendToken(user, 200, res);

  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    })
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token })
}
