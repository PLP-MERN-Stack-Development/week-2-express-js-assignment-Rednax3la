const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const validateProduct = require('../middleware/validateProduct');

router.route('/')
  .get(getAllProducts)
  .post(validateProduct, createProduct);

router.route('/:id')
  .get(getProductById)
  .put(validateProduct, updateProduct)
  .delete(deleteProduct);

module.exports = router;
