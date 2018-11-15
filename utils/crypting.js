const bcrypt = require('bcrypt');
const saltRounds = 10;

var hash = function (myPlaintext, cb) {
  bcrypt.hash(myPlaintext, saltRounds, function (err, hash) {
    if (err) {
      cb(err);
    } else {
      cb(null, hash);
    }
  });
}

var compare = function (myPlaintext, hash, cb) {
  bcrypt.compare(myPlaintext, hash, function (err, res) {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
}

module.exports = { hash, compare };