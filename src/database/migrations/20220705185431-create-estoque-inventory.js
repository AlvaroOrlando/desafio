'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('estoques', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        idProduto:{
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'produtos' },
          onDelete: 'CASCADE',
          unique: true
        },
        quantidade: { 
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        reserva: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('estoques');
  }
};
