'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dictador extends Model {
    static associate(models) {
      // Un dictador puede supervisar varios combates
      Dictador.hasMany(models.Combate, {
        foreignKey: 'dictadorId'
      });
    }
  }
  Dictador.init(
    {
      nombre: DataTypes.STRING,
      poder: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Dictador'
    }
  );
  return Dictador;
};
