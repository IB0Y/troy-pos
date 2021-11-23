const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  price: {
    type: Number,
    required: true
  }
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

exports.Product = mongoose.model('products', productSchema);
