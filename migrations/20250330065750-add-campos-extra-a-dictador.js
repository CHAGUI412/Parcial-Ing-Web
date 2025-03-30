'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('Dictadors');

    if (!tableInfo.territory) {
      await queryInterface.addColumn('Dictadors', 'territory', {
        type: Sequelize.STRING,
        allowNull: true
      });
    }

    if (!tableInfo.number_of_slaves) {
      await queryInterface.addColumn('Dictadors', 'number_of_slaves', {
        type: Sequelize.INTEGER,
        defaultValue: 0
      });
    }

    if (!tableInfo.loyalty_to_Carolina) {
      await queryInterface.addColumn('Dictadors', 'loyalty_to_Carolina', {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Dictadors', 'territory');
    await queryInterface.removeColumn('Dictadors', 'number_of_slaves');
    await queryInterface.removeColumn('Dictadors', 'loyalty_to_Carolina');
  }
};
