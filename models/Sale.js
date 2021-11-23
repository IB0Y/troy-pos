const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true
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

exports.Sale = mongoose.model("sale", SaleSchema);
