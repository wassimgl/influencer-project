const express = require('express');
const { register, login, getInfluencerData, addInfluencer, updateInfluencer, deleteInfluencer, getInfluencer } = require('../controllers/influencerController');
// const { influMiddleware } = require ('../middlewares/influMiddleware');
const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/', getInfluencerData );
router.post('/', addInfluencer);
router.put('/:inflId', updateInfluencer)
router.delete('/:inflId', deleteInfluencer )
router.get('/:inflId', getInfluencer)

module.exports = router;