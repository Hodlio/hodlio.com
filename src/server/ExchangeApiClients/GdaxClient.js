const Gdax = require('gdax');

class GdaxClient {
    constructor() {
        this.publicClient = new Gdax.PublicClient();

        this.pairs = {
            'ETH-USD': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('ETH-USD')
            },
            'BTC-USD': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('BTC-USD')
            },
            'ETH-EUR': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('ETH-EUR')
            },
            'BTC-EUR': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('BTC-EUR')
            },
            'ETH-BTC': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('ETH-BTC')
            }
        };
        this.getTwentyFourHourPrices();
    }

    getProducts() {
        return this.publicClient
            .getProducts()
            .then(data => {
              return data;
            })
            .catch(e => {
              console.log(e);
              return e;
            });
    }

    getCurrentPrice(tradingPair) {
        // this.publicClient.productID = tradingPair;
        return this.pairs[tradingPair].client.getProductTicker()
            .then(data => {
                return data;
            }).catch(e => {
                console.log(e);
                return e;
            });
    }

    getTwentyFourHourPrices() {
        for(const pair of Object.keys(this.pairs)) {
            this.pairs[pair].client.getProduct24HrStats()
                .then((data) => {
                    this.pairs[pair].dayOpenPrice = data.open;
                    console.log(pair, data.open);
                })
        }
    }

    connectToPriceFeed() {
        const websocket = new Gdax.WebsocketClient(
            ['BTC-USD', 'ETH-USD', 'BTC-EUR', 'ETH-EUR']
        );

        console.log('connected');

        websocket.on('message', data => {
            if(data.type === 'match') {
                this.updatePairs(data);
            }
        });
        websocket.on('error', err => { console.log('ERROR: ', err); });
        websocket.on('close', () => { console.log('closed'); });
    }

    updatePairs(data) {
        this.pairs[data.product_id].price = data.price;
        this.pairs[data.product_id].timeUpdated = data.time;
        console.log(data.product_id, ' is now: ', data.price, ' at: ', data.time, ' 24hr change: ', (((data.price - this.pairs[data.product_id].dayOpenPrice) / this.pairs[data.product_id].dayOpenPrice) * 100).toFixed(2) , "%");
    }

}

module.exports = GdaxClient;
