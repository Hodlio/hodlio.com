const express = require('express');
const app = express();

const GdaxClient = require('./ExchangeApiClients/GdaxClient');
// var Gdax = new GdaxClient();
//
// Gdax.connectToPriceFeed();

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(8083, () => console.log('Server listening on port 8083!'));