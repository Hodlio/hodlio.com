import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Common/Nav';
import Input from '../components/Common/Input';
import InputContainerWithLabel from '../components/Common/InputContainerWithLabel';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import waves from '../waves@2x.png';
import { login } from '../dataLayer/auth';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true,
            hasError: false
        }, () => {
            login(this.state.email, this.state.password)
                .then(() => {
                    this.setState({
                        isLoading: false,
                        hasError: false
                    }, () => {
                        window.setTimeout(() => {
                            this.props.history.push('/dashboard');
                        }, 500);
                    });
                })
                .catch(() => {
                    this.setState({
                        isLoading: false,
                        hasError: true
                    });
                });
        });
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
                       <Button
                           type="submit"
                           isLoading={this.state.isLoading}
                           hasError={this.state.hasError}
                       >Login</Button>
                   </div>

                   <Link to="/create-account" className="authStyles__link">Don't have an account yet?</Link>

               </div>
               <img src={waves} className="authStyles__waves" alt="Hodlio" />
           </form>
        );
    }
}

export default withRouter(Login);