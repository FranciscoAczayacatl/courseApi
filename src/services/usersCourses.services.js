const UsersCourses = require('../models/usersCourses.models');

class CoursesUsers {

  static async create(course){
    try {
      const result = await UsersCourses.create(course);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = CoursesUsers;