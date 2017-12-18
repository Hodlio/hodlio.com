import React from 'react';
import './loadingSpinner.css';
import loadingSpinner from '../../images/loading-spinner-triangle-dots.svg';

const LoadingSpinner = () => {
    return (
        <div className="loadingSpinner">
            <object data={loadingSpinner} type="image/svg+xml" />
            <div className="loadingSpinner__text">Loading...</div>
        </div>
    );
};

export default LoadingSpinner;