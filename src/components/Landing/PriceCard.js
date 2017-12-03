import React from 'react';
import PropTypes from 'prop-types';
import './priceCard.css';
import Header from '../Common/Header';
import PriceCardDatum from './PriceCardDatum';

const PriceCard = ({ title, symbol }) => (
    <section className="priceCard">
        <Header white level={2}>{title} <span className="priceCard__symbol">{symbol}</span></Header>
        <PriceCardDatum label="Price" value="£123.00" />
        <PriceCardDatum label="Change 24hr" value="+1.4%" />
        <PriceCardDatum label="Volume" value="£131.44m" />
    </section>
);

PriceCard.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
};

export default PriceCard;