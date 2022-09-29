const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserHealthData extends Model { }

UserHealthData.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'user',
        key: 'id',
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    goal_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_data',
  }
);

module.exports = UserHealthData;
