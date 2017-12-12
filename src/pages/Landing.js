import React from 'react';
import Header from '../components/Common/Heading';
import Nav from '../components/Common/Nav';
import HeroHeader from '../components/HeroHeader/HeroHeader';
import LivePrices from '../components/Landing/LivePrices';
import './landing.css';

const Landing = ({ match }) => (
    <div className="landing">
        <Nav />
        <HeroHeader
            text="The blockchain portfolio platform tagline."
            ctaText="Start your portfolio"
            ctaLink="/create-account"
        />

        <main className="landing__main">
            <LivePrices />
        </main>
    </div>
);

export default Landing;