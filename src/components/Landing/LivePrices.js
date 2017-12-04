import React from 'react';
import Header from '../Common/Header';
import './livePrices.css';
import PriceCard from './PriceCard';

const LivePrices = () => (
    <div className="livePrices">
        <Header centered>Live Prices</Header>

        <div className="livePrices__cards">
            <PriceCard
                title="Bitcoin"
                symbol="(BTC)"
            />
           
        </div>
    </div>
);

export default LivePrices;