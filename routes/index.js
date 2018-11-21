var express = require('express');
var apis = require('../apis');
var router = express.Router();
var passport = require('../configs/passport');


/** API EndPoints */
router.get('/', (req, res) => {
  res.render('index', {});
});
router.get('/register', (req, res) => {
  res.render('register', {});
});
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/profile');
  });
router.post('/register', apis.register);
router.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile', {});
});
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}





module.exports = router;
