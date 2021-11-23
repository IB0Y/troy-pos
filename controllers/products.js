const Product = require('../models/Product');

exports.addInventory = async (req, res, next) => {
  const { name, quantity, description, price } = req.body;

  try {
    const product = Product.create({
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
  } catch (e) {
    console.log(e);
    next()
  }
}

exports.products = async (req, res) => {
  try {
    const products = Product.find({});
    if (products) {
      res.status(201).json({
        products
      });
    }
  } catch (e) {
    console.log(e);
    next();
  }
}
