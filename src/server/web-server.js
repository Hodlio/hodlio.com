const _throttle = require('lodash/throttle');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const path = require('path');
const logger = require('./logger');
const GdaxClient = require('./ExchangeApiClients/GdaxClient');
const Gdax = new GdaxClient(logger);
const morgan = require('morgan');

const PORT = 8083;
var lastUpdated = new Date();

Gdax.connectToPriceFeed();

app.use(morgan("combined", { stream: { write: message => logger.info(message) }}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.all("/api/*", function(req, res) {
    apiProxy.web(req, res, { target: 'http://localhost:8084' });
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

function handleGdaxApiUpdate(currencyPairs) {
    io.emit('price_updated', {
        prices: currencyPairs
    });

    logger.info('Update received. Emitting new price data.');
    let currentTime = new Date();

    if((currentTime - lastUpdated) > 600000) {
        Gdax.getTwentyFourHourPrices();
        lastUpdated = currentTime;
        logger.info('24hr Prices updated');
    }
}

io.on('connection', function(socket){
    logger.info('Client connected.');

    if(!Gdax.onUpdateFunc) {
        Gdax.onUpdate(_throttle(handleGdaxApiUpdate, 2000));
    }

    socket.on('disconnect', function(socket) {
        logger.info('Client disconnected.');
    });

});

io.on('error', function(error) {
    logger.warn('Socket.IO error.', error);
});

http.listen(PORT, function() {
    logger.info(`Server started. Listening on port ${PORT}`);
});
