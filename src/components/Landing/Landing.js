import React from 'react';
import Header from '../Common/Header';
import HeroHeader from '../HeroHeader/HeroHeader';
import LivePrices from '../Landing/LivePrices';
import './landing.css';

class Landing extends React.Component {

    handleClick = () => {
        document.body.classList.toggle('meatspin');
    };

    render() {
        return (
            <div className="landing">

                <HeroHeader
                    text="The cryptocurrency portfolio platform that doesn't suck."
                    ctaText="Create your portfolio"
                    onClick={this.handleClick}
                />

                <main className="landing__main">
                    <div className="landing__intro">
                        <Header>Welcome</Header>
                        <p>Here are some words very good yes indeed.</p>
                    </div>
                    <LivePrices />
                </main>
            </div>
        );
    }

}

export default Landing;