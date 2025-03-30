'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Combate extends Model {
    static associate(models) {
      // Un combate puede tener varios participantes
      Combate.belongsToMany(models.Participante, {
        through: 'ParticipanteCombate',
        foreignKey: 'combateId'
      });

      
    }
  }

  Combate.init(
    {
      fecha: DataTypes.DATE,
      contestant_1: DataTypes.UUID,
      contestant_2: DataTypes.UUID,
      winner_id: DataTypes.UUID,
      death_occurred: DataTypes.BOOLEAN,
      injuries: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Combate'
    }
  );

  return Combate;
};
