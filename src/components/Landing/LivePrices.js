import React from 'react';
import Header from '../Common/Heading';
import './livePrices.css';
import PriceCard from './PriceCard';
import socket from '../../socketio';
import Select from '../Common/Select';
import LoadingSpinner from '../Common/LoadingSpinner';

class LivePrices extends React.Component {

    constructor() {
        super();

        this.state = {
            prices: [],
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

    handleChangeCurrency = (currency) => {
        this.setState({ chosenCurrency: currency.currentTarget.value });
    };

    render() {
        return (
            <div className="livePrices">
                <Header centered>Live Prices</Header>
                <div className="livePrices__select">
                    <div className="livePrices__selectLabel">
                        Select a Currency
                    </div>
                    <Select value={this.state.chosenCurrency} onChange={this.handleChangeCurrency} options={this.chosenCurrencyOptions} />
                </div>
                <div className="livePrices__cards">

                    {!this.state.prices.length > 0 && (
                        <LoadingSpinner />
                    )}

                    {this.state.prices.map((cardData) => {

                        if (cardData.currency === this.state.chosenCurrency) {
                            return (
                                <div className="livePrices__card">
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
                        }

                        return <div/>

                    })}
                </div>
            </div>
        );
    }
}
export default LivePrices;
