const GdaxClient = require('./ExchangeApiClients/GdaxClient');
// var Gdax = new GdaxClient();
//
// Gdax.connectToPriceFeed();

const express = require('express');
const app = express();

app.get('/api/*', (req, res) => {
    res.send("Hello from API");
});

app.listen(8084, () => console.log('API listening on port 8084!'));