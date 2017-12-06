import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Common/Nav';
import './createAccount.css';
import Input from '../components/Common/Input';
import InputContainerWithLabel from '../components/Common/InputContainerWithLabel';
import Button from '../components/Common/Button';

class CreateAccount extends React.Component {
    render() {
        return (
            <div className="createAccount">
                <Nav />
                <h1 className="createAccount__pageHeading">Create your account.</h1>

                <div className="createAccount__form">
                    <InputContainerWithLabel label="Email">
                        <Input />
                    </InputContainerWithLabel>

                    <InputContainerWithLabel label="Password">
                        <Input type="password" />
                    </InputContainerWithLabel>

                    <InputContainerWithLabel label="Confirm Password">
                        <Input type="password" />
                    </InputContainerWithLabel>

                    <div className="createAccount__formFooter">
                        <Button>Create Account</Button>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateAccount;