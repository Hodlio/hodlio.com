import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({ type = 'text' }) => {
    return (
        <input className="input" type={type} />
    );
};

Input.propTypes = {
    type: PropTypes.string
};

export default Input;