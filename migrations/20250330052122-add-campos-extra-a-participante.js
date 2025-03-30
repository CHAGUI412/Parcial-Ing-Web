'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = 'Participantes';

    const columnsToAdd = {
      nickname: { type: Sequelize.STRING },
      origin: { type: Sequelize.STRING },
      agility: { type: Sequelize.INTEGER, defaultValue: 0 },
      wins: { type: Sequelize.INTEGER, defaultValue: 0 },
      losses: { type: Sequelize.INTEGER, defaultValue: 0 },
      status: {
        type: Sequelize.ENUM('activo', 'inactivo', 'herido', 'muerto'),
        defaultValue: 'activo'
      }
    };

    for (const [columnName, options] of Object.entries(columnsToAdd)) {
      await queryInterface.addColumn(table, columnName, options).catch(() => {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Participantes', 'nickname');
    await queryInterface.removeColumn('Participantes', 'origin');
    await queryInterface.removeColumn('Participantes', 'agility');
    await queryInterface.removeColumn('Participantes', 'wins');
    await queryInterface.removeColumn('Participantes', 'losses');
    await queryInterface.removeColumn('Participantes', 'status');
  }
};
