import React from 'react';
import HeroHeader from '../HeroHeader/HeroHeader';
import LivePrices from '../Landing/LivePrices';
import './landing.css';

const Landing = () => (
    <div className="landing">

        <HeroHeader
            text="The cryptocurrency portfolio platform that doesn't suck."
            ctaText="Create your portfolio"
        />

        <main className="landing__main">
            <LivePrices />
        </main>
    </div>
);

export default Landing;