import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import './modal.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: props.isOpen
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isOpen !== nextProps.isOpen) {

            if(nextProps.isOpen) {
                this.showModal();
            } else {
                this.hideModal();
            }
        }
    }


    componentWillUnmount() {
        document.body.style.overflowY = 'visible';
        document.body.style.position = 'static';
    }

    handleKey = (key) => {
        // Escape key
        if (key.keyCode === 27) {
            this.props.onClose();
        }
    };

    showModal() {
        this.setState({ isOpen: true }, this.animatedModalIn);
        document.addEventListener('keyup', this.handleKey);
    }

    animatedModalIn() {
        setTimeout(() => {
            this.setState({
                isVisible: true
            });
        }, 10);

        setTimeout(() => {
            document.body.style.overflowY = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100vw';
        }, 300);
    }

    hideModal() {
        this.setState({ isVisible: false });
        setTimeout(this.finishHidingModal, 300);
    };

    finishHidingModal = () => {
        this.setState({
            isOpen: false
        });
        this.props.onHasClosed && this.props.onHasClosed();

        setTimeout(() => {
            document.body.style.overflowY = 'visible';
            document.body.style.position = 'static';
            document.body.style.width = '100%';
        }, 200);

        document.removeEventListener('keyup', this.handleKey);
    };

    handleModalClick(event) {
        event.stopPropagation();
    }

    handleConfirm = () => {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        } else {
            this.props.onClose();
        }
    };

    render() {
        let { children, onClose, title, size, buttonText } = this.props;

        const overlayClasses = classNames(
            'modal__overlay',
            this.state.isVisible && 'isVisible'
        );

        const windowClasses = classNames(
            'modal__window',
            this.state.isVisible && 'isVisible',
            size === 'small' && 'modal__window--small'
        );

        if (!this.state.isOpen) {
            return null;
        }

        return (
            <div className={overlayClasses} onClick={onClose}>
                <div className={windowClasses} ref="modal__window" onClick={this.handleModalClick}>
                    <div className="modal__content">
                        <div className="modal__header">
                            <h1 className="modal__title">{title}</h1>
                            <button onClick={onClose} className="modal__close" type="button" />
                        </div>
                        {children}
                        <div className="modal__button">
                            {this.props.onConfirm && (
                                <Button type="button" onClick={this.handleConfirm}>{buttonText}</Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onHasClosed: PropTypes.func,
    onConfirm: PropTypes.func,
    children: PropTypes.any,
    title: PropTypes.string,
    size: PropTypes.string,
    buttonText: PropTypes.string
};

export default Modal;
