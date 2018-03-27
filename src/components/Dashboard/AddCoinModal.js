import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Common/Modal';
import Heading from '../Common/Heading';
import './addCoinModal.css';

const AddCoinModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="addCoinModal">
                <Heading>Add a coin</Heading>
            </div>
        </Modal>
    );
};

AddCoinModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};

export default AddCoinModal;