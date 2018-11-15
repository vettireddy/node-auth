var express = require('express');
var apis = require('../apis');
var router = express.Router();



/** API EndPoints */
router.get('/', (req, res) => { 
  res.render('index',{});
});

router.post('/login', apis.login);
router.post('/register', apis.register);
// router.get('/profile', apis.profile);






module.exports = router;
