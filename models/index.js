const User = require('./User');
const UserHealthData = require('./UserHealthData');
const UserPosts = require('./UserPosts');
const BodyWeightHistory = require('./BodyWeightHistory');

module.exports = { User, UserHealthData, UserPosts, BodyWeightHistory };

UserHealthData.hasMany(UserPosts, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

User.hasOne(UserHealthData, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

UserHealthData.hasOne(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
//User.hasMany(UserPosts, {
// foreignKey: 'post_id',
// onDelete: 'CASCADE',
//});

module.exports = {
  User,
  UserHealthData,
  UserPosts,
  BodyWeightHistory,
};
