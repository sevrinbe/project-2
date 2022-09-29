const sequelize = require('../config/connection');
const { User, UserHealthData, BodyWeightHistory, UserPosts } = require('../models');



const userData = require('./userData.json');
const seedHealthData = require('./userHealthDataSeed.json')
const seedWeightData = require('./weightHistorySeed.json')
const seedPostData = require('./postDataSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // console.info('Users Seeded:', users);

  const healthData = await UserHealthData.bulkCreate(seedHealthData, {
  });

  // console.info('Health Data Seeded', healthData);

  const weightData = await BodyWeightHistory.bulkCreate(seedWeightData, {
  });

  // console.info('Weight Data Seeded', weightData);

  const postData = await UserPosts.bulkCreate(seedPostData, {
  });

  // console.info('Weight Data Seeded', postData);

  process.exit(0);
};




seedDatabase();
