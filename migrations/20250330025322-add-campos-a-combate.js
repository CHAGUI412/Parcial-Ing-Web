'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Combates', 'contestant_1_id', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addColumn('Combates', 'contestant_2_id', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addColumn('Combates', 'winner_id', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addColumn('Combates', 'descripcion', {
      type: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Combates', 'contestant_1_id');
    await queryInterface.removeColumn('Combates', 'contestant_2_id');
    await queryInterface.removeColumn('Combates', 'winner_id');
    await queryInterface.removeColumn('Combates', 'descripcion');
  }
};
