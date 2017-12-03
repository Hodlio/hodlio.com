import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import Button from '../Common/Button';
import './heroHeader.css';

const HeroHeader = ({ text, ctaText, onClick }) => (
    <header className="heroHeader">
        <img src={logo} className="heroHeader__logo" alt="Hodlio" />
        <h1 className="heroHeader__text">{text}</h1>
        <div className="heroHeader__cta">
            <Button onClick={onClick}>{ctaText}</Button>
        </div>
    </header>
);

HeroHeader.propTypes = {
    text: PropTypes.string,
    ctaText: PropTypes.string,
    onClick: PropTypes.func
};

export default HeroHeader;