const Sale = require('./models/Sale');

exports.recordSale = async (req, res, next) => {
  const { productId, amount } = req.body;

  try {
    const sale = Sale.create({
      productId,
      amount
    });

    if (sale) {
      res.status(201).json({
        sale,
        message: "Sale record created."
      });
    }
  } catch (e) {

  }
}

exports.records = async (req, res) => {
  try {
    const sales = Sale.find({});
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
