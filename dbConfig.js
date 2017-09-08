const MONGO_URI = 'mongodb://heroku_gqrcpps4:mh2sbp2gsb5mglhcr4jnccorvs@ds127564.mlab.com:27564/heroku_gqrcpps4';

const mongoose = require('mongoose');

// Use your own promis library
mongoose.Promise = require('bluebird');

// connect to mongo, use Mongo Client
var db = mongoose.connect(MONGO_URI, {useMongoClient: true})
  .then(({db: {databaseName}}) => console.log(`Connected to ${databaseName}`))
  .catch(err => console.error(err));





module.exports = db;