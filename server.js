// server.js - Starter Express server for Week 2 assignment
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(require('./middleware/logger'));
app.use(require('./middleware/auth'));

// Sample in-memory products database
let products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop with 16GB RAM', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: 'Latest model with 128GB storage', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Programmable coffee maker with timer', price: 50, category: 'kitchen', inStock: false }
];

// Attach in-memory store to request
app.use((req, res, next) => { req.products = products; next(); });

// Routes
app.use('/api/products', productRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ statusCode: 404, message: 'Route not found' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
module.exports = app;
