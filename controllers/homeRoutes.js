const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/homepage');
    return;
  }
  res.render('login');
});

router.get('/homepage', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('./homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
