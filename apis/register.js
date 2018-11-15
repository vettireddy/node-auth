const User = require('../models/users');
const bcrypt = require('../utils/crypting');

module.exports = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

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
      user.save((err) => { 
        if (err) {
          console.error(err);
        } else {
          console.log('user registered successfully');
          res.redirect('/');
        }
      });
    }
  });
}