'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Dictadors', 'territory', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Dictadors', 'loyalty_to_Carolina', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Dictadors', 'territory');
    await queryInterface.removeColumn('Dictadors', 'loyalty_to_Carolina');
  }
};
