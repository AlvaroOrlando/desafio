const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Categorias = require('../models/Categorias');
Categorias.init(connection);


module.exports = connection;