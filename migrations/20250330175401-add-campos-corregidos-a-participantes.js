'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cambiar id a UUID
    await queryInterface.changeColumn('Participantes', 'id', {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    });

    // Renombrar 'fuerza' a 'strength'
    await queryInterface.renameColumn('Participantes', 'fuerza', 'strength');

    // Eliminar 'resistencia' (no está en la especificación del profesor)
    await queryInterface.removeColumn('Participantes', 'resistencia');

    // Convertir 'status' en ENUM con los valores correctos
    await queryInterface.changeColumn('Participantes', 'status', {
      type: Sequelize.ENUM('Vivo', 'Muerto', 'Escapado', 'Libre'),
      defaultValue: 'Vivo'
    });

    // Agregar validaciones en 'strength' y 'agility' (1-100)
    await queryInterface.changeColumn('Participantes', 'strength', {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 100 }
    });

    await queryInterface.changeColumn('Participantes', 'agility', {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 100 }
    });

    // Asegurar que 'nickname' y 'origin' no sean NULL
    await queryInterface.changeColumn('Participantes', 'nickname', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.changeColumn('Participantes', 'origin', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    // Restaurar id a INTEGER
    await queryInterface.changeColumn('Participantes', 'id', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    });

    // Restaurar nombre de 'strength' a 'fuerza'
    await queryInterface.renameColumn('Participantes', 'strength', 'fuerza');

    // Volver a agregar 'resistencia'
    await queryInterface.addColumn('Participantes', 'resistencia', {
      type: Sequelize.INTEGER
    });

    // Restaurar 'status' a STRING
    await queryInterface.changeColumn('Participantes', 'status', {
      type: Sequelize.STRING
    });
  }
};
