'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Combates', 'contestant_1', {
      type: Sequelize.UUID,
      allowNull: true
    });

    await queryInterface.addColumn('Combates', 'contestant_2', {
      type: Sequelize.UUID,
      allowNull: true
    });

    await queryInterface.addColumn('Combates', 'winner_id', {
      type: Sequelize.UUID,
      allowNull: true
    });

    await queryInterface.addColumn('Combates', 'death_occurred', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });

    await queryInterface.addColumn('Combates', 'injuries', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Combates', 'contestant_1');
    await queryInterface.removeColumn('Combates', 'contestant_2');
    await queryInterface.removeColumn('Combates', 'winner_id');
    await queryInterface.removeColumn('Combates', 'death_occurred');
    await queryInterface.removeColumn('Combates', 'injuries');
  }
};
