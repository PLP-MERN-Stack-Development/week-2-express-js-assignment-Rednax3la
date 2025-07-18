module.exports = (req, res, next) => {
  const { name, price, category, inStock } = req.body;
  if (!name || price == null || !category || inStock == null) {
    return next({ statusCode: 400, message: 'Missing required product fields' });
  }
  next();
};
