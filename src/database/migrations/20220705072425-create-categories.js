'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('categorias', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        codigo:{
          type: Sequelize.STRING,
          allowNull: false
        },
        titulo:{
          type: Sequelize.STRING,
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
      return queryInterface.dropTable('categorias');
  }
};
