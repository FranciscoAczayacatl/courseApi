const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Courses = require('./course.models');

const Categories = db.define('categories',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'course_id',
    references: {
      model: Courses,
      key: 'id',
    }
  },
});

module.exports = Categories;