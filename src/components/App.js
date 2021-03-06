import React, { Component } from 'react';
import './App.css';
import Landing from '../pages/Landing';
import { Route } from 'react-router-dom';
import CreateAccount from "../pages/CreateAccount";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/create-account" component={CreateAccount} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        );
    }
}

export default App;
