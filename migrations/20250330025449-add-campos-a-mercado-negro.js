'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('MercadoNegros', 'tipo', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('MercadoNegros', 'cantidadDisponible', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('MercadoNegros', 'tipo');
    await queryInterface.removeColumn('MercadoNegros', 'cantidadDisponible');
  }
};
