const Gdax = require('gdax');

class GdaxClient {
    constructor() {
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
              console.log(e);
              return e;
            });
    }

    getCurrentPrice(tradingPair) {
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
                    this.pairs[pair].volume = this.pairs[pair].volume.concat(parseFloat(data.volume).toFixed(2));
                })
        }
    }

    connectToPriceFeed() {
        const websocket = new Gdax.WebsocketClient(
            ['BTC-USD', 'ETH-USD', 'BTC-EUR', 'ETH-EUR', 'ETH-BTC']
        );

        console.log('connected');

        websocket.on('message', data => {
            if(data.type === 'match') {
                this.updatePairs(data);
                this.onUpdateFunc && this.onUpdateFunc(this.pairs);
            }
        });
        websocket.on('error', err => { console.log('ERROR: ', err); });
        websocket.on('close', () => { console.log('closed'); });
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
