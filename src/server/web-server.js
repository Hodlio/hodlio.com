const _ = require('lodash');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const path = require('path');

const GdaxClient = require('./ExchangeApiClients/GdaxClient');
const Gdax = new GdaxClient();

Gdax.connectToPriceFeed();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.all("/api/*", function(req, res) {
    apiProxy.web(req, res, { target: 'http://localhost:8084' });
});

app.use(express.static('build'));

function handleGdaxApiUpdate(currencyPairs) {
    io.emit('price_updated', {
        prices: currencyPairs
    });
    console.log('emitting new prices');
}

io.on('connection', function(socket){
    console.log('Client connected.');

    if(!Gdax.onUpdateFunc) {
        Gdax.onUpdate(_.throttle(handleGdaxApiUpdate, 2000));
    }

    socket.on('disconnect', function(socket){
        console.log('Client disconnected.');
    });

});

http.listen(8083, function(){
    console.log('listening on *:8083');
});
