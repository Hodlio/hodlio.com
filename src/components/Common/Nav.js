import React from 'react';
import logo from '../../logo.svg';
import './nav.css';

const Nav = () => (
    <div className="navbar">
        <div className="navbar__inner">
            <div className="navbar__container">
                <a href="/" className="navbar__logo">
                    <img src={logo} alt="Hodlio" height="30px" />
                </a>
            </div>
        </div>
    </div>
);

export default Nav;
