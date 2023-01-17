const {Router} = require('express');
const {
  getAllCourses,
  getCoursesCategoriesAndVideos,
  createCourse,
  updateCourse,
} = require('../controllers/courses.controller');
const router = Router();

router.get('/courses', getAllCourses);
router.get('/courses/CategoriesAndVideos',getCoursesCategoriesAndVideos);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);


module.exports = router;

