import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Common/Nav';
import Input from '../components/Common/Input';
import InputContainerWithLabel from '../components/Common/InputContainerWithLabel';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';
import waves from '../waves@2x.png';

class Login extends React.Component {
    render() {
        return (
           <div className="authStyles">
               <Nav/>
               <img src={waves} className="authStyles__wavesTop" alt="Hodlio" />
               <h1 className="authStyles__pageHeading">Login to your account.</h1>
               <div className="authStyles__form">
                   <InputContainerWithLabel label="Email">
                       <Input />
                   </InputContainerWithLabel>

                   <InputContainerWithLabel label="Password">
                       <Input />
                   </InputContainerWithLabel>

                   <div className="authStyles__formFooter">
                       <Button>Login</Button>
                   </div>

                   <Link to="/create-account" className="authStyles__link">Don't have an account yet?</Link>

               </div>
               <img src={waves} className="authStyles__waves" alt="Hodlio" />
           </div>
        );
    }
}

export default Login;