'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Participante extends Model {
    static associate(models) {
      Participante.belongsToMany(models.Combate, {
        through: 'ParticipanteCombate',
        foreignKey: 'participanteId'
      });
    }
  }

  Participante.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fuerza: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      resistencia: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      nickname: {
        type: DataTypes.STRING
      },
      origin: {
        type: DataTypes.STRING
      },
      agility: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      wins: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      losses: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      status: {
        type: DataTypes.ENUM('activo', 'inactivo', 'herido', 'muerto'),
        defaultValue: 'activo'
      }
    },
    {
      sequelize,
      modelName: 'Participante'
    }
  );

  return Participante;
};
