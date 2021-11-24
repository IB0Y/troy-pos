const Sale = require('../models/Sale');
const Product = require('../models/Product');

exports.recordSale = async (req, res, next) => {
  const { productId, quantity } = req.body;
  let amount;

  try {
    // find product
    const product = await Product.findOne({_id: productId});
    if (product) {
      // Update quantity
      product.quantity = product.quantity - quantity;
      amount = product.price * quantity;
       await product.save();

       // Record sele
       const sale = await Sale.create({
         productId,
         quantity,
         amount
       });

       if (sale) {
         res.status(201).json({
           sale,
           message: "Sale record created."
         });
       }
    }

  } catch (e) {

  }
}

exports.records = async (req, res) => {
  try {
    const sales = await Sale.find({});
    if (sales) {
      res.status(201).json({
        sales
      });
    }
  } catch (e) {
    console.log(e);
    next();
  }
}
