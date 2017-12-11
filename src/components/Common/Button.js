import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ to, children, onClick, type = 'button' }) => {
    if(to) {
        return (
            <Link className="button" to={to}>{children}</Link>
        )
    }

    return (
        <button type={type} className="button" onClick={onClick}>{children}</button>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Button;