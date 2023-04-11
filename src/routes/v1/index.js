const express = require("express");
const router = express.Router();
const helpController = require("../../controllers/helpController");
const categoryController = require('../../controllers/categoryController')
const productController = require('../../controllers/productController')

router.get("/help", helpController.helpDetails);

router.get('/category',categoryController.getAllCategory);
router.post('/category',categoryController.createCategory);
router.get('/category/:id',categoryController.getCategory);
router.patch('/category/:id',categoryController.updateCategory);
router.delete('/category/:id',categoryController.removeCategory);

router.get('/product',productController.getAllProducts);
router.post('/product',productController.createProduct);
router.get('/product/:id',productController.getProduct);
router.patch('/product/:id',productController.updateProduct);
router.delete('/product/:id',productController.removeProduct);
router.get('/productCategory',productController.getProductsByCategory);

module.exports = router;
