'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    static associate(models) {
      Compras.belongsTo(models.Participante, { foreignKey: 'participanteId' });
      Compras.belongsTo(models.MercadoNegro, { foreignKey: 'mercadoNegroId' });
    }
  }
  Compras.init({
    participanteId: DataTypes.INTEGER,
    mercadoNegroId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};
