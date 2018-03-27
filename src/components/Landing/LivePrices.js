import React from 'react';
import Heading from '../Common/Heading';
import './livePrices.css';
import PriceCard from './PriceCard';
import socket from '../../socketio';
import Select from '../Common/Select';
import LoadingSpinner from '../Common/LoadingSpinner';
import { get, set } from '../../dataLayer/localStorage';
import Panel from '../Common/Panel';

class LivePrices extends React.Component {

    constructor() {
        super();

        this.state = {
            prices: {},
            chosenCurrency: '$'
        };
        this.chosenCurrencyOptions = [
            {
                value: '$',
                display: 'USD'
            },
            {
                value: '€',
                display: 'EUR'
            },
            {
                value: '£',
                display: 'GBP'
            },
            {
                value: 'Ƀ',
                display: 'BTC'
            },
        ]
    }

    componentWillMount() {
        if(socket) {
            socket.on('price_updated', this.handleUpdate);
        }

        const chosenCurrency = get('hodlio-chosenCurrency');
        if(chosenCurrency) {
            this.setState({
                chosenCurrency
            });
        }
    }

    componentWillUnmount() {
        if(socket) {
            socket.removeListener('price_updated', this.handleUpdate);
        }
    }

    handleUpdate = (message) => {
        this.setState({
            prices: message.prices
        });
    };

    handleChangeCurrency = (e) => {
        const chosenCurrency = e.currentTarget.value;
        this.setState({
            chosenCurrency
        }, () => {
            set('hodlio-chosenCurrency', chosenCurrency);
        });
    };

    render() {

        return (
            <Panel>
                <Heading centered>Live Prices</Heading>
                <div className="livePrices__select">
                    <div className="livePrices__selectLabel">
                        Select a Currency
                    </div>
                    <Select value={this.state.chosenCurrency} onChange={this.handleChangeCurrency} options={this.chosenCurrencyOptions} />
                </div>
                <div className="livePrices__cards">

                    {!Object.keys(this.state.prices).length > 0 && (
                        <LoadingSpinner />
                    )}

                    {Object.keys(this.state.prices).filter((pair) => {
                        return this.state.prices[pair].currency === this.state.chosenCurrency;
                    }).map((pair) => {
                        const cardData = this.state.prices[pair];
                        return (
                            <div className="livePrices__card" key={pair}>
                                <PriceCard
                                    title={cardData.name}
                                    shorthand={cardData.shorthand}
                                    currency={cardData.currency}
                                    price={cardData.price}
                                    twentyFourHrChange={cardData.twentyFourHrChange}
                                    volume={cardData.volume}
                                />
                            </div>
                        );

                    })}
                </div>
            </Panel>
        );
    }
}
export default LivePrices;
