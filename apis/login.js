var bcrypt = require('../utils/crypting');
var User = require('../models/users');

module.exports = (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  User.find({ username }, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Error');
    } else {
      console.log(results);
      const hash = results[0].password;
      bcrypt.compare(password, hash, (err, response) => {
        if (response === false && err) {
          console.error(err);
          res.status(500).send('Internal Error');
        } else { 
          res.send(results[0]);
        }
      });
    }
  });
}