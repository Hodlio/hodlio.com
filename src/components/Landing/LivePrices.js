import React from 'react';
import Header from '../Common/Heading';
import './livePrices.css';
import PriceCard from './PriceCard';
import socket from '../../socketio';
import _ from 'lodash';

class LivePrices extends React.Component {

    constructor() {
        super();

        this.state = {
            prices: null
        };
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

    render() {
        return (
            <div className="livePrices">
                <Header centered>Live Prices</Header>

                <div className="livePrices__cards">
                    {_.map(this.state.prices, (cardData) => (
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
                    ))}
                </div>
            </div>
        );
    }
}
export default LivePrices;
