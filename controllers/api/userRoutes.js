const router = require('express').Router();
const { User, UserPosts } = require('../../models');
const { userPosts } = require('../../models');
const withAuth = require('../../utils/auth');


//signup

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
})

//login

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // CHANGE THIS REDIRECT TO WHERE YOU WANT THE USER TO GO
      res.status(200).redirect('/homepage');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logout

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).redirect('/');
    });
  } else {
    // Change this wherever you like
    res.status(400).redirect('/');
  }
});

//create new user post

router.post('/posts', async (req, res) => {
  try {
    const userPostData = await UserPosts.create(req.body);
    req.
      res.status(200).json(userPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/posts', async (req, res) => {
  try {
    const madePosts = await UserPosts.findOne({ where: { post_id: req.body.post_id } })

    req.session.post_id = madePosts.id;
    req.session.logged_in = true;
    res.status(200).json(madePosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
