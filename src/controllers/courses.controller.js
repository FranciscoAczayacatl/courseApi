const CoursesService = require('../services/courses.services');

const getAllCourses = async(req, res) => {
  try {
    const result = await CoursesService.getAll();
    res.json(
      {
        message: 'enviando todos los cursos',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
        error: error.messages,
        details: error.stack
      }
    );
  }
}

const getCoursesCategoriesAndVideos = async (req, res) => {
 try {
  const result = await CoursesService.categoriesAndVideos();
  res.json(
    {
      message: 'enviando todos los cursos sus catagoria y videos',
      data: result
    }
  )
 } catch (error) {
  res.status(400).json(
    {
      error: error.messages,
      details: error.stack
    }
  )
 }

}
const createCourse= async(req, res) => {
  try {
    const course = req.body;
    const result = await CoursesService.create(course);
    res.json(
      {
        message: 'creando curso',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
      error: error.messages,
      datails : error.stack,
      }
    );
  }
}

const updateCourse = async(req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await CoursesService.update(id, field);
    res.json(
      {
        message: 'actualizando usuario',
        data: result,
      }
    );
  } catch (error) {
    res.status(400).json(
      {
      error: error.messages,
      datails : error.stack,
      }
    );
  }
}


module.exports = {
  getAllCourses,
  getCoursesCategoriesAndVideos,
  createCourse,
  updateCourse
}