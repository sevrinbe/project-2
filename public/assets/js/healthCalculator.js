/** Only need BMI calculation. */
const { application } = require('express');
const router = require('express').Router();
const hc = require('health-calculator');
const UserHealthData = require('../../../models/UserHealthData');

router.get('/health/:id', async (req, res) => {
  const healthData = await UserHealthData.findAll();
  userWeight = healthData.weight;
  userHeight = healthData.height;

  getBmi(userWeight, userHeight, true);
  return res.json(healthData);
});

console.log(
  bmi(
    180,
    70,
    true + ' this is a test value to show that it is logging in the console'
  )
);

function getBmi(userWeight, userHeight) {
  userWeight = UserHealthData.weight;
  userHeight = UserHealthData.height;
  bmi(userWeight, userHeight, true);
}
