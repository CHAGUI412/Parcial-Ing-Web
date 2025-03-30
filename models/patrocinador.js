'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patrocinador extends Model {
    static associate(models) {
      // Un patrocinador puede apoyar a varios participantes
      Patrocinador.belongsToMany(models.Participante, { 
        through: 'Patrocinio' 
      });
    }
  }
  Patrocinador.init(
    {
      nombre: DataTypes.STRING,
      cantidadInvertida: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Patrocinador'
    }
  );
  return Patrocinador;
};
