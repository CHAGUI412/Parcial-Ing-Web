'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MercadoNegro extends Model {
    static associate(models) {
      // Un producto del mercado negro puede ser comprado por varios participantes
      MercadoNegro.belongsToMany(models.Participante, {
        through: 'Compras',
        foreignKey: 'mercadoNegroId'
      });
    }
  }
  MercadoNegro.init(
    {
      producto: DataTypes.STRING,
      precio: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'MercadoNegro'
    }
  );
  return MercadoNegro;
};
