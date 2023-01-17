const {Router} = require('express');
const {
  addCourseToUser,
} = require('../controllers/usersCourses.controller');
const router = Router();

router.post('/usersCoursers', addCourseToUser);

module.exports = router;