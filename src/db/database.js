const { Sequelize } = require('sequelize');

const db = new Sequelize('pkmn_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = db;