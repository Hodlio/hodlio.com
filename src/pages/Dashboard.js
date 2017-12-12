import React from 'react';
import Nav from '../components/Common/Nav';
import waves from '../waves@2x.png';
import { fetchDashboard } from '../dataLayer/dashboard';

//todo classnames
class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            userEmail: null
        };
    }

    componentWillMount() {

        this.setState({
            isLoading: true,
            hasError: false
        });

        fetchDashboard()
            .then((data) => {
            console.log(data, typeof data);
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

    render() {
        return (
           <div className="authStyles">
               <Nav/>
               <img src={waves} className="authStyles__wavesTop" alt="Hodlio" />
               <h1 className="authStyles__pageHeading">Your dashboard.</h1>
               <div className="authStyles__form">
                   <h1 className="authStyles__pageHeading">Hello {this.state.userEmail}.</h1>
               </div>
               <img src={waves} className="authStyles__waves" alt="Hodlio" />
           </div>
        );
    }
}

export default Dashboard;