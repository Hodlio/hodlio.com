import React, { Component } from 'react';
import './App.css';
import Landing from '../pages/Landing';
import { Route } from 'react-router-dom';
import CreateAccount from "../pages/CreateAccount";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/create-account" component={CreateAccount} />
            </div>
        );
    }
}

export default App;
