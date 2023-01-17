const Courses = require('../models/course.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');

class UserServices{

  static async getById(id){
    try {
      const result = await Users.findByPk(id,{
        attributes:{
          exclude: ['password']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUsersCourses(id){
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: {
          exclude: 'password',
        },
        include: {
          model: UsersCourses,
          as: 'user-Course',
          attributes: ['id'],
          include: {
            model: Courses,
            as:'courses',
            attributes: ['title','id']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user){
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field){
    try {
      const result = await Users.update(field, {
        where: {id}
      });
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserServices;