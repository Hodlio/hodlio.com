const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.connect('mongodb://localhost:27019/hodlio');

const db = mongoose.connection;

db.on('error', (e) => {
    logger.error('Mongoose error', e);
});

db.once('open', function() {
    logger.info('Mongoose connected');
});

module.exports = mongoose;