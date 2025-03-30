'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar participantes
    await queryInterface.bulkInsert('Participantes', [
      { nombre: 'Juan', fuerza: 80, resistencia: 70, estado: 'activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pedro', fuerza: 75, resistencia: 65, estado: 'activo', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Insertar combates
    await queryInterface.bulkInsert('Combates', [
      { fecha: new Date(), createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Insertar dictadores
    await queryInterface.bulkInsert('Dictadors', [
      { nombre: 'Dictador Supremo', poder: 99, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Insertar patrocinadores
    await queryInterface.bulkInsert('Patrocinadors', [
      { nombre: 'MegaCorp', cantidadInvertida: 10000, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Insertar productos del mercado negro
    await queryInterface.bulkInsert('MercadoNegros', [
      { producto: 'Espada afilada', precio: 500, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Insertar compras
    await queryInterface.bulkInsert('Compras', [
      { participanteId: 1, mercadoNegroId: 1, cantidad: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Compras', null, {});
    await queryInterface.bulkDelete('MercadoNegros', null, {});
    await queryInterface.bulkDelete('Patrocinadors', null, {});
    await queryInterface.bulkDelete('Dictadors', null, {});
    await queryInterface.bulkDelete('Combates', null, {});
    await queryInterface.bulkDelete('Participantes', null, {});
  }
};
