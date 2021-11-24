const Product = require('../models/Product');

exports.addInventory = async (req, res, next) => {
  const { name, quantity, description, price } = req.body;

  try {
    // check is product exists
    const product = await Product.findOne({name});
    if (product) {
      res.status(201).json({
        product,
        message: 'Product already exists in the system'
      });
    } else {
       product = await Product.create({
          name,
          quantity,
          description,
          price
        });

      if (product) {
        res.status(201).json({
          product,
          message: 'Product created'
        });
      }
    }

  } catch (e) {
    console.log(e);
    next(e)
  }
}

exports.products = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      res.status(201).json({
        products
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
}

// Update product quantity
exports.update = async (req, res, next) => {
  const { productId, quantity } = req.body;
  try {
    // Find product
    let product = await Product.findOne({_id: productId});
    if (product) {
      let number = product.quantity + quantity;

      product.quantity = number;
      product = await product.save();

      res.status(201).json({
        product,
        message: `Product quantity increased by ${quantity}`
      });
    }
  } catch (e) {
    next(e);
  }
}
