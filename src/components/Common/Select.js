import React from 'react';
import './select.css';
import PropTypes from 'prop-types';

const Select = ({ value, onChange, options }) => (
   <select value={value} onChange={onChange} className="select">
       {options.map((option) => (<option value={option.value}>{option.display}</option>))}
   </select>
);


Select.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};

export default Select;