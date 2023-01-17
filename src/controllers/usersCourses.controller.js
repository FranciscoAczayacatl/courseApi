const UsersCourses = require('../services/usersCourses.services');

const addCourseToUser = async(req, res) => {
  try {
    const courseUser = req.body;
    const result = await UsersCourses.create(courseUser);
    res.json(
      {
        message: 'agragando curso a usuario ',
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
  addCourseToUser,
}