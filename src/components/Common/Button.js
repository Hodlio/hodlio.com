import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <button className="button" onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Button;