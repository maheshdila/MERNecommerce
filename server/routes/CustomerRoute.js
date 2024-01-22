const express = require('express');
const customerController = require('../controller/CustomerController');
const authenticateUser = require('../middlewares/AuthenticationMiddleware');
const authorizeUser = require('../middlewares/AuthorizationMiddleware');


//const verifyUser = require('../middleware/AuthMiddleware');
const router = express.Router();
router.post('/create',authenticateUser,authorizeUser(['admin','customer']), customerController.create);
router.get('/find-by-id/:id',authenticateUser,authorizeUser(['admin','customer']), customerController.findById);
router.delete('/delete-by-id/:id',authenticateUser,authorizeUser(['admin']), customerController.deleteById);
router.put('/update/:id',authenticateUser,authorizeUser(['admin']), customerController.update);
router.get('/find-all',authenticateUser,authorizeUser(['admin','customer']), customerController.findAll);
router.get('/find-count',authenticateUser,authorizeUser(['admin','customer']), customerController.findCount);
module.exports=router;
//documentation
