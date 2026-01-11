const router = require ('express').Router();

const {
    getUsers,
    getUserById,
    updateUser,
    updateAvatar,
    getCurrentUser
} = require ('../controllers/users');

const {
    validateUserUpdate,
    validateAvatar,
    validateUserId,
} = require('../middleware/validation');

router.get('/me', getCurrentUser);
router.get('/', getUsers);
router.get('/:id', validateUserId, getUserById);
router.patch('/me', validateUserUpdate, updateUser);
router.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = router;