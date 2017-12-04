import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './nav.css';

const Nav = () => (
    <div class="navbar">
            <div class="navbar__inner">
                <div class="navbar__container">
                    <a href="" class="navbar__logo">
                        <img src={logo} alt="Hodlio" height="30px" />
                    </a>
                </div>
            </div>
        </div>
    )

export default Nav;
