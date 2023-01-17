const Categories = require('../models/categories.models');
const Courses = require('../models/course.models');
const Videos = require('../models/videos.models');

class CousersServices{

  static async getAll(){
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error
    }
  }

  static async categoriesAndVideos(){
    try {
      const result = await Courses.findAll(
        {
          include: {
            model: Categories,
            as: 'categories',
            attributes: ['name']
          },
          include:{
            model: Videos,
            as: 'videos', 
            attributes: ['title', 'url']
          }
        }
      );
      return result;
    } catch (error) {
      throw error
    }
  }

  static async create(course){
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async update(id, field){
    try {
      const result = await Courses.update(field, {
        where: {id}
      });
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = CousersServices;