import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({ type = 'text', onChange, value }) => {
    return (
        <input value={value} onChange={onChange} className="input" type={type} />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;