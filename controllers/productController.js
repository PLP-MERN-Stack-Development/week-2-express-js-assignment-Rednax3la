exports.getAllProducts = (req, res, next) => {
  let data = [...req.products];
  const { category, minPrice, maxPrice, search, page = 1, limit = 10 } = req.query;

  // Filtering
  if (category) data = data.filter(p => p.category === category);
  if (minPrice) data = data.filter(p => p.price >= parseFloat(minPrice));
  if (maxPrice) data = data.filter(p => p.price <= parseFloat(maxPrice));
  if (search) data = data.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  const paged = data.slice(start, end);

  res.json({ total: data.length, page: parseInt(page), limit: parseInt(limit), data: paged });
};

exports.getProductById = (req, res, next) => {
  const product = req.products.find(p => p.id === req.params.id);
  if (!product) return next({ statusCode: 404, message: 'Product not found' });
  res.json(product);
};

exports.createProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  req.products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const idx = req.products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return next({ statusCode: 404, message: 'Product not found' });
  req.products[idx] = { ...req.products[idx], ...req.body };
  res.json(req.products[idx]);
};

exports.deleteProduct = (req, res, next) => {
  const idx = req.products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return next({ statusCode: 404, message: 'Product not found' });
  req.products.splice(idx, 1);
  res.status(204).end();
};
