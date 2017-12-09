import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Common/Nav';
import './authStyles.css';
import Input from '../components/Common/Input';
import InputContainerWithLabel from '../components/Common/InputContainerWithLabel';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import waves from '../waves@2x.png';

class CreateAccount extends React.Component {
    render() {
        return (
            <div className="authStyles">
                <Nav />
                <img src={waves} className="authStyles__wavesTop" alt="Hodlio" />
                <h1 className="authStyles__pageHeading">Create your account.</h1>

                <div className="authStyles__form">
                    <InputContainerWithLabel label="Email">
                        <Input />
                    </InputContainerWithLabel>

                    <InputContainerWithLabel label="Password">
                        <Input type="password" />
                    </InputContainerWithLabel>

                    <InputContainerWithLabel label="Confirm Password">
                        <Input type="password" />
                    </InputContainerWithLabel>

                    <div className="authStyles__formFooter">
                        <Button>Create Account</Button>
                    </div>

                    <Link to="/login" className="authStyles__link">Already have an account?</Link>

                </div>
                <img src={waves} className="authStyles__waves" alt="Hodlio" />
            </div>
        );
    }
}

export default CreateAccount;