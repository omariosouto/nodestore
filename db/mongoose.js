const mongoose = require('mongoose'),
      config  = require('config'),
      debug   = require('debug')('livro_nodejs:db');

_connection = () => {
  const username  = config.get('mongo.username'),
        password    = config.get('mongo.password'),
        server      = config.get('mongo.server'),
        port        = config.get('mongo.port'),
        database    = config.get('mongo.database'),
        auth        = username ? `${username}:${password}@` : '';

  return `mongodb://${auth}${server}:${port}/${database}`;
}

mongoose.connect(_connection());
const db = mongoose.connection;

db.on('error', (err) => {
  debug(err);
});

db.once('open', () => {
  debug('connected to mongodb');
});

module.exports = mongoose;
