const Gdax = require('gdax');

class GdaxClient {
    constructor(logger) {
        this.logger = logger;
        this.publicClient = new Gdax.PublicClient();

        this.pairs = {
            'BTC-USD': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('BTC-USD'),
                currency: '$',
                shorthand: 'BTC',
                name: 'Bitcoin',
                volume: 'Ƀ'
            },
            'BTC-EUR': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('BTC-EUR'),
                currency: '€',
                shorthand: 'BTC',
                name: 'Bitcoin',
                volume: 'Ƀ'
            },
            'ETH-USD': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('ETH-USD'),
                currency: '$',
                shorthand: 'ETH',
                name: 'Ethereum',
                volume: 'Ξ'
            },
            'ETH-EUR': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('ETH-EUR'),
                currency: '€',
                shorthand: 'ETH',
                name: 'Ethereum',
                volume: 'Ξ'
            },
            'ETH-BTC': {
                price: '0',
                timeUpdated: '',
                client: new Gdax.PublicClient('ETH-BTC'),
                currency: 'Ƀ',
                shorthand: 'ETH',
                name: 'Ethereum',
                volume: 'Ξ'
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
                this.logger.warn('Error getting products.', e);
                return e;
            });
    }

    getCurrentPrice(tradingPair) {
        return this.pairs[tradingPair].client.getProductTicker()
            .then(data => {
                return data;
            }).catch(e => {
                this.logger.warn(`Error getting current price for ${tradingPair}`, e);
                return e;
            });
    }

    getTwentyFourHourPrices() {
        for(const pair of Object.keys(this.pairs)) {
            this
                .pairs[pair]
                .client
                .getProduct24HrStats()
                .then((data) => {
                    this.pairs[pair].dayOpenPrice = data.open;
                    this.pairs[pair].volume = this.pairs[pair].volume.concat(parseFloat(data.volume).toFixed(2));
                })
                .catch((e) => {
                    this.logger.warn(`Error getting 24 hour stats for ${pair}.`, e);
                });
        }
    }

    connectToPriceFeed() {
        const websocket = new Gdax.WebsocketClient(
            ['BTC-USD', 'ETH-USD', 'BTC-EUR', 'ETH-EUR', 'ETH-BTC']
        );

        this.logger.info('Connected to price feed.');

        websocket.on('message', data => {
            if(data.type === 'match') {
                this.updatePairs(data);
                this.onUpdateFunc && this.onUpdateFunc(this.pairs);
            }
        });
        websocket.on('error', err => {
            this.logger.error('Error with price feed connection.', err);
        });
        websocket.on('close', () => {
            this.logger.info('Price feed connection closed.')
        });
    }

    updatePairs(data) {
        this.pairs[data.product_id].price = data.price;
        this.pairs[data.product_id].timeUpdated = data.time;
        this.pairs[data.product_id].twentyFourHrChange = parseFloat(((data.price - this.pairs[data.product_id].dayOpenPrice) / this.pairs[data.product_id].dayOpenPrice) * 100).toFixed(2);
    }

    onUpdate(func) {
        this.onUpdateFunc = func;
    }
}

module.exports = GdaxClient;
