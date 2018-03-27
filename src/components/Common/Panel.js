import React from 'react';
import PropTypes from 'prop-types';
import './panel.css';

const Panel = ({ children }) => {
    return (
        <div className="panel">
            {children}
        </div>
    );
};

Panel.propTypes = {
    children: PropTypes.node
};

export default Panel;