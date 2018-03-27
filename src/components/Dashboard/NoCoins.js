import React from 'react';
import Panel from '../Common/Panel';
import Heading from '../Common/Heading'
import rocket from '../../images/rocket.svg';
import './noCoins.css';
import Button from '../Common/Button';
import PropTypes from 'prop-types';

const NoCoins = ({ onClick }) => {
    return (
        <Panel>
            <div className="noCoins__image">
                <object data={rocket} type="image/svg+xml" />
            </div>
            <Heading centered>Your portfolio starts here</Heading>
            <div className="noCoins__footer">
                <div className="noCoins__action">
                    <Button onClick={onClick} buttonStyle="secondary">Add coins</Button>
                </div>
            </div>
        </Panel>
    );
};

NoCoins.propTypes = {
    onClick: PropTypes.func
};

export default NoCoins;