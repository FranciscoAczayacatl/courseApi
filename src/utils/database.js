const {Sequelize} = require('sequelize');

const db = new Sequelize({
  database: 'courseapi',
  username: 'postgres',
  host: 'localhost',
  port: '5432',
  password: 'root',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;