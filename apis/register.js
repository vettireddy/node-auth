const User = require('../models/users');
const bcrypt = require('../utils/crypting');

var passport = require('../configs/passport');
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

module.exports = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username, password);
  bcrypt.hash(password, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error')
    } else {
      console.log(hash);
      var user = new User({
        username: username,
        password: hash
      });
      user.save((err, usr) => {
        if (err) {
          console.error(err);
        } else {
          // console.log('user registered successfully ' + usr);
          req.login(usr._id, function (err) {
            if (err) throw err;
            res.redirect('/');
          });
        }
      });
    }
  });
}