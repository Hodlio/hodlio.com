import React from 'react';
import logo from '../../logo.svg';
import './nav.css';
import Button from "./Button";
import PropTypes from 'prop-types';

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__inner">
                    <div className="navbar__container">
                        <a href="/" className="navbar__logo">
                            <img src={logo} alt="Hodlio" height="30px"/>
                        </a>
                        {typeof this.props.onLogout === 'function' && (
                            <Button
                                small
                                isLoading={this.props.isLoading}
                                hasError={this.props.hasError}
                                buttonStyle="primary"
                                onClick={this.props.onLogout}
                            >Logout</Button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    onLogout: PropTypes.func,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool
};

export default Nav;
