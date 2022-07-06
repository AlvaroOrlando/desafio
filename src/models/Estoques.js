const { Model, DataTypes } = require('sequelize');

class Estoques extends Model {
    static init(sequelize) {
       super.init({
        quantidade: DataTypes.INTEGER,
        reserva: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
       }, {
        sequelize,
       })
    }

    static associate(models) {
        this.belongsTo(models.Produtos, { foreignKey: 'idProduto', as : 'produto' });
    }
};

module.exports = Estoques;