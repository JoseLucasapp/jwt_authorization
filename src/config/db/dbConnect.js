const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGO_URL = 'mongodb://localhost:27017/basejwt';

module.exports = mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});