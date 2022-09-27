const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPosts extends Model { }

UserPosts.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_posts',
  }
);

module.exports = UserPosts;
