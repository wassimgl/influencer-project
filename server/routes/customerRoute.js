const express = require('express');
const { register, login, getCustomerData, searchInfluencer, updateCustomer, deleteCustomer } = require('../controllers/customerControllers');
const { authMiddleware } = require('../middlewares/authmiddleware');
const router = express.Router();

// @desc register new customer (def : role customer)
//@Params POST/api/customer/Register
//@access Public

router.post('/register', register);
router.post('/login', login);
router.get('/', getCustomerData );
router.put('/:custId', updateCustomer);
router.delete('/:custId', deleteCustomer );
router.get('/search', authMiddleware, searchInfluencer );

module.exports = router;