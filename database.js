let Mongoose = require('mongoose');
config = require('./config');
//load database
Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);

let db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('openUri', function callback() {
    console.log('Connection with database succeeded.');
});

exports.db = db;