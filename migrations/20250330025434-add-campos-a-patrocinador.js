'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Patrocinadors', 'company_name', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Patrocinadors', 'donated_items', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Patrocinadors', 'preferred_fighter_id', {
      type: Sequelize.INTEGER
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Patrocinadors', 'company_name');
    await queryInterface.removeColumn('Patrocinadors', 'donated_items');
    await queryInterface.removeColumn('Patrocinadors', 'preferred_fighter_id');
  }
};
