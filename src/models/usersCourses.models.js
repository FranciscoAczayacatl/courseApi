const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.models');
const Courses = require('./course.models');

const UsersCourses = db.define('users_courses',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references:{
      model: Users,
      key: 'id',
    }
  },
  courseId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'course_id',
    references:{
      model: Courses,
      key: 'id',
    },
  },
});

module.exports = UsersCourses;