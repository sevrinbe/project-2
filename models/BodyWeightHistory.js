const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BodyWeightHistory extends Model {}

BodyWeightHistory.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    log_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    weight_input: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    log_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'body_weight_history',
  }
);

module.exports = BodyWeightHistory;
