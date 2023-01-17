const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Courses = require('./course.models');

const Videos = db.define('videos',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  url:{
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

module.exports = Videos;