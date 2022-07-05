const { Model, DataTypes } = require('sequelize');

class Categorias extends Model {
    static init(sequelize) {
       super.init({
        codigo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        status: DataTypes.INTEGER,
       }, {
        sequelize,
       })
    }
};

module.exports = Categorias;