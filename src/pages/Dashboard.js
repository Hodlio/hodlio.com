import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Common/Nav';
import waves from '../waves@2x.png';
import { fetchDashboard } from '../dataLayer/dashboard';
import NoCoins from '../components/Dashboard/NoCoins';
import { logout } from '../dataLayer/auth';

import AddCoinModal from "../components/Dashboard/AddCoinModal";

//todo classnames
class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            userEmail: null,
            addCoinsModalVisible: false,
            isLoading: false,
            hasError: false
        };
    }

    handleLogout = () => {
        this.setState({
            isLoading: true,
            hasError: false
        }, () => {
            logout()
                .then(() => {
                    this.setState({
                        isLoading: false,
                        hasError: false
                    }, () => {
                        this.props.history.push('/');
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

    componentWillMount() {

        this.setState({
            isLoading: true,
            hasError: false
        });

        fetchDashboard()
            .then((data) => {
                this.setState({
                    isLoading: false,
                    hasError: false,
                    userEmail: data.email
                });
            })
            .catch(() => {
                this.setState({
                    isLoading: false,
                    hasError: true
                });
            });
    }

    openModal = () => {
        this.setState({
            addCoinsModalVisible: true
        });
    };

    closeModal = () => {
        this.setState({
            addCoinsModalVisible: false
        });
    };

    render() {
        return (
           <div className="authStyles">
               <Nav onLogout={this.handleLogout} isLoading={this.state.isLoading} hasError={this.state.hasError} />
               <img src={waves} className="authStyles__wavesTop" alt="Hodlio" />
               <div className="authStyles__form">
                   <h1 className="authStyles__pageHeading">Hello {this.state.userEmail}.</h1>
               </div>
               <img src={waves} className="authStyles__waves" alt="Hodlio" />
               <NoCoins onClick={this.openModal} />

               <AddCoinModal isOpen={this.state.addCoinsModalVisible} onClose={this.closeModal} />
           </div>
        );
    }
}

Dashboard.propTypes = {
    history: PropTypes.object
};

export default Dashboard;