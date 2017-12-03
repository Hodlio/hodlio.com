import React from 'react';
import './priceCardDatum.css';

const PriceCardDatum = ({ label, value }) => (
    <div className="priceCardDatum">
        <span className="priceCardDatum__label">{label}</span>
        <span className="priceCardDatum__value">{value}</span>
    </div>
);

export default PriceCardDatum;