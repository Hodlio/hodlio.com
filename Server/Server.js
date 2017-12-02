const GdaxClient = require('./ExchangeApiClients/GdaxClient');

var Gdax = new GdaxClient();

Gdax.connectToPriceFeed();
