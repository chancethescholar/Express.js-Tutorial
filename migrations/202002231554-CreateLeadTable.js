'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Leads', {
      id: {
        allowNull: '0',
        primaryKey: '1',
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIV5,
      },
      createdAt: {
        allowNull: '0',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: '0',
        type: Sequelize.DATE
      },
      email: {
        allowNull: '0',
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Leads');
  }
};
