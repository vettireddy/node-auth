var path = require('path');
const apis = [
  'login', 
  'register'
];

apis.forEach(api => {
  module.exports[api] = require(path.join(__dirname,'/',api));
});