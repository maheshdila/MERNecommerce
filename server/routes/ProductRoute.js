const express = require('express');
const productController = require('../controller/ProductController');
//const verifyUser = require('../middleware/AuthMiddleware');

const router = express.Router();
router.post('/create', productController.create);
router.get('/find-by-id/:id', productController.findById);
router.delete('/delete-by-id/:id', productController.deleteById);
router.put('/update', productController.update);
router.get('/find-all', productController.findAll);
router.get('/find-all-min', productController.findAllMin);
router.get('/find-all-count', productController.findCount);
module.exports=router;