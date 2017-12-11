import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Common/Nav';
import Input from '../components/Common/Input';
import InputContainerWithLabel from '../components/Common/InputContainerWithLabel';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import waves from '../waves@2x.png';
import { login } from '../dataLayer/auth';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    updateEmail = (e) => this.setState({ email: e.target.value });
    updatePassword = (e) => this.setState({ password: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        login(this.state.email, this.state.password);
    };

    render() {
        return (
           <form className="authStyles" onSubmit={this.handleSubmit}>
               <Nav/>
               <img src={waves} className="authStyles__wavesTop" alt="Hodlio" />
               <h1 className="authStyles__pageHeading">Login to your account.</h1>
               <div className="authStyles__form">
                   <InputContainerWithLabel label="Email">
                       <Input value={this.state.email} onChange={this.updateEmail} />
                   </InputContainerWithLabel>

                   <InputContainerWithLabel label="Password">
                       <Input value={this.state.password} onChange={this.updatePassword} type="password" />
                   </InputContainerWithLabel>

                   <div className="authStyles__formFooter">
                       <Button type="submit">Login</Button>
                   </div>

                   <Link to="/create-account" className="authStyles__link">Don't have an account yet?</Link>

               </div>
               <img src={waves} className="authStyles__waves" alt="Hodlio" />
           </form>
        );
    }
}

export default Login;