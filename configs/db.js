var mongoose = require('mongoose');
const db_url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// const db_url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// mongoose.connect('mongodb://localhost:27017/myapp');
// mongoose.connect('mongodb://username:password@host:port/database?options...');

mongoose.connect(db_url, { useNewUrlParser: true }, err => {
  if (err) {
    console.error(err);
    console.error('connection to mongodb failed');
  } else {
    console.log('connected to mongodb')
  }
});

module.exports = mongoose;