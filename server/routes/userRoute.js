const express = require('express');

const { updateUser, addUser, getUser, deleteUser, login } = require('../controllers/userControllers');

const router = express.Router();

router.post('/login', login);

router.post('/', addUser );

router.get('/', getUser );

router.delete('/:userId', deleteUser );

router.put('/:userId',  updateUser );



module.exports = router;