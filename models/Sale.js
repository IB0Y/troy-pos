const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  amount: {
    type:Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
