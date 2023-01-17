const {Router} = require('express');
const {
  getUserById,
  getUsersWithCourses,
  createUser,
  updateUser
} = require('../controllers/users.controller');
const router= Router();

router.get('/users/:id', getUserById);
router.get('/users/:id/courses', getUsersWithCourses);
router.post('/users', createUser);
router.put('/users/:id', updateUser);


module.exports = router;