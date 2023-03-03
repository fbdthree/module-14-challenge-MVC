const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try {
      // Fetch all existing blog posts from the database
      const postData = await Post.findAll();
      // serialize post data
      // Render the homepage view with the blog post data
      res.render('homepage', {
        posts: postData,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
  if(req.session.logged_in){
    res.redirect("/")
    return
  }
    res.render("login")
});

// router.post('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error('Error destroying session:', err);
//       res.status(500).send('Error destroying session');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });


router.get('/dashboard', async (req, res) => {
  if(req.session.logged_in){
    res.render("dashboard")
    return
  }
    res.render("login")
});
module.exports = router