import React from 'react';
import Nav from '../components/Common/Nav';
import './authStyles.css';
import Input from '../components/Common/Input';
import InputContainerWithLabel from '../components/Common/InputContainerWithLabel';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import waves from '../waves@2x.png';
import { createAccount } from '../dataLayer/auth';

class CreateAccount extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            hasError: false,
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    updateEmail = (e) => this.setState({ email: e.target.value });
    updatePassword = (e) => this.setState({ password: e.target.value });
    updateConfirmPassword = (e) => this.setState({ confirmPassword: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword) {
            this.setState({
                isLoading: true,
                hasError: false
            }, () => {
                createAccount(this.state.email, this.state.password)
                    .then(() => {
                        this.setState({
                            isLoading: false,
                            hasError: false
                        });
                    })
                    .catch(() => {
                        this.setState({
                            isLoading: false,
                            hasError: true
                        });
                    });
            });
        } else {
            alert('Passwords don\'t match.'); //todo
        }
    };

    render() {
        return (
            <form className="authStyles" onSubmit={this.handleSubmit}>
                <Nav />
                <img src={waves} className="authStyles__wavesTop" alt="Hodlio" />
                <h1 className="authStyles__pageHeading">Create your account.</h1>

                <div className="authStyles__form">
                    <InputContainerWithLabel label="Email">
                        <Input value={this.state.email} onChange={this.updateEmail} />
                    </InputContainerWithLabel>

                    <InputContainerWithLabel label="Password">
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" />
                    </InputContainerWithLabel>

                    <InputContainerWithLabel label="Confirm Password">
                        <Input value={this.state.confirmPassword} onChange={this.updateConfirmPassword} type="password" />
                    </InputContainerWithLabel>

                    <div className="authStyles__formFooter">
                        <Button
                            type="submit"
                            isLoading={this.state.isLoading}
                            hasError={this.state.hasError}
                        >Create Account</Button>
                    </div>

                    <Link to="/login" className="authStyles__link">Already have an account?</Link>

                </div>
                <img src={waves} className="authStyles__waves" alt="Hodlio" />
            </form>
        );
    }
}

export default CreateAccount;