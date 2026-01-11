const router = require ('express').Router();
const { 
    getCards,
    createCard,
    likeCard,
    disLikeCard,
    deleteCard } = require('../controllers/cards');
const {
    validateCard,
    validateCardId
} = require ('../middleware/validation');

router.get('/', getCards);
router.post('/', validateCard, createCard);

router.put('/:cardId/likes', validateCardId, likeCard);
router.delete('/:cardId/likes',validateCardId, disLikeCard);


router.delete('/:cardId', validateCardId, deleteCard);

module.exports= router;