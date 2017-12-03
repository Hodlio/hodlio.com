import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import classnames from 'classnames';

const Header = ({ level = 1, children, white = false }) => {
    const classNames = classnames('header', white && 'header--white');
    switch(level) {
        case 1:
            return <h1 className={classNames}>{children}</h1>;
        case 2:
            return <h2 className={classNames}>{children}</h2>;
        case 3:
            return <h3 className={classNames}>{children}</h3>;
        case 4:
            return <h4 className={classNames}>{children}</h4>;
        case 5:
            return <h5 className={classNames}>{children}</h5>;
        case 6:
            return <h6 className={classNames}>{children}</h6>;
    }
};

Header.propTypes = {
    level: PropTypes.number,
    children: PropTypes.node,
    white: PropTypes.bool
};

export default Header;