import React from 'react';
import Header from '../Common/Header';
import './livePrices.css';
import PriceCard from './PriceCard';
import socket from '../../socketio';

class LivePrices extends React.Component {

    constructor() {
        super();

        this.state = {
            price: "0.00"
        };
    }

    componentWillMount() {
        socket.on('price_updated', this.handleUpdate);
    }

    componentWillUnmount() {
        socket.removeListener('price_updated', this.handleUpdate);
    }

    handleUpdate = (message) => {
        this.setState({
            price: message.price
        });
    };

    render() {
        return (
            <div className="livePrices">
                <Header>Live Prices</Header>

                <div className="livePrices__cards">
                    <div className="livePrices__card">
                        <PriceCard
                            title="Bitcoin"
                            symbol="BTC"
                            price={this.state.price}
                        />
                    </div>

                    <div className="livePrices__card">
                        <PriceCard
                            title="Ethereum"
                            symbol="ETH"
                            price={this.state.price}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default LivePrices;