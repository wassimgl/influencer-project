const express = require('express');

const { updateUser, addUser, getUser, deleteUser, login } = require('../controllers/userControllers');

const router = express.Router();

router.post('/login', login);

router.post('/', addUser );

router.get('/', getUser );

router.delete('/:id', deleteUser );

router.put('/:id',  updateUser );



module.exports = router;