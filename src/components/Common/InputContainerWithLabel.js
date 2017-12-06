import React from 'react';
import './inputContainerWithLabel.css';

const InputContainerWithLabel = ({ label, children, htmlFor }) => {
    return (
        <div className="inputContainerWithLabel">
            <label className="inputContainerWithLabel__label" htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    );
};

InputContainerWithLabel.propTypes = {

};

export default InputContainerWithLabel;