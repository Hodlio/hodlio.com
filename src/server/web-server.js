const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.all("/api/*", function(req, res) {
    apiProxy.web(req, res, { target: 'http://localhost:8084' });
});

app.use(express.static('build'));

const connections = [];

let priceUpdaterIntervalId;

io.on('connection', function(socket){
    console.log('Client connected.');

    if(!connections.length) {
        let prevPrice = "10500.01";
        priceUpdaterIntervalId = setInterval(() => {
            io.emit('price_updated', {
                price: (parseFloat(prevPrice) + ((Math.random() - 0.5) * 20)).toFixed(2)
            });
            console.log('emitting new price')
        }, 1000);
    }

    connections.push(socket);

    socket.on('disconnect', function(socket){
        console.log('Client disconnected.');

        const i = connections.indexOf(socket);
        connections.splice(i, 1);

        if(connections.length === 0) {
            clearInterval(priceUpdaterIntervalId);
        }
    });

});

http.listen(8083, function(){
    console.log('listening on *:8083');
});
