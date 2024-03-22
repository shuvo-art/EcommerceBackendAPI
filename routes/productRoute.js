const express = require('express');
const { createProduct, getaProduct, getallProducts, updateProduct, deleteProduct } = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewears/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getaProduct);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);
router.get('/', getallProducts);


module.exports = router;