import React from 'react';
import PropTypes from 'prop-types';
import './priceCard.css';
import Header from '../Common/Header';
import PriceCardDatum from './PriceCardDatum';

const PriceCard = ({ title, currency, price, shorthand, twentyFourHrChange, volume }) => {
     let decimalPlaces = 2;
     if(currency === 'Ƀ') {
        decimalPlaces = 6;
     }
     return (
        <section className={`priceCard priceCard--${shorthand}`}>
            <Header white level={2}>{title} <span className="priceCard__symbol">({shorthand})</span></Header>
            <PriceCardDatum label="Price" value={`${currency}${parseFloat(price).toFixed(decimalPlaces)}`} />
            <PriceCardDatum label="Change 24hr" value={`${twentyFourHrChange}%`} />
            <PriceCardDatum label="Volume" value={volume} />
        </section>
    )
}

PriceCard.propTypes = {
    title: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.string,
    shorthand: PropTypes.string,
    twentyFourHrChange: PropTypes.any,
    volume: PropTypes.any
};

export default PriceCard;
