const Users = require('./users.models');
const UsersCourses = require('./usersCourses.models');
const Videos = require('./videos.models');
const Courses = require('./course.models');
const Categories = require('./categories.models');

const initModels = () => {
  // Users;
  // UsersCourses;
  // Courses;
  // Categories;
  // Videos;

  UsersCourses.belongsTo(Users, {
    as: 'user',
    foreignKey: 'user_id',
  });
  Users.hasMany(UsersCourses, {
    as: 'user-Course',
    foreignKey: 'user_id'
  });

  UsersCourses.belongsTo(Courses, {
    as:'courses',
    foreignKey:'course_id'
  });
  Courses.hasMany(UsersCourses, {
    as: 'U-courses',
    foreignKey: 'course_id'
  });

  Categories.belongsTo(Courses, {
    as: 'categories',
    foreignKey: 'course_id',
  });
  Courses.hasMany(Categories, {
    as: 'categories-course',
    foreignKey: 'course_id',
  });

  Videos.belongsTo(Courses, {
    as: 'courses',
    foreignKey: 'course_id',
  });

  Courses.hasMany(Videos, {
    as: 'videos',
    foreignKey: 'course_id',
  })

 
};

module.exports = initModels;