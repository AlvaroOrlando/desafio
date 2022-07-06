'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('produtos', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        idCategoria:{
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'categorias', key: 'id' },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        codigo:{
          type: Sequelize.STRING,
          allowNull: false
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false
        },
        descricao:{
          type: Sequelize.TEXT,
          allowNull: false
        },
        valor:{
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      })
  },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('produtos');
  }
};
