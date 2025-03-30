'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Participantes', 'nickname', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Participantes', 'origin', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Participantes', 'wins', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('Participantes', 'losses', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('Participantes', 'status', {
      type: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Participantes', 'nickname');
    await queryInterface.removeColumn('Participantes', 'origin');
    await queryInterface.removeColumn('Participantes', 'wins');
    await queryInterface.removeColumn('Participantes', 'losses');
    await queryInterface.removeColumn('Participantes', 'status');
  }
};
