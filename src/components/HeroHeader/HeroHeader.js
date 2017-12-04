import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import waves from '../../waves@2x.png'
import Button from '../Common/Button';
import './heroHeader.css';

const HeroHeader = ({ text, ctaText, onClick }) => (
    <header className="heroHeader">
        <h1 className="heroHeader__text">{text}</h1>
        <div className="heroHeader__cta">
        <Button onClick={onClick}>{ctaText}</Button></div>
        <img src={waves} className="heroHeader__image" alt="Hodlio" />
        
    </header>
);

HeroHeader.propTypes = {
    text: PropTypes.string,
    ctaText: PropTypes.string,
    onClick: PropTypes.func
};

export default HeroHeader;

// <img src={logo} className="heroHeader__logo" alt="Hodlio" /> //