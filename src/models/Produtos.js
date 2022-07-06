const { Model, DataTypes } = require('sequelize');

class Produtos extends Model {
    static init(sequelize) {
       super.init({
        codigo: DataTypes.STRING,
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        valor: DataTypes.DECIMAL,
        status: DataTypes.INTEGER,
       }, {
        sequelize,
       })
    }

    static associate(models) {
        this.belongsTo(models.Categorias, { foreignKey: 'idCategoria', as : 'categoria' });
        this.hasOne(models.Estoques, { foreignKey: 'idProduto', as : 'produto' });
    }
};

module.exports = Produtos;