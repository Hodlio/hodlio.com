import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Button = ({ to, children, onClick, type = 'button', isLoading, hasError }) => {

    const classNames = classnames('button', isLoading && 'button--loading', hasError && 'button-error');

    if(to) {
        return (
            <Link className={classNames} to={to}>{children}</Link>
        )
    }

    return (
        <button type={type} className={classNames} onClick={onClick}>{children}</button>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Button;