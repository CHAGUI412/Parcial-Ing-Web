'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Combates', 'dictadorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Dictadors',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Combates', 'dictadorId');
  }
};
