var bcrypt = require('../utils/crypting');
var User = require('../models/users');
var passport = require('../configs/passport');

module.exports = (req, res) => {
  // console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  User.find({ username }, (err, results) => {
    if (err || results.length === 0) {
      res.status(500).send('Internal Error');
    } else {
      console.log(results);
      const hash = results[0].password;
      bcrypt.compare(password, hash, (err, response) => {
        console.log(response);
        if (response === false || err) {
          console.error(err);
          res.status(500).send('Internal Error');
        } else {
          req.login(results[0]._id, function (err) {
            if (err) throw err;
            res.redirect('/profile');
          });
        }
      });
    }
  });
}