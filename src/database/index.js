const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Categorias = require('../models/Categorias');
const Produtos = require('../models/Produtos');
const Estoques = require('../models/Estoques');

Categorias.init(connection);
Produtos.init(connection);
Estoques.init(connection);

Produtos.associate(connection.models);
Estoques.associate(connection.models);


module.exports = connection;